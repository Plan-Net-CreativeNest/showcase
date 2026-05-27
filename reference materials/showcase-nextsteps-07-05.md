# Figma AI Workflows — Project Documentation

> Source: [Figma FigJam Board — Figma AI Workflows](https://www.figma.com/board/bF20HIEDQ6zIoSXTQtcxNX/Figma---AI-Workflows)
> Claude shared project: https://claude.ai/project/019dfc97-27a7-743d-99c1-2594c79e3e7e

---

## 1. Kickstart — Project Plan

### Project Vision (3 Phases)

**Phase 01 — Onboarding**
An immersive experience that prompts you with unexpected questions about your current state of mind. Not a traditional step-by-step form. Think: what is your current colour feeling? What is your frequency? Beautiful, fun, and a little different.

**Phase 02 — Your Mood**
Your mood, crafted and articulated in a way you wouldn't normally find the words for. Presented in a way that feels comfortable and fun to share. Each unique mood has a unique feature item.

Inspiration references:
- [fromanother.love](https://fromanother.love) — "We are an Artist-Led Creative Agency/Studio/Coll..."
- [thezen.zone](https://thezen.zone) — The Zen Zone

**Phase 03 — Social**
For the MVP, we'll include a 'share' option on your presented mood mode. You can copy link to share, or give us feedback on how you envision sharing your mood. Gathering user data for future possibilities.

### Project Plan Table

| Stage | Timeline | To-dos | Team | Tools |
|---|---|---|---|---|
| **Project Kickoff** | 6–7 May | Create timeline and project plan. Setup Claude UX UI Showcase workspace. Setup weekly check-in on Fridays. | Liana ✅ | Claude, Figjam |
| **Phase 1 — Onboarding journey** | 7–15 May | Document and define the onboarding journey and outputs. Sensory-led visual onboarding: questions 1, 2, 4, 5 each need 8 unique named options. Mood mode outputs need 20 names total — see examples below, refine and choose 4 per group (groups to be defined). Create a survey to ensure namings are relatable and understood — can test the name "Mood Mode" here too. | Q2 + Q3: Janita, Kyla. Q4: Kyla, Liana | Claude, Figjam, Survey (tbc) |
| **Phase 2 — Algorithm & Moodboards** | 7–29 May | Algorithm — explore / test how this would work. Document scoring. Explore the onboarding process — benchmark / ideas. Create mood boards for each onboarding question (6). Create mood boards for each mood mode (20). | Jayson, Anria, Liana, Janita, Kyla | Claude, Figjam |
| **Phase 3 — Feature Concepts & Sharing** | 1–12 June | Unique concept for each feature item for each mood mode (20). Sharing functionality. Create prompts and stitch all together. | Jayson, Anria, Liana, All | Luma, Claude.design, Claude Code |
| **Phase 4 — Launch** | TBC | Domain setup, go live and test. | — | — |

### Sticky Notes / Reminders (from Liana)
- Document ALL findings, work, links and processes.
- By end of May we'll have the concept, visuals and content solid for next step.
- ✅ Claude shared project setup.

---

## 2. Onboarding — Sensory-led Visual Onboarding

The onboarding consists of **6 sensory-led questions**. Questions 1, 2, 4, and 5 each need **8 unique named options** (currently incomplete — see counts below).

### The 6 Onboarding Questions & Option Sets

#### 01 — Pick a colour that feels like you right now
*Target: 8 options · Currently: 4 placeholders → see Section 3 for full color exploration*
- Blush
- Petal
- Fireworks
- Honey Gold

#### 02 — Which sky are you under right now?
*Target: 8 options · Currently: 8 ✅*
- Golden Hour
- Morning Mist
- After Rain
- Storm Cloud
- Dead Calm
- Overcast
- Clear
- Midnight

#### 03 — What is your pulse today?
*Currently: 5 options*
- Flat line
- Slow and steady
- Restless
- Racing
- Irregular

#### 04 — What would today feel like, under your hand?
*Target: 8 options · Currently: 6*
- Heavy wool
- Rough sand
- Clean linen
- Sunwarm stone
- Cold glass
- Wet bark

#### 05 — Pick the closest sound
*Target: 8 options · Currently: 6*
- Piano bar
- Forest birds
- Waves crashing
- Quiet crickets
- Distant thunder
- Silence

#### 06 — How full are you? (Battery)
*Currently: 5 options*
- Empty
- Flickering
- Half
- Charged
- Overloaded

---

### Output: Mood Modes (Algorithm Result)

Mood Modes are the named outputs the algorithm produces from a user's onboarding answers. **Goal: 20 final names** (refine the list below, choosing ~4 per group).

#### High energy · Positive
- **Luminous** — Quietly glowing, unhurried, grateful.
- **Electric** — Wound up, energised, ready to move.
- **Radiant** — Open, warm, spilling over a little.
- **Ignited** — Something just clicked. You're on.
- **Fizzing** — Light, buzzy, slightly restless in a good way.
- **Alive** — Present in your body. Switched on.

#### Low energy · Positive
- **Tender** — Feeling a lot, and close to the surface.
- **Settled** — Nothing to prove. Quietly okay.
- **Soft** — Unhurried. Letting things land slowly.
- **Still** — Calm without effort. Just here.
- **Unhurried** — Moving at your own pace today. It's enough.
- **Drifting** — Not lost — just floating gently between things.
- **Dewy** — Fresh, open, gently new.

#### High energy · Negative
- **Frayed** — Too many tabs open. Edges coming loose.
- **Wired** — Can't quite land. Body ahead of your mind.
- **Charged** — A lot building. Not sure where it's going.
- **Stormy** — Inner weather rough. It'll pass, but not yet.
- **Crackling** — Irritable, sharp, a little combustible.
- **Tangled** — Busy inside. Thoughts crossing each other.
- **Bristling** — Something's bothering you. You feel it in your shoulders.

#### Low energy · Negative
- **Heavy** — Everything takes more than usual right now.
- **Dim** — Not dark — just less bright than normal.
- **Hollow** — Going through the motions. Something missing.
- **Muted** — The volume is turned down on everything.
- **Waterlogged** — Carrying more than you can name.
- **Foggy** — Hard to see far ahead. Unclear and a bit stuck.
- **Threadbare** — Worn down. Running on not much.

#### Neutral / Flat
- **Suspended** — In between. Not quite one thing or another.
- **Blank** — Empty in a quiet way. Waiting to feel something.
- **Grey** — Not bad, not good. Just existing today.
- **Numb** — Disconnected from it a little. Still here though.
- **Plateaued** — Steady but flat. Neither climbing nor falling.

### Algorithm
The algorithm scores responses across the 6 sensory questions and maps them to one of the Mood Modes above. *(Visual flow diagram: `mood_algorithm_flow`. Reference screenshots also embedded on the FigJam board for scoring exploration.)*

---

## 3. Onboarding Q1 Deep-Dive — Pick a Colour

**Brief (to Janita & Kyla):** Please create 8 colors with cool names (based on tangible, relatable things found in nature). See research below to inform the decision.

### Color Ideas (7 of 8 — one more needed)

| Name | Hex |
|---|---|
| Warm Sunset | `#E8703A` |
| Midnight Plum | `#5B2D6E` |
| Morning Frost | `#C8DCE8` |
| Forest Floor | `#3B5E3A` |
| Petal Blush | `#F0A8B0` |
| Storm Cloud | `#4A5568` |
| Honey Gold | `#D4A017` |
| *(8th colour TBD)* | — |

### Research References
- **Paul Ekman — Universal Emotions:** https://www.paulekman.com/universal-emotions/
- **Six Seconds — Plutchik's Wheel of Emotions / Feelings Wheel:** [6seconds.org](https://6seconds.org) — "Grow your emotional literacy with Plutchik's Wheel of Emotions."

### Reference: 20 Most Common Feelings & States of Mind
1. **Happiness** — a sense of pleasure, contentment, or joy
2. **Sadness** — a feeling of loss, sorrow, or disappointment
3. **Anger** — frustration, irritation, or rage toward something or someone
4. **Fear** — anxiety or dread in response to perceived threat
5. **Disgust** — a strong sense of aversion or repulsion
6. **Surprise** — a sudden reaction to something unexpected
7. **Anticipation** — excitement or nervousness about what's coming
8. **Trust** — a feeling of safety, confidence, and reliability in others
9. **Anxiety** — persistent worry or unease about uncertain outcomes
10. **Love** — deep affection, attachment, and warmth toward others
11. **Loneliness** — a painful sense of disconnection or isolation
12. **Shame** — a feeling of unworthiness or embarrassment about oneself
13. **Guilt** — remorse over something one has done or failed to do
14. **Pride** — satisfaction and confidence in one's own achievements
15. **Jealousy** — insecurity or resentment over perceived rivalry or loss
16. **Gratitude** — a warm appreciation for what one has received
17. **Boredom** — a restless lack of interest or stimulation
18. **Nostalgia** — a bittersweet longing for the past
19. **Awe** — wonder and reverence in the face of something vast or beautiful
20. **Calm** — a peaceful, settled, and undisturbed state of mind

---

## Outstanding Items / Gaps to Close

- **Q1 (Colour):** 7 of 8 named colors — 1 more to add.
- **Q2 (Sky):** 8 of 8 ✅
- **Q3 (Pulse):** Confirm if 8 are needed or if 5 is the final count.
- **Q4 (Hand/Touch):** 6 of 8 — 2 more to add.
- **Q5 (Sound):** 6 of 8 — 2 more to add.
- **Q6 (Battery):** Confirm if 8 are needed or if 5 is the final count.
- **Mood Modes:** 32 candidates listed across 5 groups — refine to **20 final** (~4 per group, group definitions to be confirmed).
- **Survey:** Build to validate naming relatability + test the "Mood Mode" label itself.
- **Algorithm:** Document scoring logic + map onboarding inputs → Mood Mode outputs.
