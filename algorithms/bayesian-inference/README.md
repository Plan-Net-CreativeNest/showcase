# Mood Mode 

A browser-based sensory mood engine. Seven questions. A three-dimensional emotional space. 22 named moods. A result that blends the nearest neighbours by distance, learns from feedback, and tells you not just what mood you're in — but the emotional texture around it.

No server. No dependencies. One function call.

---

## Documentation

- **[MOOD-MAP.md](MOOD-MAP.md)** — all 22 moods in (energy, valence, clarity) space, palettes, signature patterns, design rationale
- **[IMPLEMENTATION-PLAN.md](IMPLEMENTATION-PLAN.md)** — file structure, full API spec, learning layer, verification, extension guide
- **[ONBOARDING.md](ONBOARDING.md)** — all 7 questions, 8 options each, full scoring tables, design notes

---

## The idea in one sentence

Seven sensory questions nudge a point through a three-dimensional emotional space. The mood pins closest to where you land — weighted by how near they are — determine your result, blended proportionally into a single reading that gets more accurate as more people use it.

---

## The two systems working together

### System 1 — Spatial classifier (always active)

A 3D nearest-centroid classifier. Your answers produce a weighted coordinate. The algorithm finds the closest mood pins, blends them by inverse distance, and returns a result with palette, motion parameters, and blend language.

This system is deterministic — the same answers always produce the same result. It runs entirely in the browser. It works from the first session.

### System 2 — Bayesian learning layer (activates with data)

After enough sessions with feedback, the system builds probability distributions from observed behaviour: *"people who get Nostalgic answered Amber Dusk 71% of the time."* This learned knowledge blends into the spatial result gradually — 0% influence at the start, up to 40% at 500 feedback sessions.

The learning layer never replaces the spatial classifier. It adjusts the result toward what your specific community's data actually shows, not just what the designed coordinates assume.

---

## The three dimensions

| Axis | Per-answer range | What it captures |
|------|-----------------|-----------------|
| **Energy** | −1, 0, +1 | Activation — still and drained vs. charged and wired |
| **Valence** | −1, 0, +1 | Tone — heavy and dark vs. open and warm |
| **Clarity** | −2 to +2 | Definition — diffuse and murky vs. sharp and certain |

Clarity is the axis that separates moods which look identical in 2D. Anxious and Edged are both high energy and negative — but Edged knows what it is (+2 clarity), and Anxious doesn't (−3 clarity). Determined and Energised are both high energy and positive — but Determined is crystal clear (+5 clarity) and Energised is more physical (+3 clarity).

---

## The seven questions

| # | Question | Sensory register | Weight |
|---|----------|-----------------|--------|
| Q1 | Pick a colour that feels like you right now | Visual / colour | ×1.0 |
| Q2 | Which sky are you under right now? | Spatial / atmospheric | ×1.5 |
| Q3 | What is your pulse today? | Somatic / rhythm | ×1.4 |
| Q4 | What would today feel like, under your hand? | Tactile / texture | ×1.0 |
| Q5 | Pick the closest sound | Auditory / ambient | ×1.0 |
| Q6 | How full are you? Battery. | Somatic / capacity | ×1.4 |
| Q7 | What time of day does it feel like inside? | Temporal / light | ×1.2 |

Q1 and Q2 are always first. Q3–Q7 are reordered per user by information gain — the question that most reduces uncertainty about where you're heading is asked next.

---

## How the algorithm runs

```
7 answers  →  recency-weighted 3D sum  →  threshold neighbours (1–5)
           →  signature tie-break  →  inverse-distance blend  →  result
```

**Recency:** your last answer carries 46% more weight than your first. By the time you reach Q7, you've warmed up and your answers are more introspectively reliable.

**Threshold neighbours:** not a hard top-3. Every mood within a dynamic distance cutoff contributes. Someone landing cleanly on a pin gets 1 neighbour at 100%. Someone between three equidistant moods gets all three at ~33% each. The result reflects where you actually landed.

**Signature tie-break:** when two moods are nearly equidistant, the one whose characteristic answer patterns best match your actual answers gets a 12% distance boost. This resolves genuine ambiguity using the specific things you said rather than pure geometry.

**Blend language:** the result says *"Anxious, with traces of Wired and Frayed"* — not just *"Anxious"*. The emotional territory around your landing point is part of the reading.

---

## The 22 moods

Six zones across the (energy, valence) plane. Clarity is the third dimension that separates moods within each zone.

```
         Morning Mist · Amber Hours             Golden Hour
         Peaceful · Tender · Nostalgic          Radiant · Bright · Energised
         Calm · Soft · Grateful                 Determined · Alive
                    ↑ positive valence ↑
  ───────────────── Even (Dead Calm) ─────────────────────── energy →
                    ↓ negative valence ↓
         Blue Hour · Stillwater                 Wildfire Dusk
         Muted · Heavy · Hollow                 Edged · Wired · Anxious
         Withdrawn · Numb                       Restless · Frayed
```

**v7 additions:** Determined, Anxious, Nostalgic, Grateful, Numb — five moods identified as gaps after reviewing the coordinate map for unoccupied emotional territory. See MOOD-MAP.md for full rationale and placement.

---

## What the result looks like

