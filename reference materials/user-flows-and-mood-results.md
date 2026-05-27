# Mood Experience — User Flows & Result Pool

**Project:** Mood Experience
**Prepared by:** Plan.Net Studios
**Date:** May 2026
**Tags:** UX Flows · Interaction Design · 70+ Result States · Sensory Input · Visual Output · Team Sharing

---

## Overview

A comprehensive design reference for the mood experience — covering the full user journey, sensory question framework, and a library of 70+ non-clinical mood states, each with visual identity guidance and descriptive language.

The core concept occupies unclaimed whitespace in the market: **sensory input → AI-generated visual artefact → optional team sharing** — moving away from clinical tracking tools and towards a creative, non-judgmental moment of daily reflection.

---

## Section 01 — User Flows

### Flow A — First-Time Experience

1. **Entry Point**
   - User arrives via team invite link, QR code in a Slack/Teams message, or a desktop/mobile bookmark
   - No mandatory account creation on first visit — identity is optional and introduced gently

2. **Welcome & Framing**
   - A single screen with an ambient visual and a poetic one-liner — *"How does this morning feel?"*
   - Deliberately non-clinical: no mention of wellbeing, mental health, or tracking
   - Duration: ~3 seconds, no form fields, ambient background animation

3. **Question Sequence**
   - 5–7 sensory-based questions, presented one at a time
   - Each question uses a distinct interaction model (colour picker, texture grid, image selection)
   - Progress is shown subtly — no percentage counter, just a gentle visual rhythm
   - No back button (intentional — each response is a fresh, unrevised instinct)
   - Duration: ~2 minutes total

4. **Generation Moment**
   - A brief animated interlude (4–6 seconds) while the visual is being composed
   - Copy: *"Finding your shape for today…"*
   - This pause builds anticipation — the result feels earned, not instant
   - Optional ambient audio layer

5. **Result Reveal**
   - The generated visual artefact fills the screen
   - The mood name appears, followed by a 1–2 sentence description
   - No diagnostic language, no score, no clinical framing
   - The user sees their moment as a piece of visual art
   - Subtle save/share CTA below the fold

6. **Identity & Save**
   - *Always optional* — framed as "so you can find this again", not "create an account"
   - SSO or first-name-only login options
   - Team sharing offered here with choice of anonymous or named
   - Anonymous is the default

---

### Flow B — Daily Returning User

1. **Gentle Nudge**
   - Morning notification or Slack/Teams message at user-set time (default: 9am)
   - Tone: evocative, never pressuring — *"What shape is today?"*
   - No streak counters, no guilt mechanics, opt-out always visible

2. **Recognised Entry**
   - If logged in: a brief personalised screen — *"Good morning, [Name]."*
   - Yesterday's result shown softly as context: *"Yesterday you were Golden Haze. What about today?"*
   - Continuity offered without pressure or comparison

3. **Questions → Result**
   - Same core question flow as first-time use
   - Returning users occasionally see question variants to keep the experience fresh
   - Generation moment and result reveal are identical to Flow A

4. **Share to Team**
   - One-tap: "Add to today's team view"
   - Shared as a visual tile only — no name by default
   - Team mosaic updates in real time

---

### Flow C — Team Mosaic View

1. **Access the Team Space**
   - Accessible via a dedicated link, embedded in a team tool, or as a Slack tab
   - Shows today's collective mood as an abstract mosaic of visual tiles — one per person who shared

2. **The Mosaic**
   - Each tile shows only the visual artefact and, if the user chose it, their first name
   - No scores, no analysis, no "team mood average"
   - Deliberately resists reducing people to data points

3. **Hover / Tap a Tile**
   - Reveals the mood name and one-line description — nothing more
   - No comment function, no emoji reactions
   - The visual does the communicating; the mechanic is empathy, not discussion

4. **Archive View**
   - Optional scroll back through past days shown as a timeline of mosaics
   - Team-level patterns visible without any individual being tracked
   - No individual mood timeline is ever surfaced

---

### Flow D — Opt-Out & Privacy Controls

- **Complete without sharing** — the experience is fully satisfying without ever sharing; the share prompt is gentle, not persistent
- **Anonymous mode** — users can toggle to anonymous at any point, even after sharing; their tile stays on the mosaic but the name is removed instantly
- **Skip a day** — the nudge does not repeat; there is no "you missed yesterday" messaging
- **The absence of guilt is a design principle**, not an edge case

---

## Section 02 — Question Framework

Each question uses a non-verbal, sensory input model. Together, 5–7 questions build a signature that shapes the generated visual output. Questions rotate to keep the experience fresh for returning users.

