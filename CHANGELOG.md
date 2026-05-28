# Changelog

A running log of meaningful changes to canonical content — primarily anything in `reference materials/`, but also significant shifts to the project's direction, structure, or workflow.

This is intentionally human-written, not auto-generated from commits. Commits are too granular; this log is for the kind of "you should know about this" updates that team members and Claude both need at a glance.

**Format:** Newest entries at the top. Each entry: date, author initials (or "team"), one-line summary, optional brief explanation. Link to the PR if useful.

---

## 2026

### 2026-05-28 — Liana
- Added `creative-direction.md` to `reference materials/`: confirms brand name (felt.), domain (feltmood.com), art direction, mood colour names, and all 6 onboarding question sets locked at 8 options each. Supersedes naming candidates in `showcase-nextsteps-07-05.md`.
- Updated `mood_system_project.md`: revised all 6 question titles and sub-prompts to felt. language, rebuilt all scoring grid tables with new option names, updated tie-break rule labels (Rhythm/Weight/Surface), and refreshed the example algorithm flow.
- Updated `INDEX.md` to include `creative-direction.md`.

### 2026-05-27 — Jayson
- Added 4 reference files exported from the Claude shared project: `mood_system_project.md` (colour palette, emotion frameworks, onboarding questions), `user-flows-and-mood-results.md` (UX flows, 70+ mood states), `showcase-nextsteps-07-05.md` (project plan, option sets, mood name candidates, open gaps), and `conversation-export.md` (export manifest). Updated `INDEX.md` accordingly.
- Updated `CLAUDE.md` to add a document sync step to the session-start protocol. Claude now compares recent git commits against `CHANGELOG.md` at the start of each session and proposes missing entries for human approval before writing.

### 2026-05-26 — team
- Repo workflow scaffolded: added `CLAUDE.md`, `CONTRIBUTING.md`, this `CHANGELOG.md`, and `reference materials/INDEX.md`. PR-for-everything rule now explicit. Claude now branch-aware at session start.
- Claude integration setup: added session-start git checks, branch-state rules, PR draft helper, and reference materials protocol.

---

*When you change something in `reference materials/`, add an entry here as part of the same PR.*
