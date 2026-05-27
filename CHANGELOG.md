# Changelog

A running log of meaningful changes to canonical content — primarily anything in `reference materials/`, but also significant shifts to the project's direction, structure, or workflow.

This is intentionally human-written, not auto-generated from commits. Commits are too granular; this log is for the kind of "you should know about this" updates that team members and Claude both need at a glance.

**Format:** Newest entries at the top. Each entry: date, author initials (or "team"), one-line summary, optional brief explanation. Link to the PR if useful.

---

## 2026

### 2026-05-27 — Liana
- Added `domain research/domain-research-results.md` (PR #6): Hannah's domain availability research across 12 name candidates. 5 available, 7 taken. Key flag: moodmode.com is expiring ~June 2026 and worth a backorder. Available options include `feltmood.com` (.com), `current.me`, `currentmood.me`, `energymode.app`, and `statemind.me`.

### 2026-05-27 — Jayson
- Updated `CLAUDE.md` to add a document sync step to the session-start protocol. Claude now compares recent git commits against `CHANGELOG.md` at the start of each session and proposes missing entries for human approval before writing.

### 2026-05-26 — team
- Repo workflow scaffolded: added `CLAUDE.md`, `CONTRIBUTING.md`, this `CHANGELOG.md`, and `reference materials/INDEX.md`. PR-for-everything rule now explicit. Claude now branch-aware at session start.
- Claude integration setup: added session-start git checks, branch-state rules, PR draft helper, and reference materials protocol.

---

*When you change something in `reference materials/`, add an entry here as part of the same PR.*
