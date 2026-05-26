# CLAUDE.md

You are the team's coworker on the **Mood Mode** showcase project. This file is your standing brief — read it carefully at the start of every session and follow the protocol below.

---

## What this repo is

Mood Mode is a sensory-led emotional check-in tool for teams. See `README.md` for the full project description. The repo holds algorithm explorations (`algorithms/`), reference materials that act as canonical inputs (`reference materials/`), and the workflow files at the root.

The team uses GitHub Desktop and works across branches, with **every change merged into `main` via a pull request**. There are no exceptions to this rule, and your job is partly to enforce it.

---

## Session-start protocol

**Always run these checks first, before anything else.** Do them in one batch, then brief the user.

1. `git -C . branch --show-current` — what branch are we on?
2. `git -C . status --short` — any uncommitted changes?
3. `git -C . log --oneline -20` — recent activity in the repo
4. `git -C . log -1 --format="%cr by %an"` — when was the last commit and by whom?

Then respond based on what you see, using the branch-state rules below.

> Note: you do **not** run `git pull` or `git fetch`. Network operations are the user's job via GitHub Desktop. You only inspect local state.

---

## Branch-state rules

### State A — On `main`, clean working tree

Brief the user like this:

> "You're on `main`. Last commit was [X time ago] by [author]. **Did you do a Fetch + Pull in GitHub Desktop before opening this?** If the last commit looks more than a day old relative to today, that's worth doing first so we're working from current truth.
>
> Heads up — we PR everything on this project, so before you make any changes, you'll want to create a branch. You can do that in GitHub Desktop (Branch menu → New Branch) or I can run the git command for you. What are we working on today?"

### State B — On `main`, uncommitted changes already present

> "You're on `main` and there are uncommitted changes — that's against our workflow since we PR everything. Let's get these onto a branch before going further. I can move them across for you (`git stash` → branch → `git stash pop`), or you can use GitHub Desktop's 'Bring my changes to a new branch' option. Which would you prefer?"

Do not make any further edits until this is resolved.

### State C — On `main`, user asks you to edit something

Hard stop. Do not make the edit. Reply:

> "Hold up — we're still on `main` and we PR everything. Let's create a branch first. What should we call it? (Use the `feature/`, `fix/`, `design/`, `docs/`, or `experiment/` prefix per `CONTRIBUTING.md`.)"

Once the user names a branch, run `git checkout -b <name>` and proceed.

### State D — On a feature branch

Brief the user with branch state:

- Branch name
- Commits ahead of `main` (`git rev-list --count main..HEAD`)
- Commits `main` is ahead of this branch (`git rev-list --count HEAD..main`) — if non-zero, gently suggest merging main in via GitHub Desktop to stay current
- Last commit on this branch (when, by whom)

Sample brief:

> "You're on `feature/sharing-mosaic`. You have 3 commits on this branch ahead of `main`. `main` itself has moved 1 commit ahead since you branched — you might want to merge `main` into this branch via GitHub Desktop to stay in sync. Keep working, or is this ready to PR?"

---

## Ready-for-PR helper

When the user signals they're done on a feature branch (any of "I'm done", "ready to PR", "wrap this up", "let's PR this", or similar), do this:

1. Run `git diff main...HEAD --stat` to see scope of changes
2. Run `git log main..HEAD --oneline` to see commits on the branch
3. Run `git diff main...HEAD` (full diff) if you need to understand the actual changes
4. Draft a PR title and description. Format:

```
Title: <short imperative, under 70 chars>

## Summary
<1-3 sentences of what changed and why>

## Changes
<bulleted list of the meaningful changes — not a commit-by-commit replay, a logical summary>

## Notes for reviewers
<anything reviewers should pay attention to: assumptions, follow-ups, things you weren't sure about>
```

5. Tell the user how to ship it:

> "Here's a draft PR for you. To publish: GitHub Desktop → Publish Branch → then either click 'Create Pull Request' in GitHub Desktop or open the repo on github.com and create the PR there. Paste the title and description above."

---

## Working with reference materials

Treat anything inside `reference materials/` as **canonical context** for the project — the source of truth for project decisions, briefs, brand language, mood definitions, and so on. When the user asks you a question that touches the project, check `reference materials/INDEX.md` first to see what authoritative docs exist on the topic.

If you see an inconsistency between something the user says and what's in `reference materials/`, surface it: "The brief in `reference materials/positioning.md` says X — are we deliberately moving away from that, or should this match?"

When something in `reference materials/` changes, the change should also be logged in `CHANGELOG.md` with a one-line note about what changed and why.

---

## What you don't do

- **No `git pull`, `git fetch`, `git push`, or any network git operation.** Those belong to the user via GitHub Desktop. You inspect only.
- **No direct commits to `main`.** Ever. Even if the user asks. Refuse and offer to branch.
- **No force-pushes, no rewriting history, no `--amend` on shared branches.**
- **No deleting from `reference materials/`** — move to `archive/` instead so history is preserved.

---

## Quick reference

| If user says... | You do... |
|---|---|
| "Let's work on X" while on main | Prompt to create a branch first |
| "I'm done" / "ready to PR" | Run the PR draft helper |
| "What's been happening here?" | Show `git log` summary + CHANGELOG entries |
| "Where does X live?" | Check `reference materials/INDEX.md` first |
| Anything that would commit to main | Refuse, suggest branch |

---

*Workflow rules for humans live in `CONTRIBUTING.md`. The project itself is described in `README.md`. The running log of canonical changes is in `CHANGELOG.md`.*
