import type { RepositoryIdentity, ThreadLinkedPullRequest } from "@t3tools/contracts";
import {
  bitbucketServerRepositoryPath,
  canonicalRepositoryKey,
  parseBitbucketServerRepositoryPath,
} from "./sourceControl.ts";

/**
 * A change request named the way a thread link names one: the host below which the repository
 * is addressed, the repository path as that host writes it, and the number.
 *
 * The two strings are what `pullRequestHostOf` and the project's `repositoryIdentity` produce
 * from a git remote — lower case, no port, the full path below the host — because links are
 * matched against those. Anything else matches nothing.
 */
export interface ChangeRequestLink {
  readonly host: string;
  readonly repository: string;
  readonly number: number;
  /** Forgejo's HTTP host and port, separate from the portless repository identity. */
  readonly authority?: string;
}

/** The host itself, one of its subdomains, or an install named after the provider. */
function isHostOf(hostname: string, apex: string, label?: string): boolean {
  if (hostname === apex || hostname.endsWith(`.${apex}`)) return true;
  return label !== undefined && hostname.split(".").includes(label);
}

/**
 * The repository and number behind a change request URL on a host this can read, or null for
 * anything else — an issue, a commit, a repository root, a host this cannot tell apart from an
 * ordinary link. A doubtful match is worse than no match, so nothing here guesses.
 *
 * Each host is recognised by the path shape it alone uses, guarded by a hostname it could
 * plausibly be served from, since self-hosted installs are named whatever their admin chose:
 * GitLab's `/-/` marker and Bitbucket Server's `/projects/{key}/repos/{slug}/pull-requests/` are
 * unique enough to trust on any hostname, while `/pull/` is generic enough that it is only
 * believed from a GitHub-ish host.
 *
 * Nothing here tries to tell a lookalike hostname from a real one — `github.com.evil.test` and
 * the rest are an open set, and blocking spellings of it costs real hosts (`gitlab.com.br` is a
 * registrable domain). What a claim is worth is decided where it is used.
 */
export function parseChangeRequestUrl(targetUrl: string): ChangeRequestLink | null {
  let url: URL;
  try {
    url = new URL(targetUrl);
  } catch {
    return null;
  }
  // `javascript:`, `mailto:` and friends have no host to speak of and nothing to open.
  if (url.protocol !== "https:" && url.protocol !== "http:") return null;
  const host = url.hostname.toLowerCase();

  // GitHub, and any Enterprise install: /{owner}/{repo}/pull/{n}
  if (isHostOf(host, "github.com", "github")) {
    const match = /^\/([^/]+\/[^/]+)\/pull\/(\d+)(?:\/|$)/u.exec(url.pathname);
    if (match) return claim(host, match);
  }
  // Forgejo and Gitea use /pulls/ on arbitrary self-hosted domains.
  const forgejo = /^\/([^/]+(?:\/[^/]+)+)\/pulls\/(\d+)(?:\/|$)/u.exec(url.pathname);
  if (forgejo) {
    const link = claim(host, forgejo);
    return link === null ? null : { ...link, authority: url.host.toLowerCase() };
  }
  // GitLab, self-hosted included: /{group}/[{subgroup}/...]{repo}/-/merge_requests/{n}. The `/-/`
  // separator is GitLab's own, so the hostname is not asked about.
  const gitlab = /^\/([^/]+(?:\/[^/]+)+)\/-\/merge_requests\/(\d+)(?:\/|$)/u.exec(url.pathname);
  if (gitlab) return claim(host, gitlab);
  // Bitbucket Server / Data Center: /projects/{key}/repos/{slug}/pull-requests/{n}. The path is
  // Server's own, so the hostname is not asked about — an install is rarely named "bitbucket".
  // The stored repository is the checkout spelling (`scm/{key}/{slug}`), which is what
  // `https://host/scm/{key}/{slug}.git` already normalizes to, not the browser path.
  const bitbucketServer =
    /^\/projects\/([^/]+)\/repos\/([^/]+)\/pull-requests\/(\d+)(?:\/|$)/u.exec(url.pathname);
  if (bitbucketServer?.[1] && bitbucketServer[2] && bitbucketServer[3]) {
    const number = Number(bitbucketServer[3]);
    if (Number.isSafeInteger(number) && number > 0) {
      return {
        host,
        repository: bitbucketServerRepositoryPath(bitbucketServer[1], bitbucketServer[2]),
        number,
      };
    }
  }
  // Bitbucket Cloud: /{workspace}/{repo}/pull-requests/{n}
  if (isHostOf(host, "bitbucket.org", "bitbucket")) {
    const match = /^\/([^/]+\/[^/]+)\/pull-requests\/(\d+)(?:\/|$)/u.exec(url.pathname);
    return claim(host, match);
  }
  // Azure DevOps, both the current host and the per-organisation one it replaced. `_git` is part
  // of the repository path there, as it is in the remote URL the identity is read from.
  if (isHostOf(host, "dev.azure.com") || host.endsWith(".visualstudio.com")) {
    const match = /^\/((?:[^/]+\/)*_git\/[^/]+)\/pullrequest\/(\d+)(?:\/|$)/u.exec(url.pathname);
    return claim(host, match);
  }
  return null;
}