| # | Question | Interaction Model | Notes |
|---|----------|-------------------|-------|
| Q1 | *"Pick the colour that feels most like this moment."* | Interactive colour field — tap or drag to select | Full spectrum, saturation + brightness axes |
| Q2 | *"If you could reach in and touch how you feel, what would it be?"* | Texture grid — 8–12 tactile image options | Rough stone · Still water · Static · Velvet · Sand · Smoke · Glass · Moss |
| Q3 | *"What's the weather inside you right now?"* | Illustrated environment cards | Clear sky · Storm building · Thick fog · Golden hour · Light rain · Overcast · Snow |
| Q4 | *"Choose the rhythm that matches your energy."* | Abstract animated loops | Fast pulse · Slow wave · Irregular beat · Still · Gentle flicker |
| Q5 | *"How much room does the world feel like it has right now?"* | Abstract scale slider — compressed to expansive | Very small → Narrow corridor → Room-sized → Open field → Horizon |
| Q6 | *"How sharp is the picture in your head right now?"* | Focus slider — blur to crystal clear | Everything is blurry → Slightly hazy → Coming into focus → Very clear |
| Q7 | *"If today were one word, what would it be?"* | Single word text input | Always optional · Shapes visual details · Private — never shown to team |

**Rotating Variant Questions** (shown occasionally to returning users):
- *"Which animal feels like today?"*
- *"Pick a landscape that fits your energy."*
- *"A sound that matches this moment."*
- *"How's your gravity right now?"*

---

## Section 03 — Mood Result Pool

A library of **70 distinct mood states**, organised by energy level and emotional tone. Results avoid all clinical language — no "anxious", "depressed", "happy" — so every state feels like language a person would genuinely want to use about themselves.

> **Note for designers:** The energy/tone taxonomy below is an internal organisational tool only. Users never see these labels — they see only the name, description, and generated visual.

---

### High Energy — Bright / Expansive

| Name | Description | Visual Concept | Share Language |
|------|-------------|----------------|----------------|
| **Electric Morning** | Crackling with possibility. Colours feel vivid, the mind is sharp and quick. Everything is slightly more than usual — louder, brighter, more interesting. | Radiating lines of yellow and coral, sharp angles, high contrast geometry | *"You feel like a live signal"* |
| **Golden Rush** | Riding a warm wave of momentum. A feeling of forward motion, of things going well, of good things accumulating. Optimism that doesn't need a reason. | Sweeping golden arcs, warm amber pools, radiant centre | *"You're in the current"* |
| **Full Bloom** | Everything feels open and expansive. Like a greenhouse in summer — warm, lush, generative. Ideas and feelings are in full growth. | Organic unfurling shapes, petal-like forms in green and pink | *"You're in full flower"* |
| **Catching Fire** | Ideas are arriving faster than usual. A productive restlessness — hands want to move, words want to come out. Something is igniting. | Upward-moving flame forms, dynamic reds and oranges | *"Something is starting"* |
| **Wide Awake** | Hyper-present. Senses are dialled in and the world feels unusually detailed — texture, sound, light. | Crisp geometric forms, electric blue on near-white, laser-sharp edges | *"You're all there"* |
| **Sunrise Surge** | The feeling of a good start. Something new is beginning. Lightness in the body and a clean, uncluttered sense of what today might be. | Horizontal gradient from deep coral to pale gold, horizon line | *"The day is starting well"* |

---

### High Energy — Complex / Mixed

| Name | Description | Visual Concept | Share Language |
|------|-------------|----------------|----------------|
| **Storm Front** | Energised but turbulent. Big feelings moving fast. Not bad, not good — just a lot happening at once. | Dark cloud formations with electric purple veins, tension in the geometry | *"Big weather today"* |
| **Live Wire** | Buzzing, hard to settle. It's not entirely clear whether this is excitement or anxiety — possibly both at the same time. | Jagged electric lines in neon yellow and pink, a charged field | *"Charged and restless"* |
| **Racing Thoughts** | Mind spinning like a top. Many threads running in parallel, too many tabs open. Ideas, tasks, worries competing for attention. | Spiral forms in violet and lavender, overlapping loops | *"A lot is moving"* |
| **Tightly Wound** | Coiled up. A lot held inside — the body feels compressed, ready. Not yet deployed. Everything is being managed. | Compressed coil forms, dark charcoal with flashes of amber | *"Wound and waiting"* |
| **Crackling Static** | Unclear signal. Input from all directions but the filter isn't quite working. Everything feels slightly disrupted. | Textured noise patterns, grey interference on pale white | *"Something is interfering"* |
| **Restless Horizon** | Driven by something not yet visible. A strong sense of forward motion, but the destination hasn't come into focus. | A vanishing-point perspective in purple-to-gold, forward motion | *"Heading somewhere"* |

