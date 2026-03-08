# Open Issue Prompt Drafts

Generated on 2026-03-08 from `repo:pingdotgg/t3code is:issue state:open -linked:pr`.

Each entry is classified as either a code-change request with a ready-to-post prompt, or a skip with a short reason.

## #551 - feat: Surface post-checkout hook output during worktree creation

Issue: https://github.com/pingdotgg/t3code/issues/551
Code change request: Yes

```md
Surface post-checkout hook output during worktree creation.

Context:
- When t3code creates a git worktree, git automatically runs post-checkout hooks.
- This affects git/worktree orchestration in apps/server plus the desktop/web actions that trigger it.

Implement:
- Update the git/worktree action path in the server and the matching client action so the requested workflow works end to end.
- Surface actionable progress and failures in the UI instead of silent errors or misleading states.
- Preserve current behavior for standard repositories and successful operations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #550 - Refinement of the plan is not propagated properly, and implementation is using original plan

Issue: https://github.com/pingdotgg/t3code/issues/550
Code change request: Yes

```md
Improve Refinement of the plan is not propagated properly, and implementation is using original plan.

Context:
- After reading suggested plan (GPT-5.4, Extra High, Plan, Full Access mode) I've suggested some tweaks, agent acknowledged those and answered correctly in the chat, however, when Implement button was pressed original plan...
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Loading, empty, and error states
- Keyboard and pointer interactions across supported platforms

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #549 - Does not work with local git (no remote) repos

Issue: https://github.com/pingdotgg/t3code/issues/549
Code change request: Yes

```md
Fix Does not work with local git (no remote) repos.

Context:
- I've established a local (non-remote) git repo in my project to be able to trivially work with work trees and be able to track and version my progress.
- This affects git/worktree orchestration in apps/server plus the desktop/web actions that trigger it.

Implement:
- Update the git/worktree action path in the server and the matching client action so the requested workflow works end to end.
- Surface actionable progress and failures in the UI instead of silent errors or misleading states.
- Preserve current behavior for standard repositories and successful operations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #548 - Scrollbar doesn't work on Windows

Issue: https://github.com/pingdotgg/t3code/issues/548
Code change request: Yes

```md
Fix Scrollbar doesn't work on Windows.

Context:
- When I attempt to scroll the page up with the mouse, the icon for the mouse turns into an arrow and opens the sidebar instead, even when it is over the scrollbar.
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Windows-specific input, path, and shell behavior
- Platform-specific desktop APIs and fallbacks

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #545 - Feature request: add support for vscode-insiders detection

Issue: https://github.com/pingdotgg/t3code/issues/545
Code change request: Yes

```md
Add support for vscode-insiders detection.

Context:
- T3Code will detect an installed instance of code, but not code-insiders.
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Platform-specific desktop APIs and fallbacks
- Missing external tools or unsupported local environments

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #542 - copy text integrated terminal

Issue: https://github.com/pingdotgg/t3code/issues/542
Code change request: Yes

```md
Add copy text integrated terminal.

Context:
- On Windows, it is not possible to copy text from the integrated terminal using common keyboard shortcuts such as Ctrl+C or Ctrl+Shift+C .
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- Windows-specific input, path, and shell behavior
- Long-running commands and live output

Validate:
- Verify the terminal workflow works end to end in the reported environment.
- `bun lint` and `bun typecheck` pass.
```

## #539 - Feature Request: OpenCode support

Issue: https://github.com/pingdotgg/t3code/issues/539
Code change request: No

This is a tracking/subscription issue rather than a scoped implementation request.

## #538 - Subagent support as nested threads

Issue: https://github.com/pingdotgg/t3code/issues/538
Code change request: Yes

```md
Add Subagent support as nested threads.

Context:
- Add support for codex subagents and render them as nested threads in the sidebar.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Session startup, reconnect, and resume paths
- Missing configuration, stale state, and provider-specific failures

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #536 - [Feature Request] Enhanced Diff View, Flexible Sidebar, and Local File Tracking  Description

Issue: https://github.com/pingdotgg/t3code/issues/536
Code change request: Yes

```md
Add Enhanced Diff View, Flexible Sidebar, and Local File Tracking  Description.

Context:
- I would like to propose a set of UI/UX improvements to the T3 Code interface to streamline the development workflow and reduce the need to switch back and forth between the browser and a local IDE.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Responsive layouts, window resizing, and collapsed sidebar states
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #535 - [improvement] add support for glab

Issue: https://github.com/pingdotgg/t3code/issues/535
Code change request: Yes

```md
Add support for glab.

Context:
- Currently the create PR feature only works with Github and its gh cli tool.
- This affects git/worktree orchestration in apps/server plus the desktop/web actions that trigger it.

Implement:
- Update the git/worktree action path in the server and the matching client action so the requested workflow works end to end.
- Surface actionable progress and failures in the UI instead of silent errors or misleading states.
- Preserve current behavior for standard repositories and successful operations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Repositories with unusual remotes, branches, or local-only history

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #534 - Error: Unable to add project Request time out: orchestration.dispatchCommand

Issue: https://github.com/pingdotgg/t3code/issues/534
Code change request: Yes

```md
Fix Error: Unable to add project Request time out: orchestration.dispatchCommand.

Context:
- Had no issues running on Mac this error is what I get on PC Specs: win 11 latest release AMD Ryzen 7 64GB Ram
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- macOS-specific desktop behavior and performance expectations
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #531 - Question flow composer controls overflow on small screens before sidebar collapse

Issue: https://github.com/pingdotgg/t3code/issues/531
Code change request: Yes

```md
Fix Question flow composer controls overflow on small screens before sidebar collapse.

Context:
- There is a UI bug on smaller screen sizes where the composer controls in the question-answer flow overflow / break layout before the responsive breakpoint collapses the sidebar.
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Responsive layouts, window resizing, and collapsed sidebar states
- Pending user-input states and transitions between planning and implementation

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #526 - [improvement] make clear if a thread needs input or is ready for implementation

Issue: https://github.com/pingdotgg/t3code/issues/526
Code change request: Yes

```md
Make clear if a thread needs input or is ready for implementation.

Context:
- When you create a thread in plan mode and you leave it, you don't see it's current state.
- This affects git/worktree orchestration in apps/server plus the desktop/web actions that trigger it.

Implement:
- Update the git/worktree action path in the server and the matching client action so the requested workflow works end to end.
- Surface actionable progress and failures in the UI instead of silent errors or misleading states.
- Preserve current behavior for standard repositories and successful operations.

Handle:
- Pending user-input states and transitions between planning and implementation
- Repositories with unusual remotes, branches, or local-only history

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #525 - feat: Spotlight mode – sync worktree changes to local checkout for testing

Issue: https://github.com/pingdotgg/t3code/issues/525
Code change request: Yes

```md
Add Spotlight mode – sync worktree changes to local checkout for testing.

Context:
- When agents work in isolated git worktrees, testing their changes against the full local development environment can be difficult.
- This affects git/worktree orchestration in apps/server plus the desktop/web actions that trigger it.

Implement:
- Update the git/worktree action path in the server and the matching client action so the requested workflow works end to end.
- Surface actionable progress and failures in the UI instead of silent errors or misleading states.
- Preserve current behavior for standard repositories and successful operations.

Handle:
- Session restore and app restart behavior
- Non-standard repository states, missing remotes, or dirty worktrees

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #524 - [BUG] filesystem is unavailable

Issue: https://github.com/pingdotgg/t3code/issues/524
Code change request: Yes

```md
Fix filesystem is unavailable.

Context:
- I created a thread on a project and it worked fine.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Pending user-input states and transitions between planning and implementation

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #523 - `direnv` / `flake.nix` environment is not propagated to agent sessions

Issue: https://github.com/pingdotgg/t3code/issues/523
Code change request: Yes

```md
Fix `direnv` / `flake.nix` environment is not propagated to agent sessions.

Context:
- I’m using together with flake.nix to provide project-local dependencies automatically when entering a directory.
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #520 - Cannot right-click

Issue: https://github.com/pingdotgg/t3code/issues/520
Code change request: Yes

```md
Fix Cannot right-click.

Context:
- Thank you for this. May it blossom well.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Loading, empty, and error states

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #519 - Current mode clarification

Issue: https://github.com/pingdotgg/t3code/issues/519
Code change request: Yes

```md
Improve Current mode clarification.

Context:
- (Im not nearly a designer, barely a programmer, so sorry if this doesnt make sense) For these two buttons its a little un-clear, do you press the button to activate this mode, or is this the current active mode.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Loading, empty, and error states
- Keyboard and pointer interactions across supported platforms

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #517 - [Feature Request] Add cli command to open folder inside desktop app

Issue: https://github.com/pingdotgg/t3code/issues/517
Code change request: Yes

```md
Add cli command to open folder inside desktop app.

Context:
- It's super useful to open a folder as a project in desktop apps from terminal.
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Long-running commands and live output

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #516 - [FEAT] Sidebar Svelte Favicon Support

Issue: https://github.com/pingdotgg/t3code/issues/516
Code change request: Yes

```md
Add Sidebar Svelte Favicon Support.

Context:
- Svelte favicon support Svelte/SvelteKit projects in the sidebar don’t resolve their real project favicon and fall back to a generic folder icon.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Loading, empty, and error states
- Keyboard and pointer interactions across supported platforms

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #511 - [Discussion] What should the best UI for coding agents optimize for after the TUI phase?

Issue: https://github.com/pingdotgg/t3code/issues/511
Code change request: No

This is a discussion/meta issue, not a concrete implementation ticket.

## #510 - feat: remote parity with ssh + codex resume on the same host

Issue: https://github.com/pingdotgg/t3code/issues/510
Code change request: Yes

```md
Add remote parity with ssh + codex resume on the same host.

Context:
- / workflow A key remote workflow for me is: - Codex CLI is installed and used on a Mac - I often work from Windows - today I can ssh into the Mac, run codex resume , and access the Mac's existing Codex sessions with the...
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Windows-specific input, path, and shell behavior
- macOS-specific desktop behavior and performance expectations

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #509 - Threads dying

Issue: https://github.com/pingdotgg/t3code/issues/509
Code change request: Yes

```md
Handle Threads dying.

Context:
- i am running the npx t3@alpha command from my WSL and using it on my windows browser and in a pirticual thread this happens
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Windows-specific input, path, and shell behavior
- Session startup, reconnect, and resume paths

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #507 - Verbose tool call info

Issue: https://github.com/pingdotgg/t3code/issues/507
Code change request: Yes

```md
Allow Verbose tool call info.

Context:
- Allow to expand the tool call UI indication box, to see more details about the tool call.
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Failure handling and user-visible recovery
- State preservation across reloads or retries

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #506 - Allow readonly access to the shells that were launched by the agents

Issue: https://github.com/pingdotgg/t3code/issues/506
Code change request: Yes

```md
Allow readonly access to the shells that were launched by the agents.

