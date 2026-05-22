// ─────────────────────────────────────────────────────────────────────────────
// Mood Mode — Extended Seed Data Generator
// Generates ~1,500 synthetic pre-launch sessions for the Bayesian layer.
//
// Three generation strategies working together:
//   1. PRIMARY    — characteristic answer sets per mood from signatures
//   2. SYSTEMATIC — ensures every one of the 56 options appears 3+ times
//   3. EDGE CASES — answer sets that sit between adjacent moods
//
// Usage:
//   node seed-data.js
//
// Outputs:
//   seed-data.json   ← static dataset, commit this to git
//   seed-loader.js   ← browser console paste, add to .gitignore
//
// Colleagues: run `node seed-data.js` once to regenerate both files,
// then paste seed-loader.js into the browser console on localhost:8080.
// ─────────────────────────────────────────────────────────────────────────────

const fs = await import('fs');

// ── Full option space ─────────────────────────────────────────────────────────
const Q_OPTIONS = {
  colour:    ['honey-gold','ember-red','petal-blush','morning-frost','storm-grey','forest-floor','midnight-plum','arctic-dusk'],
  sky:       ['golden-morning','silver-fog','open-blue','distant-storm','amber-dusk','midnight-air','after-rain','windswept'],
  pulse:     ['still','hushed','steady','drifting','flickering','restless','surging','racing'],
  texture:   ['heavy-wool','rough-sand','clean-linen','sunwarm-stone','cold-glass','wet-bark','soft-velvet','cracked-earth'],
  sound:     ['late-night-piano','forest-birds','ocean-tide','midnight-crickets','distant-thunder','silence','crackling-fire','wind-through-trees'],
  battery:   ['depleted','dim','fragile','floating','balanced','bright','electric','saturated'],
  timeofday: ['early-morning','mid-morning','afternoon','late-afternoon','dusk','night','deep-night','predawn'],
};
const Q_IDS = Object.keys(Q_OPTIONS);

// Emotionally neutral fallbacks — used when a mood's signature
// doesn't cover a question. Low-weight, centre-of-space answers.
const NEUTRAL = {
  colour:    'forest-floor',
  sky:       'silver-fog',
  pulse:     'drifting',
  texture:   'soft-velvet',
  sound:     'midnight-crickets',
  battery:   'floating',
  timeofday: 'afternoon',
};

