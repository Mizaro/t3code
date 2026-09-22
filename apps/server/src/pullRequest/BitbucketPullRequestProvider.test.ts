import { describe, expect, it, vi } from "@effect/vitest";
import * as NodeServices from "@effect/platform-node/NodeServices";
import * as ConfigProvider from "effect/ConfigProvider";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Result from "effect/Result";
import { HttpClient, HttpClientResponse } from "effect/unstable/http";

import * as BitbucketApi from "../sourceControl/BitbucketApi.ts";
import * as BitbucketServerApi from "../sourceControl/BitbucketServerApi.ts";
import * as GitVcsDriver from "../vcs/GitVcsDriver.ts";
import * as BitbucketPullRequestApi from "./BitbucketPullRequestApi.ts";
import { decodePullRequestJson } from "./bitbucketPullRequestJson.ts";
import {
  bitbucketProviderFailure,
  bitbucketViewerPermissions,
  make,
} from "./BitbucketPullRequestProvider.ts";

for (const operation of [
  "getMergeability",
  "listChecks",
  "getRepositoryPermission",
  "listComments",
  "listCommits",
] as const) {
  it.effect.each(["response", "body read"])(
    `preserves rate limits from ${operation} on %s errors while recovering other optional-read failures`,
    (variant) =>
      Effect.gen(function* () {
        const pullRequest = Result.getOrThrow(
          decodePullRequestJson(`{
            "id": 1, "title": "Check polling", "state": "OPEN",
            "source": { "branch": { "name": "feature" } },
            "destination": { "branch": { "name": "main" } },
            "created_on": "2026-09-16T00:00:00Z",
            "updated_on": "2026-09-16T00:00:00Z",
            "links": { "html": { "href": "https://bitbucket.org/acme/web/pull-requests/1" } }
          }`),
        );
        for (const status of [429, 403]) {
          const provider = yield* make.pipe(
            Effect.provide(
              Layer.mock(BitbucketPullRequestApi.BitbucketPullRequestApi)({
                getPullRequest: () => Effect.succeed(pullRequest),
                getDiffStat: () => Effect.succeed({ additions: 0, deletions: 0, changedFiles: 0 }),
                getMergeability: () => Effect.succeed("unknown" as const),
                listChecks: () => Effect.succeed([]),
                getRepositoryPermission: () => Effect.succeed(true),
                listComments: () => Effect.succeed({ comments: [], threads: [], truncated: false }),
                listCommits: () => Effect.succeed([]),
                [operation]: () =>
                  Effect.fail(
                    variant === "response"
                      ? new BitbucketApi.BitbucketResponseError({
                          operation: "request",
                          status,
                          responseBodyLength: 0,
                          retryAt: 120_000,
                        })
                      : new BitbucketApi.BitbucketResponseBodyReadError({
                          operation: "request",
                          status,
                          cause: new Error("response stream failed"),
                          retryAt: 120_000,
                        }),
                  ),
              }),
            ),
            Effect.provide(
              Layer.mock(BitbucketServerApi.BitbucketServerApi)({
                getPullRequest: () =>
                  Effect.die("Bitbucket Server was asked for a Cloud pull request"),
                listPullRequests: () =>
                  Effect.die("Bitbucket Server was asked for a Cloud pull request"),
                currentUser: () => Effect.succeed(null),
              }),
            ),
          );
          const reference = {
            cwd: "/repo",
            repository: "acme/web",
            number: 1,
            host: "bitbucket.org",
          };
          const result = yield* operation === "listComments" || operation === "listCommits"
            ? Effect.result(provider.getChangeRequestActivity(reference))
            : Effect.result(provider.getChangeRequest(reference));
          if (status === 429) {
            expect(result).toMatchObject({
              _tag: "Failure",
              failure: { reason: "rate-limited", retryAt: 120_000 },
            });
          } else {
            expect(result._tag).toBe("Success");
          }
        }
      }),
  );
}

describe("bitbucketProviderFailure", () => {
  it("treats only an HTTP 401 as unusable credentials", () => {
    const responseError = (status: number) =>
      new BitbucketApi.BitbucketResponseError({
        operation: "request",
        status,
        responseBodyLength: 0,
      });

    expect(bitbucketProviderFailure(responseError(401)).reason).toBe("unauthenticated");
    expect(bitbucketProviderFailure(responseError(403)).reason).toBe("failed");
  });
});