Context:
- Allow readonly access to the shells that were launched by the agents.
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- Long-running commands and live output
- Selection, copy/paste, and focus behavior

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #503 - QnA prompts persist after app restart but can no longer be answered, session breaks

Issue: https://github.com/pingdotgg/t3code/issues/503
Code change request: Yes

```md
Fix QnA prompts persist after app restart but can no longer be answered, session breaks.

Context:
- If the model asks questions through the QnA tool, and I close and restart the app before answering, the pending questions still appear after restart, but there is no way to answer them.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Session restore and app restart behavior
- Pending user-input states and transitions between planning and implementation

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #499 - Plan mode question blocks image upload feedback

Issue: https://github.com/pingdotgg/t3code/issues/499
Code change request: Yes

```md
Fix Plan mode question blocks image upload feedback.

Context:
- When an agent in plan mode asks the user a question, an uploaded image shows no visual feedback.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Pending user-input states and transitions between planning and implementation
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #498 - feat: Show current context usage in the input component

Issue: https://github.com/pingdotgg/t3code/issues/498
Code change request: Yes

```md
Show current context usage in the input component.

Context:
- Proposed Prompt : Implement a new feature, that would show current context usage as circle with a progress bar and on hover there is a tooltip that shows actual percentage used.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Loading, empty, and error states
- Keyboard and pointer interactions across supported platforms

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #496 - [BUG] Error Alert flickering

Issue: https://github.com/pingdotgg/t3code/issues/496
Code change request: Yes

```md
Fix Error Alert flickering.

Context:
- I had not setup GH command yet and now in the thread I first can't close the error alert, when I hover over it, it starts flickering (just see the video attached).
- This affects git/worktree orchestration in apps/server plus the desktop/web actions that trigger it.

Implement:
- Update the git/worktree action path in the server and the matching client action so the requested workflow works end to end.
- Surface actionable progress and failures in the UI instead of silent errors or misleading states.
- Preserve current behavior for standard repositories and successful operations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #490 - UI desync from error

Issue: https://github.com/pingdotgg/t3code/issues/490
Code change request: Yes

```md
Fix UI desync from error.

Context:
- Whenever Codex has this error, 2026-03-08T04:22:39.518481Z ERROR codex core::exec: exec error: The filename or extension is too long.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Partial failures, timeouts, and recovery without UI desync
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #487 - allow creating worktree from main with or without local changes

Issue: https://github.com/pingdotgg/t3code/issues/487
Code change request: Yes

```md
Allow creating worktree from main with or without local changes.

Context:
- codex allows creating a worktree from main with or without local changes.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #485 - Choose local vs worktree for “implement in new thread”

Issue: https://github.com/pingdotgg/t3code/issues/485
Code change request: Yes

```md
Add Choose local vs worktree for “implement in new thread”.

Context:
- In plan mode right now you can: - Implement in the same thread - Implement in a new thread For implement in a new thread, there is no option to pick between local vs worktree.
- This affects git/worktree orchestration in apps/server plus the desktop/web actions that trigger it.

Implement:
- Update the git/worktree action path in the server and the matching client action so the requested workflow works end to end.
- Surface actionable progress and failures in the UI instead of silent errors or misleading states.
- Preserve current behavior for standard repositories and successful operations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Pending user-input states and transitions between planning and implementation

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #479 - Dismiss question/plan UI

Issue: https://github.com/pingdotgg/t3code/issues/479
Code change request: Yes

```md
Handle Dismiss question/plan UI.

Context:
- In the question/plan UI popup, there’s currently no way to close or dismiss it without answering.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Pending user-input states and transitions between planning and implementation
- Loading, empty, and error states

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #476 - Suggestion for a vision of shared agent infrastructure

Issue: https://github.com/pingdotgg/t3code/issues/476
Code change request: No

This is a discussion/meta issue, not a concrete implementation ticket.

## #473 - Spellcheck right-click context menu actions not available in prompt input

Issue: https://github.com/pingdotgg/t3code/issues/473
Code change request: Yes

```md
Fix Spellcheck right-click context menu actions not available in prompt input.

Context:
- The app correctly detects and underlines misspelt words in the prompt input, but right-clicking a misspelt word does not offer any correction suggestions in the context menu.
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Windows-specific input, path, and shell behavior
- Platform-specific desktop APIs and fallbacks

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #471 - [BUG] issue during installation

Issue: https://github.com/pingdotgg/t3code/issues/471
Code change request: Yes

```md
Fix issue during installation.

Context:
- when i try to install on my mac i am getting following error currently my nvm ls - v23.6.0 anyother info required please do let me know
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- macOS-specific desktop behavior and performance expectations
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #469 - [BUG] Stale agent questions after app restart

Issue: https://github.com/pingdotgg/t3code/issues/469
Code change request: Yes

```md
Fix Stale agent questions after app restart.

Context:
- After codex/the agent asks a follow-up question, the UI restores that question from thread history.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Session restore and app restart behavior
- Pending user-input states and transitions between planning and implementation

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #466 - Thread creation time bug

Issue: https://github.com/pingdotgg/t3code/issues/466
Code change request: Yes

```md
Fix Thread creation time bug.

Context:
- I've only tried the app on windows, so I don't know if it's a general codebase wide thing or just windows specifically.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Windows-specific input, path, and shell behavior
- Non-standard repository states, missing remotes, or dirty worktrees

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #463 - Create PR with remote commits

Issue: https://github.com/pingdotgg/t3code/issues/463
Code change request: Yes

```md
Create PR with remote commits.

Context:
- When there are changes committed and pushed to remote, the "Create PR" button says "No local commits to include in a PR." It would be very nice if I could still create a PR with the remote changes.
- This affects git/worktree orchestration in apps/server plus the desktop/web actions that trigger it.

Implement:
- Update the git/worktree action path in the server and the matching client action so the requested workflow works end to end.
- Surface actionable progress and failures in the UI instead of silent errors or misleading states.
- Preserve current behavior for standard repositories and successful operations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #462 - Default to new thread on worktree

Issue: https://github.com/pingdotgg/t3code/issues/462
Code change request: Yes

```md
Add Default to new thread on worktree.

Context:
- Add a setting to default to new threads being on a worktree instead of local, its really annoying having to switch it every time
- This affects git/worktree orchestration in apps/server plus the desktop/web actions that trigger it.

Implement:
- Update the git/worktree action path in the server and the matching client action so the requested workflow works end to end.
- Surface actionable progress and failures in the UI instead of silent errors or misleading states.
- Preserve current behavior for standard repositories and successful operations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Repositories with unusual remotes, branches, or local-only history

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #461 - Delete thread button on hover

Issue: https://github.com/pingdotgg/t3code/issues/461
Code change request: Yes

```md
Add Delete thread button on hover.

Context:
- Add a delete thread button on hovering over a thread in the sidebar.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Session startup, reconnect, and resume paths
- Missing configuration, stale state, and provider-specific failures

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #458 - Long messages can break chat layout after window changes

Issue: https://github.com/pingdotgg/t3code/issues/458
Code change request: Yes

```md
Fix Long messages can break chat layout after window changes.

Context:
- I found a rendering bug in the desktop app when a conversation contains a very long user message.
- This affects git/worktree orchestration in apps/server plus the desktop/web actions that trigger it.

Implement:
- Update the git/worktree action path in the server and the matching client action so the requested workflow works end to end.
- Surface actionable progress and failures in the UI instead of silent errors or misleading states.
- Preserve current behavior for standard repositories and successful operations.

Handle:
- Linux packaging/runtime differences
- Responsive layouts, window resizing, and collapsed sidebar states

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #457 - Responsive UI bug: “Show selected thread tips” overlaps “Commit, push & create PR” on small window widths

Issue: https://github.com/pingdotgg/t3code/issues/457
Code change request: Yes

```md
Fix Responsive UI bug: “Show selected thread tips” overlaps “Commit, push & create PR” on small window widths.

Context:
- On smaller window widths, the "+ Show selected thread tips" button overlaps the "Commit, push & create PR" button.
- This affects git/worktree orchestration in apps/server plus the desktop/web actions that trigger it.

Implement:
- Update the git/worktree action path in the server and the matching client action so the requested workflow works end to end.
- Surface actionable progress and failures in the UI instead of silent errors or misleading states.
- Preserve current behavior for standard repositories and successful operations.

Handle:
- macOS-specific desktop behavior and performance expectations
- Responsive layouts, window resizing, and collapsed sidebar states

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #455 - Reference the website on top of the readme page

Issue: https://github.com/pingdotgg/t3code/issues/455
Code change request: Yes

```md
Handle Reference the website on top of the readme page.

Context:
- Reference the website on top of the readme page
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Failure handling and user-visible recovery
- State preservation across reloads or retries

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #454 - feat: allow sorting projects in the sidebar

Issue: https://github.com/pingdotgg/t3code/issues/454
Code change request: Yes

```md
Allow sorting projects in the sidebar.

Context:
- T3 Code is positioned as a fast, high-performance app, which makes it natural to keep a large number of projects connected over time.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Loading, empty, and error states
- Keyboard and pointer interactions across supported platforms

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #452 - Add project from github repo url

Issue: https://github.com/pingdotgg/t3code/issues/452
Code change request: Yes

```md
Add project from github repo url.

Context:
- In addition to adding a project from a folder on your computer, it would be nice to be able to add a project from a GitHub repo url and then T3 Code clones the repo and opens it as a project.
- This affects git/worktree orchestration in apps/server plus the desktop/web actions that trigger it.

Implement:
- Update the git/worktree action path in the server and the matching client action so the requested workflow works end to end.
- Surface actionable progress and failures in the UI instead of silent errors or misleading states.
- Preserve current behavior for standard repositories and successful operations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Repositories with unusual remotes, branches, or local-only history

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #449 - feat: Allow Maximize terminal panel

Issue: https://github.com/pingdotgg/t3code/issues/449
Code change request: Yes

```md
Allow Maximize terminal panel.

Context:
- I use a lot the "CTRL + J" to toggle between the terminal and the agent/IDE.
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- Long-running commands and live output
- Selection, copy/paste, and focus behavior

Validate:
- Verify the terminal workflow works end to end in the reported environment.
- `bun lint` and `bun typecheck` pass.
```

## #448 - feat/bug: Plan mode prevents writing to file.

Issue: https://github.com/pingdotgg/t3code/issues/448
Code change request: Yes

```md
Fix feat/bug: Plan mode prevents writing to file.

Context:
- Scenario Ask agent to go make a plan (no execution mode).
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Pending user-input states and transitions between planning and implementation
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #445 - Terminal layout bugs out when Diff panel is open and selection options in terminal

Issue: https://github.com/pingdotgg/t3code/issues/445
Code change request: Yes

```md
Fix Terminal layout bugs out when Diff panel is open and selection options in terminal.

Context:
- When the diff panel is open and you are selecting options, similar to choosing when running a cli script like skills.sh, in the terminal the layout for the terminal bugs out.
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- Long-running commands and live output
- Selection, copy/paste, and focus behavior