// ── All 22 moods ──────────────────────────────────────────────────────────────
const MOODS = [
  // ── Golden Hour ──────────────────────────────────────────────────────────
  { name:'Radiant',    zone:'Golden Hour',   freq:30, confidence:[.75,.85],
    signature:{
      colour:    ['honey-gold','ember-red'],
      sky:       ['golden-morning','open-blue'],
      pulse:     ['surging','racing'],
      texture:   ['sunwarm-stone','clean-linen'],
      sound:     ['late-night-piano','forest-birds'],
      battery:   ['electric','bright'],
      timeofday: ['mid-morning','afternoon'],
    }},
  { name:'Bright',     zone:'Golden Hour',   freq:28, confidence:[.70,.82],
    signature:{
      colour:    ['honey-gold','morning-frost'],
      sky:       ['golden-morning','open-blue'],
      pulse:     ['surging','steady'],
      texture:   ['clean-linen','sunwarm-stone'],
      sound:     ['forest-birds','late-night-piano'],
      battery:   ['bright','electric'],
      timeofday: ['mid-morning','early-morning'],
    }},
  { name:'Energised',  zone:'Golden Hour',   freq:28, confidence:[.72,.84],
    signature:{
      colour:    ['ember-red','honey-gold'],
      sky:       ['golden-morning','windswept'],
      pulse:     ['racing','surging'],
      texture:   ['rough-sand','sunwarm-stone'],
      sound:     ['late-night-piano','wind-through-trees'],
      battery:   ['electric','saturated'],
      timeofday: ['mid-morning','afternoon'],
    }},
  { name:'Determined', zone:'Golden Hour',   freq:26, confidence:[.68,.78],
    signature:{
      colour:    ['morning-frost','honey-gold'],
      sky:       ['open-blue','golden-morning'],
      pulse:     ['steady','surging'],
      texture:   ['cold-glass','sunwarm-stone'],
      sound:     ['late-night-piano','forest-birds'],
      battery:   ['bright','electric'],
      timeofday: ['mid-morning','afternoon'],
    }},
  { name:'Alive',      zone:'Golden Hour',   freq:25, confidence:[.65,.76],
    signature:{
      colour:    ['honey-gold','petal-blush','ember-red'],
      sky:       ['open-blue','golden-morning','after-rain'],
      pulse:     ['surging','restless'],
      texture:   ['sunwarm-stone','rough-sand'],
      sound:     ['forest-birds','late-night-piano'],
      battery:   ['bright','electric'],
      timeofday: ['afternoon','late-afternoon'],
    }},

  // ── Morning Mist ─────────────────────────────────────────────────────────
  { name:'Peaceful',   zone:'Morning Mist',  freq:28, confidence:[.75,.85],
    signature:{
      colour:    ['forest-floor','morning-frost','arctic-dusk'],
      sky:       ['open-blue','after-rain'],
      pulse:     ['steady','hushed'],
      texture:   ['clean-linen','sunwarm-stone'],
      sound:     ['forest-birds','ocean-tide'],
      battery:   ['balanced','floating'],
      timeofday: ['early-morning','late-afternoon'],
    }},
  { name:'Tender',     zone:'Morning Mist',  freq:25, confidence:[.68,.78],
    signature:{
      colour:    ['petal-blush','morning-frost'],
      sky:       ['silver-fog','amber-dusk'],
      pulse:     ['hushed','drifting'],
      texture:   ['soft-velvet','clean-linen'],
      sound:     ['ocean-tide','crackling-fire'],
      battery:   ['floating','fragile'],
      timeofday: ['dusk','late-afternoon'],
    }},
  { name:'Calm',       zone:'Morning Mist',  freq:26, confidence:[.72,.82],
    signature:{
      colour:    ['morning-frost','forest-floor','arctic-dusk'],
      sky:       ['after-rain','open-blue'],
      pulse:     ['still','steady'],
      texture:   ['cold-glass','clean-linen'],
      sound:     ['forest-birds','midnight-crickets'],
      battery:   ['balanced','floating'],
      timeofday: ['early-morning','late-afternoon'],
    }},
  { name:'Soft',       zone:'Morning Mist',  freq:24, confidence:[.62,.74],
    signature:{
      colour:    ['petal-blush','arctic-dusk','morning-frost'],
      sky:       ['silver-fog','amber-dusk'],
      pulse:     ['hushed','drifting'],
      texture:   ['soft-velvet','clean-linen'],
      sound:     ['ocean-tide','midnight-crickets'],
      battery:   ['floating','fragile'],
      timeofday: ['dusk','late-afternoon','early-morning'],
    }},

  // ── Amber Hours ──────────────────────────────────────────────────────────
  { name:'Grateful',   zone:'Amber Hours',   freq:22, confidence:[.65,.75],
    signature:{
      colour:    ['honey-gold','forest-floor','morning-frost'],
      sky:       ['golden-morning','after-rain','amber-dusk'],
      pulse:     ['steady','hushed'],
      texture:   ['sunwarm-stone','clean-linen'],
      sound:     ['crackling-fire','forest-birds','midnight-crickets'],
      battery:   ['balanced','bright'],
      timeofday: ['late-afternoon','early-morning','dusk'],
    }},
  { name:'Nostalgic',  zone:'Amber Hours',   freq:20, confidence:[.62,.74],
    signature:{
      colour:    ['honey-gold','petal-blush','forest-floor'],
      sky:       ['amber-dusk','golden-morning'],
      pulse:     ['hushed','drifting'],
      texture:   ['soft-velvet','sunwarm-stone'],
      sound:     ['crackling-fire','ocean-tide','late-night-piano'],
      battery:   ['floating','fragile'],
      timeofday: ['dusk','late-afternoon'],
    }},

  // ── Dead Calm ────────────────────────────────────────────────────────────
  { name:'Even',       zone:'Dead Calm',     freq:20, confidence:[.48,.60],
    signature:{
      colour:    ['forest-floor','morning-frost','arctic-dusk'],
      sky:       ['silver-fog','open-blue'],
      pulse:     ['drifting','steady'],
      texture:   ['soft-velvet','clean-linen'],
      sound:     ['midnight-crickets','forest-birds'],
      battery:   ['balanced','floating'],
      timeofday: ['afternoon','late-afternoon'],
    }},

  // ── Wildfire Dusk ────────────────────────────────────────────────────────
  { name:'Edged',      zone:'Wildfire Dusk', freq:28, confidence:[.72,.84],
    signature:{
      colour:    ['ember-red','storm-grey'],
      sky:       ['distant-storm','windswept'],
      pulse:     ['racing','restless'],
      texture:   ['rough-sand','cracked-earth'],
      sound:     ['distant-thunder','wind-through-trees'],
      battery:   ['electric','saturated'],
      timeofday: ['night','predawn'],
    }},
  { name:'Wired',      zone:'Wildfire Dusk', freq:26, confidence:[.70,.80],
    signature:{
      colour:    ['ember-red','storm-grey'],
      sky:       ['distant-storm','windswept'],
      pulse:     ['racing','restless'],
      texture:   ['rough-sand','cold-glass'],
      sound:     ['wind-through-trees','distant-thunder'],
      battery:   ['saturated','electric'],
      timeofday: ['night','deep-night'],
    }},
  { name:'Anxious',    zone:'Wildfire Dusk', freq:25, confidence:[.68,.78],
    signature:{
      colour:    ['ember-red','storm-grey','midnight-plum'],
      sky:       ['windswept','distant-storm'],
      pulse:     ['racing','flickering','restless'],
      texture:   ['rough-sand','cracked-earth'],
      sound:     ['distant-thunder','wind-through-trees','silence'],
      battery:   ['fragile','saturated'],
      timeofday: ['predawn','deep-night','night'],
    }},
  { name:'Restless',   zone:'Wildfire Dusk', freq:24, confidence:[.65,.76],
    signature:{
      colour:    ['storm-grey','ember-red'],
      sky:       ['windswept','distant-storm'],
      pulse:     ['restless','racing'],
      texture:   ['rough-sand','cracked-earth'],
      sound:     ['wind-through-trees','distant-thunder'],
      battery:   ['saturated','fragile'],
      timeofday: ['night','late-afternoon'],
    }},
  { name:'Frayed',     zone:'Wildfire Dusk', freq:22, confidence:[.62,.74],
    signature:{
      colour:    ['storm-grey','midnight-plum'],
      sky:       ['windswept','silver-fog'],
      pulse:     ['restless','flickering'],
      texture:   ['cracked-earth','rough-sand'],
      sound:     ['wind-through-trees','silence'],
      battery:   ['fragile','saturated'],
      timeofday: ['night','predawn'],
    }},

  // ── Blue Hour ────────────────────────────────────────────────────────────
  { name:'Muted',      zone:'Blue Hour',     freq:28, confidence:[.70,.80],
    signature:{
      colour:    ['midnight-plum','storm-grey'],
      sky:       ['silver-fog','midnight-air'],
      pulse:     ['still','flickering'],
      texture:   ['heavy-wool','wet-bark'],
      sound:     ['silence','distant-thunder'],
      battery:   ['depleted','dim'],
      timeofday: ['night','predawn','deep-night'],
    }},
  { name:'Heavy',      zone:'Blue Hour',     freq:28, confidence:[.72,.84],
    signature:{
      colour:    ['midnight-plum','storm-grey'],
      sky:       ['midnight-air','silver-fog'],
      pulse:     ['still','drifting'],
      texture:   ['heavy-wool','wet-bark','cracked-earth'],
      sound:     ['silence','ocean-tide'],
      battery:   ['depleted','dim','fragile'],
      timeofday: ['deep-night','predawn','night'],
    }},
  { name:'Hollow',     zone:'Blue Hour',     freq:28, confidence:[.70,.82],
    signature:{
      colour:    ['midnight-plum','arctic-dusk'],
      sky:       ['midnight-air','silver-fog'],
      pulse:     ['flickering','still'],
      texture:   ['heavy-wool','soft-velvet'],
      sound:     ['silence','ocean-tide'],
      battery:   ['depleted','dim'],
      timeofday: ['deep-night','predawn'],
    }},
  { name:'Withdrawn',  zone:'Blue Hour',     freq:25, confidence:[.65,.76],
    signature:{
      colour:    ['midnight-plum','storm-grey'],
      sky:       ['silver-fog','midnight-air'],
      pulse:     ['drifting','flickering'],
      texture:   ['heavy-wool','cracked-earth'],
      sound:     ['silence','midnight-crickets'],
      battery:   ['fragile','floating'],
      timeofday: ['night','predawn','deep-night'],
    }},

  // ── Stillwater ───────────────────────────────────────────────────────────
  { name:'Numb',       zone:'Stillwater',    freq:20, confidence:[.58,.70],
    signature:{
      colour:    ['storm-grey','midnight-plum','arctic-dusk'],
      sky:       ['silver-fog','midnight-air'],
      pulse:     ['still','drifting'],
      texture:   ['heavy-wool','soft-velvet'],
      sound:     ['silence','midnight-crickets'],
      battery:   ['depleted','dim','floating'],
      timeofday: ['predawn','deep-night','afternoon'],
    }},
];

