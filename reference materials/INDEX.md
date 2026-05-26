# Reference Materials — Index

This folder holds the **canonical inputs** for the Mood Mode project. Anything in here is treated as ground truth by the team and by Claude. When Claude needs context to answer a project question, this is the first place it looks.

---

## What belongs in here

- Project brief and positioning
- Brand voice and tone guidelines
- Audience research and personas
- Mood map definitions (zones, words, palettes)
- Question set and scoring logic (as design artefacts, not code — code lives in `algorithms/`)
- Visual style references and palettes
- Decisions log for significant project choices
- Anything else that more than one person needs to share a consistent understanding of

## What doesn't belong in here

- Work-in-progress drafts → keep on your branch until ready to merge
- Algorithm code or implementations → `algorithms/`
- Finished deliverables that aren't reference material → consider an `outputs/` folder if/when we need one
- Superseded versions of docs → move to `archive/` (don't delete)

---

## Conventions

- Filenames are lowercase, hyphenated: `positioning.md`, `audience-personas.md`, `mood-map-v2.md`
- Each document starts with a short purpose statement and a "last updated" line
- When a document materially changes, update the date and add a `CHANGELOG.md` entry as part of the same PR
- If a document is superseded, move it to `archive/` with a date suffix: `archive/positioning-2026-04.md`

---

## Current documents

*Nothing canonical lives here yet. Add documents as they become reference-worthy.*

<!-- Format for entries below:
### filename.md
One-line description of what's in it and when it was last meaningfully updated.
-->

---

*To add a document: branch off `main`, drop the file in this folder, add an entry above, log it in `CHANGELOG.md`, open a PR.*
