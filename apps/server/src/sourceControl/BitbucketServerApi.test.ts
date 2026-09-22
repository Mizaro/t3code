import { assert, it, vi } from "@effect/vitest";
import * as NodeServices from "@effect/platform-node/NodeServices";
import * as ConfigProvider from "effect/ConfigProvider";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import { HttpClient, HttpClientResponse } from "effect/unstable/http";
import type { HttpClientRequest } from "effect/unstable/http";

import * as BitbucketServerApi from "./BitbucketServerApi.ts";
import * as GitVcsDriver from "../vcs/GitVcsDriver.ts";

const serverPullRequest = {
  id: 8623,
  title: "Track the Server pull request",
  description: "Status from the host.",
  state: "MERGED",
  draft: false,
  createdDate: 1_700_000_000_000,
  updatedDate: 1_700_000_100_000,
  closedDate: 1_700_000_200_000,
  fromRef: { displayId: "feature/server" },
  toRef: { displayId: "main" },
  author: {
    user: { name: "dev", displayName: "Dev", avatarUrl: "/users/dev/avatar.png" },
  },
  links: {
    self: [
      {
        href: "http://127.0.0.1:7990/projects/PROJ/repos/t3code/pull-requests/8623",
      },
    ],
  },
};

function authorizationHeader(request: HttpClientRequest.HttpClientRequest): string {
  const headers = request.headers as {
    authorization?: string;
    get?: (name: string) => string | null;
  };
  return headers.authorization ?? headers.get?.("authorization") ?? "";
}

function makeLayer(input: {
  readonly remoteUrl: string;
  readonly response: (request: HttpClientRequest.HttpClientRequest) => Response;
}) {
  const execute = vi.fn((request: HttpClientRequest.HttpClientRequest) =>
    Effect.succeed(HttpClientResponse.fromWeb(request, input.response(request))),
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
        readConfigValue: (cwd, key) => {
          if (key === "remote.upstream.url") return Effect.succeed(null);
          if (key === "remote.origin.url") return Effect.succeed(input.remoteUrl);
          return Effect.succeed(null);
        },
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
  return { execute, layer };
}

it.effect("reads a Server pull request from the checkout origin, not Bitbucket Cloud", () => {
  const { execute, layer } = makeLayer({
    remoteUrl: "http://127.0.0.1:7990/scm/PROJ/t3code.git",
    response: () => Response.json(serverPullRequest),
  });

  return Effect.gen(function* () {
    const api = yield* BitbucketServerApi.BitbucketServerApi;
    const pullRequest = yield* api.getPullRequest({
      cwd: "/repo",
      host: "127.0.0.1",
      project: "proj",
      slug: "t3code",
      number: 8623,
    });

    assert.deepStrictEqual(
      {
        number: pullRequest.number,
        state: pullRequest.state,
        title: pullRequest.title,
        url: pullRequest.url,
        headBranch: pullRequest.headBranch,
        baseBranch: pullRequest.baseBranch,
        mergedAt: pullRequest.mergedAt,
        author: pullRequest.author?.login,
      },
      {
        number: 8623,
        state: "merged",
        title: "Track the Server pull request",
        url: "http://127.0.0.1:7990/projects/PROJ/repos/t3code/pull-requests/8623",
        headBranch: "feature/server",
        baseBranch: "main",
        mergedAt: new Date(1_700_000_200_000).toISOString(),
        author: "dev",
      },
    );
    const request = execute.mock.calls[0]?.[0];
    assert.strictEqual(
      request?.url,
      "http://127.0.0.1:7990/rest/api/1.0/projects/proj/repos/t3code/pull-requests/8623",
    );
    assert.strictEqual(authorizationHeader(request!), "Bearer server-token");
    assert.strictEqual(request?.url.includes("api.bitbucket.org"), false);
    assert.strictEqual(request?.url.includes("bitbucket.org"), false);
  }).pipe(Effect.provide(layer));
});

it.effect("lists Server pull requests with the Server state query", () => {
  const { execute, layer } = makeLayer({
    remoteUrl: "ssh://git@git.source.acme.com:7999/PROJ/t3code.git",
    response: () => Response.json({ isLastPage: false, values: [serverPullRequest] }),
  });

  return Effect.gen(function* () {
    const api = yield* BitbucketServerApi.BitbucketServerApi;
    const page = yield* api.listPullRequests({
      cwd: "/repo",
      host: "git.source.acme.com",
      project: "proj",
      slug: "t3code",
      state: "open",
      limit: 25,
    });

    assert.strictEqual(page.truncated, true);
    assert.strictEqual(page.items[0]?.state, "merged");
    assert.strictEqual(
      execute.mock.calls[0]?.[0].url,
      "https://git.source.acme.com/rest/api/1.0/projects/proj/repos/t3code/pull-requests?state=OPEN&limit=25",
    );
  }).pipe(Effect.provide(layer));
});

it.effect("does not call Bitbucket Cloud when the remote is bitbucket.org", () => {
  const { execute, layer } = makeLayer({
    remoteUrl: "https://bitbucket.org/workspace/repo.git",
    response: () => Response.json(serverPullRequest),
  });

  return Effect.gen(function* () {
    const api = yield* BitbucketServerApi.BitbucketServerApi;
    const result = yield* Effect.result(
      api.getPullRequest({
        cwd: "/repo",
        host: "bitbucket.org",
        project: "workspace",
        slug: "repo",
        number: 1,
      }),
    );
    assert.strictEqual(result._tag, "Failure");
    assert.strictEqual(execute.mock.calls.length, 0);
  }).pipe(Effect.provide(layer));
});