// ── Adjacent mood pairs — for edge-case blended sessions ──────────────────────
// These are moods that share coordinate territory and need sessions
// that sit between them so the Bayesian layer learns the boundaries.
const ADJACENT_PAIRS = [
  ['Radiant','Bright'],['Radiant','Energised'],['Bright','Determined'],
  ['Determined','Alive'],['Energised','Alive'],
  ['Peaceful','Calm'],['Peaceful','Grateful'],['Tender','Soft'],
  ['Tender','Nostalgic'],['Calm','Soft'],['Grateful','Nostalgic'],
  ['Even','Soft'],['Even','Calm'],['Even','Restless'],
  ['Edged','Wired'],['Wired','Anxious'],['Restless','Frayed'],
  ['Anxious','Frayed'],['Edged','Restless'],
  ['Muted','Withdrawn'],['Heavy','Hollow'],['Hollow','Withdrawn'],
  ['Heavy','Muted'],['Withdrawn','Numb'],['Hollow','Numb'],
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function rnd(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function uid()    { return Math.random().toString(36).slice(2, 10); }
function jitter(n, range) { return Math.round(n + (Math.random() - 0.5) * range * 2); }

// Pick from signature options with weighted variation:
// variation 0 → first option most likely
// variation 1 → second option, if exists
// variation 2+ → random from all signature options
function pickSigOption(opts, variation) {
  if (!opts || opts.length === 0) return null;
  if (variation === 0) return opts[0];
  if (variation === 1) return opts[Math.min(1, opts.length - 1)];
  return rnd(opts);
}

// Realistic dwell times per question (ms), based on question complexity
const DWELL_BASE = {
  colour:    2200,
  sky:       3100,
  pulse:     4200,
  texture:   3800,
  sound:     3500,
  battery:   3000,
  timeofday: 4800,
};
function buildDwell(qId) {
  return jitter(DWELL_BASE[qId] || 3000, 700);
}

// Answer order: colour and sky always first, rest shuffled with slight bias
function buildAnswerOrder() {
  const rest = ['pulse','texture','sound','battery','timeofday'];
  // Shuffle rest with slight bias toward natural introspective flow
  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rest[i], rest[j]] = [rest[j], rest[i]];
  }
  return ['colour', 'sky', ...rest];
}