---

### High Energy — Heavy / Difficult

| Name | Description | Visual Concept | Share Language |
|------|-------------|----------------|----------------|
| **Red Alert** | Something feels urgent. The body is in a heightened state, scanning for the next thing. Not panic — but the signal is loud. | Deep red mass, dark ground, sharp angular forms | *"On high alert"* |
| **Overloaded** | Too much input arriving at once. Every demand feels slightly too much. The capacity is full and things are still arriving at the door. | Dense overlapping forms, compressed colour at edges, dark centre | *"The cup is full"* |
| **On Edge** | Hypervigilant. Watching for the next thing, braced for it. Alertness that takes energy. Not fear exactly, but its close cousin. | Amber forms on dark ground, sharp edges, figures in relief | *"Watching carefully"* |
| **Pressure Building** | The before-storm feeling. Everything tight and expectant. A weight pressing without yet releasing. | Compressed grey with a seam of electric blue, weight pressing down | *"Something's coming"* |
| **Fast Burn** | Giving everything — moving fast, doing a lot — but the depletion is already visible on the horizon. | Brilliant flame at centre, fading to dark edges — spent energy | *"Burning through it"* |
| **Fraying at the Edges** | Managing well on the surface. Underneath there are signs of stretch — small things snagging, the edges coming loose. | Clean white centre unravelling at edges into frayed red threads | *"Holding on"* |

---

### Medium Energy — Bright / Expansive

| Name | Description | Visual Concept | Share Language |
|------|-------------|----------------|----------------|
| **Steady Glow** | Warm and settled. A slow-burning confidence that doesn't need announcing. Things feel right without being exciting. | Warm amber glow, soft circular forms, even and steady | *"A good kind of quiet"* |
| **Clear Water** | Transparent, unbothered. Easy to see through to the bottom. Nothing hidden or churning beneath the surface. | Still water surface, pale aquamarine, clean and unobstructed | *"Nothing to hide"* |
| **Grounded** | Rooted and unhurried. Planted in the moment. Steadiness in the body — a sense of being the right size, in the right place. | Earthy green base, stable horizontal lines, warm light above | *"Feet on the ground"* |
| **Warm Afternoon** | That 3pm golden hour feeling. Content without cause — the kind of ease that just arrives and asks nothing of you. | Horizontal amber light, long soft shadows, slowed down | *"Slow gold hour"* |
| **Open Window** | Fresh air in, something good might arrive. Gently alert and available. The day has possibilities it hasn't yet revealed. | Light through a translucent pane, soft morning clarity | *"Ready for something"* |
| **Quiet Confidence** | Not loud about it, just sure. A knowledge in the body that things are handled. The quiet kind of steady that comes from trusting yourself. | Deep violet centre expanding to cool grey, no noise | *"You know what you're doing"* |

---

### Medium Energy — Complex / Mixed

| Name | Description | Visual Concept | Share Language |
|------|-------------|----------------|----------------|
| **Shifting Clouds** | Changing moment to moment. Hard to pin down — not one thing for long enough to call it. | Moving cloud forms in grey-lavender, shifting edges, undefined | *"In motion"* |
| **Half-Open** | Not fully in it, not checked out either. Somewhere in the threshold — the day hasn't fully started and the self hasn't fully arrived. | A door ajar — light on one side, shadow on the other | *"Getting there"* |
| **Grey and Gold** | Both things at once. The warmth and the weight coexisting without cancelling each other out. A complicated beauty. | Grey wash with gold seams threading through it | *"Both, at the same time"* |
| **Low Tide** | The between-time. Waiting for the water to return. Not bad — just a particular kind of pause with its own texture. | Wet sand exposed, flat light, a temporary and honest emptiness | *"Waiting for the tide"* |
| **Neither Here Nor There** | In transit, mid-thought. Something is being processed but hasn't resolved yet. A comfortable ambiguity. | Soft gradient with no hard edges — diffuse and between | *"In between things"* |
| **Gentle Pull** | Being drawn somewhere quietly. An undercurrent you can feel but not fully name. Something is moving you steadily in a direction. | Flowing forms pulled toward a soft depth, cool blue trailing off | *"Something is pulling"* |

---

### Medium Energy — Heavy / Difficult

