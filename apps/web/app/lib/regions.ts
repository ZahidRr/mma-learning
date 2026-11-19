// =========================================================
// SINGLE SOURCE OF TRUTH: Region (Topic) & Node (Skill) Multi-Grade
// Letakkan di: app/lib/regions.ts
//
// Hierarki: Curriculum (World) > Subject (Map) > Topic (Region) > Skill (Node) > Lesson (Battle)
// Visual bioma (background) tetap sama per slot, nama materi naik level per tier kelas:
//   - tier1: Primary 1–2
//   - tier2: Primary 3–4
//   - tier3: Primary 5–6
// =========================================================

export type SubjectKey = 'math' | 'english';
export type GradeTier = 'tier1' | 'tier2' | 'tier3';

export interface RegionConfig {
  id: string;
  subject: SubjectKey;
  emoji: string;
  /** Nama aktif (sudah disesuaikan dengan gradeLevel saat dipanggil via getRegion) */
  name: string;
  /** Nama per tier kelas */
  names: Record<GradeTier, string>;
  /** Nama file di /public/assets/journey/ */
  background: string;
}

export const BACKGROUND_DIR = '/assets/journey';

/** Konversi gradeLevel (1–6) menjadi tier kurikulum */
export function getGradeTier(gradeLevel?: number | null): GradeTier {
  const g = gradeLevel ?? 1;
  if (g >= 5) return 'tier3';
  if (g >= 3) return 'tier2';
  return 'tier1';
}

export const REGIONS: Record<string, RegionConfig> = {
  // ---------------- MATH MAP ----------------
  mr1: {
    id: 'mr1',
    subject: 'math',
    emoji: '🌱',
    name: 'Counting Meadow',
    names: {
      tier1: 'Counting Meadow',
      tier2: 'Number Meadow',
      tier3: 'Integer Meadow',
    },
    background: 'countingmeadowbg.png',
  },
  mr2: {
    id: 'mr2',
    subject: 'math',
    emoji: '🏡',
    name: 'Add & Sub Village',
    names: {
      tier1: 'Add & Sub Village',
      tier2: 'Operation Village',
      tier3: 'Algebra Village',
    },
    background: 'addsubvillagebg.png',
  },
  mr3: {
    id: 'mr3',
    subject: 'math',
    emoji: '🏜️',
    name: 'Fractions Desert',
    names: {
      tier1: 'Fractions Desert',
      tier2: 'Fractions Desert',
      tier3: 'Rational Desert',
    },
    background: 'fractionsdesertbg.png',
  },
  mr4: {
    id: 'mr4',
    subject: 'math',
    emoji: '🌳',
    name: 'Multi Forest',
    names: {
      tier1: 'Multi Forest',
      tier2: 'Multi Forest',
      tier3: 'Ratio Forest',
    },
    background: 'multiforestbg.png',
  },
  mr5: {
    id: 'mr5',
    subject: 'math',
    emoji: '💎',
    name: 'Sharing Castle',
    names: {
      tier1: 'Sharing Castle',
      tier2: 'Division Castle',
      tier3: 'Mastery Castle',
    },
    background: 'geometrycastlebg.png',
  },

  // ---------------- ENGLISH MAP ----------------
  er1: {
    id: 'er1',
    subject: 'english',
    emoji: '📚',
    name: 'Alphabet Library',
    names: {
      tier1: 'Alphabet Library',
      tier2: 'Word Root Library',
      tier3: 'Etymology Library',
    },
    background: 'alphabetlibrarybg.png',
  },
  er2: {
    id: 'er2',
    subject: 'english',
    emoji: '⛵',
    name: 'Vocab Harbor',
    names: {
      tier1: 'Vocab Harbor',
      tier2: 'Lexicon Harbor',
      tier3: 'Expression Harbor',
    },
    background: 'vocabharborbg.png',
  },
  er3: {
    id: 'er3',
    subject: 'english',
    emoji: '☕',
    name: 'Grammar Quarter',
    names: {
      tier1: 'Grammar Quarter',
      tier2: 'Grammar Quarter',
      tier3: 'Syntax Quarter',
    },
    background: 'grammarquarterbg.png',
  },
  er4: {
    id: 'er4',
    subject: 'english',
    emoji: '🌷',
    name: 'Listening Garden',
    names: {
      tier1: 'Listening Garden',
      tier2: 'Dialogue Garden',
      tier3: 'Rhetoric Garden',
    },
    background: 'listeninggardenbg.png',
  },
  er5: {
    id: 'er5',
    subject: 'english',
    emoji: '❄️',
    name: 'Speaking Lodge',
    names: {
      tier1: 'Speaking Lodge',
      tier2: 'Story Lodge',
      tier3: 'Essay Lodge',
    },
    background: 'speakinglodgebg.png',
  },
};

