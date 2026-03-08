# Prompt Writing Standard (Based on Repo History)

This guide distills the dominant style used across this repository's commit history, with extra emphasis on patterns from `t3dotgg` (Theo Browne) and `juliusmarminge` (Julius Marminge).

## Core Style

1. Start with a direct action verb.
2. Be concrete about the changed behavior.
3. Include scope when useful (`server`, `web`, `composer`, `telemetry`, etc.).
4. Keep the first line short and scannable.
5. Prefer pragmatic language over abstract intent.

Good first-line shapes:

- `Fix <specific broken behavior>`
- `Add <specific capability>`
- `Refactor <target> to <outcome>`
- `Handle <edge case/failure mode>`
- `Preserve <state/behavior> during <operation>`

## Recommended Prompt Structure

Use this format for engineering prompts to match the repo's standard quality:

```md
<One-line action-oriented request>

Context
- Why this matters now
- Where this happens (file/module/flow)

Requirements
- Exact behavior changes
- Edge cases and failure handling
- Performance/reliability constraints

Acceptance Criteria
- Observable outcomes in UI/API/runtime behavior
- Tests to add or update
- Non-goals (what should not change)
```

## Signal From `t3dotgg` + `juliusmarminge`

Patterns worth copying from their stronger commits:

1. Name the user-visible outcome, not just implementation detail.
2. Call out failure modes explicitly (non-git projects, pending approvals, lifecycle cleanup, etc.).
3. Include follow-up bullets when the change has multiple moving parts.
4. Tie work to verifiable outcomes (tests, clearer errors, preserved state).
5. Keep language operational: "Guard", "Scope", "Preserve", "Wire", "Handle", "Fix".

## Prompt Quality Bar

A prompt is at repo standard if it is:

1. Specific enough to implement without guessing.
2. Testable (clear pass/fail outcomes).
3. Robustness-aware (mentions edge cases, state transitions, or failure behavior).
4. Scoped (does not ask for vague sweeping rewrites unless intentional).

## Reusable Prompt Template

```md
<Action verb> <specific outcome>.

Context:
- <current behavior/problem>
- <where it exists>

Implement:
- <change 1>
- <change 2>
- <change 3>

Handle:
- <edge case 1>
- <edge case 2>

Validate:
- <test/lint/typecheck expectations>
- <what should remain unchanged>
```

## Example (In-Standard)

```md
Fix draft thread open behavior when no worktree exists.

Context:
- Opening a draft thread can fail when `worktreePath` is missing.
- This impacts the Open action from chat snapshots.

Implement:
- Fall back to project `cwd` when draft thread has no worktree.
- Thread the resolved cwd through the open-in picker path.
- Keep existing worktree behavior unchanged.

Handle:
- Draft-only snapshots
- Non-git project roots

Validate:
- Add/update browser test for opening draft-only snapshots.
- `bun lint` and `bun typecheck` pass.
```