// Build one session object
function buildSession(mood, answers, daysAgo = 0, feedbackOverride = null) {
  const order = buildAnswerOrder();
  const dwellMs = {};
  order.forEach(q => { dwellMs[q] = buildDwell(q); });

  const ts = Date.now()
    - (daysAgo * 86400000)
    - Math.round(Math.random() * 43200000);

  const confRange = mood.confidence || [0.60, 0.78];
  const confidence = confRange[0] + Math.random() * (confRange[1] - confRange[0]);

  return {
    id:          uid(),
    ts,
    answers,
    answerOrder: order,
    dwellMs,
    result: {
      mood:       mood.name,
      zone:       mood.zone,
      confidence: Math.round(confidence * 1000) / 1000,
      neighbors:  [mood.name],
    },
    feedback: feedbackOverride || 'right',
  };
}

// ── STRATEGY 1: Primary sessions from mood signatures ─────────────────────────
function generatePrimary() {
  const sessions = [];
  MOODS.forEach(mood => {
    for (let v = 0; v < mood.freq; v++) {
      const answers = {};
      Q_IDS.forEach(qId => {
        const sigOpts = mood.signature[qId];
        if (sigOpts && sigOpts.length > 0) {
          answers[qId] = pickSigOption(sigOpts, v);
        } else {
          // No signature for this question — use neutral
          answers[qId] = NEUTRAL[qId];
        }
      });
      const daysAgo = Math.round(Math.random() * 28);
      sessions.push(buildSession(mood, answers, daysAgo));
    }
  });
  return sessions;
}