describe("bitbucketViewerPermissions", () => {
  it("offers both actions to credentials with write access", () => {
    expect(bitbucketViewerPermissions({ canWrite: true })).toEqual({
      actions: ["merge", "close"],
      comment: true,
      resolve: true,
      verdicts: ["comment", "approve", "request-changes"],
      // Bitbucket says nothing about who may set a reviewer, and an unreported permission is
      // granted.
      requestReviewers: true,
    });
  });

  it("keeps merge from credentials that can only read the repository", () => {
    expect(bitbucketViewerPermissions({ canWrite: false })).toEqual({
      actions: ["close"],
      comment: true,
      resolve: true,
      verdicts: ["comment", "approve", "request-changes"],
      requestReviewers: true,
    });
  });

  it("treats an author with read access as any other reader, which is all Bitbucket says", () => {
    // The repository permission is the whole of what Bitbucket reports per account; it says
    // nothing about who opened this pull request, and its author may decline it with read access
    // alone — so declining stays offered rather than being taken from them.
    expect(bitbucketViewerPermissions({ canWrite: false }).actions).toEqual(["close"]);
  });
});

describe("Bitbucket Server link status", () => {
  it.effect("summarizes a linked Server pull request from the checkout host", () => {
    const execute = vi.fn((request: { readonly url: string }) =>
      Effect.succeed(
        HttpClientResponse.fromWeb(
          request as never,
          Response.json({
            id: 8623,
            title: "Track the Server pull request",
            state: "OPEN",
            draft: true,
            createdDate: 1_700_000_000_000,
            updatedDate: 1_700_000_100_000,
            fromRef: { displayId: "feature/server" },
            toRef: { displayId: "main" },
            author: { user: { name: "dev", displayName: "Dev" } },
            links: {
              self: [
                {
                  href: "http://127.0.0.1:7990/projects/PROJ/repos/t3code/pull-requests/8623",
                },
              ],
            },
          }),
        ),
      ),
    );
    const layer = BitbucketServerApi.layer.pipe(
      Layer.provide(
        Layer.succeed(
          HttpClient.HttpClient,
          HttpClient.make((request) => execute(request)),
        ),
      ),
      Layer.provide(
        Layer.mock(GitVcsDriver.GitVcsDriver)({
          readConfigValue: (_cwd, key) =>
            Effect.succeed(
              key === "remote.origin.url" ? "http://127.0.0.1:7990/scm/PROJ/t3code.git" : null,
            ),
        }),
      ),
      Layer.provide(
        ConfigProvider.layer(
          ConfigProvider.fromEnv({
            env: { T3CODE_BITBUCKET_ACCESS_TOKEN: "server-token" },
          }),
        ),
      ),
      Layer.provideMerge(NodeServices.layer),
    );

    return Effect.gen(function* () {
      const provider = yield* make.pipe(
        Effect.provide(
          Layer.mock(BitbucketPullRequestApi.BitbucketPullRequestApi)({
            getPullRequest: () => Effect.die("Cloud was asked for a Server pull request"),
          }),
        ),
        Effect.provide(layer),
      );
      const summary = yield* provider.getChangeRequestSummary!({
        cwd: "/repo",
        repository: "scm/proj/t3code",
        host: "git.source.acme.com",
        number: 8623,
      });
      expect(summary).toMatchObject({
        number: 8623,
        title: "Track the Server pull request",
        state: "open",
        isDraft: true,
        headBranch: "feature/server",
        baseBranch: "main",
        url: "http://127.0.0.1:7990/projects/PROJ/repos/t3code/pull-requests/8623",
        author: { login: "dev" },
      });
      expect(execute.mock.calls[0]?.[0].url).toBe(
        "http://127.0.0.1:7990/rest/api/1.0/projects/proj/repos/t3code/pull-requests/8623",
      );
      expect(String(execute.mock.calls[0]?.[0].url)).not.toContain("api.bitbucket.org");
    });
  });
});