Validate:
- Verify the terminal workflow works end to end in the reported environment.
- `bun lint` and `bun typecheck` pass.
```

## #444 - feat: Plan mode QoL improvements (mode caching, single click answers)

Issue: https://github.com/pingdotgg/t3code/issues/444
Code change request: Yes

```md
Add Plan mode QoL improvements (mode caching, single click answers).

Context:
- User should either start new threads in the same project with the same "mode" they started previous threads in or be able to set a "default" mode for starting threads.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Pending user-input states and transitions between planning and implementation
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #443 - feat:  builtin MD reader

Issue: https://github.com/pingdotgg/t3code/issues/443
Code change request: Yes

```md
Add builtin MD reader.

Context:
- - add built in light weight md reader - let me customize it with simple css (like in Obsidian, hey why don't you use that?
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Failure handling and user-visible recovery
- State preservation across reloads or retries

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #442 - feat: User Input Requested Indicator in Sidebar

Issue: https://github.com/pingdotgg/t3code/issues/442
Code change request: Yes

```md
Add User Input Requested Indicator in Sidebar.

Context:
- When a thread has been started but it is awaiting user input, it shows "Working" in the sidebar with no indication that the agent is awaiting user input.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Loading, empty, and error states
- Keyboard and pointer interactions across supported platforms

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #440 - Desktop v0.0.4: Long startup, multi-second view transitions, and multi-second chat input lag on MacBook Pro M3 Max

Issue: https://github.com/pingdotgg/t3code/issues/440
Code change request: Yes

```md
Handle Desktop v0.0.4: Long startup, multi-second view transitions, and multi-second chat input lag on MacBook Pro M3 Max.

Context:
- I'm seeing very poor desktop app performance on v0.0.4 on an Apple Silicon Mac.
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- macOS-specific desktop behavior and performance expectations
- Platform-specific desktop APIs and fallbacks

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #439 - [(likely) Low-ish Priority] Utilize Electron Fuses

Issue: https://github.com/pingdotgg/t3code/issues/439
Code change request: Yes

```md
Fix Utilize Electron Fuses.

Context:
- If desired, this app should make use of These are used to enable/disable features of Electron for security purposes (mostly to prevent compromise of the app itself).
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Partial failures, timeouts, and recovery without UI desync
- Failure handling and user-visible recovery

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #438 - Brief flash of "No projects yet" while loading.

Issue: https://github.com/pingdotgg/t3code/issues/438
Code change request: Yes

```md
Handle Brief flash of "No projects yet" while loading.

Context:
- Minor nitpick: Brief flash of "No projects yet" while loading.
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Failure handling and user-visible recovery
- State preservation across reloads or retries

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #437 - Automations

Issue: https://github.com/pingdotgg/t3code/issues/437
Code change request: Yes

```md
Add Automations.

Context:
- It would be useful to have an automations feature, similar to the Codex app and Cursor automations.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #436 - Changed files going the current thread which isn't the right one - MacOS

Issue: https://github.com/pingdotgg/t3code/issues/436
Code change request: Yes

```md
Fix Changed files going the current thread which isn't the right one - MacOS.

Context:
- I had one thread which were working on a task.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- macOS-specific desktop behavior and performance expectations
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #435 - No way to reopen window

Issue: https://github.com/pingdotgg/t3code/issues/435
Code change request: Yes

```md
Fix No way to reopen window.

Context:
- Maybe I'm an idiot...
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- macOS-specific desktop behavior and performance expectations
- Platform-specific desktop APIs and fallbacks

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #434 - Open external link doesn't work - MacOS

Issue: https://github.com/pingdotgg/t3code/issues/434
Code change request: Yes

```md
Open external link doesn't work - MacOS.

Context:
- When trying to open an external link the app does nothing.
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- macOS-specific desktop behavior and performance expectations
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #433 - Make open button configurable

Issue: https://github.com/pingdotgg/t3code/issues/433
Code change request: Yes

```md
Make open button configurable.

Context:
- The list of actions in the open button should be configurable.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- macOS-specific desktop behavior and performance expectations
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #431 - failed to refresh available models

Issue: https://github.com/pingdotgg/t3code/issues/431
Code change request: Yes

```md
Fix failed to refresh available models.

Context:
- 2026-03-07T20:45:18.098929Z ERROR codex core::models manager::manager: failed to refresh available models: timeout waiting for child process to exit
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Partial failures, timeouts, and recovery without UI desync
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #428 - Feature Request: Add webstorm in a list of editors

Issue: https://github.com/pingdotgg/t3code/issues/428
Code change request: Yes

```md
Add webstorm in a list of editors.

Context:
- Add webstorm in a list of editors
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Platform-specific desktop APIs and fallbacks
- Missing external tools or unsupported local environments

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #427 - Visual issue - text overlaid over tool calls

Issue: https://github.com/pingdotgg/t3code/issues/427
Code change request: Yes

```md
Fix Visual issue - text overlaid over tool calls.

Context:
- I have got this wired bug where the texts is overlaid over the tool calls.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Loading, empty, and error states
- Keyboard and pointer interactions across supported platforms

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #426 - [Bug]: The current repository badge doesn't grows for big repo names

Issue: https://github.com/pingdotgg/t3code/issues/426
Code change request: Yes

```md
Fix : The current repository badge doesn't grows for big repo names.

Context:
- Proposed prompt : The current repo badge, located near the New thread Header doesn't grow for bigger repo names like 'code-transform-animate', as shown on the picture.
- This affects git/worktree orchestration in apps/server plus the desktop/web actions that trigger it.

Implement:
- Update the git/worktree action path in the server and the matching client action so the requested workflow works end to end.
- Surface actionable progress and failures in the UI instead of silent errors or misleading states.
- Preserve current behavior for standard repositories and successful operations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Repositories with unusual remotes, branches, or local-only history

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #424 - feat: support gemini

Issue: https://github.com/pingdotgg/t3code/issues/424
Code change request: Yes

```md
Support gemini.

Context:
- opening this issue to get notified when gemini support is added.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Session startup, reconnect, and resume paths
- Missing configuration, stale state, and provider-specific failures

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #419 - 'Action failed' toast does not close

Issue: https://github.com/pingdotgg/t3code/issues/419
Code change request: Yes

```md
Fix 'Action failed' toast does not close.

Context:
- It stays on the screen as long as i don't remove it myself
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Partial failures, timeouts, and recovery without UI desync
- Loading, empty, and error states

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #418 - Themes and UI cusomization

Issue: https://github.com/pingdotgg/t3code/issues/418
Code change request: Yes

```md
Add Themes and UI cusomization.

Context:
- I would strongly encourage you to adopt theming and full UI customization like VS Code or Zed.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Session startup, reconnect, and resume paths
- Missing configuration, stale state, and provider-specific failures

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #417 - Add ability to create worktrees from a starting point (linear issue, pull request, etc.)

Issue: https://github.com/pingdotgg/t3code/issues/417
Code change request: Yes

```md
Add ability to create worktrees from a starting point (linear issue, pull request, etc.).

Context:
- In conductor, you have the ability to create a new workspace with ⌘+⇧+N to give you options to start a new worktree from either 1.
- This affects git/worktree orchestration in apps/server plus the desktop/web actions that trigger it.

Implement:
- Update the git/worktree action path in the server and the matching client action so the requested workflow works end to end.
- Surface actionable progress and failures in the UI instead of silent errors or misleading states.
- Preserve current behavior for standard repositories and successful operations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Repositories with unusual remotes, branches, or local-only history

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #416 - Cursor is not switching to a pointer

Issue: https://github.com/pingdotgg/t3code/issues/416
Code change request: Yes

```md
Fix Cursor is not switching to a pointer.

Context:
- Except for the settings in the chat box and the actions in the top-right corner, the cursor doesn't change to a pointer.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Partial failures, timeouts, and recovery without UI desync
- Loading, empty, and error states

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #415 - rmcp::transport::worker: worker quit with fatal

Issue: https://github.com/pingdotgg/t3code/issues/415
Code change request: Yes

```md
Fix rmcp::transport::worker: worker quit with fatal.

Context:
- Always when starting a new thread and after sending the first message, I get this error after it hung a bit at 0s: After a little bit more time, the actual data streams in, and after even more time, the error disappears.
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Windows-specific input, path, and shell behavior
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #414 - cannot close ssh-askpass popup window

Issue: https://github.com/pingdotgg/t3code/issues/414
Code change request: Yes

```md
Fix cannot close ssh-askpass popup window.

Context:
- Using the AppImage on Cachy, i was able to resolve this issue by installing x11-ssh-askpass, but the popup does not close
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Linux packaging/runtime differences
- Platform-specific desktop APIs and fallbacks

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #413 - [Bug] Large diffs cause commit/push/PR action to fail.

Issue: https://github.com/pingdotgg/t3code/issues/413
Code change request: Yes

```md
Fix Large diffs cause commit/push/PR action to fail.

Context:
- Probably an edge case, but large changes currently cause the git commit/push action to fail.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #411 - In the "Plan mode" text input cursor focus forced to the right

Issue: https://github.com/pingdotgg/t3code/issues/411
Code change request: Yes

```md
Handle In the "Plan mode" text input cursor focus forced to the right.

Context:
- Steps to Reproduce 1.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- macOS-specific desktop behavior and performance expectations
- Pending user-input states and transitions between planning and implementation

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #410 - Codex requests fail when switching from openai subscription to api-key in codex

Issue: https://github.com/pingdotgg/t3code/issues/410
Code change request: Yes

```md
Fix Codex requests fail when switching from openai subscription to api-key in codex.