// ── STRATEGY 2: Systematic option coverage ────────────────────────────────────
// Ensures every one of the 56 options appears at least 3 times
// as a PRIMARY answer, with the rest of the answer set built from
// the mood whose coordinate space best fits that option's vote values.
//
// Vote values map:
const VOTE_MAP = {
  colour:    { 'honey-gold':{e:1,v:1,c:1},'ember-red':{e:1,v:-1,c:-1},'petal-blush':{e:-1,v:1,c:-1},'morning-frost':{e:-1,v:1,c:1},'storm-grey':{e:1,v:-1,c:-1},'forest-floor':{e:-1,v:1,c:0},'midnight-plum':{e:-1,v:-1,c:-1},'arctic-dusk':{e:-1,v:1,c:1} },
  sky:       { 'golden-morning':{e:1,v:1,c:1},'silver-fog':{e:-1,v:0,c:-1},'open-blue':{e:0,v:1,c:2},'distant-storm':{e:1,v:-1,c:-1},'amber-dusk':{e:-1,v:1,c:0},'midnight-air':{e:-1,v:-1,c:0},'after-rain':{e:-1,v:1,c:1},'windswept':{e:1,v:-1,c:-2} },
  pulse:     { 'still':{e:-1,v:-1,c:-1},'hushed':{e:-1,v:1,c:0},'steady':{e:-1,v:1,c:1},'drifting':{e:-1,v:0,c:-1},'flickering':{e:-1,v:-1,c:-2},'restless':{e:1,v:-1,c:-1},'surging':{e:1,v:1,c:1},'racing':{e:1,v:-1,c:0} },
  texture:   { 'heavy-wool':{e:-1,v:-1,c:-1},'rough-sand':{e:1,v:-1,c:1},'clean-linen':{e:-1,v:1,c:2},'sunwarm-stone':{e:1,v:1,c:1},'cold-glass':{e:-1,v:-1,c:1},'wet-bark':{e:-1,v:-1,c:-1},'soft-velvet':{e:-1,v:1,c:-1},'cracked-earth':{e:-1,v:-1,c:-2} },
  sound:     { 'late-night-piano':{e:1,v:1,c:1},'forest-birds':{e:-1,v:1,c:1},'ocean-tide':{e:-1,v:1,c:-1},'midnight-crickets':{e:-1,v:1,c:0},'distant-thunder':{e:1,v:-1,c:-1},'silence':{e:-1,v:0,c:-2},'crackling-fire':{e:-1,v:1,c:1},'wind-through-trees':{e:1,v:0,c:-1} },
  battery:   { 'depleted':{e:-1,v:-1,c:-1},'dim':{e:-1,v:-1,c:-1},'fragile':{e:-1,v:-1,c:-1},'floating':{e:-1,v:0,c:-1},'balanced':{e:0,v:1,c:1},'bright':{e:1,v:1,c:1},'electric':{e:1,v:1,c:2},'saturated':{e:1,v:-1,c:-2} },
  timeofday: { 'early-morning':{e:-1,v:1,c:1},'mid-morning':{e:1,v:1,c:2},'afternoon':{e:1,v:0,c:1},'late-afternoon':{e:-1,v:1,c:0},'dusk':{e:-1,v:1,c:-1},'night':{e:-1,v:-1,c:-1},'deep-night':{e:-1,v:-1,c:-2},'predawn':{e:0,v:-1,c:-2} },
};