// =========================================================
// NODE (SKILL) TITLES PER TIER KELAS
// =========================================================

export const NODE_TITLES: Record<string, Record<GradeTier, string>> = {
  // ---------------- MATH NODES (m1 - m9) ----------------
  m1: { tier1: 'Counting & Numbers', tier2: 'Rounding & Primes', tier3: 'Exponents & Integers' },
  m2: { tier1: 'Place Value', tier2: 'Large Place Value', tier3: 'Decimal Place Value' },
  m3: { tier1: 'Addition', tier2: 'Multi-Digit Addition', tier3: 'Integer & Decimal Add' },
  m4: { tier1: 'Subtraction', tier2: 'Multi-Digit Subtraction', tier3: 'Integer & Decimal Sub' },
  m5: { tier1: 'Basic Fractions', tier2: 'Equivalent Fractions', tier3: 'Fraction Operations' },
  m6: { tier1: 'Intro Decimals', tier2: 'Decimal Operations', tier3: 'Advanced Decimals' },
  m7: { tier1: 'Intro Percentages', tier2: 'Calculating Percent', tier3: 'Discounts & % Change' },
  m8: { tier1: 'Multiplication', tier2: 'Multi-Digit Multiply', tier3: 'Rates & Integers' },
  m9: { tier1: 'Basic Division', tier2: 'Long Division', tier3: 'Unit Rates & Division' },

  // ---------------- ENGLISH NODES (e1 - e9) ----------------
  e1: { tier1: 'Alphabet & Phonics', tier2: 'Prefixes & Spelling', tier3: 'Roots & Etymology' },
  e2: { tier1: 'Rhyming & Sounds', tier2: 'Homophones & Syllables', tier3: 'Phonetics & Stress' },
  e3: { tier1: 'Daily Vocabulary', tier2: 'Context Vocabulary', tier3: 'Academic & Idioms' },
  e4: { tier1: 'Nouns & Verbs', tier2: 'Adverbs & Pronouns', tier3: 'Clauses & Gerunds' },
  e5: { tier1: 'Basic Synonyms', tier2: 'Strong Synonyms', tier3: 'Word Nuances' },
  e6: { tier1: 'Basic Grammar', tier2: 'Tenses & Comparison', tier3: 'Conditionals & Passive' },
  e7: { tier1: 'Polite Greetings', tier2: 'Group Discussions', tier3: 'Formal & Debate' },
  e8: { tier1: 'Listening Clues', tier2: 'Main Idea & Details', tier3: 'Tone & Inference' },
  e9: { tier1: 'Simple Sentences', tier2: 'Story & Transitions', tier3: 'Thesis & Conciseness' },
};

/** Region awal tiap subject (dipakai kalau regionId tidak dikirim) */
export const DEFAULT_REGION: Record<SubjectKey, string> = {
  math: 'mr1',
  english: 'er1',
};

/** Background cadangan (file yang sudah ada sekarang) */
export const FALLBACK_BACKGROUND: Record<SubjectKey, string> = {
  math: 'countingmeadowbg.png',
  english: 'english_bg.png',
};

export function getRegion(
  regionId?: string | null,
  gradeLevel?: number | null,
): RegionConfig | null {
  if (!regionId) return null;
  const r = REGIONS[regionId];
  if (!r) return null;

  const tier = getGradeTier(gradeLevel);
  return {
    ...r,
    name: r.names[tier],
  };
}

/** Label untuk peta Journey & header Battle, contoh: "🌱 Integer Meadow" (untuk Grade 5–6) */
export function regionLabel(regionId: string, gradeLevel?: number | null): string {
  const r = getRegion(regionId, gradeLevel);
  return r ? `${r.emoji} ${r.name}` : regionId;
}

/** Judul node untuk peta Journey sesuai gradeLevel, contoh: "Exponents & Integers" */
export function nodeTitle(nodeId: string, gradeLevel?: number | null): string {
  const entry = NODE_TITLES[nodeId];
  if (!entry) return nodeId;
  return entry[getGradeTier(gradeLevel)];
}

/**
 * Nilai CSS `background-image` untuk halaman Battle.
 * Memakai 2 layer: background region + fallback subject.
 * Kalau file region belum ada / gagal dimuat, browser otomatis menampilkan layer fallback.
 */
export function getBattleBackground(
  regionId: string | null | undefined,
  subject: string,
): string {
  const key: SubjectKey = subject === 'english' ? 'english' : 'math';
  const region = getRegion(regionId) ?? getRegion(DEFAULT_REGION[key]);
  const fallback = `url('${BACKGROUND_DIR}/${FALLBACK_BACKGROUND[key]}')`;
  if (!region) return fallback;
  return `url('${BACKGROUND_DIR}/${region.background}'), ${fallback}`;
}