function claim(host: string, match: RegExpExecArray | null): ChangeRequestLink | null {
  const repository = match?.[1];
  const number = Number(match?.[2]);
  return repository && Number.isSafeInteger(number) && number > 0
    ? { host, repository: repository.toLowerCase(), number }
    : null;
}

/** The web URL a host writes for a change request; null when the host shape is unknown. */
export function changeRequestUrlFor(
  kind: string | null | undefined,
  host: string,
  repository: string,
  number: number,
  remoteUrl?: string,
): string | null {
  switch (kind) {
    case "github":
      return `https://${host}/${repository}/pull/${number}`;
    case "forgejo": {
      try {
        const remote = new URL(remoteUrl ?? "");
        if (
          (remote.protocol === "http:" || remote.protocol === "https:") &&
          (remote.hostname.toLowerCase() === host.toLowerCase() ||
            remote.host.toLowerCase() === host.toLowerCase())
        ) {
          return `${remote.origin}/${repository}/pulls/${number}`;
        }
      } catch {
        // SSH remotes do not specify the server's web origin.
      }
      return `https://${host}/${repository}/pulls/${number}`;
    }
    case "gitlab":
      return `https://${host}/${repository}/-/merge_requests/${number}`;
    case "bitbucket": {
      const server = parseBitbucketServerRepositoryPath(repository);
      // A Server checkout's path is `scm/{project}/{repo}`. Writing that through Cloud's
      // `/{workspace}/{repo}/pull-requests/` shape would open a URL the Server has never served.
      if (server && !isBitbucketCloudHost(host)) {
        return `${bitbucketServerWebOrigin(host, remoteUrl)}/projects/${server.project}/repos/${server.slug}/pull-requests/${number}`;
      }
      return `https://${host}/${repository}/pull-requests/${number}`;
    }
    case "azure-devops":
      return `https://${canonicalRepositoryKey(`${host}/${repository}`.toLowerCase())}/pullrequest/${number}`;
    default:
      return null;
  }
}

/** Builds a GitHub URL that remains available when the pull request API cannot be read. */
export function gitHubPullRequestBrowserUrl(
  identity: RepositoryIdentity | null | undefined,
  repository: string,
  number: number,
): string | null {
  if (identity?.provider !== "github" || !Number.isSafeInteger(number) || number < 1) return null;
  const repositoryPath = repository.split("/");
  if (
    repositoryPath.length !== 2 ||
    repositoryPath.some((segment) => segment.length === 0 || segment === "." || segment === "..")
  ) {
    return null;
  }

  let origin: string | null = null;
  try {
    const remoteUrl = new URL(identity.locator.remoteUrl.trim());
    if (remoteUrl.protocol === "http:" || remoteUrl.protocol === "https:") {
      origin = remoteUrl.origin;
    }
  } catch {
    // SCP-style remotes are read from their normalized identity below.
  }
  const hostname = identity.canonicalKey.split("/")[0];
  if (origin === null && !hostname) return null;

  try {
    const url = new URL(origin ?? `https://${hostname}`);
    url.pathname = `/${repositoryPath.join("/")}/pull/${number}`;
    return url.toString();
  } catch {
    return null;
  }
}

/**
 * The pull-request URL a GitHub-style `#123` autolink might name. GitHub writes every bare
 * reference through `/issues/`, including pull requests, so this only builds a candidate: the
 * caller must successfully read it as a pull request before treating it as one.
 */