| Name | Description | Visual Concept | Share Language |
|------|-------------|----------------|----------------|
| **Carrying Weight** | Not crushed. But the bag is heavy today. There's a load — maybe known, maybe unnamed — that requires more effort than usual. | Dense grey mass, low-set forms, weight expressed through compression | *"A heavier day"* |
| **Heavy Fog** | Thinking is slower, the path ahead is less clear. Not lost — just working harder than usual to see. The fog is real but it is also just weather. | Diffuse white-grey density, obscured forms, soft absence of edge | *"Hard to see far"* |
| **Under Glass** | Slightly removed. Present but not quite touching — as though a pane of something is between self and situation. | Clear barrier with depth behind it — seen but not felt | *"Close but behind glass"* |
| **Muted** | Colours turned down, sound at low volume. Not dark — just less saturated than usual. The signal has been turned down. | Desaturated palette, soft forms, no vibration | *"A quieter version of today"* |
| **Slightly Out of Step** | Almost in rhythm with everything — but fractionally off. A lag between feeling and expression. Almost in sync, not quite. | Nearly regular pattern with one element askew — close but offset | *"Slightly off today"* |
| **Hollow Hum** | Going through the motions — not without engagement, but with a low vibration underneath. Everything functions. Something is a little flat. | Regular forms with a resonance cavity at centre — humming emptiness | *"Something's a bit hollow"* |

---

### Low Energy — Bright / Expansive

| Name | Description | Visual Concept | Share Language |
|------|-------------|----------------|----------------|
| **Deep Rest** | The beautiful kind of tired. Body and mind are settling in the way that happens after the work is done — a rich, deserved descent into stillness. | Soft lavender pools, gentle downward forms, the shape of rest | *"Settling beautifully"* |
| **Still Waters** | Completely calm. The absence of turbulence feels like a luxury. Nothing stirring beneath — the surface reflects rather than deflects. | Perfectly flat pale water, horizon line, nothing moving | *"As calm as it gets"* |
| **Sinking Into Sunday** | That particular melting feeling of permission to be slow. Everything softens. Time has expanded. | Warm amber, soft diffusing forms, golden ease | *"Melting into it"* |
| **Candle Light** | Small, warm, and enough. A single point of soft light in a quiet room. Nothing dramatic — just the simple presence of warmth. | Single warm light source, amber pool on dark, soft radius | *"Quietly enough"* |
| **Soft Landing** | Something has resolved. A gentle coming to rest after movement or effort. The tender touchdown after something hard. | Descending soft forms, pastel cushion, a gentle arrival | *"Landed gently"* |
| **Lotus Rest** | Expansive stillness. Not the absence of feeling but a chosen quietude — the kind arrived at through being, not escape. | Open circular form, petal geometry, resting at the centre | *"Still by choice"* |

---

### Low Energy — Dreamy / Gentle

| Name | Description | Visual Concept | Share Language |
|------|-------------|----------------|----------------|
| **Hazy Warmth** | Sleepy but content. Warm even in the blur. Everything is slightly soft around the edges — not a problem, just the softness of an easy morning. | Warm diffuse amber, blurred forms, slow and amber-gold | *"Soft and warm"* |
| **Floating** | Untethered in a pleasant way. Weightless. Not lost — suspended. The body is light and the mind is drifting gently, without urgency. | Floating forms in pale blue-grey, no fixed ground, suspended | *"Lightly floating"* |
| **Somewhere Soft** | Not quite present, but in a good place. A gentle remove from the sharp edges of the day. | Soft blush forms, diffuse edges, warmth without focus | *"Softly elsewhere"* |
| **Dreamlike** | The edges are soft. Things feel slightly removed from their usual sharpness — not worrying, just the pleasant half-sleep of an easy state. | Soft-focus forms, lavender and rose, blurred transitions | *"On the edge of somewhere"* |
| **Unfocused Calm** | Not sharp, but at peace with that. A comfortable drift rather than a directionless one. The unfocus is chosen. | Soft aqua blur, no hard forms, a gentle dissolution | *"A comfortable blur"* |
| **Golden Haze** | Beautiful ambiguity. Looking at everything through an amber filter — the sharpness is gone but what remains is warm and graceful. | Amber diffusion over grey ground — warm and indeterminate | *"Everything through amber"* |

---

### Low Energy — Heavy / Difficult