// Find the mood whose coordinate is closest to a given (e,v,c) vote
function bestMoodForVotes(e, v, c) {
  const MOOD_COORDS = {
    'Radiant':{e:5,v:5,c:2},'Bright':{e:3,v:4,c:3},'Energised':{e:4,v:3,c:3},
    'Determined':{e:3,v:1,c:5},'Alive':{e:2,v:2,c:1},
    'Peaceful':{e:-5,v:5,c:2},'Tender':{e:-3,v:4,c:-1},'Calm':{e:-4,v:3,c:2},'Soft':{e:-2,v:2,c:-1},
    'Grateful':{e:0,v:5,c:2},'Nostalgic':{e:-3,v:4,c:-3},
    'Even':{e:0,v:0,c:0},
    'Edged':{e:5,v:-4,c:2},'Wired':{e:4,v:-3,c:1},'Anxious':{e:4,v:-4,c:-3},
    'Restless':{e:3,v:-2,c:-1},'Frayed':{e:2,v:-2,c:-2},
    'Muted':{e:-4,v:-2,c:-2},'Heavy':{e:-5,v:-4,c:-1},'Hollow':{e:-3,v:-5,c:-3},
    'Withdrawn':{e:-2,v:-3,c:-2},'Numb':{e:-2,v:0,c:-4},
  };
  let best = null, bestDist = Infinity;
  Object.entries(MOOD_COORDS).forEach(([name, coord]) => {
    const d = Math.sqrt(
      (e*7 - coord.e)**2 + (v*7 - coord.v)**2 + (c*7 - coord.c)**2
    );
    if (d < bestDist) { bestDist = d; best = name; }
  });
  return MOODS.find(m => m.name === best) || MOODS[0];
}

function generateSystematic() {
  const sessions = [];
  // Track how many times each option has appeared
  const optionCounts = {};
  Q_IDS.forEach(qId => {
    optionCounts[qId] = {};
    Q_OPTIONS[qId].forEach(oId => { optionCounts[qId][oId] = 0; });
  });

  // For each option that needs more coverage, build sessions featuring it
  const TARGET = 8; // each option should appear at least 8 times total
  let passes = 0;
  while (passes < 3) {
    Q_IDS.forEach(qId => {
      Q_OPTIONS[qId].forEach(optId => {
        if (optionCounts[qId][optId] < TARGET) {
          const votes = VOTE_MAP[qId][optId];
          const mood = bestMoodForVotes(votes.e, votes.v, votes.c);

          // Build answer set with this option as the featured answer
          const answers = {};
          Q_IDS.forEach(q => {
            if (q === qId) {
              answers[q] = optId;
            } else {
              const sig = mood.signature[q];
              answers[q] = sig ? rnd(sig) : NEUTRAL[q];
            }
          });

          const daysAgo = Math.round(Math.random() * 28);
          sessions.push(buildSession(mood, answers, daysAgo));

          // Update counts for all options in this session
          Q_IDS.forEach(q => { optionCounts[q][answers[q]]++; });
        }
      });
    });
    passes++;
  }

  return sessions;
}

// ── STRATEGY 3: Adjacent mood edge cases ──────────────────────────────────────
// For each adjacent pair, generate sessions that blend signature options
// from both moods. This teaches the Bayesian layer where the boundaries are.
function generateEdgeCases() {
  const sessions = [];

  ADJACENT_PAIRS.forEach(([nameA, nameB]) => {
    const moodA = MOODS.find(m => m.name === nameA);
    const moodB = MOODS.find(m => m.name === nameB);
    if (!moodA || !moodB) return;

    // Generate 6 sessions per adjacent pair — 3 leaning toward A, 3 toward B
    for (let i = 0; i < 6; i++) {
      const primaryMood = i < 3 ? moodA : moodB;
      const secondaryMood = i < 3 ? moodB : moodA;

      const answers = {};
      Q_IDS.forEach(qId => {
        // Alternate: some questions from primary signature, some from secondary
        const usePrimary = Math.random() > 0.4; // 60% primary, 40% secondary
        const primaryOpts = primaryMood.signature[qId];
        const secondaryOpts = secondaryMood.signature[qId];

        if (usePrimary && primaryOpts?.length) {
          answers[qId] = rnd(primaryOpts);
        } else if (secondaryOpts?.length) {
          answers[qId] = rnd(secondaryOpts);
        } else if (primaryOpts?.length) {
          answers[qId] = rnd(primaryOpts);
        } else {
          answers[qId] = NEUTRAL[qId];
        }
      });

      const daysAgo = Math.round(Math.random() * 28);
      // Edge case sessions get confidence label of primary mood but slightly lower
      const edgeMood = {
        ...primaryMood,
        confidence: [
          primaryMood.confidence[0] - 0.08,
          primaryMood.confidence[1] - 0.06,
        ],
      };
      sessions.push(buildSession(edgeMood, answers, daysAgo));
    }
  });

  return sessions;
}