Context:
- After switching from openai subscription to api-key in codex t3-code fails to retrieve a response from codex: { "error": { "message": "The encrypted content gAAA...ztg= could not be verified.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Partial failures, timeouts, and recovery without UI desync
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #408 - Please integrate a Notion view

Issue: https://github.com/pingdotgg/t3code/issues/408
Code change request: Yes

```md
Add Please integrate a Notion view.

Context:
- This might be a reach but I use Notion for documentation from Claude Code.
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Failure handling and user-visible recovery
- State preservation across reloads or retries

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #403 - Codex CLI installed - but codex not recognized....

Issue: https://github.com/pingdotgg/t3code/issues/403
Code change request: Yes

```md
Fix Codex CLI installed - but codex not recognized.

Context:
- If this has been mentioned already please ignore, I use codex typically and am not sure how to address this issue; troubleshooting this right now.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #402 - feat: add Pi provider integration via RPC

Issue: https://github.com/pingdotgg/t3code/issues/402
Code change request: Yes

```md
Add Pi provider integration via RPC.

Context:
- A bit of a meta-issue that can be used as a prompt if you don't like my implementation ;) Implement Pi as a first-class provider in T3 Code.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- macOS-specific desktop behavior and performance expectations
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #400 - Hard to read text

Issue: https://github.com/pingdotgg/t3code/issues/400
Code change request: Yes

```md
Handle Hard to read text.

Context:
- Both contrast and size of the text make it sometimes hard to read what's happening in the ui.
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Failure handling and user-visible recovery
- State preservation across reloads or retries

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #399 - Selected project name in "New thread" header is clipped on both sides

Issue: https://github.com/pingdotgg/t3code/issues/399
Code change request: Yes

```md
Fix Selected project name in "New thread" header is clipped on both sides.

Context:
- The selected project badge in the New thread header clips both the start and end of the project name.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- macOS-specific desktop behavior and performance expectations
- Loading, empty, and error states

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #398 - Improve UX on question tool for planning

Issue: https://github.com/pingdotgg/t3code/issues/398
Code change request: Yes

```md
Improve UX on question tool for planning.

Context:
- Here is the prompt I used in plan mode As shown on the screenshot a few issues with long labels Also the yellow popup for the description takes more than a second to show which makes it very annoying to read quickly the question description.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Pending user-input states and transitions between planning and implementation
- Failure handling and user-visible recovery

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #397 - feat: we really need the pi coding agent in this GUI before anything else!

Issue: https://github.com/pingdotgg/t3code/issues/397
Code change request: Yes

```md
Add we really need the pi coding agent in this GUI before anything else!.

Context:
- Would be an amazing experience to work with both the t3code GUI using pi coding agent.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Session startup, reconnect, and resume paths
- Missing configuration, stale state, and provider-specific failures

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #394 - I would love to be able to set 'New Worktree' as the default instead of local for all new threads in a project or do so globally for all projects.

Issue: https://github.com/pingdotgg/t3code/issues/394
Code change request: Yes

```md
Handle I would love to be able to set 'New Worktree' as the default instead of local for all new threads in a project or do so globally for all projects.

Context:
- Prompt request: I would love to be able to set 'New Worktree' as the default instead of local for all new threads in a project or do so globally for all projects.
- This affects git/worktree orchestration in apps/server plus the desktop/web actions that trigger it.

Implement:
- Update the git/worktree action path in the server and the matching client action so the requested workflow works end to end.
- Surface actionable progress and failures in the UI instead of silent errors or misleading states.
- Preserve current behavior for standard repositories and successful operations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Repositories with unusual remotes, branches, or local-only history

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #393 - Commands fail for ancient versions of codex

Issue: https://github.com/pingdotgg/t3code/issues/393
Code change request: Yes

```md
Fix Commands fail for ancient versions of codex.

Context:
- I got this error when I tried to run a command with codex v0.36 .
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Partial failures, timeouts, and recovery without UI desync
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #392 - resolveLanguage Error for 'env'

Issue: https://github.com/pingdotgg/t3code/issues/392
Code change request: Yes

```md
Fix resolveLanguage Error for 'env'.

Context:
- I was trying out t3 coder and after around 1hr of usage i am seeing this error anyone else has seen this ?
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Windows-specific input, path, and shell behavior
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #390 - Action failed notification doesn't disappear

Issue: https://github.com/pingdotgg/t3code/issues/390
Code change request: Yes

```md
Fix Action failed notification doesn't disappear.

Context:
- The notification in the screenshot doesn't disappear/time-out.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Partial failures, timeouts, and recovery without UI desync
- Loading, empty, and error states

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #386 - Newer Codex CLI rejects interactionMode: default, causing chat turns to hang with no response

Issue: https://github.com/pingdotgg/t3code/issues/386
Code change request: Yes

```md
Fix Newer Codex CLI rejects interactionMode: default, causing chat turns to hang with no response.

Context:
- T3 Code v0.0.4 appears to be incompatible with newer Codex app-server interaction mode names during normal chat turns.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Partial failures, timeouts, and recovery without UI desync
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #384 - feat(settings): ability to change default thinking level

Issue: https://github.com/pingdotgg/t3code/issues/384
Code change request: Yes

```md
Fix feat(settings): ability to change default thinking level.

Context:
- when setting a thinking level on a thread and creating a new one it goes back to default might be worth adding a dropdown menu on the settings to change the default thinking level.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Partial failures, timeouts, and recovery without UI desync
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #383 - buttons squeezed together

Issue: https://github.com/pingdotgg/t3code/issues/383
Code change request: Yes

```md
Handle buttons squeezed together.

Context:
- If the window size is small, the buttons can squeeze together
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Platform-specific desktop APIs and fallbacks
- Missing external tools or unsupported local environments

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #382 - AppImage requires libfuse2, move to type2-runtime

Issue: https://github.com/pingdotgg/t3code/issues/382
Code change request: Yes

```md
Handle AppImage requires libfuse2, move to type2-runtime.

Context:
- --- Currently getting
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Linux packaging/runtime differences
- Platform-specific desktop APIs and fallbacks

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #379 - Sending message box getting stuck (Linux-App)

Issue: https://github.com/pingdotgg/t3code/issues/379
Code change request: Yes

```md
Fix Sending message box getting stuck (Linux-App).

Context:
- In the linux app the sending message box getting stuck and i need to reopen the t3 chat to be able to send new messages.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Linux packaging/runtime differences
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #378 - Cannot create any new threads (Orchestration command invariant failed (thread.create):)

Issue: https://github.com/pingdotgg/t3code/issues/378
Code change request: Yes

```md
Fix Cannot create any new threads (Orchestration command invariant failed (thread.create):).

Context:
- The exact error: This started to happen after I create two worktree threads (with the same name, if that's relevant) and deleted one of them.
- This affects git/worktree orchestration in apps/server plus the desktop/web actions that trigger it.

Implement:
- Update the git/worktree action path in the server and the matching client action so the requested workflow works end to end.
- Surface actionable progress and failures in the UI instead of silent errors or misleading states.
- Preserve current behavior for standard repositories and successful operations.

Handle:
- Windows-specific input, path, and shell behavior
- Non-standard repository states, missing remotes, or dirty worktrees

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #377 - Server SDK

Issue: https://github.com/pingdotgg/t3code/issues/377
Code change request: Yes

```md
Add Server SDK.

Context:
- It would be great to enhance the server/client mode as requested here: I would like to suggest a further improvement on that.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Loading, empty, and error states
- Keyboard and pointer interactions across supported platforms

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #376 - Feature request: local lifecycle hooks / notification integration for tools like peon-ping

Issue: https://github.com/pingdotgg/t3code/issues/376
Code change request: Yes

```md
Add local lifecycle hooks / notification integration for tools like peon-ping.

Context:
- I'd like T3 Code to expose a clean integration surface for external local notification/sound tools like peon-ping .
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- macOS-specific desktop behavior and performance expectations
- Non-standard repository states, missing remotes, or dirty worktrees

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #375 - Plan mode, alternative answer for clarifying questions. Text cursor is stuck

Issue: https://github.com/pingdotgg/t3code/issues/375
Code change request: Yes

```md
Fix Plan mode, alternative answer for clarifying questions. Text cursor is stuck.

Context:
- When using plan mode on xhigh, when the model asks you for clarifying answers, if you don't choose one of the given options and you try to type in your own answer, the application doesn't allow you to move the text curso...
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- macOS-specific desktop behavior and performance expectations
- Pending user-input states and transitions between planning and implementation

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #373 - plan prompt from a tweet requesting Skills, Archive, Kanban, Split...

Issue: https://github.com/pingdotgg/t3code/issues/373
Code change request: Yes

```md
Fix plan prompt from a tweet requesting Skills, Archive, Kanban, Split.

Context:
- tweet: I implemented this plan in my t3code fork and it one-shotted it perfectly.
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- Session restore and app restart behavior
- Responsive layouts, window resizing, and collapsed sidebar states

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #372 - Persistent "Codex CLI not found" error after installation of codex CLI

Issue: https://github.com/pingdotgg/t3code/issues/372
Code change request: Yes

```md
Fix Persistent "Codex CLI not found" error after installation of codex CLI.

Context:
- Description If the application is launched without the Codex CLI ( codex ) installed or available in the system PATH, an error notification correctly appears when adding a project.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- macOS-specific desktop behavior and performance expectations
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #371 - Serving t3code over non-localhost http causes `Uncaught TypeError: crypto.randomUUID is not a function` due to `crypto.randomUUID()` assuming secure context

Issue: https://github.com/pingdotgg/t3code/issues/371
Code change request: Yes

```md
Fix Serving t3code over non-localhost http causes `Uncaught TypeError: crypto.randomUUID is not a function` due to `crypto.randomUUID()` assuming secure context.

Context:
- When the web app is opened over Tailscale on plain HTTP, it can fail because the client directly uses crypto.randomUUID() .
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Partial failures, timeouts, and recovery without UI desync
- Failure handling and user-visible recovery

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #370 - Terminal should use a nerd font

Issue: https://github.com/pingdotgg/t3code/issues/370
Code change request: Yes

```md
Handle Terminal should use a nerd font.

Context:
- For those of us that use customized shell prompts: please use a nerd font by default: Or at least give us a way to configure it.
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- Long-running commands and live output
- Selection, copy/paste, and focus behavior

Validate:
- Verify the terminal workflow works end to end in the reported environment.
- `bun lint` and `bun typecheck` pass.
```

## #367 - AppImage not working on Linux?

Issue: https://github.com/pingdotgg/t3code/issues/367
Code change request: Yes

```md
Fix AppImage not working on Linux?.

Context:
- AppImage not working on Linux?
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Linux packaging/runtime differences
- Platform-specific desktop APIs and fallbacks

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #366 - Add a feature to collapse sidebar

Issue: https://github.com/pingdotgg/t3code/issues/366
Code change request: Yes

```md
Add a feature to collapse sidebar.

Context:
- The sidebar should be collapsable.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Loading, empty, and error states
- Keyboard and pointer interactions across supported platforms

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #360 - Older Codex CLI can cause T3 Code session startup to fail with Timed out waiting for initialize.

Issue: https://github.com/pingdotgg/t3code/issues/360
Code change request: Yes

```md
Fix Older Codex CLI can cause T3 Code session startup to fail with Timed out waiting for initialize.

Context:
- T3 Code failed while starting a Codex session, showing the exact error: Timed out waiting for initialization.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #359 - fix(updater): "Check for Updates" appears to do nothing on macOS Apple Silicon

Issue: https://github.com/pingdotgg/t3code/issues/359
Code change request: Yes

```md
Fix(updater): "Check for Updates" appears to do nothing on macOS Apple Silicon.

Context:
- Looking good so far, watched the AICodeKing review and noticed that a new version with the fixes is already out!
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- macOS-specific desktop behavior and performance expectations
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #358 - Show an explicit empty state for projects with no threads in the sidebar

Issue: https://github.com/pingdotgg/t3code/issues/358
Code change request: Yes

```md
Show an explicit empty state for projects with no threads in the sidebar.

Context:
- Right now, when a project has no chat threads, expanding it in the sidebar only changes the chevron and shows a blank area.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Partial failures, timeouts, and recovery without UI desync
- Loading, empty, and error states

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #356 - Git fetch running constantly in the background is very annoying

Issue: https://github.com/pingdotgg/t3code/issues/356
Code change request: Yes

```md
Handle Git fetch running constantly in the background is very annoying.

Context:
- In my setup i don't have an ssh agent socket that just allows unrestricted git access to my userspace apps.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the git/worktree action path in the server and the matching client action so the requested workflow works end to end.
- Surface actionable progress and failures in the UI instead of silent errors or misleading states.
- Preserve current behavior for standard repositories and successful operations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Repositories with unusual remotes, branches, or local-only history

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #355 - Explore electrobun as a possible future desktop runtime

Issue: https://github.com/pingdotgg/t3code/issues/355
Code change request: Yes

```md
Add Explore electrobun as a possible future desktop runtime.

Context:
- Curious whether this is worth experimenting with: t3code already uses Bun for package management and parts of the desktop workflow, so I wanted to ask whether might be worth evaluating at some point as a future alternative to Electron.
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- Windows-specific input, path, and shell behavior
- Linux packaging/runtime differences

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #353 - Markdown file links are ambiguous and hide their destination

Issue: https://github.com/pingdotgg/t3code/issues/353
Code change request: Yes

```md
Handle Markdown file links are ambiguous and hide their destination.

Context:
- Markdown links currently render as generic blue links, so users can’t tell where a link goes without clicking it.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Loading, empty, and error states
- Keyboard and pointer interactions across supported platforms

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #352 - [Bug] Assistant message text overlaps tool call cards when scrolling chat history

Issue: https://github.com/pingdotgg/t3code/issues/352
Code change request: Yes

```md
Fix Assistant message text overlaps tool call cards when scrolling chat history.

Context:
- When scrolling back through a conversation that contains tool call cards, the assistant's response text rendered above or between the cards visually overlaps with the tool call card UI elements.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Windows-specific input, path, and shell behavior
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #350 - feat: Archive Projects

Issue: https://github.com/pingdotgg/t3code/issues/350
Code change request: Yes

```md
Add Archive Projects.

Context:
- Archive Projects Add project archiving to the sidebar so users can move projects out of the main list while keeping them accessible.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Session restore and app restart behavior
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #348 - Could not verify Codex authentication status. Timed out while running command.

Issue: https://github.com/pingdotgg/t3code/issues/348
Code change request: Yes

```md
Fix Could not verify Codex authentication status. Timed out while running command.

Context:
- T3Code works fine and I vibed a couple of features!
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Session startup, reconnect, and resume paths
- Missing configuration, stale state, and provider-specific failures

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #347 - Created a nix flake of t3code

Issue: https://github.com/pingdotgg/t3code/issues/347
Code change request: No

This reports external packaging work rather than requesting a repo change.

## #345 - MCP Server for external agent access to T3 Code reviews

Issue: https://github.com/pingdotgg/t3code/issues/345
Code change request: Yes

```md
Fix MCP Server for external agent access to T3 Code reviews.

Context:
- When a user reviews code produced by an agent in T3 Code, that feedback is stuck in the UI.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Partial failures, timeouts, and recovery without UI desync
- Failure handling and user-visible recovery

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #343 - Open button does not show Antigravity

Issue: https://github.com/pingdotgg/t3code/issues/343
Code change request: Yes

```md
Open button does not show Antigravity.

Context:
- In you video, I saw that your Open button in top right showed VSCode, I assume it's suppose ti find your IDE like Cursor, JetBrains etc.
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- macOS-specific desktop behavior and performance expectations
- Platform-specific desktop APIs and fallbacks

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #336 - Terminal line spacing breaks QR codes

Issue: https://github.com/pingdotgg/t3code/issues/336
Code change request: Yes

```md
Fix Terminal line spacing breaks QR codes.

Context:
- Motivation - Expo QR Code support Context - There's a bit of space between each Terminal line.
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- Long-running commands and live output
- Selection, copy/paste, and focus behavior

Validate:
- Verify the terminal workflow works end to end in the reported environment.
- `bun lint` and `bun typecheck` pass.
```

## #335 - codex cli on windows

Issue: https://github.com/pingdotgg/t3code/issues/335
Code change request: Yes

```md
Fix codex cli on windows.

Context:
- Codex provider status Codex CLI is installed but failed to run.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Windows-specific input, path, and shell behavior
- Non-standard repository states, missing remotes, or dirty worktrees

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #334 - file links create new file in vscode instead of going to the existing document.

Issue: https://github.com/pingdotgg/t3code/issues/334
Code change request: Yes

```md
Handle file links create new file in vscode instead of going to the existing document.

Context:
- windows desktop version.
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Windows-specific input, path, and shell behavior
- Platform-specific desktop APIs and fallbacks

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #333 - Linux context menus and dialogs should use a custom design

Issue: https://github.com/pingdotgg/t3code/issues/333
Code change request: Yes

```md
Handle Linux context menus and dialogs should use a custom design.

Context:
- Hi. Currently context menus in Linux look like this: And dialogs: This is the default Chromium context menu and GTK dialogs, and suffice to say, they look out of place.
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Linux packaging/runtime differences
- Platform-specific desktop APIs and fallbacks

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #332 - Accepting QnA tool options with Enter

Issue: https://github.com/pingdotgg/t3code/issues/332
Code change request: Yes

```md
Fix Accepting QnA tool options with Enter.

Context:
- Selecting an answer, and clicking Enter doesn't work.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Pending user-input states and transitions between planning and implementation
- Loading, empty, and error states

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #330 - Feat: Load existing Codex threads available via `codex resume`

Issue: https://github.com/pingdotgg/t3code/issues/330
Code change request: Yes

```md
Add Load existing Codex threads available via `codex resume`.

Context:
- It'd be nice to resume existing threads from pre-t3-code.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Session startup, reconnect, and resume paths
- Missing configuration, stale state, and provider-specific failures

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #328 - Putting Caddy in front of t3 code with https fails due to the web socket not being encrypted

Issue: https://github.com/pingdotgg/t3code/issues/328
Code change request: Yes

```md
Fix Putting Caddy in front of t3 code with https fails due to the web socket not being encrypted.

Context:
- NOTE: Most of this report is generated by gpt-5.4, but I reviewed it manually and it does refer to a genuine bug I experienced.
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #327 - Usability & Functional Issues

Issue: https://github.com/pingdotgg/t3code/issues/327
Code change request: Yes

```md
Fix Usability & Functional Issues.

Context:
- Here are some of the issues that affect T3 Code's functionality and usability: - When adding projects: - If you use a path with / : it adds it but doesn't recognise it & Codex initialisation produces an error.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Pending user-input states and transitions between planning and implementation

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #324 - Replace top app bar on Linux with integrated window controls

Issue: https://github.com/pingdotgg/t3code/issues/324
Code change request: Yes

```md
Add Replace top app bar on Linux with integrated window controls.

Context:
- This seems to be the way things work on macOS, but for now this uses system app bar on Linux (since I run wayland on GNOME, which has no SSD support, this is likely through libdecor ).
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- macOS-specific desktop behavior and performance expectations
- Linux packaging/runtime differences

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #322 - Resizing window horizontally causes view to scroll up

Issue: https://github.com/pingdotgg/t3code/issues/322
Code change request: Yes

```md
Handle Resizing window horizontally causes view to scroll up.

Context:
- Hi, resizing T3 Code's window horizontally seems to cause the chat view to scroll all the way up.
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Linux packaging/runtime differences
- Platform-specific desktop APIs and fallbacks

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #321 - [linux; wayland] Spurious white line on left side of window

Issue: https://github.com/pingdotgg/t3code/issues/321
Code change request: Yes

```md
Add Spurious white line on left side of window.

Context:
- T3 Chat seems to show a white line on the left side of the window in windowed mode (not maximized): This happens on Linux, under Wayland.
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Linux packaging/runtime differences
- Platform-specific desktop APIs and fallbacks

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #319 - Dark Theme Toggle Missing

Issue: https://github.com/pingdotgg/t3code/issues/319
Code change request: Yes

```md
Handle Dark Theme Toggle Missing.

Context:
- On windows the toggle for which theme to use seems to be missing (need dark mode).
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Windows-specific input, path, and shell behavior
- Platform-specific desktop APIs and fallbacks

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #318 - Diff panel can get stuck on 'Loading checkpoint diff...' when checkpoint is not yet available

Issue: https://github.com/pingdotgg/t3code/issues/318
Code change request: Yes

```md
Fix Diff panel can get stuck on 'Loading checkpoint diff...' when checkpoint is not yet available.

Context:
- The diff panel can remain on Loading checkpoint diff...
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Partial failures, timeouts, and recovery without UI desync
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #317 - macOS: Electron app cannot access AZURE_API_KEY from ~/.zshrc when using env_key in Codex CLI config

Issue: https://github.com/pingdotgg/t3code/issues/317
Code change request: Yes

```md
Fix macOS: Electron app cannot access AZURE_API_KEY from ~/.zshrc when using env_key in Codex CLI config.

Context:
- Bug: Electron app cannot read AZURE API KEY from shell environment when using Codex CLI config Description When using Codex CLI through the desktop app, the CLI configuration references an API key via an environment vari...
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- macOS-specific desktop behavior and performance expectations
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #316 - Security: WebSocket methods accept unconstrained client-supplied `cwd`, enabling arbitrary filesystem access

Issue: https://github.com/pingdotgg/t3code/issues/316
Code change request: Yes

```md
Fix Security: WebSocket methods accept unconstrained client-supplied `cwd`, enabling arbitrary filesystem access.

Context:
- All WebSocket methods that accept a cwd field pass it directly to service-layer operations without validating it against registered project workspace roots.
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- Windows-specific input, path, and shell behavior
- macOS-specific desktop behavior and performance expectations

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #315 - Introduce an ACP adapter layer for providers

Issue: https://github.com/pingdotgg/t3code/issues/315
Code change request: Yes

```md
Add Introduce an ACP adapter layer for providers.

Context:
- Create an ACP adapter layer internally so switching providers is easier for both maintainers and users.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Session startup, reconnect, and resume paths
- Missing configuration, stale state, and provider-specific failures

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #314 - resizing is not consistent

Issue: https://github.com/pingdotgg/t3code/issues/314
Code change request: Yes

```md
Handle resizing is not consistent.

Context:
- resizing is not consistent
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Failure handling and user-visible recovery
- State preservation across reloads or retries

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #313 - Transient reconnect leaves thread stuck in error and can orphan pending user turns

Issue: https://github.com/pingdotgg/t3code/issues/313
Code change request: Yes

```md
Fix Transient reconnect leaves thread stuck in error and can orphan pending user turns.

Context:
- On Linux/Wayland, I hit a case where a transient Reconnecting...
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Linux packaging/runtime differences
- Responsive layouts, window resizing, and collapsed sidebar states

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #311 - [FR] Flathub publishing

Issue: https://github.com/pingdotgg/t3code/issues/311
Code change request: Yes

```md
Handle Flathub publishing.

Context:
- This app would be great if it is on the app store for Linux.
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Linux packaging/runtime differences
- Platform-specific desktop APIs and fallbacks

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #310 - AppImage doesn't start in Ubuntu

Issue: https://github.com/pingdotgg/t3code/issues/310
Code change request: Yes

```md
Fix AppImage doesn't start in Ubuntu.

Context:
- When I try to start the AppImage file on Ubuntu Ubuntu 25.10 (x86 64), it throws a error: username@machine: /Documents/apps$ ./t3c.AppImage [9095:0307/100027.792194:FATAL:sandbox/linux/suid/client/setuid sandbox host.cc:...
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- macOS-specific desktop behavior and performance expectations
- Linux packaging/runtime differences

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #309 - macOS desktop app fails to detect Codex when login shell is Nushell

Issue: https://github.com/pingdotgg/t3code/issues/309
Code change request: Yes

```md
Add macOS desktop app fails to detect Codex when login shell is Nushell.

Context:
- On macOS, the packaged desktop app fails to detect codex when the account login shell is nushell and the app is launched from Finder.
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- macOS-specific desktop behavior and performance expectations
- Non-standard repository states, missing remotes, or dirty worktrees

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #308 - Getting "{"type":"error","status":400,"error":{"type":"invalid_request_error","message":"Unsupported service_tier: flex"}}" when sending a message.

Issue: https://github.com/pingdotgg/t3code/issues/308
Code change request: Yes

```md
Fix Getting "{"type":"error","status":400,"error":{"type":"invalid_request_error","message":"Unsupported service_tier: flex"}}" when sending a message.

Context:
- Im getting this error when trying to send a message, 0.0.3
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Partial failures, timeouts, and recovery without UI desync
- Failure handling and user-visible recovery

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #307 - App crashes with "resolveLanguage: env not found in bundled or custom languages" while setting up Supabase.

Issue: https://github.com/pingdotgg/t3code/issues/307
Code change request: Yes

```md
Fix App crashes with "resolveLanguage: env not found in bundled or custom languages" while setting up Supabase.

Context:
- Hey, found a crash bug in T3 Code Alpha that completely breaks the app.
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Windows-specific input, path, and shell behavior
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #304 - CodeLayer navigation inspo

Issue: https://github.com/pingdotgg/t3code/issues/304
Code change request: Yes

```md
Fix CodeLayer navigation inspo.

Context:
- Hey guys, I saw that you're already at 100 issues after the video...
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #301 - Homebrew Codex Unrecognized

Issue: https://github.com/pingdotgg/t3code/issues/301
Code change request: Yes

```md
Fix Homebrew Codex Unrecognized.

Context:
- Codex unrecognized when Homebrew install, even when path explicitly added in settings.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Partial failures, timeouts, and recovery without UI desync
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #299 - macOS desktop app: Diff crashes on open

Issue: https://github.com/pingdotgg/t3code/issues/299
Code change request: Yes

```md
Fix macOS desktop app: Diff crashes on open.

Context:
- Original prompt I don't know if there is some share functionality or , if there is one I would share it here Also found following error crash in the console (but not sure if it's related, looks like it is) nevermind, it...
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- macOS-specific desktop behavior and performance expectations
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #298 - [Feature Request] Add .deb package for Debian/Ubuntu users

Issue: https://github.com/pingdotgg/t3code/issues/298
Code change request: Yes

```md
Add .deb package for Debian/Ubuntu users.

Context:
- AppImage installation doesn't add executable to PATH on Ubuntu
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Linux packaging/runtime differences
- Platform-specific desktop APIs and fallbacks

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #297 - The app does not load a local MCP server defined in `.codex/config.toml`.

Issue: https://github.com/pingdotgg/t3code/issues/297
Code change request: Yes

```md
Fix The app does not load a local MCP server defined in `.codex/config.toml`.

Context:
- I am trying to configure a local MCP server in .codex/config.toml using the following example: The server definition appears to be picked up, but the actual startup fails because the working directory is different from w...
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Session startup, reconnect, and resume paths
- Missing configuration, stale state, and provider-specific failures

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #296 - Bug. using the GitHub integration buttonI command failed: error: unexpected argument '--ephemeral' found

Issue: https://github.com/pingdotgg/t3code/issues/296
Code change request: Yes

```md
Fix Bug. using the GitHub integration buttonI command failed: error: unexpected argument '--ephemeral' found.

Context:
- While attempting to try this, everything worked perfectly until I went to commit it to the pull request.Here is the full error text as shown in the image, preserving the visible detail: Action failed Error: Text generati...
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #293 - Claude Code: Allow different models

Issue: https://github.com/pingdotgg/t3code/issues/293
Code change request: Yes

```md
Allow Claude Code: Allow different models.

Context:
- When you add Claude Code support, can you please allow models other than Anthropic's?
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Session startup, reconnect, and resume paths
- Missing configuration, stale state, and provider-specific failures

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #292 - Support more integrated terminal shells

Issue: https://github.com/pingdotgg/t3code/issues/292
Code change request: Yes

```md
Support more integrated terminal shells.

Context:
- Currently, on the Windows app, the integrated terminal is PowerShell.
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- Windows-specific input, path, and shell behavior
- Non-standard repository states, missing remotes, or dirty worktrees

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #291 - Composer @ completion started in whitespace can dismiss early and insert with wrong spacing

Issue: https://github.com/pingdotgg/t3code/issues/291
Code change request: Yes

```md
Fix Composer @ completion started in whitespace can dismiss early and insert with wrong spacing.

Context:
- Composer @ completion can misbehave when it is started inside existing whitespace.
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Pending user-input states and transitions between planning and implementation
- Platform-specific desktop APIs and fallbacks

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #290 - Add temporary anonymous projects

Issue: https://github.com/pingdotgg/t3code/issues/290
Code change request: Yes

```md
Add temporary anonymous projects.

Context:
- Sometimes I get an idea, it can be creating a small script or something similar, that is not a full project.
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Failure handling and user-visible recovery
- State preservation across reloads or retries

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #289 - Add folders of projects

Issue: https://github.com/pingdotgg/t3code/issues/289
Code change request: Yes

```md
Add folders of projects.

Context:
- I have lot's of projects that have some very clear groupings, such that I often work on a set of related projects.
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Failure handling and user-visible recovery
- State preservation across reloads or retries

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #288 - Github copilot login

Issue: https://github.com/pingdotgg/t3code/issues/288
Code change request: Yes

```md
Handle Github copilot login.

Context:
- For students, the copilot education plan is often the only access we have to these models.
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Failure handling and user-visible recovery

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #287 - feat: Collapsible thinking output

Issue: https://github.com/pingdotgg/t3code/issues/287
Code change request: Yes

```md
Add Collapsible thinking output.

Context:
- The thinking section is long, have to scroll down to get to the response quite a bit.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Loading, empty, and error states
- Keyboard and pointer interactions across supported platforms

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #286 - Missing "Open" options

Issue: https://github.com/pingdotgg/t3code/issues/286
Code change request: Yes

```md
Handle Missing "Open" options.

Context:
- Would be good to list in Open menu: - Terminal - Windsurf (it's also quite popular)
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- Long-running commands and live output
- Selection, copy/paste, and focus behavior

Validate:
- Verify the terminal workflow works end to end in the reported environment.
- `bun lint` and `bun typecheck` pass.
```

## #285 - Right-click menu anywhere instantly selects first option

Issue: https://github.com/pingdotgg/t3code/issues/285
Code change request: Yes

```md
Handle Right-click menu anywhere instantly selects first option.

Context:
- When I right-click to open the context menu, the first option is triggered immediately without waiting me to choose.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Loading, empty, and error states
- Keyboard and pointer interactions across supported platforms

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #284 - Reset codex overrides button pushed out of card with long Codex binary path

Issue: https://github.com/pingdotgg/t3code/issues/284
Code change request: Yes

```md
Fix Reset codex overrides button pushed out of card with long Codex binary path.

Context:
- When the Codex binary path is long, the layout of the Codex App Server settings breaks.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Session startup, reconnect, and resume paths
- Missing configuration, stale state, and provider-specific failures

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #283 - Prevent fallback context menu dismiss clicks from triggering underlying UI

Issue: https://github.com/pingdotgg/t3code/issues/283
Code change request: Yes

```md
Fix Prevent fallback context menu dismiss clicks from triggering underlying UI.

Context:
- This issue appears to have been addressed in PR 280 Please verify the current behavior against that PR and fix anything still remaining or regressed.
- This affects git/worktree orchestration in apps/server plus the desktop/web actions that trigger it.

Implement:
- Update the git/worktree action path in the server and the matching client action so the requested workflow works end to end.
- Surface actionable progress and failures in the UI instead of silent errors or misleading states.
- Preserve current behavior for standard repositories and successful operations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #281 - "Ctrl++" does not zoom in on Linux/Wayland, while "Ctrl+-" works

Issue: https://github.com/pingdotgg/t3code/issues/281
Code change request: Yes

```md
Fix "Ctrl++" does not zoom in on Linux/Wayland, while "Ctrl+-" works.

Context:
- On Linux/Wayland, Ctrl+- zooms out in the T3 Code desktop app, but Ctrl++ does not zoom back in.
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- Linux packaging/runtime differences
- Long-running commands and live output

Validate:
- Verify the terminal workflow works end to end in the reported environment.
- `bun lint` and `bun typecheck` pass.
```

## #277 - Per-project MCP

Issue: https://github.com/pingdotgg/t3code/issues/277
Code change request: Yes

```md
Handle Per-project MCP.

Context:
- I have a lot of projects that I'm working on in parallel, which is the point of me using Codex and T3 Code.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Session startup, reconnect, and resume paths
- Missing configuration, stale state, and provider-specific failures

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #274 - Not able to commit changes when using GPG-autosigned commits

Issue: https://github.com/pingdotgg/t3code/issues/274
Code change request: Yes

```md
Fix Not able to commit changes when using GPG-autosigned commits.

Context:
- To be fair, it's entirely possible I'm just a noob or an idiot here.
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #273 - Cannot dismiss the plan overlay after agent calls the planning tool

Issue: https://github.com/pingdotgg/t3code/issues/273
Code change request: Yes

```md
Fix Cannot dismiss the plan overlay after agent calls the planning tool.

Context:
- When an agent invokes the planning tool , T3 Code displays a plan overlay showing the generated plan and its steps (e.g., In progress , Pending , etc.).
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- macOS-specific desktop behavior and performance expectations
- Loading, empty, and error states

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #272 - Use repository-derived worktree branch names instead of the hardcoded t3code prefix

Issue: https://github.com/pingdotgg/t3code/issues/272
Code change request: Yes

```md
Add Use repository-derived worktree branch names instead of the hardcoded t3code prefix.

Context:
- New worktree branches are currently created under a hardcoded t3code/...
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #271 - stack in questions step

Issue: https://github.com/pingdotgg/t3code/issues/271
Code change request: Yes

```md
Fix stack in questions step.

Context:
- You can't get out of questions step when you restart the app while in question.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Session restore and app restart behavior
- Pending user-input states and transitions between planning and implementation

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #270 - Stuck on "Picking folder..." and "Adding..." when selecting project

Issue: https://github.com/pingdotgg/t3code/issues/270
Code change request: Yes

```md
Fix Stuck on "Picking folder..." and "Adding..." when selecting project.

Context:
- I have codex cli installed and authed.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Partial failures, timeouts, and recovery without UI desync
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #269 - Codex CLI is installed but failed to run. 'codex' is not recognized as an internal or external command, operable program or batch file.

Issue: https://github.com/pingdotgg/t3code/issues/269
Code change request: Yes

```md
Fix Codex CLI is installed but failed to run. 'codex' is not recognized as an internal or external command, operable program or batch file.

Context:
- Im a total noob and i have no idea how to fix this
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Partial failures, timeouts, and recovery without UI desync
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #265 - Windows groups the taskbar apps(dev/live)

Issue: https://github.com/pingdotgg/t3code/issues/265
Code change request: Yes

```md
Handle Windows groups the taskbar apps(dev/live).

Context:
- On Windows, the dev build gets grouped with the installed app under one taskbar icon.
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Windows-specific input, path, and shell behavior
- Platform-specific desktop APIs and fallbacks

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #264 - Pull requests via t3code should use a pull request template

Issue: https://github.com/pingdotgg/t3code/issues/264
Code change request: Yes

```md
Fix Pull requests via t3code should use a pull request template.

Context:
- Currently, there is a single button that commits and then creates a pull request.
- This affects git/worktree orchestration in apps/server plus the desktop/web actions that trigger it.

Implement:
- Update the git/worktree action path in the server and the matching client action so the requested workflow works end to end.
- Surface actionable progress and failures in the UI instead of silent errors or misleading states.
- Preserve current behavior for standard repositories and successful operations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #263 - ~ expansion for project path not working

Issue: https://github.com/pingdotgg/t3code/issues/263
Code change request: Yes

```md
Fix ~ expansion for project path not working.

Context:
- At first I thought this was about the codex binary not being found, but turns out it was the project path.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #261 - [Mac/ARM] Keybinds.json erroring out when trying to open

Issue: https://github.com/pingdotgg/t3code/issues/261
Code change request: Yes

```md
Fix Keybinds.json erroring out when trying to open.

Context:
- Trying to open keybinds.json from T3Code results in: Platform: Mac (ARM)
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- macOS-specific desktop behavior and performance expectations
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #258 - Add proxy support

Issue: https://github.com/pingdotgg/t3code/issues/258
Code change request: Yes

```md
Add proxy support.

Context:
- I want to be able to route my traffic through a proxy for a mitm requirement by my organization.
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Failure handling and user-visible recovery
- State preservation across reloads or retries

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #257 - web app ++

Issue: https://github.com/pingdotgg/t3code/issues/257
Code change request: Yes

```md
Handle web app ++.

Context:
- I love that you have an web app but would love it if it could be more better i guess.
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Failure handling and user-visible recovery

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #255 - Plan takes over significant vertical space with no option to hide

Issue: https://github.com/pingdotgg/t3code/issues/255
Code change request: Yes

```md
Add Plan takes over significant vertical space with no option to hide.

Context:
- I would like to be able to collapse it.
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Failure handling and user-visible recovery
- State preservation across reloads or retries

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #254 - General UI Improvements

Issue: https://github.com/pingdotgg/t3code/issues/254
Code change request: Yes

```md
Add General UI Improvements.

Context:
- 1. Add a high contrast mode 2.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Loading, empty, and error states
- Keyboard and pointer interactions across supported platforms

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #253 - Plan and Chat mode have the same icon

Issue: https://github.com/pingdotgg/t3code/issues/253
Code change request: Yes

```md
Handle Plan and Chat mode have the same icon.

Context:
- It would be easier to differentiate if they are different.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Loading, empty, and error states
- Keyboard and pointer interactions across supported platforms

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #247 - Fuzzy File Search

Issue: https://github.com/pingdotgg/t3code/issues/247
Code change request: Yes

```md
Add Fuzzy File Search.

Context:
- Add fuzzy file search to the file search
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Failure handling and user-visible recovery
- State preservation across reloads or retries

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #246 - Codex binary not found for fnm installs

Issue: https://github.com/pingdotgg/t3code/issues/246
Code change request: Yes

```md
Fix Codex binary not found for fnm installs.

Context:
- I have codex installed via npm & npm is installed with .
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Session startup, reconnect, and resume paths
- Missing configuration, stale state, and provider-specific failures

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #245 - [UX Issue] Diff panel toggle changes place on use

Issue: https://github.com/pingdotgg/t3code/issues/245
Code change request: Yes

```md
Fix Diff panel toggle changes place on use.

Context:
- The diff panel toggle button changes place on click which is a little annoying.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Partial failures, timeouts, and recovery without UI desync
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #244 - Non-existent dirs can be added as projects

Issue: https://github.com/pingdotgg/t3code/issues/244
Code change request: Yes

```md
Fix Non-existent dirs can be added as projects.

Context:
- Using it in the browser, from WSL.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Windows-specific input, path, and shell behavior
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #240 - Settings are not discoverable on Windows

Issue: https://github.com/pingdotgg/t3code/issues/240
Code change request: Yes

```md
Handle Settings are not discoverable on Windows.

Context:
- Most windows users don't use the top bar, unlike MacOS users.
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Windows-specific input, path, and shell behavior
- macOS-specific desktop behavior and performance expectations

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #236 - Checkpoints using git in non-git repos

Issue: https://github.com/pingdotgg/t3code/issues/236
Code change request: Yes

```md
Fix Checkpoints using git in non-git repos.

Context:
- If you send a message in a project which is not a git repo, it still tries to create a checkpoint using git, which causes the following error:
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #234 - [linux] can't find codex if installed via homebrew

Issue: https://github.com/pingdotgg/t3code/issues/234
Code change request: Yes

```md
Fix can't find codex if installed via homebrew.

Context:
- Homebrew installs codex to /home/linuxbrew/.linuxbrew/bin but the program can't find it.
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- Linux packaging/runtime differences
- Long-running commands and live output

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #233 - Unmatched Contrast Levels

Issue: https://github.com/pingdotgg/t3code/issues/233
Code change request: Yes

```md
Handle Unmatched Contrast Levels.

Context:
- Can we fix the contrast slightly on tool calls texts as well as items in chat area.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Loading, empty, and error states
- Keyboard and pointer interactions across supported platforms

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #231 - feat: add Steer and Queue follow-up modes alongside Chat/Plan

Issue: https://github.com/pingdotgg/t3code/issues/231
Code change request: Yes

```md
Add Steer and Queue follow-up modes alongside Chat/Plan.

Context:
- Right now T3 Code appears to only model default and plan interaction modes.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Pending user-input states and transitions between planning and implementation
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #230 - feat: move Settings to the sidebar footer and add settings-specific tabs with back navigation

Issue: https://github.com/pingdotgg/t3code/issues/230
Code change request: Yes

```md
Add move Settings to the sidebar footer and add settings-specific tabs with back navigation.

Context:
- The current settings page works, but the information architecture may not scale well once more settings categories are added.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Session restore and app restart behavior
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #229 - feat: support quick switching between multiple Codex accounts / auth profiles

Issue: https://github.com/pingdotgg/t3code/issues/229
Code change request: Yes

```md
Support quick switching between multiple Codex accounts / auth profiles.

Context:
- I’d like to request first-class support for switching between multiple Codex accounts / auth profiles from inside T3 Code.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Session restore and app restart behavior
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #227 - feat: make existing remote access a first-class flow (README, desktop entry point, tunnel guidance)

Issue: https://github.com/pingdotgg/t3code/issues/227
Code change request: Yes

```md
Make existing remote access a first-class flow (README, desktop entry point, tunnel guidance).

Context:
- T3 Code already has remote access support through server mode and REMOTE.md , but it still feels like a manual/power-user flow rather than a first-class product feature.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- macOS-specific desktop behavior and performance expectations
- Non-standard repository states, missing remotes, or dirty worktrees

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #228 - feat: add usage / quota visibility for Codex sessions and accounts

Issue: https://github.com/pingdotgg/t3code/issues/228
Code change request: Yes

```md
Add usage / quota visibility for Codex sessions and accounts.

Context:
- I’d like T3 Code to surface usage information so users can better understand cost/rate-limit consumption while working.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Session startup, reconnect, and resume paths
- Missing configuration, stale state, and provider-specific failures

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #226 - feat; check for deps during onboarding (codex and gh cli)  crossplatform

Issue: https://github.com/pingdotgg/t3code/issues/226
Code change request: Yes

```md
Handle feat; check for deps during onboarding (codex and gh cli)  crossplatform.

Context:
- feat; check for deps during onboarding (codex and gh cli)  crossplatform
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Session startup, reconnect, and resume paths
- Missing configuration, stale state, and provider-specific failures

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #220 - bug: ENAMETOOLONG when spawning Codex adapter via npx/bunx

Issue: https://github.com/pingdotgg/t3code/issues/220
Code change request: Yes

```md
Fix ENAMETOOLONG when spawning Codex adapter via npx/bunx.

Context:
- t3@alpha package fails to start the Codex adapter when executed via a package runner (npx or bunx), while the same codebase works perfectly when running the cloned repo locally via bun or node macOS 26.2 [WARN]: provider...
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- macOS-specific desktop behavior and performance expectations
- Non-standard repository states, missing remotes, or dirty worktrees

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #219 - Auto-detect platform for marketing website download button

Issue: https://github.com/pingdotgg/t3code/issues/219
Code change request: Yes

```md
Handle Auto-detect platform for marketing website download button.

Context:
- The shouldn't hard-code a link to the GitHub releases page.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Loading, empty, and error states

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #217 - [bug] Unable to load diffs in diff panel

Issue: https://github.com/pingdotgg/t3code/issues/217
Code change request: Yes

```md
Fix Unable to load diffs in diff panel.

Context:
- This might have something to do with the missing step 2 tab.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Linux packaging/runtime differences
- Pending user-input states and transitions between planning and implementation

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #216 - feat: way to view output from tool calls / commands

Issue: https://github.com/pingdotgg/t3code/issues/216
Code change request: Yes

```md
Add way to view output from tool calls / commands.

Context:
- way to view output from tool calls / commands
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Failure handling and user-visible recovery
- State preservation across reloads or retries

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #213 - Add sidebar resizing

Issue: https://github.com/pingdotgg/t3code/issues/213
Code change request: Yes

```md
Add sidebar resizing.

Context:
- Titles are easily truncated.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Responsive layouts, window resizing, and collapsed sidebar states
- Loading, empty, and error states

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #211 - Codex cli version should be logged and reported

Issue: https://github.com/pingdotgg/t3code/issues/211
Code change request: Yes

```md
Fix Codex cli version should be logged and reported.

Context:
- We should track the codex cli version in posthog.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #209 - Open keybindings.json is hardcoded to Cursor instead of the default editor

Issue: https://github.com/pingdotgg/t3code/issues/209
Code change request: Yes

```md
Open keybindings.json is hardcoded to Cursor instead of the default editor.

Context:
- In Settings on Windows 11, clicking "Open keybindings.json" tries to open Cursor, as shown in the below screenshot.
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Windows-specific input, path, and shell behavior
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #207 - request: import or recreate sessions from Codex

Issue: https://github.com/pingdotgg/t3code/issues/207
Code change request: Yes

```md
Allow request: import or recreate sessions from Codex.

Context:
- They are here /.codex/sessions, waiting to be discovered.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- macOS-specific desktop behavior and performance expectations
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #206 - Allowed Node versions can crash because node:sqlite statement.columns() is missing

Issue: https://github.com/pingdotgg/t3code/issues/206
Code change request: Yes

```md
Fix Allowed Node versions can crash because node:sqlite statement.columns() is missing.

Context:
- t3@alpha can crash during startup/install on Node versions that currently satisfy the package's engines.node range.
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Partial failures, timeouts, and recovery without UI desync
- Platform-specific desktop APIs and fallbacks

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #205 - Use different border colors for "Plan" and "Chat" modes so its easier to differentiate

Issue: https://github.com/pingdotgg/t3code/issues/205
Code change request: Yes

```md
Fix Use different border colors for "Plan" and "Chat" modes so its easier to differentiate.

Context:
- I used amber-500 but whatever color is fine ig.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Pending user-input states and transitions between planning and implementation
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #204 - Bug: bunx t3@alpha fails on Linux rebuilding node-pty

Issue: https://github.com/pingdotgg/t3code/issues/204
Code change request: Yes

```md
Fix bunx t3@alpha fails on Linux rebuilding node-pty.

Context:
- Running bunx t3@alpha on Linux fails during dependency installation because node-pty tries to rebuild from source and requires node-gyp , even though the same package works with npx t3@alpha .
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- macOS-specific desktop behavior and performance expectations
- Linux packaging/runtime differences

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #203 - Agent Client Protocol Support

Issue: https://github.com/pingdotgg/t3code/issues/203
Code change request: Yes

```md
Add Agent Client Protocol Support.

Context:
- ACP support would let you get almost every CLIs support.
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Failure handling and user-visible recovery
- State preservation across reloads or retries

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #201 - Homebrew install when?

Issue: https://github.com/pingdotgg/t3code/issues/201
Code change request: Yes

```md
Handle Homebrew install when?.

Context:
- Would love it
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Platform-specific desktop APIs and fallbacks
- Missing external tools or unsupported local environments

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #199 - UX: App should request folder access upfront instead of showing auth error before starting chat

Issue: https://github.com/pingdotgg/t3code/issues/199
Code change request: Yes

```md
Fix UX: App should request folder access upfront instead of showing auth error before starting chat.

Context:
- Even with an active Codex subscription, the app failed to start on the first attempt and displayed a confusing error: The chat session only began working after the user manually provided/allowed folder access.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Partial failures, timeouts, and recovery without UI desync
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #200 - Misspelling in the README.md

Issue: https://github.com/pingdotgg/t3code/issues/200
Code change request: Yes

```md
Handle Misspelling in the README.md.

Context:
- Use can also just install the desktop app (it's cooler).
- This affects desktop shell integration in apps/desktop and any matching UI affordances in apps/web.

Implement:
- Update the desktop integration path and any related UI affordances to support the requested behavior on the affected platform.
- Keep existing platform-specific behavior unchanged where the issue does not apply.
- Add or update coverage around the desktop command or integration boundary when feasible.

Handle:
- Platform-specific desktop APIs and fallbacks
- Missing external tools or unsupported local environments

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #197 - Codex provider status following installation can't be dismissed without closing and re-opening app

Issue: https://github.com/pingdotgg/t3code/issues/197
Code change request: Yes

```md
Fix Codex provider status following installation can't be dismissed without closing and re-opening app.

Context:
- I use the Codex Native App, and when installing T3code, I did not have the CLI installed.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Partial failures, timeouts, and recovery without UI desync
- Session startup, reconnect, and resume paths

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #194 - request: Nushell Support

Issue: https://github.com/pingdotgg/t3code/issues/194
Code change request: Yes

```md
Fix request: Nushell Support.

Context:
- Requesting support for nushell and other shell environments.
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Long-running commands and live output

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #193 - request: Support GitHub Copilot CLI

Issue: https://github.com/pingdotgg/t3code/issues/193
Code change request: Yes

```md
Allow request: Support GitHub Copilot CLI.

Context:
- Please consider adding GitHub Copilot Agent harness integration and allow folks to leverage their Copilot subscriptions and quotas.
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Session startup, reconnect, and resume paths

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #192 - WSL support

Issue: https://github.com/pingdotgg/t3code/issues/192
Code change request: Yes

```md
Add WSL support.

Context:
- When running on windows it would be nice to have the app use codex through WSL since codex (and other harnesses) do seem to run better in linux , or atleast an option for it to enable and disable it (so either using it t...
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- Windows-specific input, path, and shell behavior
- Linux packaging/runtime differences

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #191 - GitLab support for Commit+PR button

Issue: https://github.com/pingdotgg/t3code/issues/191
Code change request: Yes

```md
Add GitLab support for Commit+PR button.

Context:
- GitLab support for Commit+PR button
- This affects git/worktree orchestration in apps/server plus the desktop/web actions that trigger it.

Implement:
- Update the git/worktree action path in the server and the matching client action so the requested workflow works end to end.
- Surface actionable progress and failures in the UI instead of silent errors or misleading states.
- Preserve current behavior for standard repositories and successful operations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Repositories with unusual remotes, branches, or local-only history

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #189 - Linux on ARM

Issue: https://github.com/pingdotgg/t3code/issues/189
Code change request: Yes

```md
Handle Linux on ARM.

Context:
- Greetings, can the next release include a Linux aarch64/arm64 build so that one can use the app outside of the browser on Linux on ARM machines?
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- macOS-specific desktop behavior and performance expectations
- Linux packaging/runtime differences

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #79 - feat: Comment on diff to give agent context

Issue: https://github.com/pingdotgg/t3code/issues/79
Code change request: Yes

```md
Add Comment on diff to give agent context.

Context:
- Comment on diff to give agent context
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Failure handling and user-visible recovery
- State preservation across reloads or retries

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #37 - feat: Embedded browser?

Issue: https://github.com/pingdotgg/t3code/issues/37
Code change request: Yes

```md
Add Embedded browser?.

Context:
- Cursor's built-in browser is quite good.
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Failure handling and user-visible recovery
- State preservation across reloads or retries

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #35 - feat: Diff view

Issue: https://github.com/pingdotgg/t3code/issues/35
Code change request: Yes

```md
Add Diff view.

Context:
- using (performant option powered by shiki) also Being able to comment on lines in the diff view and having that be included in the next message as context is a nice UX feature Codex has
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Session startup, reconnect, and resume paths
- Missing configuration, stale state, and provider-specific failures

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

## #30 - bug: Chat auto-scrolls even when user has manually scrolled up

Issue: https://github.com/pingdotgg/t3code/issues/30
Code change request: Yes

```md
Fix Chat auto-scrolls even when user has manually scrolled up.

Context:
- Chat auto-scrolls even when user has manually scrolled up
- This affects UI state and rendering in apps/web, with desktop behavior updated where the issue is platform-specific.

Implement:
- Update the affected UI state and rendering path to resolve the reported behavior without introducing new layout regressions.
- Keep existing interaction patterns unchanged outside the affected flow.
- Add or update component, responsive, or end-to-end coverage where this area is already exercised.

Handle:
- Loading, empty, and error states
- Keyboard and pointer interactions across supported platforms

Validate:
- Verify the affected UI behaves correctly at the reported size/state without regressing adjacent controls.
- `bun lint` and `bun typecheck` pass.
```

## #29 - feat: Tidy up git integration

Issue: https://github.com/pingdotgg/t3code/issues/29
Code change request: Yes

```md
Add Tidy up git integration.

Context:
- Currently, when in "Local" mode, the git branch will be the one you're checked out on, not the branch that the thread used without any indication.
- This affects git/worktree orchestration in apps/server plus the desktop/web actions that trigger it.

Implement:
- Update the git/worktree action path in the server and the matching client action so the requested workflow works end to end.
- Surface actionable progress and failures in the UI instead of silent errors or misleading states.
- Preserve current behavior for standard repositories and successful operations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the reported repository workflow succeeds end to end and errors stay actionable when it cannot proceed.
- `bun lint` and `bun typecheck` pass.
```

## #26 - feat: Give Agents access to Terminal output

Issue: https://github.com/pingdotgg/t3code/issues/26
Code change request: Yes

```md
Add Give Agents access to Terminal output.

Context:
- either automatic or like cursor where you highlight certain lines and can add those as context
- This affects desktop terminal integration in apps/desktop and the terminal UI in apps/web.

Implement:
- Update the terminal integration path so input, selection, and rendering behave correctly across supported platforms.
- Preserve the current agent execution flow while improving terminal usability and visibility.
- Add or update targeted coverage for the terminal state or interaction path when feasible.

Handle:
- Long-running commands and live output
- Selection, copy/paste, and focus behavior

Validate:
- Verify the terminal workflow works end to end in the reported environment.
- `bun lint` and `bun typecheck` pass.
```

## #6 - feat: Cloud Agents

Issue: https://github.com/pingdotgg/t3code/issues/6
Code change request: Yes

```md
Add Cloud Agents.

Context:
- With seamless handoff
- This affects the affected server/web flow in the relevant module.

Implement:
- Update the affected flow with the smallest maintainable change that resolves the reported behavior.
- Keep existing behavior unchanged outside the target path.
- Add or update coverage where the affected area already has tests.

Handle:
- Failure handling and user-visible recovery
- State preservation across reloads or retries

Validate:
- Verify the reported workflow works as described without changing unrelated behavior.
- `bun lint` and `bun typecheck` pass.
```

## #5 - feat: Github Integration

Issue: https://github.com/pingdotgg/t3code/issues/5
Code change request: Yes

```md
Add Github Integration.

Context:
- Main goal: Go from idea to PR blazingly fast - [x] Core features (commit, push, create/open PR) - [ ] commit status, mergability checks etc Pros and Cons with alternatives Conductor: + ✅ One click action for a lot of stu...
- This affects provider/session orchestration in apps/server and the client flows that surface provider state.

Implement:
- Update the provider/session orchestration path so the reported workflow succeeds reliably.
- Propagate accurate runtime state to the client and replace generic failures with actionable error handling.
- Preserve existing provider behavior for healthy sessions and supported configurations.

Handle:
- Non-standard repository states, missing remotes, or dirty worktrees
- Partial failures, timeouts, and recovery without UI desync

Validate:
- Verify the session/provider flow succeeds in the reported scenario and the UI stays in sync with runtime state.
- `bun lint` and `bun typecheck` pass.
```

