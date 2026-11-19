// =========================================================
// SINGLE SOURCE OF TRUTH: Region (Topic) -> nama + background Battle
// Letakkan di: app/lib/regions.ts
//
// Hierarki: Curriculum (World) > Subject (Map) > Topic (Region) > Skill (Node) > Lesson (Battle)
// Nanti `id` region ini bisa diganti dengan `topicId` dari backend (Prisma).
// =========================================================

export type SubjectKey = 'math' | 'english';

export interface RegionConfig {
  id: string;
  subject: SubjectKey;
  emoji: string;
  name: string;
  /** nama file di /public/assets/journey/ */
  background: string;
}

export const BACKGROUND_DIR = '/assets/journey';

export const REGIONS: Record<string, RegionConfig> = {
  // ---------------- MATH MAP ----------------
  mr1: { id: 'mr1', subject: 'math', emoji: '🌱', name: 'Counting Meadow', background: 'countingmeadowbg.png' },
  mr2: { id: 'mr2', subject: 'math', emoji: '🏡', name: 'Add & Sub Village', background: 'addsubvillagebg.png' },
  mr3: { id: 'mr3', subject: 'math', emoji: '🏜️', name: 'Fractions Desert', background: 'fractionsdesertbg.png' },
  mr4: { id: 'mr4', subject: 'math', emoji: '🌳', name: 'Multi Forest', background: 'multiforestbg.png' },
  mr5: { id: 'mr5', subject: 'math', emoji: '💎', name: 'Geometry Castle', background: 'geometrycastlebg.png' },

  // ---------------- ENGLISH MAP ----------------
  er1: { id: 'er1', subject: 'english', emoji: '📚', name: 'Alphabet Library', background: 'alphabetlibrarybg.png' },
  er2: { id: 'er2', subject: 'english', emoji: '⛵', name: 'Vocab Harbor', background: 'vocabharborbg.png' },
  er3: { id: 'er3', subject: 'english', emoji: '☕', name: 'Grammar Quarter', background: 'grammarquarterbg.png' },
  er4: { id: 'er4', subject: 'english', emoji: '🌷', name: 'Listening Garden', background: 'listeninggardenbg.png' },
  er5: { id: 'er5', subject: 'english', emoji: '❄️', name: 'Speaking Lodge', background: 'speakinglodgebg.png' },
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

export function getRegion(regionId?: string | null): RegionConfig | null {
  return regionId ? REGIONS[regionId] ?? null : null;
}

/** Label untuk peta Journey, contoh: "🏜️ Fractions Desert" */
export function regionLabel(regionId: string): string {
  const r = REGIONS[regionId];
  return r ? `${r.emoji} ${r.name}` : regionId;
}

/**
 * Nilai CSS `background-image` untuk halaman Battle.
 * Memakai 2 layer: background region + fallback subject.
 * Kalau file region belum ada / gagal dimuat, browser otomatis menampilkan layer fallback.
 */
export function getBattleBackground(regionId: string | null | undefined, subject: string): string {
  const key: SubjectKey = subject === 'english' ? 'english' : 'math';
  const region = getRegion(regionId) ?? getRegion(DEFAULT_REGION[key]);
  const fallback = `url('${BACKGROUND_DIR}/${FALLBACK_BACKGROUND[key]}')`;
  if (!region) return fallback;
  return `url('${BACKGROUND_DIR}/${region.background}'), ${fallback}`;
}
