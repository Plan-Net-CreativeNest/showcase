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

### mood_system_project.md
Core project notes — 8 feeling colours with hex values, Ekman's 7 universal emotions, Plutchik's Wheel, weather synonyms for each emotion, and the refined onboarding question set. Last updated May 2026.

### user-flows-and-mood-results.md
Full UX documentation — user flows A–D (first-time, returning, team, and edge-case), the sensory question framework, 70+ non-clinical mood result states with visual identity guidance, and design principles. Last updated May 2026.

### showcase-nextsteps-07-05.md
FigJam board export — 4-phase project plan with timeline and team assignments, all 6 onboarding question option sets (with gap analysis on missing options), 32+ mood mode name candidates across 5 energy/valence groups, and outstanding items to close. Last updated May 2026.

### conversation-export.md
Export manifest from the Claude shared project — a brief index of the three files above, confirming what was exported and from where. Last updated May 2026.

### creative-direction.md
Confirmed creative direction — brand name (felt.), domain (feltmood.com), positioning line, art direction principles, mood colour names, reference inspirations, and the finalised 6-question onboarding set with all option sets locked at 8 each. Last updated May 2026.

---

*To add a document: branch off `main`, drop the file in this folder, add an entry above, log it in `CHANGELOG.md`, open a PR.*