```js
{
  mood:          "Nostalgic",
  tagline:       "Warm for something that isn't here anymore.",
  zone:          "Amber Hours",
  blendLanguage: "Nostalgic, with traces of Tender",
  confidence:    0.58,

  blendedPalette: { primary: "#C89858", secondary: "#A87840", accent: "#886030" },

  neighbors: [
    { mood: "Nostalgic", distance: 5.84, weight: 0.54, similarity: 0.71 },
    { mood: "Tender",    distance: 7.12, weight: 0.46, similarity: 0.61 }
  ],

  motion: {
    angle:       127,   // gradient rotation direction
    intensity:   0.52,  // animation speed
    clarityNorm: 0.19   // saturation and result-word blur
  }
}
```

---

## The atmosphere is already computing

Every answer triggers `partialCompute()`. The canvas colour field shifts immediately toward the emerging mood zone. By the final answer, the atmosphere has been converging for six questions. The result word arrives into a field it created.

**Motion parameters fall out of the coordinate for free:**
- `angle` = `atan2(valence, energy)` — gradient rotation direction
- `intensity` = `√(E²+V²+C²) / maxMagnitude` — animation speed, 0 = still, 1 = fast
- `clarityNorm` = normalised clarity — colour saturation and result-word blur

**Even at (0,0,0)** produces zero intensity — utterly still, no motion, no blur, no gradient pull.

---

## The learning layer in plain language

The algorithm starts with assumptions — designed vote values and question weights that represent our best guesses about what each answer means emotionally.

**Feedback changes this.** Every "Yes, it does" or "Not quite" response teaches the system whether those assumptions matched a real person. Over time, questions whose answers reliably predict accurate results get their weights increased. Questions that consistently lead the algorithm astray get reduced.

**Bayesian profiles go further.** After enough sessions, the system builds a record of what answers actually accompany each mood result. When someone new answers the questions, the system checks: *given these specific answers, which mood has the highest probability based on what everyone before them said?* This probability blends in alongside the spatial result — gently at first, more strongly as the dataset grows.

The result is a system that was built for people and then learned from them.

---

## Testing vs production mode

A single flag in `engine/learning.js` controls all learning thresholds:

```js
export const TESTING_MODE = true; // ← flip to false for production
```

| | Testing | Production |
|--|---------|-----------|
| Bayes scores start | 5 sessions | 100 sessions |
| Blend weight starts | 3 feedback taps | 50 feedback taps |
| Full 40% influence | 50 feedback taps | 500 feedback taps |
| Weight learning | Every 3 feedback taps | Every 25 feedback taps |

The Insights panel shows which mode is active — a green "Testing mode" badge appears so there is no ambiguity when sharing with peers.

---

## Seed data — automatic on first load

The Bayesian layer is pre-populated with 840 synthetic sessions covering all 22 moods and all 56 answer options. This data loads automatically the first time someone opens the app — no steps required.

**What happens invisibly on first load:**

`learning.js` checks localStorage on startup. If empty, it fetches `seed-data.json` and loads 840 sessions and all 22 mood profiles silently. By the time the intro screen finishes its animation the Bayesian layer is already active. On every subsequent load it detects existing data and skips.

**For colleagues — the entire workflow is:**

```bash
git clone <repo>
cd mood-experience
python3 -m http.server 8080
# open http://localhost:8080
```

That is it. No console steps, no Node commands, no setup.

**The seed dataset contains:**

| Strategy | Sessions | Purpose |
|----------|----------|---------|
| Primary | 556 | Characteristic answer sets per mood, with variation |
| Systematic | 90 | Ensures all 56 answer options appear 8+ times |
| Edge cases | 150 | Answer sets between adjacent moods — trains boundaries |
| Not quite (~8%) | 44 | Realistic inaccuracy — seeds the weight learning system |
| **Total** | **840** | All 22 moods · All 56 options · All zones covered |

**To regenerate the seed data** (only needed if moods or options change):

```bash
node seed-data.js
# rewrites seed-data.json and seed-loader.js
```

---

## Git setup

**Commit these files:**

```
seed-data.js       ← the generator
seed-data.json     ← the static dataset (auto-loaded on first visit)
```

**Add to `.gitignore`:**

```
seed-loader.js
```

`seed-loader.js` is large (400KB+), auto-generated, and only needed for manual console loading. It is fully reproducible from `seed-data.js` with one command.

---

## Running locally

```bash
cd mood-experience
python3 -m http.server 8080
# http://localhost:8080/index.html     ← full experience
# http://localhost:8080/test.html      ← algorithm harness only
```

---

## File map

```
mood-algorithm.js    ← import only this for compute(), partialCompute(), getAdaptiveOrder()
data/
  questions.js       ← 7 × 8 options, UI text only — no numbers
  answer-map.js      ← 3-axis votes per option
  mood-map.js        ← 22 moods, coordinates, signatures, palettes
engine/
  distance.js        ← all maths
  output.js          ← result shape
  learning.js        ← telemetry, feedback, weight learning, Bayes, auto-seed
seed-data.js         ← Node script: generates synthetic sessions (run to regenerate)
seed-data.json       ← static dataset: auto-loaded on first visit (commit this)
seed-loader.js       ← browser console paste: manual load option (.gitignore this)
index.html           ← full experience
test.html            ← bare harness
```

---

## Change anything

| To change | Touch only |
|-----------|-----------|
| Question wording | `data/questions.js` |
| Answer vote values | `data/answer-map.js` |
| Mood pin position | `data/mood-map.js` |
| Signature patterns | `data/mood-map.js` |
| Distance metric | `engine/distance.js` |
| Result shape | `engine/output.js` |
| Learning thresholds | `engine/learning.js` |
| Testing vs production | `TESTING_MODE` in `engine/learning.js` |
| Regenerate seed data | `node seed-data.js` |
| Algorithm wiring | `mood-algorithm.js` |

---


