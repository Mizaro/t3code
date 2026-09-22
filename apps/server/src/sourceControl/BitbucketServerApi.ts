import * as Config from "effect/Config";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Option from "effect/Option";
import * as Schema from "effect/Schema";
import type { PullRequestActor, PullRequestListState, PullRequestState } from "@t3tools/contracts";
import { HttpClient, HttpClientRequest, HttpClientResponse } from "effect/unstable/http";
import { bitbucketServerRemote } from "@t3tools/shared/sourceControl";

import * as GitVcsDriver from "../vcs/GitVcsDriver.ts";

/**
 * Bitbucket Server / Data Center pull requests, read at the checkout's own origin.
 *
 * Cloud stays on `api.bitbucket.org` through {@link BitbucketApi}. A Server repository is
 * `https://host/scm/{project}/{repo}.git` or `ssh://git@host:7999/{project}/{repo}.git`, and its
 * REST root is `{origin}/rest/api/1.0` on that same host. The origin is taken from the git remote
 * so a non-default port and `http` survive; `T3CODE_BITBUCKET_API_BASE_URL` is the Cloud base and
 * is not consulted here.
 */
const BitbucketServerEnvConfig = Config.all({
  accessToken: Config.String("T3CODE_BITBUCKET_ACCESS_TOKEN").pipe(Config.option),
  email: Config.String("T3CODE_BITBUCKET_EMAIL").pipe(Config.option),
  apiToken: Config.String("T3CODE_BITBUCKET_API_TOKEN").pipe(Config.option),
});

const BitbucketServerOperation = Schema.Literals([
  "getPullRequest",
  "listPullRequests",
  "getViewer",
]);
type BitbucketServerOperation = typeof BitbucketServerOperation.Type;

export class BitbucketServerRequestError extends Schema.TaggedError<BitbucketServerRequestError>()(
  "BitbucketServerRequestError",
  {
    operation: BitbucketServerOperation,
    status: Schema.optional(Schema.Int),
    cause: Schema.optional(Schema.Defect()),
  },
) {
  get detail(): string {
    return this.status === undefined
      ? "Failed to read Bitbucket Server."
      : `Bitbucket Server returned HTTP ${this.status}.`;
  }

  override get message(): string {
    return `Bitbucket Server failed in ${this.operation}: ${this.detail}`;
  }
}

export interface BitbucketServerPullRequest {
  readonly number: number;
  readonly title: string;
  readonly body: string;
  readonly url: string;
  readonly state: PullRequestState;
  readonly isDraft: boolean;
  readonly headBranch: string;
  readonly baseBranch: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly closedAt: string | null;
  readonly mergedAt: string | null;
  readonly author: PullRequestActor | null;
}

export interface BitbucketServerPullRequestPage {
  readonly items: ReadonlyArray<BitbucketServerPullRequest>;
  readonly truncated: boolean;
}

const RefSchema = Schema.Struct({
  displayId: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
});

