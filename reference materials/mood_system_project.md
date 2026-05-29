# Mood System — Project Notes
> Exported from Claude conversation. Ready to import into a new project.

---

## 1. Concept

A sensory-led onboarding system that determines a user's current emotional state through atmospheric, colour, and texture-based questions — avoiding clinical language. The output is a single evocative mood word with a short parenthetical description.

---

## 2. Colour Palette — 8 Feeling Colours

Each colour is tied to a weather/time-of-day atmosphere and feeling tags.

| Name | Hex | Atmosphere | Tags |
|---|---|---|---|
| Warm Sunset | #E8703A | Nostalgia · Late Summer | nostalgic · wistful · longing |
| Midnight Plum | #5B2D6E | Mystery · Late Autumn | mysterious · brooding · intuitive |
| Morning Frost | #C8DCE8 | Calm · Early Winter | calm · serene · peaceful |
| Forest Floor | #3B5E3A | Grounded · Deep Autumn | grounded · secure · patient |
| Petal Blush | #F0A8B0 | Joy · Early Spring | joy · playful · tenderness |
| Storm Cloud | #4A5568 | Anxiety · Winter | anxious · unsettled · pensive |
| Honey Gold | #D4A017 | Warmth · Midsummer | warm · generous · abundant |
| Arctic Dusk | #2E4A7A | Longing · Midwinter | longing · solitude · reflective |

---

## 3. Emotion Frameworks