// ── STRATEGY 4: "Not quite" sessions ─────────────────────────────────────────
// A realistic dataset has some inaccurate results. Generate ~8% of sessions
// with feedback: 'notquite' to seed the weight learning system too.
function generateNotQuiteSessions(primarySessions) {
  const notQuite = [];
  // Pick ~8% of primary sessions, mark as 'notquite'
  const target = Math.round(primarySessions.length * 0.08);
  const shuffled = [...primarySessions].sort(() => Math.random() - 0.5);
  shuffled.slice(0, target).forEach(s => {
    notQuite.push({ ...s, id: uid(), feedback: 'notquite' });
  });
  return notQuite;
}

// ── Build Bayesian profiles from sessions ─────────────────────────────────────
function buildProfiles(sessions) {
  const profiles = {};
  sessions.forEach(session => {
    // Only 'right' sessions train the profiles
    if (session.feedback !== 'right') return;
    const mood = session.result.mood;
    if (!profiles[mood]) profiles[mood] = { count: 0, answers: {} };
    profiles[mood].count++;
    Object.entries(session.answers).forEach(([qId, oId]) => {
      if (!profiles[mood].answers[qId]) profiles[mood].answers[qId] = {};
      profiles[mood].answers[qId][oId] = (profiles[mood].answers[qId][oId] || 0) + 1;
    });
  });
  return profiles;
}

// ── Coverage report ───────────────────────────────────────────────────────────
function coverageReport(sessions) {
  const counts = {};
  Q_IDS.forEach(qId => {
    counts[qId] = {};
    Q_OPTIONS[qId].forEach(oId => { counts[qId][oId] = 0; });
  });
  sessions.forEach(s => {
    Q_IDS.forEach(qId => {
      if (s.answers[qId]) counts[qId][s.answers[qId]]++;
    });
  });

  const lines = [];
  let allCovered = true;
  Q_IDS.forEach(qId => {
    Q_OPTIONS[qId].forEach(oId => {
      const c = counts[qId][oId];
      if (c < 3) { allCovered = false; lines.push(`  ⚠ ${qId}.${oId}: ${c} (below minimum)`); }
    });
  });

  const moodCounts = {};
  sessions.forEach(s => { moodCounts[s.result.mood] = (moodCounts[s.result.mood] || 0) + 1; });

  return { counts, moodCounts, allCovered, warnings: lines };
}

// ── Assemble ──────────────────────────────────────────────────────────────────
console.log('Generating primary sessions...');
const primary    = generatePrimary();

console.log('Generating systematic coverage sessions...');
const systematic = generateSystematic();

console.log('Generating edge case sessions...');
const edges      = generateEdgeCases();

console.log('Generating not-quite sessions...');
const notQuite   = generateNotQuiteSessions(primary);

const allSessions = [...primary, ...systematic, ...edges, ...notQuite];

// Shuffle so moods aren't grouped
allSessions.sort(() => Math.random() - 0.5);

// Build profiles (only from 'right' sessions)
const profiles = buildProfiles(allSessions.filter(s => s.feedback === 'right'));

const meta = {
  count:            allSessions.length,
  rightCount:       allSessions.filter(s => s.feedback === 'right').length,
  notQuiteCount:    allSessions.filter(s => s.feedback === 'notquite').length,
  profiledMoods:    Object.keys(profiles).length,
  generatedAt:      new Date().toISOString(),
  strategies: {
    primary:    primary.length,
    systematic: systematic.length,
    edgeCases:  edges.length,
    notQuite:   notQuite.length,
  },
};

// ── Coverage report ───────────────────────────────────────────────────────────
const report = coverageReport(allSessions);

console.log('\n' + '='.repeat(70));
console.log('MOOD MODE — EXTENDED SEED DATA');
console.log('='.repeat(70));
console.log(`Total sessions:   ${allSessions.length}`);
console.log(`  Primary:        ${primary.length}`);
console.log(`  Systematic:     ${systematic.length}`);
console.log(`  Edge cases:     ${edges.length}`);
console.log(`  Not quite (~8%):${notQuite.length}`);
console.log(`Moods profiled:   ${Object.keys(profiles).length} / ${MOODS.length}`);
console.log(`All 56 options covered: ${report.allCovered ? '✓ yes' : '✗ no'}`);
if (report.warnings.length) report.warnings.forEach(w => console.log(w));

