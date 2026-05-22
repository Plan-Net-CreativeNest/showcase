// Mood Mode — Seed Data Loader
// Paste this into the browser console on localhost:8080
// It pre-populates mm_sessions, mm_profiles, and mm_meta
// without affecting any real sessions you may have already collected.

(function() {
  const SESSIONS_KEY = 'mm_sessions';
  const PROFILES_KEY = 'mm_profiles';
  const META_KEY     = 'mm_meta';

  // Load existing real sessions (don't overwrite them)
  let existing = [];
  try { existing = JSON.parse(localStorage.getItem(SESSIONS_KEY) || '[]'); } catch {}
  const existingIds = new Set(existing.map(s => s.id));

  // Seed sessions
  const seed = [
  {
    "id": "98b0ewkg",
    "ts": 1779169690366,
    "answers": {
      "colour": "storm-grey",
      "sky": "distant-storm",
      "pulse": "restless",
      "texture": "rough-sand",
      "sound": "midnight-crickets",
      "battery": "saturated",
      "timeofday": "predawn"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "texture",
      "timeofday",
      "sound",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2464,
      "sky": 3012,
      "battery": 2696,
      "texture": 4110,
      "timeofday": 4583,
      "sound": 3501,
      "pulse": 4474
    },
    "result": {
      "mood": "Edged",
      "zone": "Wildfire Dusk",
      "confidence": 0.7403144525350897,
      "neighbors": [
        "Edged"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "aiw12abw",
    "ts": 1779190802373,
    "answers": {
      "colour": "honey-gold",
      "sky": "golden-morning",
      "pulse": "surging",
      "texture": "sunwarm-stone",
      "sound": "late-night-piano",
      "battery": "electric",
      "timeofday": "afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "pulse",
      "sound",
      "texture"
    ],
    "dwellMs": {
      "colour": 2591,
      "sky": 3564,
      "timeofday": 4851,
      "battery": 2930,
      "pulse": 4425,
      "sound": 3488,
      "texture": 3529
    },
    "result": {
      "mood": "Determined",
      "zone": "Golden Hour",
      "confidence": 0.6825685961827436,
      "neighbors": [
        "Determined"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "3a539nh2",
    "ts": 1778237227436,
    "answers": {
      "colour": "morning-frost",
      "sky": "amber-dusk",
      "pulse": "drifting",
      "texture": "soft-velvet",
      "sound": "crackling-fire",
      "battery": "floating",
      "timeofday": "late-afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "sound",
      "texture",
      "battery",
      "pulse",
      "timeofday"
    ],
    "dwellMs": {
      "colour": 1901,
      "sky": 3247,
      "sound": 3893,
      "texture": 4253,
      "battery": 3593,
      "pulse": 3765,
      "timeofday": 5140
    },
    "result": {
      "mood": "Tender",
      "zone": "Morning Mist",
      "confidence": 0.7686351590519876,
      "neighbors": [
        "Tender"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "34vh0ksi",
    "ts": 1779190584908,
    "answers": {
      "colour": "petal-blush",
      "sky": "silver-fog",
      "pulse": "hushed",
      "texture": "soft-velvet",
      "sound": "ocean-tide",
      "battery": "floating",
      "timeofday": "dusk"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "sound",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2697,
      "sky": 3092,
      "timeofday": 4893,
      "battery": 2898,
      "sound": 3945,
      "texture": 4045,
      "pulse": 3766
    },
    "result": {
      "mood": "Tender",
      "zone": "Morning Mist",
      "confidence": 0.7153431878297847,
      "neighbors": [
        "Tender"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "wx3qphh7",
    "ts": 1778491317969,
    "answers": {
      "colour": "forest-floor",
      "sky": "open-blue",
      "pulse": "steady",
      "texture": "clean-linen",
      "sound": "forest-birds",
      "battery": "balanced",
      "timeofday": "early-morning"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "pulse",
      "texture",
      "battery",
      "sound"
    ],
    "dwellMs": {
      "colour": 2024,
      "sky": 2933,
      "timeofday": 5381,
      "pulse": 4096,
      "texture": 4019,
      "battery": 2621,
      "sound": 3774
    },
    "result": {
      "mood": "Calm",
      "zone": "Morning Mist",
      "confidence": 0.7398143894825816,
      "neighbors": [
        "Calm"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "5t2h4xb3",
    "ts": 1778488978446,
    "answers": {
      "colour": "morning-frost",
      "sky": "open-blue",
      "pulse": "steady",
      "texture": "sunwarm-stone",
      "sound": "midnight-crickets",
      "battery": "floating",
      "timeofday": "mid-morning"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "texture",
      "sound",
      "battery",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2024,
      "sky": 2925,
      "timeofday": 5237,
      "texture": 4344,
      "sound": 3221,
      "battery": 2908,
      "pulse": 4714
    },
    "result": {
      "mood": "Bright",
      "zone": "Golden Hour",
      "confidence": 0.795916041216186,
      "neighbors": [
        "Bright"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "6y9qs2dq",
    "ts": 1778386098464,
    "answers": {
      "colour": "arctic-dusk",
      "sky": "after-rain",
      "pulse": "hushed",
      "texture": "sunwarm-stone",
      "sound": "ocean-tide",
      "battery": "floating",
      "timeofday": "late-afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "sound",
      "timeofday",
      "pulse",
      "battery",
      "texture"
    ],
    "dwellMs": {
      "colour": 2654,
      "sky": 3126,
      "sound": 3054,
      "timeofday": 4563,
      "pulse": 4321,
      "battery": 2755,
      "texture": 4161
    },
    "result": {
      "mood": "Peaceful",
      "zone": "Morning Mist",
      "confidence": 0.7757751633202661,
      "neighbors": [
        "Peaceful"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "twxdinqr",
    "ts": 1778821041575,
    "answers": {
      "colour": "ember-red",
      "sky": "golden-morning",
      "pulse": "racing",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "bright",
      "timeofday": "afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "pulse",
      "timeofday",
      "texture",
      "sound"
    ],
    "dwellMs": {
      "colour": 1672,
      "sky": 3131,
      "battery": 2824,
      "pulse": 3996,
      "timeofday": 4871,
      "texture": 4372,
      "sound": 3928
    },
    "result": {
      "mood": "Energised",
      "zone": "Golden Hour",
      "confidence": 0.8077501305480139,
      "neighbors": [
        "Energised"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "b6pu60x8",
    "ts": 1779279498931,
    "answers": {
      "colour": "morning-frost",
      "sky": "open-blue",
      "pulse": "steady",
      "texture": "cold-glass",
      "sound": "late-night-piano",
      "battery": "bright",
      "timeofday": "mid-morning"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "pulse",
      "sound",
      "texture"
    ],
    "dwellMs": {
      "colour": 2790,
      "sky": 2717,
      "timeofday": 4430,
      "battery": 2594,
      "pulse": 4609,
      "sound": 3494,
      "texture": 4177
    },
    "result": {
      "mood": "Determined",
      "zone": "Golden Hour",
      "confidence": 0.6869975340175174,
      "neighbors": [
        "Determined"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "91i8j09a",
    "ts": 1779071278805,
    "answers": {
      "colour": "honey-gold",
      "sky": "open-blue",
      "pulse": "surging",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "bright",
      "timeofday": "afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "sound",
      "timeofday",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2402,
      "sky": 3665,
      "battery": 2557,
      "sound": 3472,
      "timeofday": 4823,
      "texture": 3432,
      "pulse": 3665
    },
    "result": {
      "mood": "Radiant",
      "zone": "Golden Hour",
      "confidence": 0.7885380960817827,
      "neighbors": [
        "Radiant"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "ydtowf75",
    "ts": 1778919994971,
    "answers": {
      "colour": "honey-gold",
      "sky": "amber-dusk",
      "pulse": "hushed",
      "texture": "soft-velvet",
      "sound": "crackling-fire",
      "battery": "floating",
      "timeofday": "dusk"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "pulse",
      "sound",
      "battery",
      "texture"
    ],
    "dwellMs": {
      "colour": 2210,
      "sky": 3661,
      "timeofday": 4583,
      "pulse": 4781,
      "sound": 3872,
      "battery": 2907,
      "texture": 3454
    },
    "result": {
      "mood": "Nostalgic",
      "zone": "Amber Hours",
      "confidence": 0.7046823328698184,
      "neighbors": [
        "Nostalgic"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "evvfhgd8",
    "ts": 1779085689827,
    "answers": {
      "colour": "honey-gold",
      "sky": "open-blue",
      "pulse": "surging",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "bright",
      "timeofday": "afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "sound",
      "texture",
      "battery",
      "pulse",
      "timeofday"
    ],
    "dwellMs": {
      "colour": 1867,
      "sky": 3126,
      "sound": 3376,
      "texture": 3598,
      "battery": 2591,
      "pulse": 4193,
      "timeofday": 4323
    },
    "result": {
      "mood": "Radiant",
      "zone": "Golden Hour",
      "confidence": 0.8310563354872974,
      "neighbors": [
        "Radiant"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "l21mjwuh",
    "ts": 1779068165023,
    "answers": {
      "colour": "ember-red",
      "sky": "distant-storm",
      "pulse": "racing",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "electric",
      "timeofday": "night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "pulse",
      "timeofday",
      "sound",
      "texture",
      "battery"
    ],
    "dwellMs": {
      "colour": 2672,
      "sky": 2761,
      "pulse": 4001,
      "timeofday": 5170,
      "sound": 3197,
      "texture": 3307,
      "battery": 2505
    },
    "result": {
      "mood": "Wired",
      "zone": "Wildfire Dusk",
      "confidence": 0.7134503636569367,
      "neighbors": [
        "Wired"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "ilmdz88f",
    "ts": 1779089743983,
    "answers": {
      "colour": "arctic-dusk",
      "sky": "silver-fog",
      "pulse": "still",
      "texture": "soft-velvet",
      "sound": "silence",
      "battery": "dim",
      "timeofday": "predawn"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "texture",
      "timeofday",
      "sound",
      "pulse"
    ],
    "dwellMs": {
      "colour": 1661,
      "sky": 2698,
      "battery": 3055,
      "texture": 3924,
      "timeofday": 4681,
      "sound": 3770,
      "pulse": 4622
    },
    "result": {
      "mood": "Hollow",
      "zone": "Blue Hour",
      "confidence": 0.7017740607663373,
      "neighbors": [
        "Hollow"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "hsb36in5",
    "ts": 1778590258131,
    "answers": {
      "colour": "ember-red",
      "sky": "distant-storm",
      "pulse": "racing",
      "texture": "soft-velvet",
      "sound": "distant-thunder",
      "battery": "floating",
      "timeofday": "late-afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "texture",
      "sound",
      "pulse",
      "battery"
    ],
    "dwellMs": {
      "colour": 2155,
      "sky": 3402,
      "timeofday": 4417,
      "texture": 3869,
      "sound": 3969,
      "pulse": 3601,
      "battery": 2916
    },
    "result": {
      "mood": "Restless",
      "zone": "Wildfire Dusk",
      "confidence": 0.6877525933616354,
      "neighbors": [
        "Restless"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "4frvl3fs",
    "ts": 1778667317547,
    "answers": {
      "colour": "morning-frost",
      "sky": "amber-dusk",
      "pulse": "drifting",
      "texture": "soft-velvet",
      "sound": "crackling-fire",
      "battery": "floating",
      "timeofday": "late-afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "pulse",
      "battery",
      "texture",
      "sound"
    ],
    "dwellMs": {
      "colour": 2195,
      "sky": 2613,
      "timeofday": 4222,
      "pulse": 4077,
      "battery": 2620,
      "texture": 3235,
      "sound": 3401
    },
    "result": {
      "mood": "Tender",
      "zone": "Morning Mist",
      "confidence": 0.7097349624603995,
      "neighbors": [
        "Tender"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "wlawl7gx",
    "ts": 1778394981033,
    "answers": {
      "colour": "ember-red",
      "sky": "distant-storm",
      "pulse": "racing",
      "texture": "soft-velvet",
      "sound": "distant-thunder",
      "battery": "floating",
      "timeofday": "late-afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "sound",
      "texture",
      "timeofday",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2337,
      "sky": 3526,
      "battery": 2652,
      "sound": 3909,
      "texture": 4390,
      "timeofday": 4859,
      "pulse": 4515
    },
    "result": {
      "mood": "Restless",
      "zone": "Wildfire Dusk",
      "confidence": 0.6877547630265295,
      "neighbors": [
        "Restless"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "yk3px3zm",
    "ts": 1778731202408,
    "answers": {
      "colour": "midnight-plum",
      "sky": "silver-fog",
      "pulse": "restless",
      "texture": "cracked-earth",
      "sound": "silence",
      "battery": "depleted",
      "timeofday": "night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "timeofday",
      "sound",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2044,
      "sky": 3418,
      "battery": 3292,
      "timeofday": 4968,
      "sound": 3267,
      "texture": 3468,
      "pulse": 4640
    },
    "result": {
      "mood": "Anxious",
      "zone": "Wildfire Dusk",
      "confidence": 0.7376079461554494,
      "neighbors": [
        "Anxious"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "tq3c5mpl",
    "ts": 1779418866762,
    "answers": {
      "colour": "forest-floor",
      "sky": "silver-fog",
      "pulse": "drifting",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "balanced",
      "timeofday": "afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "pulse",
      "battery",
      "sound",
      "texture"
    ],
    "dwellMs": {
      "colour": 2727,
      "sky": 3191,
      "timeofday": 4735,
      "pulse": 4001,
      "battery": 3184,
      "sound": 3354,
      "texture": 4294
    },
    "result": {
      "mood": "Even",
      "zone": "Dead Calm",
      "confidence": 0.5297132193473124,
      "neighbors": [
        "Even"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "fqg3w3by",
    "ts": 1778243851009,
    "answers": {
      "colour": "arctic-dusk",
      "sky": "amber-dusk",
      "pulse": "drifting",
      "texture": "clean-linen",
      "sound": "midnight-crickets",
      "battery": "floating",
      "timeofday": "late-afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "texture",
      "timeofday",
      "pulse",
      "sound"
    ],
    "dwellMs": {
      "colour": 2463,
      "sky": 3597,
      "battery": 2667,
      "texture": 4159,
      "timeofday": 4208,
      "pulse": 4370,
      "sound": 2927
    },
    "result": {
      "mood": "Soft",
      "zone": "Morning Mist",
      "confidence": 0.6403830979071993,
      "neighbors": [
        "Soft"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "w7ps5rj9",
    "ts": 1778846323319,
    "answers": {
      "colour": "forest-floor",
      "sky": "golden-morning",
      "pulse": "drifting",
      "texture": "sunwarm-stone",
      "sound": "late-night-piano",
      "battery": "fragile",
      "timeofday": "late-afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "sound",
      "battery",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2706,
      "sky": 2751,
      "timeofday": 4227,
      "sound": 2906,
      "battery": 2767,
      "texture": 3737,
      "pulse": 3742
    },
    "result": {
      "mood": "Nostalgic",
      "zone": "Amber Hours",
      "confidence": 0.6583622689134474,
      "neighbors": [
        "Nostalgic"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "1v1xw0kt",
    "ts": 1778379496599,
    "answers": {
      "colour": "storm-grey",
      "sky": "silver-fog",
      "pulse": "drifting",
      "texture": "cracked-earth",
      "sound": "midnight-crickets",
      "battery": "fragile",
      "timeofday": "night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "sound",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2387,
      "sky": 3309,
      "timeofday": 4708,
      "battery": 2548,
      "sound": 3946,
      "texture": 3933,
      "pulse": 4361
    },
    "result": {
      "mood": "Heavy",
      "zone": "Blue Hour",
      "confidence": 0.7948883147080067,
      "neighbors": [
        "Heavy"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "ru74hdae",
    "ts": 1779276844656,
    "answers": {
      "colour": "honey-gold",
      "sky": "golden-morning",
      "pulse": "surging",
      "texture": "sunwarm-stone",
      "sound": "late-night-piano",
      "battery": "electric",
      "timeofday": "afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "timeofday",
      "pulse",
      "texture",
      "sound"
    ],
    "dwellMs": {
      "colour": 2556,
      "sky": 2600,
      "battery": 3009,
      "timeofday": 4940,
      "pulse": 4250,
      "texture": 4167,
      "sound": 3323
    },
    "result": {
      "mood": "Determined",
      "zone": "Golden Hour",
      "confidence": 0.6916140610151305,
      "neighbors": [
        "Determined"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "barurjrf",
    "ts": 1779172730168,
    "answers": {
      "colour": "petal-blush",
      "sky": "golden-morning",
      "pulse": "drifting",
      "texture": "sunwarm-stone",
      "sound": "ocean-tide",
      "battery": "fragile",
      "timeofday": "late-afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "sound",
      "battery",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2549,
      "sky": 2593,
      "timeofday": 4268,
      "sound": 2958,
      "battery": 3261,
      "texture": 4343,
      "pulse": 3716
    },
    "result": {
      "mood": "Nostalgic",
      "zone": "Amber Hours",
      "confidence": 0.6349861405431108,
      "neighbors": [
        "Nostalgic"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "9rqegqlh",
    "ts": 1778655096995,
    "answers": {
      "colour": "forest-floor",
      "sky": "silver-fog",
      "pulse": "still",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "floating",
      "timeofday": "afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "pulse",
      "texture",
      "sound"
    ],
    "dwellMs": {
      "colour": 1950,
      "sky": 2988,
      "timeofday": 5351,
      "battery": 3093,
      "pulse": 3807,
      "texture": 3716,
      "sound": 3402
    },
    "result": {
      "mood": "Even",
      "zone": "Dead Calm",
      "confidence": 0.5569850487330781,
      "neighbors": [
        "Even"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "zf0smijh",
    "ts": 1779431447588,
    "answers": {
      "colour": "honey-gold",
      "sky": "golden-morning",
      "pulse": "steady",
      "texture": "sunwarm-stone",
      "sound": "crackling-fire",
      "battery": "balanced",
      "timeofday": "late-afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "sound",
      "texture",
      "pulse",
      "timeofday"
    ],
    "dwellMs": {
      "colour": 1959,
      "sky": 3662,
      "battery": 3595,
      "sound": 4057,
      "texture": 3750,
      "pulse": 4586,
      "timeofday": 4343
    },
    "result": {
      "mood": "Grateful",
      "zone": "Amber Hours",
      "confidence": 0.7163520070341133,
      "neighbors": [
        "Grateful"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "aooxg0z6",
    "ts": 1778587063353,
    "answers": {
      "colour": "petal-blush",
      "sky": "silver-fog",
      "pulse": "hushed",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "floating",
      "timeofday": "dusk"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "texture",
      "sound",
      "timeofday",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2629,
      "sky": 2939,
      "battery": 2859,
      "texture": 4357,
      "sound": 3324,
      "timeofday": 5054,
      "pulse": 4558
    },
    "result": {
      "mood": "Soft",
      "zone": "Morning Mist",
      "confidence": 0.6310669996805772,
      "neighbors": [
        "Soft"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "gcpzz3wj",
    "ts": 1779353456349,
    "answers": {
      "colour": "honey-gold",
      "sky": "golden-morning",
      "pulse": "surging",
      "texture": "clean-linen",
      "sound": "midnight-crickets",
      "battery": "floating",
      "timeofday": "mid-morning"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "sound",
      "texture",
      "pulse",
      "timeofday"
    ],
    "dwellMs": {
      "colour": 1764,
      "sky": 2914,
      "battery": 3016,
      "sound": 2984,
      "texture": 3379,
      "pulse": 4713,
      "timeofday": 4260
    },
    "result": {
      "mood": "Bright",
      "zone": "Golden Hour",
      "confidence": 0.7193527952107188,
      "neighbors": [
        "Bright"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "9o7210mc",
    "ts": 1778581323665,
    "answers": {
      "colour": "storm-grey",
      "sky": "silver-fog",
      "pulse": "drifting",
      "texture": "cracked-earth",
      "sound": "midnight-crickets",
      "battery": "fragile",
      "timeofday": "night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "texture",
      "pulse",
      "sound",
      "battery"
    ],
    "dwellMs": {
      "colour": 2082,
      "sky": 3350,
      "timeofday": 5112,
      "texture": 4024,
      "pulse": 3623,
      "sound": 3499,
      "battery": 2761
    },
    "result": {
      "mood": "Heavy",
      "zone": "Blue Hour",
      "confidence": 0.7945875769405402,
      "neighbors": [
        "Heavy"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "3ed141mr",
    "ts": 1778502048971,
    "answers": {
      "colour": "storm-grey",
      "sky": "windswept",
      "pulse": "restless",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "fragile",
      "timeofday": "night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "sound",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 1648,
      "sky": 3589,
      "timeofday": 4939,
      "battery": 2888,
      "sound": 4061,
      "texture": 3315,
      "pulse": 3907
    },
    "result": {
      "mood": "Frayed",
      "zone": "Wildfire Dusk",
      "confidence": 0.7041486638463771,
      "neighbors": [
        "Frayed"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "t1l3a5ls",
    "ts": 1778378752087,
    "answers": {
      "colour": "arctic-dusk",
      "sky": "amber-dusk",
      "pulse": "drifting",
      "texture": "clean-linen",
      "sound": "midnight-crickets",
      "battery": "floating",
      "timeofday": "early-morning"
    },
    "answerOrder": [
      "colour",
      "sky",
      "texture",
      "timeofday",
      "sound",
      "battery",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2438,
      "sky": 2692,
      "texture": 3731,
      "timeofday": 5171,
      "sound": 3763,
      "battery": 2453,
      "pulse": 4363
    },
    "result": {
      "mood": "Soft",
      "zone": "Morning Mist",
      "confidence": 0.6790108403673012,
      "neighbors": [
        "Soft"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "24baq3jh",
    "ts": 1779011908416,
    "answers": {
      "colour": "storm-grey",
      "sky": "silver-fog",
      "pulse": "drifting",
      "texture": "cracked-earth",
      "sound": "midnight-crickets",
      "battery": "fragile",
      "timeofday": "night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "pulse",
      "texture",
      "sound",
      "battery"
    ],
    "dwellMs": {
      "colour": 2523,
      "sky": 3383,
      "timeofday": 4891,
      "pulse": 4307,
      "texture": 3663,
      "sound": 3480,
      "battery": 3139
    },
    "result": {
      "mood": "Heavy",
      "zone": "Blue Hour",
      "confidence": 0.8278821840525858,
      "neighbors": [
        "Heavy"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "tjp4k900",
    "ts": 1779433568727,
    "answers": {
      "colour": "morning-frost",
      "sky": "amber-dusk",
      "pulse": "drifting",
      "texture": "soft-velvet",
      "sound": "crackling-fire",
      "battery": "floating",
      "timeofday": "late-afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "sound",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 1712,
      "sky": 3539,
      "timeofday": 5165,
      "battery": 2644,
      "sound": 3731,
      "texture": 3834,
      "pulse": 4535
    },
    "result": {
      "mood": "Tender",
      "zone": "Morning Mist",
      "confidence": 0.7488320370622017,
      "neighbors": [
        "Tender"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "4hmm9oeo",
    "ts": 1779104960052,
    "answers": {
      "colour": "petal-blush",
      "sky": "silver-fog",
      "pulse": "restless",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "electric",
      "timeofday": "late-afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "sound",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2250,
      "sky": 3526,
      "timeofday": 4937,
      "battery": 2866,
      "sound": 3685,
      "texture": 4037,
      "pulse": 3851
    },
    "result": {
      "mood": "Alive",
      "zone": "Golden Hour",
      "confidence": 0.7496951314247452,
      "neighbors": [
        "Alive"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "39lov1kx",
    "ts": 1778476425335,
    "answers": {
      "colour": "storm-grey",
      "sky": "windswept",
      "pulse": "restless",
      "texture": "soft-velvet",
      "sound": "wind-through-trees",
      "battery": "floating",
      "timeofday": "night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "sound",
      "texture",
      "pulse",
      "timeofday",
      "battery"
    ],
    "dwellMs": {
      "colour": 1908,
      "sky": 3128,
      "sound": 3092,
      "texture": 4201,
      "pulse": 4508,
      "timeofday": 5221,
      "battery": 2895
    },
    "result": {
      "mood": "Restless",
      "zone": "Wildfire Dusk",
      "confidence": 0.6606705754481624,
      "neighbors": [
        "Restless"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "zvhhfrtu",
    "ts": 1778488546909,
    "answers": {
      "colour": "morning-frost",
      "sky": "after-rain",
      "pulse": "still",
      "texture": "cold-glass",
      "sound": "midnight-crickets",
      "battery": "floating",
      "timeofday": "late-afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "sound",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 1866,
      "sky": 3544,
      "timeofday": 5207,
      "battery": 2835,
      "sound": 3008,
      "texture": 3868,
      "pulse": 4474
    },
    "result": {
      "mood": "Calm",
      "zone": "Morning Mist",
      "confidence": 0.7665266773909195,
      "neighbors": [
        "Calm"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "vw0aw0m2",
    "ts": 1778385770464,
    "answers": {
      "colour": "ember-red",
      "sky": "distant-storm",
      "pulse": "racing",
      "texture": "soft-velvet",
      "sound": "distant-thunder",
      "battery": "floating",
      "timeofday": "late-afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "sound",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 1895,
      "sky": 2786,
      "timeofday": 4281,
      "battery": 2886,
      "sound": 3786,
      "texture": 3289,
      "pulse": 3869
    },
    "result": {
      "mood": "Restless",
      "zone": "Wildfire Dusk",
      "confidence": 0.6504362244211045,
      "neighbors": [
        "Restless"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "mkb1haye",
    "ts": 1778290936177,
    "answers": {
      "colour": "forest-floor",
      "sky": "silver-fog",
      "pulse": "still",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "floating",
      "timeofday": "afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "sound",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 1715,
      "sky": 3150,
      "timeofday": 4845,
      "battery": 2806,
      "sound": 3293,
      "texture": 4244,
      "pulse": 4607
    },
    "result": {
      "mood": "Even",
      "zone": "Dead Calm",
      "confidence": 0.5476696867372853,
      "neighbors": [
        "Even"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "crlo05kf",
    "ts": 1778809227174,
    "answers": {
      "colour": "honey-gold",
      "sky": "golden-morning",
      "pulse": "surging",
      "texture": "sunwarm-stone",
      "sound": "late-night-piano",
      "battery": "electric",
      "timeofday": "afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "pulse",
      "texture",
      "sound"
    ],
    "dwellMs": {
      "colour": 2036,
      "sky": 2730,
      "timeofday": 5309,
      "battery": 2851,
      "pulse": 4601,
      "texture": 3324,
      "sound": 3277
    },
    "result": {
      "mood": "Determined",
      "zone": "Golden Hour",
      "confidence": 0.6847042215351133,
      "neighbors": [
        "Determined"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "hfsx9cbv",
    "ts": 1779014396165,
    "answers": {
      "colour": "honey-gold",
      "sky": "golden-morning",
      "pulse": "surging",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "electric",
      "timeofday": "mid-morning"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "sound",
      "texture",
      "battery",
      "pulse"
    ],
    "dwellMs": {
      "colour": 1678,
      "sky": 2517,
      "timeofday": 5393,
      "sound": 3959,
      "texture": 3977,
      "battery": 3021,
      "pulse": 4400
    },
    "result": {
      "mood": "Energised",
      "zone": "Golden Hour",
      "confidence": 0.7499090413926713,
      "neighbors": [
        "Energised"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "n1hvz9nu",
    "ts": 1779075758521,
    "answers": {
      "colour": "petal-blush",
      "sky": "silver-fog",
      "pulse": "restless",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "electric",
      "timeofday": "late-afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "sound",
      "pulse",
      "texture"
    ],
    "dwellMs": {
      "colour": 2462,
      "sky": 3055,
      "timeofday": 4580,
      "battery": 2650,
      "sound": 3268,
      "pulse": 3956,
      "texture": 3304
    },
    "result": {
      "mood": "Alive",
      "zone": "Golden Hour",
      "confidence": 0.6829506693964988,
      "neighbors": [
        "Alive"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "yjqn14xl",
    "ts": 1778989680273,
    "answers": {
      "colour": "forest-floor",
      "sky": "open-blue",
      "pulse": "steady",
      "texture": "clean-linen",
      "sound": "forest-birds",
      "battery": "balanced",
      "timeofday": "early-morning"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "sound",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2477,
      "sky": 2539,
      "timeofday": 5315,
      "battery": 3051,
      "sound": 3534,
      "texture": 3672,
      "pulse": 3896
    },
    "result": {
      "mood": "Peaceful",
      "zone": "Morning Mist",
      "confidence": 0.7662731534363014,
      "neighbors": [
        "Peaceful"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "5t94uxlf",
    "ts": 1779107124922,
    "answers": {
      "colour": "storm-grey",
      "sky": "windswept",
      "pulse": "restless",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "saturated",
      "timeofday": "deep-night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "sound",
      "texture",
      "timeofday",
      "battery",
      "pulse"
    ],
    "dwellMs": {
      "colour": 1984,
      "sky": 3480,
      "sound": 3765,
      "texture": 3713,
      "timeofday": 4950,
      "battery": 2618,
      "pulse": 4646
    },
    "result": {
      "mood": "Wired",
      "zone": "Wildfire Dusk",
      "confidence": 0.7429809614226589,
      "neighbors": [
        "Wired"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "pw3ej87h",
    "ts": 1778835377406,
    "answers": {
      "colour": "storm-grey",
      "sky": "windswept",
      "pulse": "restless",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "saturated",
      "timeofday": "deep-night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "texture",
      "sound",
      "battery",
      "pulse",
      "timeofday"
    ],
    "dwellMs": {
      "colour": 2796,
      "sky": 2949,
      "texture": 3412,
      "sound": 3443,
      "battery": 2768,
      "pulse": 4695,
      "timeofday": 4838
    },
    "result": {
      "mood": "Wired",
      "zone": "Wildfire Dusk",
      "confidence": 0.7753421438655884,
      "neighbors": [
        "Wired"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "v6xgoym3",
    "ts": 1779414589737,
    "answers": {
      "colour": "storm-grey",
      "sky": "midnight-air",
      "pulse": "flickering",
      "texture": "cracked-earth",
      "sound": "midnight-crickets",
      "battery": "floating",
      "timeofday": "deep-night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "sound",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2124,
      "sky": 2882,
      "timeofday": 5344,
      "battery": 2476,
      "sound": 3509,
      "texture": 3250,
      "pulse": 3932
    },
    "result": {
      "mood": "Withdrawn",
      "zone": "Blue Hour",
      "confidence": 0.7405855387984228,
      "neighbors": [
        "Withdrawn"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "9q01g6tl",
    "ts": 1779078073982,
    "answers": {
      "colour": "midnight-plum",
      "sky": "midnight-air",
      "pulse": "drifting",
      "texture": "soft-velvet",
      "sound": "silence",
      "battery": "dim",
      "timeofday": "deep-night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "sound",
      "texture",
      "pulse",
      "timeofday"
    ],
    "dwellMs": {
      "colour": 2017,
      "sky": 2984,
      "battery": 2716,
      "sound": 3509,
      "texture": 3224,
      "pulse": 3907,
      "timeofday": 5059
    },
    "result": {
      "mood": "Numb",
      "zone": "Stillwater",
      "confidence": 0.6975583609964339,
      "neighbors": [
        "Numb"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "lr7rigeb",
    "ts": 1778587591332,
    "answers": {
      "colour": "arctic-dusk",
      "sky": "after-rain",
      "pulse": "hushed",
      "texture": "sunwarm-stone",
      "sound": "ocean-tide",
      "battery": "floating",
      "timeofday": "late-afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "texture",
      "sound",
      "timeofday",
      "pulse"
    ],
    "dwellMs": {
      "colour": 1839,
      "sky": 2508,
      "battery": 2694,
      "texture": 4279,
      "sound": 4097,
      "timeofday": 4493,
      "pulse": 4610
    },
    "result": {
      "mood": "Peaceful",
      "zone": "Morning Mist",
      "confidence": 0.7785059190135587,
      "neighbors": [
        "Peaceful"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "7aleupkx",
    "ts": 1778985368632,
    "answers": {
      "colour": "midnight-plum",
      "sky": "silver-fog",
      "pulse": "still",
      "texture": "soft-velvet",
      "sound": "silence",
      "battery": "depleted",
      "timeofday": "night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "pulse",
      "battery",
      "sound",
      "texture"
    ],
    "dwellMs": {
      "colour": 1772,
      "sky": 2668,
      "timeofday": 4982,
      "pulse": 4498,
      "battery": 2823,
      "sound": 3727,
      "texture": 4196
    },
    "result": {
      "mood": "Muted",
      "zone": "Blue Hour",
      "confidence": 0.7067517016108583,
      "neighbors": [
        "Muted"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "9oxl63n4",
    "ts": 1779093664453,
    "answers": {
      "colour": "honey-gold",
      "sky": "golden-morning",
      "pulse": "surging",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "electric",
      "timeofday": "mid-morning"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "sound",
      "pulse",
      "timeofday",
      "texture"
    ],
    "dwellMs": {
      "colour": 1696,
      "sky": 3235,
      "battery": 3077,
      "sound": 3464,
      "pulse": 4131,
      "timeofday": 5165,
      "texture": 4038
    },
    "result": {
      "mood": "Radiant",
      "zone": "Golden Hour",
      "confidence": 0.8060697989397542,
      "neighbors": [
        "Radiant"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "4zmat8lq",
    "ts": 1778394070298,
    "answers": {
      "colour": "midnight-plum",
      "sky": "silver-fog",
      "pulse": "flickering",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "saturated",
      "timeofday": "predawn"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "sound",
      "texture",
      "pulse",
      "timeofday"
    ],
    "dwellMs": {
      "colour": 2162,
      "sky": 2826,
      "battery": 2723,
      "sound": 3681,
      "texture": 4158,
      "pulse": 3944,
      "timeofday": 5328
    },
    "result": {
      "mood": "Frayed",
      "zone": "Wildfire Dusk",
      "confidence": 0.7263807619794101,
      "neighbors": [
        "Frayed"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "tlc8ujux",
    "ts": 1779185066130,
    "answers": {
      "colour": "ember-red",
      "sky": "golden-morning",
      "pulse": "racing",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "bright",
      "timeofday": "afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "sound",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 1603,
      "sky": 3301,
      "timeofday": 4852,
      "battery": 3555,
      "sound": 2921,
      "texture": 3361,
      "pulse": 4298
    },
    "result": {
      "mood": "Energised",
      "zone": "Golden Hour",
      "confidence": 0.7666607519147373,
      "neighbors": [
        "Energised"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "m74zejsq",
    "ts": 1779165369277,
    "answers": {
      "colour": "petal-blush",
      "sky": "silver-fog",
      "pulse": "restless",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "electric",
      "timeofday": "late-afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "sound",
      "texture",
      "pulse",
      "timeofday"
    ],
    "dwellMs": {
      "colour": 2588,
      "sky": 3472,
      "battery": 2993,
      "sound": 3168,
      "texture": 3636,
      "pulse": 4080,
      "timeofday": 4525
    },
    "result": {
      "mood": "Alive",
      "zone": "Golden Hour",
      "confidence": 0.6700580008995792,
      "neighbors": [
        "Alive"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "2c500avc",
    "ts": 1779094665316,
    "answers": {
      "colour": "storm-grey",
      "sky": "distant-storm",
      "pulse": "restless",
      "texture": "rough-sand",
      "sound": "midnight-crickets",
      "battery": "saturated",
      "timeofday": "predawn"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "sound",
      "texture",
      "pulse",
      "timeofday"
    ],
    "dwellMs": {
      "colour": 2166,
      "sky": 2775,
      "battery": 3041,
      "sound": 3662,
      "texture": 3776,
      "pulse": 3896,
      "timeofday": 4705
    },
    "result": {
      "mood": "Edged",
      "zone": "Wildfire Dusk",
      "confidence": 0.8281056992578064,
      "neighbors": [
        "Edged"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "16nqntj2",
    "ts": 1778221878289,
    "answers": {
      "colour": "ember-red",
      "sky": "distant-storm",
      "pulse": "racing",
      "texture": "rough-sand",
      "sound": "midnight-crickets",
      "battery": "electric",
      "timeofday": "night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "sound",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2453,
      "sky": 2723,
      "timeofday": 5087,
      "battery": 3336,
      "sound": 3132,
      "texture": 3380,
      "pulse": 3713
    },
    "result": {
      "mood": "Edged",
      "zone": "Wildfire Dusk",
      "confidence": 0.7404521336192392,
      "neighbors": [
        "Edged"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "kvudy7ji",
    "ts": 1778750553095,
    "answers": {
      "colour": "ember-red",
      "sky": "golden-morning",
      "pulse": "racing",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "bright",
      "timeofday": "afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "sound",
      "pulse",
      "texture"
    ],
    "dwellMs": {
      "colour": 2696,
      "sky": 3482,
      "timeofday": 5305,
      "battery": 3434,
      "sound": 2961,
      "pulse": 4381,
      "texture": 3219
    },
    "result": {
      "mood": "Energised",
      "zone": "Golden Hour",
      "confidence": 0.7878802151007833,
      "neighbors": [
        "Energised"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "qm5m70is",
    "ts": 1778234512364,
    "answers": {
      "colour": "ember-red",
      "sky": "windswept",
      "pulse": "racing",
      "texture": "rough-sand",
      "sound": "distant-thunder",
      "battery": "fragile",
      "timeofday": "predawn"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "sound",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 1853,
      "sky": 2961,
      "timeofday": 5090,
      "battery": 2812,
      "sound": 3736,
      "texture": 3531,
      "pulse": 4608
    },
    "result": {
      "mood": "Anxious",
      "zone": "Wildfire Dusk",
      "confidence": 0.7256018888502688,
      "neighbors": [
        "Anxious"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "vlru0gfz",
    "ts": 1778835797774,
    "answers": {
      "colour": "petal-blush",
      "sky": "silver-fog",
      "pulse": "restless",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "electric",
      "timeofday": "late-afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "sound",
      "timeofday",
      "battery",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 1704,
      "sky": 3602,
      "sound": 3119,
      "timeofday": 4433,
      "battery": 2706,
      "texture": 4021,
      "pulse": 4785
    },
    "result": {
      "mood": "Alive",
      "zone": "Golden Hour",
      "confidence": 0.6807947493441766,
      "neighbors": [
        "Alive"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "rz9aqoew",
    "ts": 1778983205586,
    "answers": {
      "colour": "morning-frost",
      "sky": "amber-dusk",
      "pulse": "hushed",
      "texture": "clean-linen",
      "sound": "midnight-crickets",
      "battery": "bright",
      "timeofday": "dusk"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "texture",
      "pulse",
      "sound",
      "timeofday"
    ],
    "dwellMs": {
      "colour": 2358,
      "sky": 2937,
      "battery": 3070,
      "texture": 3747,
      "pulse": 3837,
      "sound": 3536,
      "timeofday": 4436
    },
    "result": {
      "mood": "Grateful",
      "zone": "Amber Hours",
      "confidence": 0.6962837491133036,
      "neighbors": [
        "Grateful"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "dr6upjx1",
    "ts": 1778587946175,
    "answers": {
      "colour": "midnight-plum",
      "sky": "midnight-air",
      "pulse": "still",
      "texture": "heavy-wool",
      "sound": "midnight-crickets",
      "battery": "depleted",
      "timeofday": "deep-night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "timeofday",
      "texture",
      "sound",
      "pulse"
    ],
    "dwellMs": {
      "colour": 1818,
      "sky": 3315,
      "battery": 3015,
      "timeofday": 4403,
      "texture": 3549,
      "sound": 3588,
      "pulse": 3737
    },
    "result": {
      "mood": "Heavy",
      "zone": "Blue Hour",
      "confidence": 0.7743491346160697,
      "neighbors": [
        "Heavy"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "1yfzxeq3",
    "ts": 1778748101022,
    "answers": {
      "colour": "storm-grey",
      "sky": "midnight-air",
      "pulse": "flickering",
      "texture": "cracked-earth",
      "sound": "midnight-crickets",
      "battery": "floating",
      "timeofday": "deep-night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "sound",
      "battery",
      "timeofday",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2531,
      "sky": 3259,
      "sound": 3881,
      "battery": 3413,
      "timeofday": 4661,
      "texture": 4142,
      "pulse": 4410
    },
    "result": {
      "mood": "Withdrawn",
      "zone": "Blue Hour",
      "confidence": 0.6836214685507082,
      "neighbors": [
        "Withdrawn"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "cj561i4b",
    "ts": 1778937034025,
    "answers": {
      "colour": "storm-grey",
      "sky": "windswept",
      "pulse": "restless",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "saturated",
      "timeofday": "deep-night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "sound",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2361,
      "sky": 3564,
      "timeofday": 4884,
      "battery": 3047,
      "sound": 3174,
      "texture": 4242,
      "pulse": 4380
    },
    "result": {
      "mood": "Wired",
      "zone": "Wildfire Dusk",
      "confidence": 0.7048201365539012,
      "neighbors": [
        "Wired"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "iwbdws0y",
    "ts": 1779104907611,
    "answers": {
      "colour": "storm-grey",
      "sky": "distant-storm",
      "pulse": "restless",
      "texture": "rough-sand",
      "sound": "midnight-crickets",
      "battery": "saturated",
      "timeofday": "predawn"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "sound",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 1776,
      "sky": 2658,
      "timeofday": 4968,
      "battery": 2618,
      "sound": 3888,
      "texture": 3469,
      "pulse": 4786
    },
    "result": {
      "mood": "Edged",
      "zone": "Wildfire Dusk",
      "confidence": 0.7573836243110074,
      "neighbors": [
        "Edged"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "te51pw2j",
    "ts": 1779109310878,
    "answers": {
      "colour": "morning-frost",
      "sky": "open-blue",
      "pulse": "steady",
      "texture": "sunwarm-stone",
      "sound": "midnight-crickets",
      "battery": "floating",
      "timeofday": "mid-morning"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "texture",
      "pulse",
      "sound"
    ],
    "dwellMs": {
      "colour": 2281,
      "sky": 3665,
      "timeofday": 4318,
      "battery": 3504,
      "texture": 3467,
      "pulse": 3841,
      "sound": 3923
    },
    "result": {
      "mood": "Bright",
      "zone": "Golden Hour",
      "confidence": 0.7494279937625465,
      "neighbors": [
        "Bright"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "kqdjwlic",
    "ts": 1779155957497,
    "answers": {
      "colour": "storm-grey",
      "sky": "midnight-air",
      "pulse": "flickering",
      "texture": "soft-velvet",
      "sound": "distant-thunder",
      "battery": "dim",
      "timeofday": "deep-night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "sound",
      "pulse",
      "timeofday",
      "texture"
    ],
    "dwellMs": {
      "colour": 1828,
      "sky": 3076,
      "battery": 3137,
      "sound": 3739,
      "pulse": 3743,
      "timeofday": 4780,
      "texture": 4267
    },
    "result": {
      "mood": "Muted",
      "zone": "Blue Hour",
      "confidence": 0.7513463843464865,
      "neighbors": [
        "Muted"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "qdwr6hrr",
    "ts": 1779013659963,
    "answers": {
      "colour": "ember-red",
      "sky": "golden-morning",
      "pulse": "racing",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "bright",
      "timeofday": "afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "pulse",
      "texture",
      "sound"
    ],
    "dwellMs": {
      "colour": 2130,
      "sky": 3511,
      "timeofday": 5381,
      "battery": 3558,
      "pulse": 4112,
      "texture": 3974,
      "sound": 3653
    },
    "result": {
      "mood": "Energised",
      "zone": "Golden Hour",
      "confidence": 0.75639368450086,
      "neighbors": [
        "Energised"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "cw5gz3fz",
    "ts": 1779359243502,
    "answers": {
      "colour": "storm-grey",
      "sky": "distant-storm",
      "pulse": "flickering",
      "texture": "cracked-earth",
      "sound": "wind-through-trees",
      "battery": "saturated",
      "timeofday": "deep-night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "pulse",
      "sound",
      "texture"
    ],
    "dwellMs": {
      "colour": 1938,
      "sky": 3075,
      "timeofday": 4312,
      "battery": 3153,
      "pulse": 3906,
      "sound": 3637,
      "texture": 3899
    },
    "result": {
      "mood": "Anxious",
      "zone": "Wildfire Dusk",
      "confidence": 0.7355401199788689,
      "neighbors": [
        "Anxious"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "0moo2067",
    "ts": 1779357609941,
    "answers": {
      "colour": "honey-gold",
      "sky": "open-blue",
      "pulse": "surging",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "bright",
      "timeofday": "afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "pulse",
      "timeofday",
      "texture",
      "sound"
    ],
    "dwellMs": {
      "colour": 2203,
      "sky": 3373,
      "battery": 3233,
      "pulse": 3832,
      "timeofday": 4555,
      "texture": 4218,
      "sound": 3135
    },
    "result": {
      "mood": "Radiant",
      "zone": "Golden Hour",
      "confidence": 0.7593342586956634,
      "neighbors": [
        "Radiant"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "eswe90jz",
    "ts": 1778418660976,
    "answers": {
      "colour": "arctic-dusk",
      "sky": "silver-fog",
      "pulse": "still",
      "texture": "soft-velvet",
      "sound": "silence",
      "battery": "dim",
      "timeofday": "predawn"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "pulse",
      "sound",
      "texture",
      "battery"
    ],
    "dwellMs": {
      "colour": 1624,
      "sky": 2793,
      "timeofday": 4241,
      "pulse": 3621,
      "sound": 3354,
      "texture": 3358,
      "battery": 2530
    },
    "result": {
      "mood": "Hollow",
      "zone": "Blue Hour",
      "confidence": 0.7670578097088735,
      "neighbors": [
        "Hollow"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "8g7a56je",
    "ts": 1778398063250,
    "answers": {
      "colour": "midnight-plum",
      "sky": "midnight-air",
      "pulse": "drifting",
      "texture": "soft-velvet",
      "sound": "silence",
      "battery": "floating",
      "timeofday": "afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "sound",
      "texture",
      "timeofday",
      "pulse",
      "battery"
    ],
    "dwellMs": {
      "colour": 2502,
      "sky": 3492,
      "sound": 3977,
      "texture": 3480,
      "timeofday": 4982,
      "pulse": 4383,
      "battery": 3398
    },
    "result": {
      "mood": "Numb",
      "zone": "Stillwater",
      "confidence": 0.6859070586547891,
      "neighbors": [
        "Numb"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "hpk738m3",
    "ts": 1779175225541,
    "answers": {
      "colour": "morning-frost",
      "sky": "after-rain",
      "pulse": "still",
      "texture": "cold-glass",
      "sound": "midnight-crickets",
      "battery": "floating",
      "timeofday": "late-afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "sound",
      "timeofday",
      "texture",
      "battery",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2490,
      "sky": 3508,
      "sound": 2987,
      "timeofday": 4351,
      "texture": 3782,
      "battery": 2541,
      "pulse": 3932
    },
    "result": {
      "mood": "Calm",
      "zone": "Morning Mist",
      "confidence": 0.7462323930290067,
      "neighbors": [
        "Calm"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "shcibahl",
    "ts": 1778412540239,
    "answers": {
      "colour": "storm-grey",
      "sky": "silver-fog",
      "pulse": "drifting",
      "texture": "wet-bark",
      "sound": "midnight-crickets",
      "battery": "dim",
      "timeofday": "predawn"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "pulse",
      "timeofday",
      "texture",
      "sound"
    ],
    "dwellMs": {
      "colour": 1959,
      "sky": 2760,
      "battery": 2502,
      "pulse": 4649,
      "timeofday": 5321,
      "texture": 3576,
      "sound": 3257
    },
    "result": {
      "mood": "Heavy",
      "zone": "Blue Hour",
      "confidence": 0.8282208146179652,
      "neighbors": [
        "Heavy"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "83ngg54m",
    "ts": 1779021410603,
    "answers": {
      "colour": "storm-grey",
      "sky": "midnight-air",
      "pulse": "flickering",
      "texture": "soft-velvet",
      "sound": "distant-thunder",
      "battery": "dim",
      "timeofday": "predawn"
    },
    "answerOrder": [
      "colour",
      "sky",
      "texture",
      "timeofday",
      "pulse",
      "sound",
      "battery"
    ],
    "dwellMs": {
      "colour": 2264,
      "sky": 3245,
      "texture": 4228,
      "timeofday": 4764,
      "pulse": 4580,
      "sound": 3595,
      "battery": 3031
    },
    "result": {
      "mood": "Muted",
      "zone": "Blue Hour",
      "confidence": 0.7436711581109418,
      "neighbors": [
        "Muted"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "vqpjndci",
    "ts": 1779180850284,
    "answers": {
      "colour": "midnight-plum",
      "sky": "silver-fog",
      "pulse": "flickering",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "saturated",
      "timeofday": "predawn"
    },
    "answerOrder": [
      "colour",
      "sky",
      "texture",
      "pulse",
      "sound",
      "battery",
      "timeofday"
    ],
    "dwellMs": {
      "colour": 2144,
      "sky": 3299,
      "texture": 3232,
      "pulse": 4649,
      "sound": 3400,
      "battery": 3272,
      "timeofday": 4604
    },
    "result": {
      "mood": "Frayed",
      "zone": "Wildfire Dusk",
      "confidence": 0.6607203081764755,
      "neighbors": [
        "Frayed"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "b1k1mt12",
    "ts": 1778332844701,
    "answers": {
      "colour": "morning-frost",
      "sky": "open-blue",
      "pulse": "steady",
      "texture": "sunwarm-stone",
      "sound": "midnight-crickets",
      "battery": "floating",
      "timeofday": "mid-morning"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "sound",
      "timeofday",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 1845,
      "sky": 2782,
      "battery": 2778,
      "sound": 3090,
      "timeofday": 4598,
      "texture": 3860,
      "pulse": 4626
    },
    "result": {
      "mood": "Bright",
      "zone": "Golden Hour",
      "confidence": 0.7318963301497748,
      "neighbors": [
        "Bright"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "vsxu9uq7",
    "ts": 1778760578487,
    "answers": {
      "colour": "midnight-plum",
      "sky": "midnight-air",
      "pulse": "flickering",
      "texture": "soft-velvet",
      "sound": "silence",
      "battery": "depleted",
      "timeofday": "deep-night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "sound",
      "battery",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2479,
      "sky": 2595,
      "timeofday": 5042,
      "sound": 3062,
      "battery": 2843,
      "texture": 4287,
      "pulse": 4303
    },
    "result": {
      "mood": "Hollow",
      "zone": "Blue Hour",
      "confidence": 0.709684620997862,
      "neighbors": [
        "Hollow"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "ar94oitl",
    "ts": 1778815778566,
    "answers": {
      "colour": "forest-floor",
      "sky": "after-rain",
      "pulse": "hushed",
      "texture": "clean-linen",
      "sound": "forest-birds",
      "battery": "bright",
      "timeofday": "early-morning"
    },
    "answerOrder": [
      "colour",
      "sky",
      "texture",
      "pulse",
      "timeofday",
      "sound",
      "battery"
    ],
    "dwellMs": {
      "colour": 2021,
      "sky": 3118,
      "texture": 3990,
      "pulse": 4697,
      "timeofday": 4337,
      "sound": 3696,
      "battery": 3001
    },
    "result": {
      "mood": "Grateful",
      "zone": "Amber Hours",
      "confidence": 0.6720908002639443,
      "neighbors": [
        "Grateful"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "yfo0rjbo",
    "ts": 1779254117686,
    "answers": {
      "colour": "midnight-plum",
      "sky": "silver-fog",
      "pulse": "restless",
      "texture": "cracked-earth",
      "sound": "silence",
      "battery": "depleted",
      "timeofday": "night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "sound",
      "texture",
      "timeofday",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2166,
      "sky": 2581,
      "battery": 2489,
      "sound": 3864,
      "texture": 4268,
      "timeofday": 4487,
      "pulse": 4559
    },
    "result": {
      "mood": "Anxious",
      "zone": "Wildfire Dusk",
      "confidence": 0.7221077843252011,
      "neighbors": [
        "Anxious"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "662qi887",
    "ts": 1779279980308,
    "answers": {
      "colour": "morning-frost",
      "sky": "open-blue",
      "pulse": "steady",
      "texture": "sunwarm-stone",
      "sound": "midnight-crickets",
      "battery": "floating",
      "timeofday": "mid-morning"
    },
    "answerOrder": [
      "colour",
      "sky",
      "battery",
      "texture",
      "sound",
      "timeofday",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2442,
      "sky": 3123,
      "battery": 2850,
      "texture": 3245,
      "sound": 3660,
      "timeofday": 5143,
      "pulse": 3930
    },
    "result": {
      "mood": "Bright",
      "zone": "Golden Hour",
      "confidence": 0.7119838497513868,
      "neighbors": [
        "Bright"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "llh8itzd",
    "ts": 1779440661372,
    "answers": {
      "colour": "storm-grey",
      "sky": "midnight-air",
      "pulse": "flickering",
      "texture": "soft-velvet",
      "sound": "distant-thunder",
      "battery": "dim",
      "timeofday": "deep-night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "sound",
      "pulse",
      "texture"
    ],
    "dwellMs": {
      "colour": 2498,
      "sky": 3371,
      "timeofday": 5209,
      "battery": 2779,
      "sound": 4098,
      "pulse": 4555,
      "texture": 4045
    },
    "result": {
      "mood": "Muted",
      "zone": "Blue Hour",
      "confidence": 0.7973999381231721,
      "neighbors": [
        "Muted"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "diyx220n",
    "ts": 1778394238358,
    "answers": {
      "colour": "arctic-dusk",
      "sky": "amber-dusk",
      "pulse": "drifting",
      "texture": "clean-linen",
      "sound": "midnight-crickets",
      "battery": "floating",
      "timeofday": "early-morning"
    },
    "answerOrder": [
      "colour",
      "sky",
      "sound",
      "texture",
      "battery",
      "timeofday",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2487,
      "sky": 3423,
      "sound": 3024,
      "texture": 3524,
      "battery": 2762,
      "timeofday": 5070,
      "pulse": 4556
    },
    "result": {
      "mood": "Soft",
      "zone": "Morning Mist",
      "confidence": 0.640768292947346,
      "neighbors": [
        "Soft"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "83l73bla",
    "ts": 1779414814356,
    "answers": {
      "colour": "honey-gold",
      "sky": "silver-fog",
      "pulse": "surging",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "bright",
      "timeofday": "afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "sound",
      "battery",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2123,
      "sky": 3642,
      "timeofday": 5031,
      "sound": 3630,
      "battery": 3242,
      "texture": 3308,
      "pulse": 4312
    },
    "result": {
      "mood": "Alive",
      "zone": "Golden Hour",
      "confidence": 0.7411523599868147,
      "neighbors": [
        "Alive"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "toepjdjm",
    "ts": 1779191647932,
    "answers": {
      "colour": "storm-grey",
      "sky": "midnight-air",
      "pulse": "flickering",
      "texture": "cracked-earth",
      "sound": "midnight-crickets",
      "battery": "floating",
      "timeofday": "predawn"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "texture",
      "pulse",
      "battery",
      "sound"
    ],
    "dwellMs": {
      "colour": 2731,
      "sky": 3116,
      "timeofday": 5081,
      "texture": 3862,
      "pulse": 4368,
      "battery": 2726,
      "sound": 3971
    },
    "result": {
      "mood": "Withdrawn",
      "zone": "Blue Hour",
      "confidence": 0.7398348340186989,
      "neighbors": [
        "Withdrawn"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "yyszaef6",
    "ts": 1778592791902,
    "answers": {
      "colour": "midnight-plum",
      "sky": "silver-fog",
      "pulse": "flickering",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "saturated",
      "timeofday": "predawn"
    },
    "answerOrder": [
      "colour",
      "sky",
      "sound",
      "texture",
      "pulse",
      "battery",
      "timeofday"
    ],
    "dwellMs": {
      "colour": 2326,
      "sky": 2752,
      "sound": 3580,
      "texture": 3926,
      "pulse": 3631,
      "battery": 2947,
      "timeofday": 5036
    },
    "result": {
      "mood": "Frayed",
      "zone": "Wildfire Dusk",
      "confidence": 0.7283600260492943,
      "neighbors": [
        "Frayed"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "rcn4zt77",
    "ts": 1778327363192,
    "answers": {
      "colour": "storm-grey",
      "sky": "midnight-air",
      "pulse": "flickering",
      "texture": "cracked-earth",
      "sound": "midnight-crickets",
      "battery": "floating",
      "timeofday": "deep-night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "sound",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2636,
      "sky": 3687,
      "timeofday": 4687,
      "battery": 3570,
      "sound": 2937,
      "texture": 4130,
      "pulse": 4149
    },
    "result": {
      "mood": "Withdrawn",
      "zone": "Blue Hour",
      "confidence": 0.7095546305138803,
      "neighbors": [
        "Withdrawn"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "gvpz562p",
    "ts": 1778904994248,
    "answers": {
      "colour": "morning-frost",
      "sky": "after-rain",
      "pulse": "hushed",
      "texture": "sunwarm-stone",
      "sound": "ocean-tide",
      "battery": "floating",
      "timeofday": "late-afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "sound",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2076,
      "sky": 3194,
      "timeofday": 5259,
      "battery": 3150,
      "sound": 3240,
      "texture": 4274,
      "pulse": 4387
    },
    "result": {
      "mood": "Peaceful",
      "zone": "Morning Mist",
      "confidence": 0.7705160920707081,
      "neighbors": [
        "Peaceful"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "4ncjjz1u",
    "ts": 1779335939912,
    "answers": {
      "colour": "honey-gold",
      "sky": "golden-morning",
      "pulse": "surging",
      "texture": "sunwarm-stone",
      "sound": "late-night-piano",
      "battery": "electric",
      "timeofday": "afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "sound",
      "battery",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2226,
      "sky": 2809,
      "timeofday": 4948,
      "sound": 3673,
      "battery": 2916,
      "texture": 3978,
      "pulse": 3915
    },
    "result": {
      "mood": "Determined",
      "zone": "Golden Hour",
      "confidence": 0.6872837466037625,
      "neighbors": [
        "Determined"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "1keakz4e",
    "ts": 1778475235867,
    "answers": {
      "colour": "arctic-dusk",
      "sky": "silver-fog",
      "pulse": "still",
      "texture": "soft-velvet",
      "sound": "silence",
      "battery": "dim",
      "timeofday": "predawn"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "sound",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2096,
      "sky": 2603,
      "timeofday": 4623,
      "battery": 2836,
      "sound": 3320,
      "texture": 3696,
      "pulse": 3640
    },
    "result": {
      "mood": "Hollow",
      "zone": "Blue Hour",
      "confidence": 0.7809419809635411,
      "neighbors": [
        "Hollow"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "ravn8oxh",
    "ts": 1778745329739,
    "answers": {
      "colour": "storm-grey",
      "sky": "silver-fog",
      "pulse": "still",
      "texture": "soft-velvet",
      "sound": "silence",
      "battery": "depleted",
      "timeofday": "predawn"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "sound",
      "texture",
      "pulse"
    ],
    "dwellMs": {
      "colour": 2736,
      "sky": 3566,
      "timeofday": 4447,
      "battery": 3100,
      "sound": 3985,
      "texture": 3990,
      "pulse": 3643
    },
    "result": {
      "mood": "Numb",
      "zone": "Stillwater",
      "confidence": 0.604660674220277,
      "neighbors": [
        "Numb"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "vrko7zqk",
    "ts": 1778498410909,
    "answers": {
      "colour": "arctic-dusk",
      "sky": "silver-fog",
      "pulse": "still",
      "texture": "soft-velvet",
      "sound": "silence",
      "battery": "dim",
      "timeofday": "predawn"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "battery",
      "pulse",
      "sound",
      "texture"
    ],
    "dwellMs": {
      "colour": 2003,
      "sky": 3072,
      "timeofday": 4795,
      "battery": 3561,
      "pulse": 4723,
      "sound": 3957,
      "texture": 4339
    },
    "result": {
      "mood": "Hollow",
      "zone": "Blue Hour",
      "confidence": 0.745353491871313,
      "neighbors": [
        "Hollow"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "w3bak4op",
    "ts": 1779435661112,
    "answers": {
      "colour": "storm-grey",
      "sky": "midnight-air",
      "pulse": "flickering",
      "texture": "soft-velvet",
      "sound": "distant-thunder",
      "battery": "dim",
      "timeofday": "deep-night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "texture",
      "timeofday",
      "battery",
      "pulse",
      "sound"
    ],
    "dwellMs": {
      "colour": 2194,
      "sky": 3307,
      "texture": 4125,
      "timeofday": 4786,
      "battery": 2517,
      "pulse": 4434,
      "sound": 3648
    },
    "result": {
      "mood": "Muted",
      "zone": "Blue Hour",
      "confidence": 0.7901410399363793,
      "neighbors": [
        "Muted"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "78hkx664",
    "ts": 1778850835047,
    "answers": {
      "colour": "morning-frost",
      "sky": "after-rain",
      "pulse": "still",
      "texture": "cold-glass",
      "sound": "midnight-crickets",
      "battery": "floating",
      "timeofday": "late-afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "pulse",
      "timeofday",
      "battery",
      "texture",
      "sound"
    ],
    "dwellMs": {
      "colour": 2340,
      "sky": 2790,
      "pulse": 3759,
      "timeofday": 4542,
      "battery": 3216,
      "texture": 3865,
      "sound": 3249
    },
    "result": {
      "mood": "Calm",
      "zone": "Morning Mist",
      "confidence": 0.7371173209043971,
      "neighbors": [
        "Calm"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "m1ko18g1",
    "ts": 1779165281787,
    "answers": {
      "colour": "midnight-plum",
      "sky": "silver-fog",
      "pulse": "drifting",
      "texture": "heavy-wool",
      "sound": "midnight-crickets",
      "battery": "fragile",
      "timeofday": "night"
    },
    "answerOrder": [
      "colour",
      "sky",
      "sound",
      "battery",
      "timeofday",
      "pulse",
      "texture"
    ],
    "dwellMs": {
      "colour": 2323,
      "sky": 2724,
      "sound": 4007,
      "battery": 2907,
      "timeofday": 4698,
      "pulse": 4030,
      "texture": 3670
    },
    "result": {
      "mood": "Withdrawn",
      "zone": "Blue Hour",
      "confidence": 0.6609372052975213,
      "neighbors": [
        "Withdrawn"
      ]
    },
    "feedback": "right"
  },
  {
    "id": "wbrpatke",
    "ts": 1778586560058,
    "answers": {
      "colour": "honey-gold",
      "sky": "open-blue",
      "pulse": "surging",
      "texture": "soft-velvet",
      "sound": "midnight-crickets",
      "battery": "bright",
      "timeofday": "afternoon"
    },
    "answerOrder": [
      "colour",
      "sky",
      "timeofday",
      "sound",
      "pulse",
      "texture",
      "battery"
    ],
    "dwellMs": {
      "colour": 2021,
      "sky": 3075,
      "timeofday": 5201,
      "sound": 3109,
      "pulse": 3925,
      "texture": 3582,
      "battery": 2614
    },
    "result": {
      "mood": "Radiant",
      "zone": "Golden Hour",
      "confidence": 0.8383750931467667,
      "neighbors": [
        "Radiant"
      ]
    },
    "feedback": "right"
  }
];
  const newSeed = seed.filter(s => !existingIds.has(s.id));

  // Merge: seed data goes after real sessions (real sessions have priority)
  const merged = [...existing, ...newSeed].slice(0, 500);
  localStorage.setItem(SESSIONS_KEY, JSON.stringify(merged));

  // Seed profiles
  const seedProfiles = {
  "Edged": {
    "count": 4,
    "answers": {
      "colour": {
        "storm-grey": 3,
        "ember-red": 1
      },
      "sky": {
        "distant-storm": 4
      },
      "pulse": {
        "restless": 3,
        "racing": 1
      },
      "texture": {
        "rough-sand": 4
      },
      "sound": {
        "midnight-crickets": 4
      },
      "battery": {
        "saturated": 3,
        "electric": 1
      },
      "timeofday": {
        "predawn": 3,
        "night": 1
      }
    }
  },
  "Determined": {
    "count": 5,
    "answers": {
      "colour": {
        "honey-gold": 4,
        "morning-frost": 1
      },
      "sky": {
        "golden-morning": 4,
        "open-blue": 1
      },
      "pulse": {
        "surging": 4,
        "steady": 1
      },
      "texture": {
        "sunwarm-stone": 4,
        "cold-glass": 1
      },
      "sound": {
        "late-night-piano": 5
      },
      "battery": {
        "electric": 4,
        "bright": 1
      },
      "timeofday": {
        "afternoon": 4,
        "mid-morning": 1
      }
    }
  },
  "Tender": {
    "count": 4,
    "answers": {
      "colour": {
        "morning-frost": 3,
        "petal-blush": 1
      },
      "sky": {
        "amber-dusk": 3,
        "silver-fog": 1
      },
      "pulse": {
        "drifting": 3,
        "hushed": 1
      },
      "texture": {
        "soft-velvet": 4
      },
      "sound": {
        "crackling-fire": 3,
        "ocean-tide": 1
      },
      "battery": {
        "floating": 4
      },
      "timeofday": {
        "late-afternoon": 3,
        "dusk": 1
      }
    }
  },
  "Calm": {
    "count": 4,
    "answers": {
      "colour": {
        "forest-floor": 1,
        "morning-frost": 3
      },
      "sky": {
        "open-blue": 1,
        "after-rain": 3
      },
      "pulse": {
        "steady": 1,
        "still": 3
      },
      "texture": {
        "clean-linen": 1,
        "cold-glass": 3
      },
      "sound": {
        "forest-birds": 1,
        "midnight-crickets": 3
      },
      "battery": {
        "balanced": 1,
        "floating": 3
      },
      "timeofday": {
        "early-morning": 1,
        "late-afternoon": 3
      }
    }
  },
  "Bright": {
    "count": 5,
    "answers": {
      "colour": {
        "morning-frost": 4,
        "honey-gold": 1
      },
      "sky": {
        "open-blue": 4,
        "golden-morning": 1
      },
      "pulse": {
        "steady": 4,
        "surging": 1
      },
      "texture": {
        "sunwarm-stone": 4,
        "clean-linen": 1
      },
      "sound": {
        "midnight-crickets": 5
      },
      "battery": {
        "floating": 5
      },
      "timeofday": {
        "mid-morning": 5
      }
    }
  },
  "Peaceful": {
    "count": 4,
    "answers": {
      "colour": {
        "arctic-dusk": 2,
        "forest-floor": 1,
        "morning-frost": 1
      },
      "sky": {
        "after-rain": 3,
        "open-blue": 1
      },
      "pulse": {
        "hushed": 3,
        "steady": 1
      },
      "texture": {
        "sunwarm-stone": 3,
        "clean-linen": 1
      },
      "sound": {
        "ocean-tide": 3,
        "forest-birds": 1
      },
      "battery": {
        "floating": 3,
        "balanced": 1
      },
      "timeofday": {
        "late-afternoon": 3,
        "early-morning": 1
      }
    }
  },
  "Energised": {
    "count": 5,
    "answers": {
      "colour": {
        "ember-red": 4,
        "honey-gold": 1
      },
      "sky": {
        "golden-morning": 5
      },
      "pulse": {
        "racing": 4,
        "surging": 1
      },
      "texture": {
        "soft-velvet": 5
      },
      "sound": {
        "midnight-crickets": 5
      },
      "battery": {
        "bright": 4,
        "electric": 1
      },
      "timeofday": {
        "afternoon": 4,
        "mid-morning": 1
      }
    }
  },
  "Radiant": {
    "count": 5,
    "answers": {
      "colour": {
        "honey-gold": 5
      },
      "sky": {
        "open-blue": 4,
        "golden-morning": 1
      },
      "pulse": {
        "surging": 5
      },
      "texture": {
        "soft-velvet": 5
      },
      "sound": {
        "midnight-crickets": 5
      },
      "battery": {
        "bright": 4,
        "electric": 1
      },
      "timeofday": {
        "afternoon": 4,
        "mid-morning": 1
      }
    }
  },
  "Nostalgic": {
    "count": 3,
    "answers": {
      "colour": {
        "honey-gold": 1,
        "forest-floor": 1,
        "petal-blush": 1
      },
      "sky": {
        "amber-dusk": 1,
        "golden-morning": 2
      },
      "pulse": {
        "hushed": 1,
        "drifting": 2
      },
      "texture": {
        "soft-velvet": 1,
        "sunwarm-stone": 2
      },
      "sound": {
        "crackling-fire": 1,
        "late-night-piano": 1,
        "ocean-tide": 1
      },
      "battery": {
        "floating": 1,
        "fragile": 2
      },
      "timeofday": {
        "dusk": 1,
        "late-afternoon": 2
      }
    }
  },
  "Wired": {
    "count": 4,
    "answers": {
      "colour": {
        "ember-red": 1,
        "storm-grey": 3
      },
      "sky": {
        "distant-storm": 1,
        "windswept": 3
      },
      "pulse": {
        "racing": 1,
        "restless": 3
      },
      "texture": {
        "soft-velvet": 4
      },
      "sound": {
        "midnight-crickets": 4
      },
      "battery": {
        "electric": 1,
        "saturated": 3
      },
      "timeofday": {
        "night": 1,
        "deep-night": 3
      }
    }
  },
  "Hollow": {
    "count": 5,
    "answers": {
      "colour": {
        "arctic-dusk": 4,
        "midnight-plum": 1
      },
      "sky": {
        "silver-fog": 4,
        "midnight-air": 1
      },
      "pulse": {
        "still": 4,
        "flickering": 1
      },
      "texture": {
        "soft-velvet": 5
      },
      "sound": {
        "silence": 5
      },
      "battery": {
        "dim": 4,
        "depleted": 1
      },
      "timeofday": {
        "predawn": 4,
        "deep-night": 1
      }
    }
  },
  "Restless": {
    "count": 4,
    "answers": {
      "colour": {
        "ember-red": 3,
        "storm-grey": 1
      },
      "sky": {
        "distant-storm": 3,
        "windswept": 1
      },
      "pulse": {
        "racing": 3,
        "restless": 1
      },
      "texture": {
        "soft-velvet": 4
      },
      "sound": {
        "distant-thunder": 3,
        "wind-through-trees": 1
      },
      "battery": {
        "floating": 4
      },
      "timeofday": {
        "late-afternoon": 3,
        "night": 1
      }
    }
  },
  "Anxious": {
    "count": 4,
    "answers": {
      "colour": {
        "midnight-plum": 2,
        "ember-red": 1,
        "storm-grey": 1
      },
      "sky": {
        "silver-fog": 2,
        "windswept": 1,
        "distant-storm": 1
      },
      "pulse": {
        "restless": 2,
        "racing": 1,
        "flickering": 1
      },
      "texture": {
        "cracked-earth": 3,
        "rough-sand": 1
      },
      "sound": {
        "silence": 2,
        "distant-thunder": 1,
        "wind-through-trees": 1
      },
      "battery": {
        "depleted": 2,
        "fragile": 1,
        "saturated": 1
      },
      "timeofday": {
        "night": 2,
        "predawn": 1,
        "deep-night": 1
      }
    }
  },
  "Even": {
    "count": 3,
    "answers": {
      "colour": {
        "forest-floor": 3
      },
      "sky": {
        "silver-fog": 3
      },
      "pulse": {
        "drifting": 1,
        "still": 2
      },
      "texture": {
        "soft-velvet": 3
      },
      "sound": {
        "midnight-crickets": 3
      },
      "battery": {
        "balanced": 1,
        "floating": 2
      },
      "timeofday": {
        "afternoon": 3
      }
    }
  },
  "Soft": {
    "count": 4,
    "answers": {
      "colour": {
        "arctic-dusk": 3,
        "petal-blush": 1
      },
      "sky": {
        "amber-dusk": 3,
        "silver-fog": 1
      },
      "pulse": {
        "drifting": 3,
        "hushed": 1
      },
      "texture": {
        "clean-linen": 3,
        "soft-velvet": 1
      },
      "sound": {
        "midnight-crickets": 4
      },
      "battery": {
        "floating": 4
      },
      "timeofday": {
        "late-afternoon": 1,
        "dusk": 1,
        "early-morning": 2
      }
    }
  },
  "Heavy": {
    "count": 5,
    "answers": {
      "colour": {
        "storm-grey": 4,
        "midnight-plum": 1
      },
      "sky": {
        "silver-fog": 4,
        "midnight-air": 1
      },
      "pulse": {
        "drifting": 4,
        "still": 1
      },
      "texture": {
        "cracked-earth": 3,
        "heavy-wool": 1,
        "wet-bark": 1
      },
      "sound": {
        "midnight-crickets": 5
      },
      "battery": {
        "fragile": 3,
        "depleted": 1,
        "dim": 1
      },
      "timeofday": {
        "night": 3,
        "deep-night": 1,
        "predawn": 1
      }
    }
  },
  "Grateful": {
    "count": 3,
    "answers": {
      "colour": {
        "honey-gold": 1,
        "morning-frost": 1,
        "forest-floor": 1
      },
      "sky": {
        "golden-morning": 1,
        "amber-dusk": 1,
        "after-rain": 1
      },
      "pulse": {
        "steady": 1,
        "hushed": 2
      },
      "texture": {
        "sunwarm-stone": 1,
        "clean-linen": 2
      },
      "sound": {
        "crackling-fire": 1,
        "midnight-crickets": 1,
        "forest-birds": 1
      },
      "battery": {
        "balanced": 1,
        "bright": 2
      },
      "timeofday": {
        "late-afternoon": 1,
        "dusk": 1,
        "early-morning": 1
      }
    }
  },
  "Frayed": {
    "count": 4,
    "answers": {
      "colour": {
        "storm-grey": 1,
        "midnight-plum": 3
      },
      "sky": {
        "windswept": 1,
        "silver-fog": 3
      },
      "pulse": {
        "restless": 1,
        "flickering": 3
      },
      "texture": {
        "soft-velvet": 4
      },
      "sound": {
        "midnight-crickets": 4
      },
      "battery": {
        "fragile": 1,
        "saturated": 3
      },
      "timeofday": {
        "night": 1,
        "predawn": 3
      }
    }
  },
  "Alive": {
    "count": 5,
    "answers": {
      "colour": {
        "petal-blush": 4,
        "honey-gold": 1
      },
      "sky": {
        "silver-fog": 5
      },
      "pulse": {
        "restless": 4,
        "surging": 1
      },
      "texture": {
        "soft-velvet": 5
      },
      "sound": {
        "midnight-crickets": 5
      },
      "battery": {
        "electric": 4,
        "bright": 1
      },
      "timeofday": {
        "late-afternoon": 4,
        "afternoon": 1
      }
    }
  },
  "Withdrawn": {
    "count": 5,
    "answers": {
      "colour": {
        "storm-grey": 4,
        "midnight-plum": 1
      },
      "sky": {
        "midnight-air": 4,
        "silver-fog": 1
      },
      "pulse": {
        "flickering": 4,
        "drifting": 1
      },
      "texture": {
        "cracked-earth": 4,
        "heavy-wool": 1
      },
      "sound": {
        "midnight-crickets": 5
      },
      "battery": {
        "floating": 4,
        "fragile": 1
      },
      "timeofday": {
        "deep-night": 3,
        "predawn": 1,
        "night": 1
      }
    }
  },
  "Numb": {
    "count": 3,
    "answers": {
      "colour": {
        "midnight-plum": 2,
        "storm-grey": 1
      },
      "sky": {
        "midnight-air": 2,
        "silver-fog": 1
      },
      "pulse": {
        "drifting": 2,
        "still": 1
      },
      "texture": {
        "soft-velvet": 3
      },
      "sound": {
        "silence": 3
      },
      "battery": {
        "dim": 1,
        "floating": 1,
        "depleted": 1
      },
      "timeofday": {
        "deep-night": 1,
        "afternoon": 1,
        "predawn": 1
      }
    }
  },
  "Muted": {
    "count": 5,
    "answers": {
      "colour": {
        "midnight-plum": 1,
        "storm-grey": 4
      },
      "sky": {
        "silver-fog": 1,
        "midnight-air": 4
      },
      "pulse": {
        "still": 1,
        "flickering": 4
      },
      "texture": {
        "soft-velvet": 5
      },
      "sound": {
        "silence": 1,
        "distant-thunder": 4
      },
      "battery": {
        "depleted": 1,
        "dim": 4
      },
      "timeofday": {
        "night": 1,
        "deep-night": 3,
        "predawn": 1
      }
    }
  }
};
  let existingProfiles = {};
  try { existingProfiles = JSON.parse(localStorage.getItem(PROFILES_KEY) || '{}'); } catch {}

  // Merge profiles: add seed counts to any existing real counts
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
  const meta = {
  "count": 93,
  "lastWeightUpdate": 0,
  "sessionsAtUpdate": 0,
  "seedDataApplied": "2026-05-22T13:35:56.601Z"
};
  let existingMeta = {};
  try { existingMeta = JSON.parse(localStorage.getItem(META_KEY) || '{}'); } catch {}
  const mergedMeta = { ...meta, count: (existingMeta.count || 0) + meta.count };
  localStorage.setItem(META_KEY, JSON.stringify(mergedMeta));

  console.log('✓ Seed data loaded:');
  console.log('  Sessions added:', newSeed.length);
  console.log('  Total sessions:', merged.length);
  console.log('  Moods profiled:', Object.keys(existingProfiles).length);
  console.log('  Reload the page to activate Bayesian layer.');
})();