export function pullRequestCandidateUrlFromReferenceAutolink(targetUrl: string): string | null {
  let url: URL;
  try {
    url = new URL(targetUrl);
  } catch {
    return null;
  }
  if (
    (url.protocol !== "https:" && url.protocol !== "http:") ||
    !(
      url.hostname.toLowerCase() === "github.com" ||
      url.hostname.toLowerCase().endsWith(".github.com") ||
      url.hostname.toLowerCase().split(".").includes("github")
    )
  ) {
    return null;
  }
  const match = /^\/([^/]+\/[^/]+)\/issues\/(\d+)(?:\/|$)/u.exec(url.pathname);
  if (match?.[1] === undefined || match[2] === undefined) return null;
  url.pathname = `/${match[1]}/pull/${match[2]}`;
  return url.toString();
}

/** Match a stored PR without requiring its project to remain available. */
export function matchesLinkedPullRequestUrl(
  linkedPullRequest: ThreadLinkedPullRequest,
  targetUrl: string,
): boolean {
  const linked = parseChangeRequestUrl(linkedPullRequest.url);
  const target = parseChangeRequestUrl(targetUrl);
  return (
    linked !== null &&
    target !== null &&
    linked.host === target.host &&
    linked.repository === target.repository &&
    linked.number === target.number &&
    linked.authority === target.authority
  );
}

/** The repository root behind a recognised change-request URL, without PR-specific state. */
export function changeRequestRepositoryUrl(targetUrl: string): string | null {
  const changeRequest = parseChangeRequestUrl(targetUrl);
  if (changeRequest === null) return null;
  const url = new URL(targetUrl);
  const repositoryPath =
    /^(.*?)\/-\/merge_requests\/\d+(?:\/|$)/iu.exec(url.pathname)?.[1] ??
    /^(.*?)(?:\/pulls?\/\d+|\/-\/merge_requests\/\d+|\/pull-requests\/\d+|\/pullrequest\/\d+)(?:\/|$)/iu.exec(
      url.pathname,
    )?.[1];
  if (!repositoryPath) return null;
  url.pathname = repositoryPath;
  url.search = "";
  url.hash = "";
  return url.toString();
}

function isBitbucketCloudHost(host: string): boolean {
  const hostname = host.split(":")[0]?.toLowerCase() ?? "";
  return hostname === "bitbucket.org" || hostname.endsWith(".bitbucket.org");
}

/** The web origin a Server remote already uses, or https on the repository host. */
function bitbucketServerWebOrigin(host: string, remoteUrl: string | undefined): string {
  try {
    const remote = new URL(remoteUrl ?? "");
    if (
      (remote.protocol === "http:" || remote.protocol === "https:") &&
      (remote.hostname.toLowerCase() === host.toLowerCase() ||
        remote.host.toLowerCase() === host.toLowerCase())
    ) {
      return remote.origin;
    }
  } catch {
    // SSH remotes do not specify the server's web origin.
  }
  return `https://${host}`;
}

export function siblingPullRequestUrl(url: string, number: number): string | null {
  if (!Number.isSafeInteger(number) || number < 1) return null;
  let sibling: URL;
  try {
    sibling = new URL(url);
  } catch {
    return null;
  }
  if (sibling.protocol !== "https:" && sibling.protocol !== "http:") return null;
  // The stored repository is `scm/{project}/{repo}`, which is not a prefix of the browser path,
  // so the generic suffix rewrite cannot see `/pull-requests/` from it.
  const server = /^\/projects\/([^/]+)\/repos\/([^/]+)\/pull-requests\/\d+(?:\/.*)?$/u.exec(
    sibling.pathname,
  );
  if (server?.[1] && server[2]) {
    sibling.pathname = `/projects/${server[1]}/repos/${server[2]}/pull-requests/${number}`;
    sibling.search = "";
    sibling.hash = "";
    return sibling.toString();
  }
  const reference = parseChangeRequestUrl(url);
  if (reference === null) return null;
  const route = /^\/(-\/merge_requests|pulls?|pull-requests|pullrequest)\/\d+(?:\/|$)/u.exec(
    sibling.pathname.slice(reference.repository.length + 1),
  )?.[1];
  if (route === undefined) return null;
  sibling.pathname = `/${reference.repository}/${route}/${number}`;
  sibling.search = "";
  sibling.hash = "";
  return sibling.toString();
}