console.log('\nSessions per mood:');
Object.entries(report.moodCounts)
  .sort((a,b) => b[1]-a[1])
  .forEach(([m,c]) => console.log(`  ${m.padEnd(14)}: ${'█'.repeat(Math.min(c,40))} ${c}`));

// ── Write seed-data.json ──────────────────────────────────────────────────────
const seedJson = { meta, sessions: allSessions, profiles };
fs.writeFileSync('seed-data.json', JSON.stringify(seedJson, null, 2), 'utf8');
const jsonSize = (fs.statSync('seed-data.json').size / 1024).toFixed(0);
console.log(`\n✓ seed-data.json written (${jsonSize} KB) — commit this to git`);

// ── Write seed-loader.js ──────────────────────────────────────────────────────
const loaderScript = `// Mood Mode — Seed Data Loader
// Auto-generated by seed-data.js — do not edit manually.
// Add seed-loader.js to .gitignore (it is regenerated from seed-data.js).
//
// Usage: paste this entire file into the browser console on localhost:8080
// then reload the page.

(function() {
  const SESSIONS_KEY = 'mm_sessions';
  const PROFILES_KEY = 'mm_profiles';
  const META_KEY     = 'mm_meta';

  // Load existing real sessions — never overwrite them
  let existing = [];
  try { existing = JSON.parse(localStorage.getItem(SESSIONS_KEY) || '[]'); } catch {}
  const existingIds = new Set(existing.map(s => s.id));

  const seed = ${JSON.stringify(allSessions)};
  const newSeed = seed.filter(s => !existingIds.has(s.id));
  const merged = [...existing, ...newSeed].slice(0, 500);
  localStorage.setItem(SESSIONS_KEY, JSON.stringify(merged));

  // Merge profiles — add seed counts on top of any existing real counts
  const seedProfiles = ${JSON.stringify(profiles)};
  let existingProfiles = {};
  try { existingProfiles = JSON.parse(localStorage.getItem(PROFILES_KEY) || '{}'); } catch {}
  Object.entries(seedProfiles).forEach(([mood, data]) => {
    if (!existingProfiles[mood]) existingProfiles[mood] = { count: 0, answers: {} };
    existingProfiles[mood].count += data.count;
    Object.entries(data.answers).forEach(([qId, opts]) => {
      if (!existingProfiles[mood].answers[qId]) existingProfiles[mood].answers[qId] = {};
      Object.entries(opts).forEach(([oId, count]) => {
        existingProfiles[mood].answers[qId][oId] = (existingProfiles[mood].answers[qId][oId] || 0) + count;
      });
    });
  });
  localStorage.setItem(PROFILES_KEY, JSON.stringify(existingProfiles));

  // Meta
  const meta = ${JSON.stringify(meta)};
  let existingMeta = {};
  try { existingMeta = JSON.parse(localStorage.getItem(META_KEY) || '{}'); } catch {}
  localStorage.setItem(META_KEY, JSON.stringify({
    ...meta,
    count: (existingMeta.count || 0) + meta.count,
  }));

  console.log('✓ Mood Mode seed data loaded:');
  console.log('  Sessions added:', newSeed.length);
  console.log('  Total sessions:', merged.length);
  console.log('  Moods profiled:', Object.keys(existingProfiles).length);
  console.log('  Strategies:', ${JSON.stringify(meta.strategies)});
  console.log('  Reload the page to activate Bayesian layer.');
})();`;

fs.writeFileSync('seed-loader.js', loaderScript, 'utf8');
const loaderSize = (fs.statSync('seed-loader.js').size / 1024).toFixed(0);
console.log(`✓ seed-loader.js written (${loaderSize} KB) — add to .gitignore`);

console.log('\n' + '─'.repeat(70));
console.log('For colleagues:');
console.log('  1. node seed-data.js              ← regenerate both files');
console.log('  2. Open localhost:8080');
console.log('  3. Paste seed-loader.js into browser console');
console.log('  4. Reload → Insights panel shows active Bayesian layer');
console.log('─'.repeat(70));
