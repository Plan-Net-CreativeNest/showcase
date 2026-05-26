# Contributing to Mood Mode

This is the workflow guide for everyone working on this repo. Read it once, then keep it open the first few times until the rhythm is muscle memory.

The project lives at `https://github.com/Plan-Net-CreativeNest/showcase`. Everyone works locally on the repo via GitHub Desktop, and everyone uses Claude (Cowork) alongside it.

---

## The one rule that matters most

**Every change goes through a pull request. No direct commits to `main`, ever.**

This is what stops document drift. The PR is the moment where "the truth changed" gets a notification, a record, and a click. Without it, half the team ends up working from stale context. With it, the repo stays trustworthy.

That includes:

- Reference material updates
- Algorithm changes
- Design assets
- README / CONTRIBUTING / CLAUDE.md edits
- Even tiny typo fixes

If it's a change to the repo, it's a PR. Claude knows this rule too and will refuse to edit anything while you're on `main`.

---

## Before you start each session

1. Open GitHub Desktop.
2. Switch to `main`.
3. Click **Fetch origin**, then **Pull origin** (the button changes name once there's something to pull).
4. Now you're working from current truth.

Then open Cowork in the showcase folder. Claude's first move will be to show you what's recently happened in the repo and remind you to branch before editing.

---

## Working on something new

### 1. Branch off `main`

In GitHub Desktop: **Current Branch → New Branch → name it → Create Branch.**

Naming convention:

| Prefix | Use for |
|---|---|
| `feature/` | new functionality |
| `fix/` | bug fixes |
| `design/` | design-related work |
| `docs/` | documentation or reference material |
| `experiment/` | exploratory or uncertain work |
| `setup/` | repo configuration, tooling, workflow |

Names should be short and descriptive: `design/mood-wheel-visuals`, `feature/sharing-mosaic`, `docs/audience-research-q2`.

### 2. Do the work

Edit, save, commit as you go. Commit in small focused chunks — one logical change per commit. Write commit messages that say what changed and why, not just what:

- Good: `add clarity axis to nearest centroid distance calc`
- Good: `update positioning doc to reflect anonymity-first stance`
- Bad: `updates`, `wip`, `fixes`, `stuff`

### 3. Keep your branch current

If `main` has moved while you've been working (other PRs got merged), pull those changes into your branch:

- GitHub Desktop: **Branch menu → Update from main**
- Or have Claude tell you when you're behind — it surfaces this at session start.

This keeps your eventual PR clean and minimises merge conflicts.

### 4. Open the PR

When your branch is ready:

1. **Publish Branch** in GitHub Desktop (this pushes it to GitHub).
2. Click **Create Pull Request** in GitHub Desktop, or open `https://github.com/Plan-Net-CreativeNest/showcase` in a browser and create the PR there.
3. Use the PR template that Claude drafted for you (ask Claude: "ready to PR" or "draft me a PR").
4. Request a review from a teammate if the change is non-trivial.
5. Merge once approved.
6. Delete the branch (GitHub will offer the button after merge).

---

## Reference materials

Anything in `reference materials/` is **canonical** — the things every team member's Claude is going to treat as ground truth. Brief, brand voice, positioning, audience research, mood definitions, palettes, question sets. These are the inputs that drift the most when there's no version control, which is why they live here.

Two extra rules apply to changes in this folder:

1. **Log the change in `CHANGELOG.md`** with a one-line note about what changed and why. This is the human-readable trail that anyone (and any Claude) can scan to see what's moved recently.
2. **Update `reference materials/INDEX.md`** if you add, rename, or significantly restructure a document. The INDEX is the map; out-of-date map is worse than no map.

If you're superseding a doc, move the old version to `archive/` rather than deleting. We want history.

---

## When two people are in the same area

Git auto-merges when changes are in different files. Conflicts only happen when two people edit the same lines in the same file. If you're working on something where conflicts are likely, ping your teammate in advance to coordinate — usually a one-line "I'm taking the positioning doc this afternoon" is enough.

---

## Working with Claude (Cowork)

Claude reads `CLAUDE.md` at the start of every session and follows the protocol in there. The behaviour you should expect:

- **Branch awareness.** Claude checks what branch you're on. On `main`, it'll prompt you to branch before making any edits. On a feature branch, it'll show you how far ahead/behind you are and ask whether you're still working or ready to PR.
- **No surprise git operations.** Claude won't pull, push, or fetch. Those stay with you in GitHub Desktop. Claude only inspects.
- **"Did you pull?" reminder.** When you open Cowork on `main`, Claude will ask if you Fetched + Pulled in GitHub Desktop first.
- **PR draft helper.** When you say "I'm done" or "ready to PR" or similar, Claude reads the diff against `main` and drafts a PR title and description for you to paste into GitHub.

If Claude does any of this wrong, edit `CLAUDE.md` — that's the source of truth for its behaviour, and changes to it go through the same PR process as everything else.

---

## Quick start checklist (for someone new to the repo)

- [ ] Install GitHub Desktop, sign in with your GitHub account
- [ ] Clone `Plan-Net-CreativeNest/showcase` to a folder on your machine
- [ ] Install Claude (Cowork) and point it at that folder
- [ ] Read `README.md` (project), `CONTRIBUTING.md` (this file), `CLAUDE.md` (how Claude will behave)
- [ ] Skim `reference materials/INDEX.md` to see what canonical docs exist
- [ ] Pull `main` in GitHub Desktop before your first work session
- [ ] Create a branch for your first change — even if it's small

---

*Updates to this file go through the same PR workflow as everything else.*