### Ekman's 7 Universal Emotions
Source: [paulekman.com/universal-emotions](https://www.paulekman.com/universal-emotions/)

| Emotion | Description |
|---|---|
| Anger | Frustration, rage — high energy, negative |
| Contempt | Disdain, scorn — the 7th and only asymmetric expression, directed at others |
| Disgust | Revulsion, aversion — low energy, negative |
| Enjoyment | Joy, pleasure, happiness — high energy, positive |
| Fear | Dread, worry, terror — high energy, negative |
| Sadness | Grief, sorrow, loss — low energy, negative |
| Surprise | Shock, wonder, amazement — high energy, ambiguous |

> Note: Ekman originally identified 6. Contempt was added as the 7th — the only emotion directed outward at another person, with a distinctive asymmetric facial expression.

### Plutchik's Wheel of Emotions
8 primary emotions arranged as opposites, with 3 intensity levels each.

| Emotion | Opposite | Mild → Intense |
|---|---|---|
| Joy | Sadness | Serenity → Ecstasy |
| Trust | Disgust | Acceptance → Admiration |
| Fear | Anger | Apprehension → Terror |
| Surprise | Anticipation | Distraction → Amazement |
| Sadness | Joy | Pensiveness → Grief |
| Disgust | Trust | Boredom → Loathing |
| Anger | Fear | Annoyance → Rage |
| Anticipation | Surprise | Interest → Vigilance |

Emotions combine into blends: Joy + Trust = Love · Fear + Surprise = Awe

---

## 4. Weather Synonyms for Ekman's 7

Poetic weather/time-of-day names for each emotion.

| Emotion | Synonym | Colour | Description |
|---|---|---|---|
| Anger | Wildfire Dusk | Burning red | Heat with nowhere left to go |
| Contempt | Dead Calm | Dark violet | Not stormy — worse. Unmoved. |
| Disgust | Low Tide | Murky brown | What's usually hidden, dragged into the light |
| Enjoyment | Golden Hour | Warm amber | Light you want to stay inside forever |
| Fear | Before the Break | Pale grey-green | Held breath. Everything waiting. |
| Sadness | Blue Hour | Deep blue | The world gone quiet. Something already over. |
| Surprise | Cold Snap | Sharp ice blue | The world shifted before you noticed |

---

## 5. Onboarding Questions (felt. — finalised)

Six sensory questions to determine the user's mood state. Question wording and all option sets confirmed May 2026.

**Q1 — Pick the colour you carry.**
*What colour represents your mood right now?*
> Moss · Honey · Tide · Mist · Ember · Petal · Ink · Dune

**Q2 — Select your inner sky.**
*What does your inner sky look like?*
> Golden morning · Silver fog · Open blue · Distant storm · Amber dusk · Midnight air · After rain · Windswept

**Q3 — Pick the rhythm you are moving to.**
*What rhythm resonates with your heartbeat right now?*
> Still · Hushed · Steady · Drifting · Flickering · Restless · Surging · Racing

**Q4 — Select the surface in your hand.**
*What would now feel like to touch?*
> Heavy wool · Rough sand · Clean linen · Sun-warm stone · Cold glass · Wet bark · Soft velvet · Cracked earth

**Q5 — Choose your inner sound.**
*What does your inner world sound like right now?*
> Late-night piano · Forest birds · Ocean tide · Midnight crickets · Distant thunder · Silence · Crackling fire · Wind through trees

**Q6 — Choose the weight you hold.**
*How full does your energy feel right now?*
> Depleted · Dim · Fragile · Floating · Balanced · Bright · Electric · Saturated

---

## 6. Answer Scoring Grid

Each answer scores on two axes: **Energy** (high/low) and **Valence** (positive/negative).

### Q1 — Colour
| Answer | Energy | Valence |
|---|---|---|
| Moss | − | + |
| Honey | + | + |
| Tide | − | neutral |
| Mist | − | neutral |
| Ember | − | + |
| Petal | − | + |
| Ink | − | − |
| Dune | − | + |

### Q2 — Sky
| Answer | Energy | Valence |
|---|---|---|
| Golden morning | + | + |
| Silver fog | − | neutral |
| Open blue | + | + |
| Distant storm | + | − |
| Amber dusk | − | + |
| Midnight air | − | − |
| After rain | − | + |
| Windswept | + | neutral |

### Q3 — Rhythm
| Answer | Energy | Valence |
|---|---|---|
| Still | − | neutral |
| Hushed | − | + |
| Steady | neutral | + |
| Drifting | − | neutral |
| Flickering | − | − |
| Restless | + | − |
| Surging | + | ambiguous* |
| Racing | + | ambiguous* |

> *Surging and Racing lean negative unless Q1/Q2 are strongly positive.

### Q4 — Surface
| Answer | Energy | Valence |
|---|---|---|
| Heavy wool | − | − |
| Rough sand | + | − |
| Clean linen | − | + |
| Sun-warm stone | + | + |
| Cold glass | − | − |
| Wet bark | − | − |
| Soft velvet | − | + |
| Cracked earth | + | − |

### Q5 — Sound
| Answer | Energy | Valence |
|---|---|---|
| Late-night piano | − | + |
| Forest birds | − | + |
| Ocean tide | − | + |
| Midnight crickets | − | + |
| Distant thunder | + | − |
| Silence | − | neutral |
| Crackling fire | − | + |
| Wind through trees | − | neutral |

### Q6 — Weight
| Answer | Energy | Valence |
|---|---|---|
| Depleted | − | − |
| Dim | − | − |
| Fragile | − | − |
| Floating | − | neutral |
| Balanced | neutral | + |
| Bright | + | + |
| Electric | + | ambiguous* |
| Saturated | + | − |

> *Electric leans positive unless Q2/Q3 are strongly negative.

---

## 7. Algorithm — Quadrant System

Tally energy and valence scores separately across all 6 questions. Plot on quadrant.

```
                    HIGH ENERGY
                        |
   Wildfire Dusk        |        Golden Hour
   (angry/anxious)      |        (joyful/alive)
                        |
NEGATIVE ───────────────┼─────────────────── POSITIVE
                        |
   Blue Hour            |        Morning Mist
   (sad/depleted)       |        (calm/content)
                        |
                    LOW ENERGY
```

### Quadrant Resolution

| Energy | Valence | Zone | Mood words |
|---|---|---|---|
| + | + | Golden Hour | Electric · Radiant · Luminous · Ignited · Fizzing · Alive |
| + | − | Wildfire Dusk | Frayed · Wired · Stormy · Crackling · Tangled · Bristling |
| − | + | Morning Mist | Tender · Settled · Soft · Still · Drifting · Dewy |
| − | − | Blue Hour | Heavy · Dim · Hollow · Muted · Waterlogged · Foggy · Threadbare |
| ≈0 | ≈0 | Dead Calm | Suspended · Blank · Grey · Numb · Plateaued |

### Tie-break Rules
- **Q2 (Sky)** is the anchor question — breaks ties, carries strongest atmospheric weight
- **Q3 (Rhythm) + Q6 (Weight)** = most reliable energy signals
- **Q1 (Colour) + Q4 (Surface)** = most reliable valence signals
- **Q5 (Sound)** reinforces both axes

---

## 8. Mood Output Words (35 total)

### Golden Hour zone — High energy · Positive
- **Luminous.** (Quietly glowing, unhurried, grateful.)
- **Electric.** (Wound up, energised, ready to move.)
- **Radiant.** (Open, warm, spilling over a little.)
- **Ignited.** (Something just clicked. You're on.)
- **Fizzing.** (Light, buzzy, slightly restless in a good way.)
- **Alive.** (Present in your body. Switched on.)

### Morning Mist zone — Low energy · Positive
- **Tender.** (Feeling a lot, and close to the surface.)
- **Settled.** (Nothing to prove. Quietly okay.)
- **Soft.** (Unhurried. Letting things land slowly.)
- **Still.** (Calm without effort. Just here.)
- **Unhurried.** (Moving at your own pace today. It's enough.)
- **Drifting.** (Not lost — just floating gently between things.)
- **Dewy.** (Fresh, open, gently new.)

### Wildfire Dusk zone — High energy · Negative
- **Frayed.** (Too many tabs open. Edges coming loose.)
- **Wired.** (Can't quite land. Body ahead of your mind.)
- **Charged.** (A lot building. Not sure where it's going.)
- **Stormy.** (Inner weather rough. It'll pass, but not yet.)
- **Crackling.** (Irritable, sharp, a little combustible.)
- **Tangled.** (Busy inside. Thoughts crossing each other.)
- **Bristling.** (Something's bothering you. You feel it in your shoulders.)

### Blue Hour zone — Low energy · Negative
- **Heavy.** (Everything takes more than usual right now.)
- **Dim.** (Not dark — just less bright than normal.)
- **Hollow.** (Going through the motions. Something missing.)
- **Muted.** (The volume is turned down on everything.)
- **Waterlogged.** (Carrying more than you can name.)
- **Foggy.** (Hard to see far ahead. Unclear and a bit stuck.)
- **Threadbare.** (Worn down. Running on not much.)

### Dead Calm zone — Neutral
- **Suspended.** (In between. Not quite one thing or another.)
- **Blank.** (Empty in a quiet way. Waiting to feel something.)
- **Grey.** (Not bad, not good. Just existing today.)
- **Numb.** (Disconnected from it a little. Still here though.)
- **Plateaued.** (Steady but flat. Neither climbing nor falling.)

---

## 9. Example Algorithm Flow

**Answers:** Mist · Midnight air · Drifting · Heavy wool · Silence · Floating

| Q | Answer | Energy | Valence | Running E | Running V |
|---|---|---|---|---|---|
| Q1 Colour | Mist | −1 | 0 | −1 | 0 |
| Q2 Sky | Midnight air | −1 | −1 | −2 | −1 |
| Q3 Rhythm | Drifting | −1 | 0 | −3 | −1 |
| Q4 Surface | Heavy wool | −1 | −1 | −4 | −2 |
| Q5 Sound | Silence | −1 | 0 | −5 | −2 |
| Q6 Weight | Floating | −1 | 0 | **−6** | **−2** |

**Final tally:** Energy −6 · Valence −2

**Quadrant:** Energy − · Valence − → **Blue Hour zone**

**Refinement:**
- Energy driven by: Drifting + Heavy wool + Floating → diffuse fatigue, not sharp depletion
- Valence driven by: Midnight air + Heavy wool → low-grade heaviness, not acute grief
- Candidate words: Foggy · Dim · Hollow
- Q2 tie-break (Midnight air) → quiet and dark, borderless → **Foggy wins**

**Output:**
> **Foggy.** *(Hard to see far ahead. Unclear and a bit stuck.)*

---

## 10. Category Label for Question Type

The atmospheric moments in Q2 (Golden Hour, Morning Mist, Storm Cloud etc.) are best described as:

- **Atmospheric moments** — light, mood, and weather combined
- **Sky moods** — the sky as emotional mirror
- **Ambient conditions** — used in photography/film contexts

Recommended: **Atmospheric moments**

---

*End of project export.*