const PullRequestSchema = Schema.Struct({
  id: Schema.Number,
  title: Schema.optional(Schema.String),
  description: Schema.optional(Schema.NullOr(Schema.String)),
  state: Schema.optional(Schema.String),
  draft: Schema.optional(Schema.Boolean),
  createdDate: Schema.optional(Schema.Number),
  updatedDate: Schema.optional(Schema.Number),
  closedDate: Schema.optional(Schema.NullOr(Schema.Number)),
  fromRef: Schema.optional(RefSchema),
  toRef: Schema.optional(RefSchema),
  author: Schema.optional(
    Schema.Struct({
      user: Schema.optional(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          displayName: Schema.optional(Schema.String),
          avatarUrl: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
  links: Schema.optional(
    Schema.Struct({
      self: Schema.optional(Schema.Array(Schema.Struct({ href: Schema.optional(Schema.String) }))),
    }),
  ),
});

const PageSchema = Schema.Struct({
  isLastPage: Schema.optional(Schema.Boolean),
  values: Schema.optional(Schema.Array(Schema.Unknown)),
});

const decodePullRequest = Schema.decodeUnknownEffect(PullRequestSchema);

function cloudHostname(hostname: string): boolean {
  const host = hostname.toLowerCase();
  return (
    host === "bitbucket.org" || host === "api.bitbucket.org" || host.endsWith(".bitbucket.org")
  );
}

function cloudOrigin(origin: string): boolean {
  try {
    return cloudHostname(new URL(origin).hostname);
  } catch {
    return false;
  }
}

function isoFromMillis(millis: number | null | undefined, fallback: string): string | null {
  if (typeof millis !== "number" || !Number.isFinite(millis))
    return fallback === "" ? null : fallback;
  return new Date(millis).toISOString();
}

function branchName(
  ref: { readonly displayId?: string; readonly id?: string } | undefined,
): string {
  const display = ref?.displayId?.trim();
  if (display) return display;
  const id = ref?.id?.trim() ?? "";
  const stripped = id.replace(/^refs\/heads\//u, "");
  return stripped.length > 0 ? stripped : "unknown";
}

function serverState(state: string | undefined): PullRequestState {
  switch (state?.trim().toUpperCase()) {
    case "MERGED":
      return "merged";
    case "DECLINED":
    case "SUPERSEDED":
      return "closed";
    default:
      return "open";
  }
}

function listStateQuery(state: PullRequestListState): string {
  switch (state) {
    case "open":
      return "OPEN";
    case "merged":
      return "MERGED";
    case "closed":
      return "DECLINED";
    default:
      return "ALL";
  }
}

export class BitbucketServerApi extends Context.Service<
  BitbucketServerApi,
  {
    /**
     * The account Server will name for this checkout, or null when the remote is not a Server
     * repository. Null is the signal to keep using the Cloud client.
     */
    readonly currentUser: (input: {
      readonly cwd: string;
      readonly host: string;
    }) => Effect.Effect<string | null, BitbucketServerRequestError>;

    readonly getPullRequest: (input: {
      readonly cwd: string;
      readonly host: string;
      readonly project: string;
      readonly slug: string;
      readonly number: number;
    }) => Effect.Effect<BitbucketServerPullRequest, BitbucketServerRequestError>;

    readonly listPullRequests: (input: {
      readonly cwd: string;
      readonly host: string;
      readonly project: string;
      readonly slug: string;
      readonly state: PullRequestListState;
      readonly limit: number;
    }) => Effect.Effect<BitbucketServerPullRequestPage, BitbucketServerRequestError>;
  }
>()("t3/sourceControl/BitbucketServerApi") {}

/** @public Service construction is part of the canonical Effect module API. */
export const make = Effect.gen(function* () {
  const config = yield* BitbucketServerEnvConfig;
  const httpClient = yield* HttpClient.HttpClient;
  const git = yield* GitVcsDriver.GitVcsDriver;

  const readRemote = (cwd: string) =>
    git.readConfigValue(cwd, "remote.upstream.url").pipe(
      Effect.flatMap((upstream) =>
        upstream && upstream.trim().length > 0
          ? Effect.succeed(upstream)
          : git.readConfigValue(cwd, "remote.origin.url"),
      ),
      Effect.map((value) => (value && value.trim().length > 0 ? value : null)),
      Effect.orElseSucceed(() => null),
    );

  const originFor = (cwd: string, fallbackHost: string, operation: BitbucketServerOperation) =>
    readRemote(cwd).pipe(
      Effect.flatMap((remoteUrl) => {
        const parsed = remoteUrl ? bitbucketServerRemote(remoteUrl) : null;
        const origin = parsed?.baseUrl ?? `https://${fallbackHost}`;
        if (cloudOrigin(origin)) {
          return Effect.fail(
            new BitbucketServerRequestError({
              operation,
              cause: new Error("Bitbucket Server requests stay off Bitbucket Cloud."),
            }),
          );
        }
        return Effect.succeed(origin.replace(/\/+$/u, ""));
      }),
    );

  const withAuth = (request: HttpClientRequest.HttpClientRequest) => {
    if (Option.isSome(config.accessToken)) {
      return request.pipe(HttpClientRequest.bearerToken(config.accessToken.value));
    }
    if (Option.isSome(config.email) && Option.isSome(config.apiToken)) {
      return request.pipe(HttpClientRequest.basicAuth(config.email.value, config.apiToken.value));
    }
    return request;
  };

  const execute = (operation: BitbucketServerOperation, url: string) =>
    httpClient
      .execute(withAuth(HttpClientRequest.get(url).pipe(HttpClientRequest.acceptJson)))
      .pipe(
        Effect.mapError(
          (cause) =>
            new BitbucketServerRequestError({
              operation,
              cause,
            }),
        ),
        Effect.flatMap((response) =>
          response.status >= 200 && response.status < 300
            ? Effect.succeed(response)
            : Effect.fail(
                new BitbucketServerRequestError({
                  operation,
                  status: response.status,
                }),
              ),
        ),
      );

  const toPullRequest = (
    origin: string,
    project: string,
    slug: string,
    record: Schema.Schema.Type<typeof PullRequestSchema>,
  ): BitbucketServerPullRequest => {
    const state = serverState(record.state);
    const createdAt =
      isoFromMillis(record.createdDate, new Date(0).toISOString()) ?? new Date(0).toISOString();
    const updatedAt = isoFromMillis(record.updatedDate, createdAt) ?? createdAt;
    const closedStamp = isoFromMillis(record.closedDate, "");
    const self = record.links?.self?.find((link) => link.href?.startsWith("http"))?.href;
    const user = record.author?.user;
    const login = user?.name?.trim() || user?.displayName?.trim() || "";
    const avatar = user?.avatarUrl?.trim() ?? "";
    return {
      number: record.id,
      title: record.title?.trim() || `Pull request ${record.id}`,
      body: record.description ?? "",
      url:
        self ??
        `${origin}/projects/${encodeURIComponent(project)}/repos/${encodeURIComponent(slug)}/pull-requests/${record.id}`,
      state,
      isDraft: record.draft === true,
      headBranch: branchName(record.fromRef),
      baseBranch: branchName(record.toRef),
      createdAt,
      updatedAt,
      closedAt: state === "closed" ? (closedStamp ?? updatedAt) : null,
      mergedAt: state === "merged" ? (closedStamp ?? updatedAt) : null,
      author:
        login.length > 0
          ? {
              login,
              name: user?.displayName?.trim() || null,
              avatarUrl:
                avatar.length === 0 ? null : avatar.startsWith("/") ? `${origin}${avatar}` : avatar,
            }
          : null,
    };
  };

  const pullRequestPath = (origin: string, project: string, slug: string, number?: number) => {
    const base = `${origin}/rest/api/1.0/projects/${encodeURIComponent(project)}/repos/${encodeURIComponent(slug)}/pull-requests`;
    return number === undefined ? base : `${base}/${number}`;
  };

  const currentUser = (input: { readonly cwd: string; readonly host: string }) =>
    readRemote(input.cwd).pipe(
      Effect.flatMap((remoteUrl) => {
        const parsed = remoteUrl ? bitbucketServerRemote(remoteUrl) : null;
        if (!parsed || cloudOrigin(parsed.baseUrl)) return Effect.succeed(null);
        const origin = parsed.baseUrl.replace(/\/+$/u, "");
        return execute("getViewer", `${origin}/rest/api/1.0/projects?limit=1`).pipe(
          Effect.map((response) => {
            const named = response.headers["x-ausername"]?.trim();
            return named && named.length > 0 ? named : "bitbucket";
          }),
        );
      }),
    );

  const getPullRequest = (input: {
    readonly cwd: string;
    readonly host: string;
    readonly project: string;
    readonly slug: string;
    readonly number: number;
  }) =>
    originFor(input.cwd, input.host, "getPullRequest").pipe(
      Effect.flatMap((origin) =>
        execute(
          "getPullRequest",
          pullRequestPath(origin, input.project, input.slug, input.number),
        ).pipe(
          Effect.flatMap((response) =>
            HttpClientResponse.schemaBodyJson(PullRequestSchema)(response).pipe(
              Effect.mapError(
                (cause) =>
                  new BitbucketServerRequestError({
                    operation: "getPullRequest",
                    status: response.status,
                    cause,
                  }),
              ),
            ),
          ),
          Effect.map((record) => toPullRequest(origin, input.project, input.slug, record)),
        ),
      ),
    );

  const listPullRequests = (input: {
    readonly cwd: string;
    readonly host: string;
    readonly project: string;
    readonly slug: string;
    readonly state: PullRequestListState;
    readonly limit: number;
  }) =>
    originFor(input.cwd, input.host, "listPullRequests").pipe(
      Effect.flatMap((origin) => {
        const limit = Math.min(100, Math.max(1, Math.floor(input.limit)));
        const url = `${pullRequestPath(origin, input.project, input.slug)}?state=${listStateQuery(input.state)}&limit=${limit}`;
        return execute("listPullRequests", url).pipe(
          Effect.flatMap((response) =>
            HttpClientResponse.schemaBodyJson(PageSchema)(response).pipe(
              Effect.mapError(
                (cause) =>
                  new BitbucketServerRequestError({
                    operation: "listPullRequests",
                    status: response.status,
                    cause,
                  }),
              ),
            ),
          ),
          Effect.flatMap((page) => {
            const values = page.values ?? [];
            return Effect.forEach(values, (value) =>
              decodePullRequest(value).pipe(
                Effect.map((record) => toPullRequest(origin, input.project, input.slug, record)),
                Effect.option,
              ),
            ).pipe(
              Effect.map((decoded) => ({
                items: decoded.flatMap((item) => (Option.isSome(item) ? [item.value] : [])),
                truncated: page.isLastPage === false,
              })),
            );
          }),
        );
      }),
    );

  return BitbucketServerApi.of({
    currentUser,
    getPullRequest,
    listPullRequests,
  });
});

export const layer = Layer.effect(BitbucketServerApi, make);