| Name | Description | Visual Concept | Share Language |
|------|-------------|----------------|----------------|
| **Low Light** | Dimmer than usual. Things take more effort — the light in the room, the light in the head. Not dark, just low. | Low grey illumination, dark forms, a restrained visibility | *"Not much light today"* |
| **Bone Tired** | Deep in the body. Not just sleepy but a whole-self tiredness that sits in the skeleton. Rest is the only thing that makes sense. | Heavy dark mass, dense and settled, gravity expressed | *"Running on empty"* |
| **Faded** | Colour gone, brightness turned down. Not bad, just less. The world is present but at a remove — everything at reduced volume. | Desaturated forms, very low contrast, the impression of a faded photograph | *"Running at half"* |
| **Going Through the Motions** | Present but not here. Doing the thing but not feeling it. Everything is technically happening — and yet something is clearly not at home. | Mechanical repeated forms, no organic variation, grey repetition | *"Going through it"* |
| **Quiet Hollow** | An emptiness that isn't painful — just a space. Something may have left, or the expectation of something that hasn't arrived yet. | Dark form with a negative-space centre — hollow but not broken | *"Something's missing"* |
| **Wrapped in Cotton** | Insulated from everything. Sensations muffled, edges soft. Not disconnected by choice — more like wrapped in something that reduces the signal. | Dense soft white layering, muffled form, cushioned and removed | *"Everything is muffled"* |

---

### Nuanced & Specific States

These states don't fit neatly into one energy tier — they describe particular emotional moments that cross categories.

| Name | Energy | Description | Share Language |
|------|--------|-------------|----------------|
| **Pre-Storm Stillness** | Held/medium | Calm but braced. The stillness before what comes next. A particular quality of quiet that knows itself to be temporary. | *"Braced and quiet"* |
| **The Weight of Last Night** | Low-medium | Something from before today is still in the room. A previous chapter still open, carried forward into the morning. | *"Yesterday is still here"* |
| **New Page** | Medium | Blank in the best way. A clean nothing — no residue from before, no shape yet for what comes next. | *"Nothing written yet"* |
| **In the Details** | Medium | Absorbed in the small things. Very focused on granular reality — the rest of the world receding. | *"Zoomed all the way in"* |
| **Big Picture Day** | Medium | Zoomed out. Seeing patterns, making connections. Feeling part of something larger. | *"Zoomed way out"* |
| **Nostalgia Wave** | Medium | Something from the past washing over the present. Not sad — bittersweet. The past is alive in this moment. | *"Somewhere else for a moment"* |
| **Anticipation** | Medium-high | Something good is ahead. The pleasurable tension of waiting for a known good thing. | *"Something good is coming"* |
| **Post-Adrenaline** | Low-medium | The after. The big thing has passed and the body is landing. The adrenaline is metabolising, the system is recalibrating. | *"Coming down from it"* |
| **Quietly Proud** | Medium | Something went well. Not shouting about it. A private warm satisfaction that doesn't need verification. | *"Something good happened"* |
| **Tender** | Medium | Unusually sensitive today. Moved easily by small things. The volume on everything is slightly raised. | *"Unusually open"* |
| **Armoured** | Medium | Protected. A bit hard to reach today — keeping things at a measured distance. Not cold. Just deliberate. | *"Keeping things out today"* |
| **Untangling** | Medium | Working something out slowly. A gradual loosening of something that has been knotted. | *"Working through something"* |
| **In Bloom** | Medium | Growth happening, even quietly. Something that was a seed is opening. The direction is clearly upward. | *"Something is opening"* |
| **Fallow** | Low | Resting before the next thing. Deliberately paused — not stuck, not empty. Potential without pressure. | *"Between seasons"* |
| **Third Cup of Coffee** | Artificially high | A productive buzz with an edge — sharper than intended, slightly jittery. The help and the cost arriving together. | *"One too many"* |
| **End of the Week Feeling** | Low | Depleted but done. A particular kind of tired that is also a particular kind of satisfied. The week has been used. | *"Done for the week"* |

---

## Design Principles (Summary)

These principles cut across all flows, questions, and results — they should inform every design decision on this product.

- **No clinical language** — ever. No scores, no diagnostics, no averages.
- **No surveillance** — individual data is never surfaced to managers or HR.
- **No guilt mechanics** — no streaks, no "you missed yesterday", no shame in skipping.
- **Sharing is always optional** — the experience is complete without it.
- **Anonymous is the default** — named sharing is an upgrade, not the baseline.
- **The visual is the output** — not a chart, not a summary. A piece of art.
- **Sensory input, not forms** — colour, texture, rhythm, not dropdowns and scales.
- **The absence of pressure is a feature** — design for the user, not the data.

---

*Mood Experience · UX Documentation · Plan.Net Studios · May 2026*
