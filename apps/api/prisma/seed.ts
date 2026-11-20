import 'dotenv/config';

import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';
import type { CompactQ, GradeTier } from './data/types.js';
import { MATH_GRADE_1 } from './data/math/grade-1.js';
import { MATH_GRADE_2 } from './data/math/grade-2.js';
import { MATH_GRADE_3 } from './data/math/grade-3.js';
import { MATH_GRADE_4 } from './data/math/grade-4.js';
import { MATH_GRADE_5 } from './data/math/grade-5.js';
import { MATH_GRADE_6 } from './data/math/grade-6.js';
import { ENGLISH_GRADE_1 } from './data/eng/grade-1.js';
import { ENGLISH_GRADE_2 } from './data/eng/grade-2.js';
import { ENGLISH_GRADE_3 } from './data/eng/grade-3.js';
import { ENGLISH_GRADE_4 } from './data/eng/grade-4.js';
import { ENGLISH_GRADE_5 } from './data/eng/grade-5.js';
import { ENGLISH_GRADE_6 } from './data/eng/grade-6.js';

const connectionString = process.env['DATABASE_URL'];

if (!connectionString) {
  throw new Error('DATABASE_URL is not defined');
}

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

// =====================================================
// TYPES & HELPERS
// =====================================================

function getGradeTier(grade: number): GradeTier {
  if (grade >= 5) return 'tier3';
  if (grade >= 3) return 'tier2';
  return 'tier1';
}

type NodeMeta = {
  index: number; // 1..9
  topicSlug: string;
  topicNames: Record<GradeTier, string>;
  topicNamesId: Record<GradeTier, string>;
  topicDescEn: string;
  topicDescId: string;
  skillSlug: string;
  skillNames: Record<GradeTier, string>;
  skillNamesId: Record<GradeTier, string>;
  skillDescEn: string;
  skillDescId: string;
};

const MATH_NODES: NodeMeta[] = [
  {
    index: 1,
    topicSlug: 'counting-meadow',
    topicNames: { tier1: 'Counting Meadow', tier2: 'Number Meadow', tier3: 'Integer Meadow' },
    topicNamesId: { tier1: 'Padang Berhitung', tier2: 'Padang Bilangan', tier3: 'Padang Bilangan Bulat' },
    topicDescEn: 'A bright meadow where the number adventure begins.',
    topicDescId: 'Padang rumput tempat petualangan bilangan dimulai.',
    skillSlug: 'counting-and-numbers',
    skillNames: { tier1: 'Counting & Numbers', tier2: 'Rounding & Primes', tier3: 'Exponents & Integers' },
    skillNamesId: { tier1: 'Berhitung & Angka', tier2: 'Pembulatan & Prima', tier3: 'Pangkat & Bilangan Bulat' },
    skillDescEn: 'Number sense, patterns, primes, exponents, and integers.',
    skillDescId: 'Kepekaan bilangan, pola, bilangan prima, pangkat, dan bilangan bulat.',
  },
  {
    index: 2,
    topicSlug: 'counting-meadow',
    topicNames: { tier1: 'Counting Meadow', tier2: 'Number Meadow', tier3: 'Integer Meadow' },
    topicNamesId: { tier1: 'Padang Berhitung', tier2: 'Padang Bilangan', tier3: 'Padang Bilangan Bulat' },
    topicDescEn: 'A bright meadow where the number adventure begins.',
    topicDescId: 'Padang rumput tempat petualangan bilangan dimulai.',
    skillSlug: 'place-value',
    skillNames: { tier1: 'Place Value', tier2: 'Large Place Value', tier3: 'Decimal Place Value' },
    skillNamesId: { tier1: 'Nilai Tempat', tier2: 'Nilai Tempat Besar', tier3: 'Nilai Tempat Desimal' },
    skillDescEn: 'Understanding digit values in whole and decimal numbers.',
    skillDescId: 'Memahami nilai angka pada bilangan bulat dan desimal.',
  },
  {
    index: 3,
    topicSlug: 'add-sub-village',
    topicNames: { tier1: 'Add & Sub Village', tier2: 'Operation Village', tier3: 'Algebra Village' },
    topicNamesId: { tier1: 'Desa Tambah & Kurang', tier2: 'Desa Operasi Hitung', tier3: 'Desa Aljabar' },
    topicDescEn: 'A lively village to practice addition and subtraction.',
    topicDescId: 'Desa ceria untuk melatih operasi penjumlahan dan pengurangan.',
    skillSlug: 'addition',
    skillNames: { tier1: 'Addition', tier2: 'Multi-Digit Addition', tier3: 'Integer & Decimal Add' },
    skillNamesId: { tier1: 'Penjumlahan', tier2: 'Penjumlahan Susun', tier3: 'Jumlah Bulat & Desimal' },
    skillDescEn: 'Adding whole numbers, decimals, and integers accurately.',
    skillDescId: 'Menjumlahkan bilangan bulat dan desimal dengan tepat.',
  },
  {
    index: 4,
    topicSlug: 'add-sub-village',
    topicNames: { tier1: 'Add & Sub Village', tier2: 'Operation Village', tier3: 'Algebra Village' },
    topicNamesId: { tier1: 'Desa Tambah & Kurang', tier2: 'Desa Operasi Hitung', tier3: 'Desa Aljabar' },
    topicDescEn: 'A lively village to practice addition and subtraction.',
    topicDescId: 'Desa ceria untuk melatih operasi penjumlahan dan pengurangan.',
    skillSlug: 'subtraction',
    skillNames: { tier1: 'Subtraction', tier2: 'Multi-Digit Subtraction', tier3: 'Integer & Decimal Sub' },
    skillNamesId: { tier1: 'Pengurangan', tier2: 'Pengurangan Susun', tier3: 'Kurang Bulat & Desimal' },
    skillDescEn: 'Subtracting whole numbers, decimals, and integers accurately.',
    skillDescId: 'Mengurangkan bilangan bulat dan desimal dengan tepat.',
  },
  {
    index: 5,
    topicSlug: 'fractions-desert',
    topicNames: { tier1: 'Fractions Desert', tier2: 'Fractions Desert', tier3: 'Rational Desert' },
    topicNamesId: { tier1: 'Gurun Pecahan', tier2: 'Gurun Pecahan', tier3: 'Gurun Bilangan Rasional' },
    topicDescEn: 'A golden desert for mastering fractions and decimals.',
    topicDescId: 'Gurun pasir tempat belajar pecahan dan desimal.',
    skillSlug: 'fractions',
    skillNames: { tier1: 'Basic Fractions', tier2: 'Equivalent Fractions', tier3: 'Fraction Operations' },
    skillNamesId: { tier1: 'Pecahan Dasar', tier2: 'Pecahan Senilai', tier3: 'Operasi Pecahan' },
    skillDescEn: 'Understanding, simplifying, and operating with fractions.',
    skillDescId: 'Memahami, menyederhanakan, dan menghitung pecahan.',
  },
  {
    index: 6,
    topicSlug: 'fractions-desert',
    topicNames: { tier1: 'Fractions Desert', tier2: 'Fractions Desert', tier3: 'Rational Desert' },
    topicNamesId: { tier1: 'Gurun Pecahan', tier2: 'Gurun Pecahan', tier3: 'Gurun Bilangan Rasional' },
    topicDescEn: 'A golden desert for mastering fractions and decimals.',
    topicDescId: 'Gurun pasir tempat belajar pecahan dan desimal.',
    skillSlug: 'decimals',
    skillNames: { tier1: 'Intro Decimals', tier2: 'Decimal Operations', tier3: 'Advanced Decimals' },
    skillNamesId: { tier1: 'Kenal Desimal', tier2: 'Operasi Desimal', tier3: 'Desimal Lanjutan' },
    skillDescEn: 'Understanding and operating with decimals.',
    skillDescId: 'Memahami dan menghitung bilangan desimal.',
  },
  {
    index: 7,
    topicSlug: 'multi-forest',
    topicNames: { tier1: 'Multi Forest', tier2: 'Multi Forest', tier3: 'Ratio Forest' },
    topicNamesId: { tier1: 'Hutan Perkalian', tier2: 'Hutan Perkalian', tier3: 'Hutan Rasio & Persen' },
    topicDescEn: 'A lush forest for practicing percentages, ratios, and multiplication.',
    topicDescId: 'Hutan rimbun tempat berlatih persen, rasio, dan perkalian.',
    skillSlug: 'percentages',
    skillNames: { tier1: 'Intro Percentages', tier2: 'Calculating Percent', tier3: 'Discounts & % Change' },
    skillNamesId: { tier1: 'Kenal Persen', tier2: 'Hitung Persen', tier3: 'Diskon & Perubahan %' },
    skillDescEn: 'Understanding and calculating percentages and percentage change.',
    skillDescId: 'Memahami dan menghitung persentase serta perubahannya.',
  },
  {
    index: 8,
    topicSlug: 'multi-forest',
    topicNames: { tier1: 'Multi Forest', tier2: 'Multi Forest', tier3: 'Ratio Forest' },
    topicNamesId: { tier1: 'Hutan Perkalian', tier2: 'Hutan Perkalian', tier3: 'Hutan Rasio & Persen' },
    topicDescEn: 'A lush forest for practicing percentages, ratios, and multiplication.',
    topicDescId: 'Hutan rimbun tempat berlatih persen, rasio, dan perkalian.',
    skillSlug: 'multiplication',
    skillNames: { tier1: 'Multiplication', tier2: 'Multi-Digit Multiply', tier3: 'Rates & Integers' },
    skillNamesId: { tier1: 'Perkalian', tier2: 'Perkalian Susun', tier3: 'Laju & Bilangan Bulat' },
    skillDescEn: 'Multiplying numbers, rates, and solving equal-group problems.',
    skillDescId: 'Mengalikan bilangan dan menyelesaikan soal kelompok sama besar.',
  },
  {
    index: 9,
    topicSlug: 'geometry-castle',
    topicNames: { tier1: 'Sharing Castle', tier2: 'Division Castle', tier3: 'Mastery Castle' },
    topicNamesId: { tier1: 'Kastil Berbagi', tier2: 'Kastil Pembagian', tier3: 'Kastil Tantangan' },
    topicDescEn: 'A crystal castle for division and problem-solving challenges.',
    topicDescId: 'Kastil kristal untuk tantangan pembagian dan pemecahan masalah.',
    skillSlug: 'division',
    skillNames: { tier1: 'Basic Division', tier2: 'Long Division', tier3: 'Unit Rates & Division' },
    skillNamesId: { tier1: 'Pembagian Dasar', tier2: 'Pembagian Susun', tier3: 'Rasio Satuan & Bagi' },
    skillDescEn: 'Dividing numbers, unit rates, and sharing equally.',
    skillDescId: 'Membagi bilangan secara merata dan menghitung rasio satuan.',
  },
];

const ENGLISH_NODES: NodeMeta[] = [
  {
    index: 1,
    topicSlug: 'alphabet-library',
    topicNames: { tier1: 'Alphabet Library', tier2: 'Word Root Library', tier3: 'Etymology Library' },
    topicNamesId: { tier1: 'Perpustakaan Alfabet', tier2: 'Perpustakaan Akar Kata', tier3: 'Perpustakaan Etimologi' },
    topicDescEn: 'A magical library for letters, phonics, spelling, and word roots.',
    topicDescId: 'Perpustakaan ajaib untuk huruf, fonik, ejaan, dan akar kata.',
    skillSlug: 'alphabet-and-phonics',
    skillNames: { tier1: 'Alphabet & Phonics', tier2: 'Prefixes & Spelling', tier3: 'Roots & Etymology' },
    skillNamesId: { tier1: 'Alfabet & Fonik', tier2: 'Awalan & Ejaan', tier3: 'Akar Kata & Etimologi' },
    skillDescEn: 'Letters, spelling patterns, prefixes, and word roots.',
    skillDescId: 'Huruf, pola ejaan, awalan kata, dan akar kata.',
  },
  {
    index: 2,
    topicSlug: 'alphabet-library',
    topicNames: { tier1: 'Alphabet Library', tier2: 'Word Root Library', tier3: 'Etymology Library' },
    topicNamesId: { tier1: 'Perpustakaan Alfabet', tier2: 'Perpustakaan Akar Kata', tier3: 'Perpustakaan Etimologi' },
    topicDescEn: 'A magical library for letters, phonics, spelling, and word roots.',
    topicDescId: 'Perpustakaan ajaib untuk huruf, fonik, ejaan, dan akar kata.',
    skillSlug: 'pronunciation',
    skillNames: { tier1: 'Rhyming & Sounds', tier2: 'Homophones & Syllables', tier3: 'Phonetics & Stress' },
    skillNamesId: { tier1: 'Rima & Bunyi Kata', tier2: 'Homofon & Suku Kata', tier3: 'Fonetik & Penekanan' },
    skillDescEn: 'Rhymes, syllables, homophones, and word sounds.',
    skillDescId: 'Rima, suku kata, homofon, dan pelafalan kata.',
  },
  {
    index: 3,
    topicSlug: 'vocab-harbor',
    topicNames: { tier1: 'Vocab Harbor', tier2: 'Lexicon Harbor', tier3: 'Expression Harbor' },
    topicNamesId: { tier1: 'Pelabuhan Kosakata', tier2: 'Pelabuhan Leksikon', tier3: 'Pelabuhan Ungkapan' },
    topicDescEn: 'A bustling harbor to enrich vocabulary and expressions.',
    topicDescId: 'Pelabuhan kata untuk memperkaya kosakata dan ungkapan.',
    skillSlug: 'vocabulary',
    skillNames: { tier1: 'Daily Vocabulary', tier2: 'Context Vocabulary', tier3: 'Academic & Idioms' },
    skillNamesId: { tier1: 'Kosakata Harian', tier2: 'Kosakata Konteks', tier3: 'Kosakata Akademik & Idiom' },
    skillDescEn: 'Building rich English vocabulary and expressions.',
    skillDescId: 'Membangun kosakata bahasa Inggris dan ungkapan sehari-hari.',
  },
  {
    index: 4,
    topicSlug: 'vocab-harbor',
    topicNames: { tier1: 'Vocab Harbor', tier2: 'Lexicon Harbor', tier3: 'Expression Harbor' },
    topicNamesId: { tier1: 'Pelabuhan Kosakata', tier2: 'Pelabuhan Leksikon', tier3: 'Pelabuhan Ungkapan' },
    topicDescEn: 'A bustling harbor to enrich vocabulary and expressions.',
    topicDescId: 'Pelabuhan kata untuk memperkaya kosakata dan ungkapan.',
    skillSlug: 'parts-of-speech',
    skillNames: { tier1: 'Nouns & Verbs', tier2: 'Adverbs & Pronouns', tier3: 'Clauses & Gerunds' },
    skillNamesId: { tier1: 'Kata Benda & Kerja', tier2: 'Kata Keterangan & Ganti', tier3: 'Klausa & Gerund' },
    skillDescEn: 'Nouns, verbs, adjectives, adverbs, and clauses.',
    skillDescId: 'Jenis-jenis kata dan penyusun kalimat bahasa Inggris.',
  },
  {
    index: 5,
    topicSlug: 'grammar-quarter',
    topicNames: { tier1: 'Grammar Quarter', tier2: 'Grammar Quarter', tier3: 'Syntax Quarter' },
    topicNamesId: { tier1: 'Distrik Tata Bahasa', tier2: 'Distrik Tata Bahasa', tier3: 'Distrik Sintaksis' },
    topicDescEn: 'The grammar district for synonyms, word nuances, and sentences.',
    topicDescId: 'Kawasan tata bahasa untuk sinonim, nuansa kata, dan kalimat.',
    skillSlug: 'synonyms',
    skillNames: { tier1: 'Basic Synonyms', tier2: 'Strong Synonyms', tier3: 'Word Nuances' },
    skillNamesId: { tier1: 'Sinonim Dasar', tier2: 'Sinonim Lanjutan', tier3: 'Nuansa Makna Kata' },
    skillDescEn: 'Words with similar meanings and nuances.',
    skillDescId: 'Kata-kata dengan makna serupa dan nuansanya.',
  },
  {
    index: 6,
    topicSlug: 'grammar-quarter',
    topicNames: { tier1: 'Grammar Quarter', tier2: 'Grammar Quarter', tier3: 'Syntax Quarter' },
    topicNamesId: { tier1: 'Distrik Tata Bahasa', tier2: 'Distrik Tata Bahasa', tier3: 'Distrik Sintaksis' },
    topicDescEn: 'The grammar district for synonyms, word nuances, and sentences.',
    topicDescId: 'Kawasan tata bahasa untuk sinonim, nuansa kata, dan kalimat.',
    skillSlug: 'grammar-and-tenses',
    skillNames: { tier1: 'Basic Grammar', tier2: 'Tenses & Comparison', tier3: 'Conditionals & Passive' },
    skillNamesId: { tier1: 'Tata Bahasa Dasar', tier2: 'Tenses & Perbandingan', tier3: 'Kalimat Pengandaian & Pasif' },
    skillDescEn: 'Sentence structure, verb tenses, and advanced grammar.',
    skillDescId: 'Struktur kalimat, bentuk waktu kata kerja, dan tata bahasa lanjutan.',
  },
  {
    index: 7,
    topicSlug: 'listening-garden',
    topicNames: { tier1: 'Listening Garden', tier2: 'Dialogue Garden', tier3: 'Rhetoric Garden' },
    topicNamesId: { tier1: 'Taman Menyimak', tier2: 'Taman Dialog', tier3: 'Taman Retorika' },
    topicDescEn: 'A peaceful garden for conversations, discussions, and comprehension.',
    topicDescId: 'Taman tenang untuk percakapan, diskusi, dan pemahaman.',
    skillSlug: 'conversations',
    skillNames: { tier1: 'Polite Greetings', tier2: 'Group Discussions', tier3: 'Formal & Debate' },
    skillNamesId: { tier1: 'Sapaan Sopan', tier2: 'Diskusi Kelompok', tier3: 'Percakapan Formal & Debat' },
    skillDescEn: 'Polite, persuasive, and natural everyday dialogues.',
    skillDescId: 'Dialog sehari-hari yang sopan, alami, dan persuasif.',
  },
  {
    index: 8,
    topicSlug: 'listening-garden',
    topicNames: { tier1: 'Listening Garden', tier2: 'Dialogue Garden', tier3: 'Rhetoric Garden' },
    topicNamesId: { tier1: 'Taman Menyimak', tier2: 'Taman Dialog', tier3: 'Taman Retorika' },
    topicDescEn: 'A peaceful garden for conversations, discussions, and comprehension.',
    topicDescId: 'Taman tenang untuk percakapan, diskusi, dan pemahaman.',
    skillSlug: 'listening',
    skillNames: { tier1: 'Listening Clues', tier2: 'Main Idea & Details', tier3: 'Tone & Inference' },
    skillNamesId: { tier1: 'Petunjuk Menyimak', tier2: 'Ide Pokok & Detail', tier3: 'Nada & Simpulan' },
    skillDescEn: 'Understanding spoken clues, main ideas, and inference.',
    skillDescId: 'Memahami petunjuk, ide pokok, dan simpulan bacaan/simakan.',
  },
  {
    index: 9,
    topicSlug: 'speaking-lodge',
    topicNames: { tier1: 'Speaking Lodge', tier2: 'Story Lodge', tier3: 'Essay Lodge' },
    topicNamesId: { tier1: 'Pondok Berbicara', tier2: 'Pondok Cerita', tier3: 'Pondok Esai' },
    topicDescEn: 'A cozy lodge for practicing expression, storytelling, and writing.',
    topicDescId: 'Pondok salju untuk melatih ekspresi, cerita, dan penulisan.',
    skillSlug: 'speaking',
    skillNames: { tier1: 'Simple Sentences', tier2: 'Story & Transitions', tier3: 'Thesis & Conciseness' },
    skillNamesId: { tier1: 'Kalimat Sederhana', tier2: 'Cerita & Kata Hubung', tier3: 'Tesis & Kalimat Efektif' },
    skillDescEn: 'Expressing ideas clearly, logically, and accurately.',
    skillDescId: 'Menyampaikan gagasan secara jelas, runtut, dan tepat.',
  },
];

// =====================================================
// MODULAR QUESTION BANKS (GRADES 1 - 6, 9 NODES EACH)
// =====================================================

const MATH_BANK: Record<number, Record<number, CompactQ[]>> = {
  1: MATH_GRADE_1,
  2: MATH_GRADE_2,
  3: MATH_GRADE_3,
  4: MATH_GRADE_4,
  5: MATH_GRADE_5,
  6: MATH_GRADE_6,
};

const ENGLISH_BANK: Record<number, Record<number, CompactQ[]>> = {
  1: ENGLISH_GRADE_1,
  2: ENGLISH_GRADE_2,
  3: ENGLISH_GRADE_3,
  4: ENGLISH_GRADE_4,
  5: ENGLISH_GRADE_5,
  6: ENGLISH_GRADE_6,
};

// =====================================================
// HELPER: DETERMINISTIC OPTION ORDER + TRANSLATIONS
// =====================================================

function buildOptions(q: CompactQ, seedOffset: number) {
  const tr = q[8];
  const raw = [
    {
      text: q[3],
      isCorrect: true,
      translations: tr
        ? {
            ...(tr.id ? { id: { text: tr.id.correct } } : {}),
            ...(tr.zh ? { zh: { text: tr.zh.correct } } : {}),
          }
        : undefined,
    },
    {
      text: q[4],
      isCorrect: false,
      translations: tr
        ? {
            ...(tr.id ? { id: { text: tr.id.w1 } } : {}),
            ...(tr.zh ? { zh: { text: tr.zh.w1 } } : {}),
          }
        : undefined,
    },
    {
      text: q[5],
      isCorrect: false,
      translations: tr
        ? {
            ...(tr.id ? { id: { text: tr.id.w2 } } : {}),
            ...(tr.zh ? { zh: { text: tr.zh.w2 } } : {}),
          }
        : undefined,
    },
    {
      text: q[6],
      isCorrect: false,
      translations: tr
        ? {
            ...(tr.id ? { id: { text: tr.id.w3 } } : {}),
            ...(tr.zh ? { zh: { text: tr.zh.w3 } } : {}),
          }
        : undefined,
    },
  ];

  const shift = seedOffset % 4;
  const rotated = [...raw.slice(shift), ...raw.slice(0, shift)];
  return rotated.map((opt, idx) => ({
    text: opt.text,
    isCorrect: opt.isCorrect,
    orderIndex: idx + 1,
    translations: opt.translations,
  }));
}

function buildQuestionTranslations(q: CompactQ) {
  const tr = q[8];
  if (!tr) return undefined;
  const out: Record<string, { prompt: string; explanation: string }> = {};
  if (tr.id) {
    out.id = { prompt: tr.id.prompt, explanation: tr.id.explanation };
  }
  if (tr.zh) {
    out.zh = { prompt: tr.zh.prompt, explanation: tr.zh.explanation };
  }
  return Object.keys(out).length > 0 ? out : undefined;
}

// =====================================================
// MAIN SEED RUNNER (GRADES 1 - 6)
// =====================================================

async function main() {
  console.log('Starting modular multilingual database seed (Grades 1–6)...');

  const curriculum = await prisma.curriculum.upsert({
    where: { code: 'MMA_PRIMARY_V1' },
    update: {
      name: 'MMA Primary Curriculum',
      description: 'Primary learning curriculum (Grades 1–6) for MMA Learning Game.',
      status: 'PUBLISHED',
    },
    create: {
      code: 'MMA_PRIMARY_V1',
      name: 'MMA Primary Curriculum',
      description: 'Primary learning curriculum (Grades 1–6) for MMA Learning Game.',
      status: 'PUBLISHED',
    },
  });

  const mathSubject = await prisma.subject.upsert({
    where: { curriculumId_slug: { curriculumId: curriculum.id, slug: 'mathematics' } },
    update: {
      name: 'Mathematics',
      description: 'Primary mathematics learning.',
      translations: { id: { name: 'Matematika', description: 'Pembelajaran matematika sekolah dasar.' } },
      orderIndex: 1,
      status: 'PUBLISHED',
    },
    create: {
      curriculumId: curriculum.id,
      name: 'Mathematics',
      slug: 'mathematics',
      description: 'Primary mathematics learning.',
      translations: { id: { name: 'Matematika', description: 'Pembelajaran matematika sekolah dasar.' } },
      orderIndex: 1,
      status: 'PUBLISHED',
    },
  });

  const englishSubject = await prisma.subject.upsert({
    where: { curriculumId_slug: { curriculumId: curriculum.id, slug: 'english' } },
    update: {
      name: 'English',
      description: 'Primary English learning.',
      translations: { id: { name: 'Bahasa Inggris', description: 'Pembelajaran bahasa Inggris sekolah dasar.' } },
      orderIndex: 2,
      status: 'PUBLISHED',
    },
    create: {
      curriculumId: curriculum.id,
      name: 'English',
      slug: 'english',
      description: 'Primary English learning.',
      translations: { id: { name: 'Bahasa Inggris', description: 'Pembelajaran bahasa Inggris sekolah dasar.' } },
      orderIndex: 2,
      status: 'PUBLISHED',
    },
  });

  const subjectsToSeed = [
    { key: 'math' as const, subject: mathSubject, nodes: MATH_NODES, bank: MATH_BANK },
    { key: 'eng' as const, subject: englishSubject, nodes: ENGLISH_NODES, bank: ENGLISH_BANK },
  ];

  let totalLessons = 0;
  let totalQuestions = 0;

  for (let grade = 1; grade <= 6; grade++) {
    const tier = getGradeTier(grade);

    for (const { key, subject, nodes, bank } of subjectsToSeed) {
      const topicCache = new Map<string, string>();
      let topicOrder = 0;

      for (const node of nodes) {
        const topicName = node.topicNames[tier];
        const topicNameId = node.topicNamesId[tier];
        const skillName = node.skillNames[tier];
        const skillNameId = node.skillNamesId[tier];
        let topicId = topicCache.get(node.topicSlug);

        if (!topicId) {
          topicOrder += 1;
          const topicTranslations = {
            id: { name: topicNameId, description: node.topicDescId },
          };
          const topic = await prisma.topic.upsert({
            where: {
              subjectId_gradeLevel_slug: {
                subjectId: subject.id,
                gradeLevel: grade,
                slug: node.topicSlug,
              },
            },
            update: {
              name: topicName,
              description: node.topicDescEn,
              translations: topicTranslations,
              orderIndex: topicOrder,
              status: 'PUBLISHED',
            },
            create: {
              subjectId: subject.id,
              name: topicName,
              slug: node.topicSlug,
              description: node.topicDescEn,
              translations: topicTranslations,
              gradeLevel: grade,
              orderIndex: topicOrder,
              status: 'PUBLISHED',
            },
          });
          topicId = topic.id;
          topicCache.set(node.topicSlug, topicId);
        }

        const skillTranslations = {
          id: { name: skillNameId, description: node.skillDescId },
        };

        const skill = await prisma.skill.upsert({
          where: {
            topicId_slug: {
              topicId,
              slug: node.skillSlug,
            },
          },
          update: {
            name: skillName,
            description: node.skillDescEn,
            translations: skillTranslations,
            orderIndex: node.index,
            status: 'PUBLISHED',
          },
          create: {
            topicId,
            name: skillName,
            slug: node.skillSlug,
            description: node.skillDescEn,
            translations: skillTranslations,
            orderIndex: node.index,
            status: 'PUBLISHED',
          },
        });

        const padIndex = String(node.index).padStart(2, '0');
        const lessonId = `lesson_g${grade}_${key}_${padIndex}`;
        const lessonSlug = `${node.skillSlug}-g${grade}`;
        const lessonTranslations = {
          id: {
            title: `${skillNameId} (Kelas ${grade})`,
            description: `${node.skillDescId} — Kelas ${grade} SD.`,
          },
        };

        const lesson = await prisma.lesson.upsert({
          where: { id: lessonId },
          update: {
            skillId: skill.id,
            title: `${skillName} (Grade ${grade})`,
            slug: lessonSlug,
            description: `${node.skillDescEn} — Primary Grade ${grade}.`,
            translations: lessonTranslations,
            orderIndex: 1,
            xpReward: 50 + (grade - 1) * 10,
            status: 'PUBLISHED',
          },
          create: {
            id: lessonId,
            skillId: skill.id,
            title: `${skillName} (Grade ${grade})`,
            slug: lessonSlug,
            description: `${node.skillDescEn} — Primary Grade ${grade}.`,
            translations: lessonTranslations,
            orderIndex: 1,
            xpReward: 50 + (grade - 1) * 10,
            status: 'PUBLISHED',
          },
        });

        totalLessons += 1;

        const questions = bank[grade]?.[node.index] ?? [];
        for (let qIdx = 0; qIdx < questions.length; qIdx++) {
          const q = questions[qIdx];
          const code = `${key.toUpperCase()}_G${grade}_N${node.index}_Q${qIdx + 1}`;
          const questionTranslations = buildQuestionTranslations(q);

          const question = await prisma.question.upsert({
            where: { code },
            update: {
              lessonId: lesson.id,
              skillId: skill.id,
              type: 'MULTIPLE_CHOICE',
              source: 'FIXED',
              format: q[7] ?? 'STANDARD',
              difficulty: q[0],
              prompt: q[1],
              explanation: q[2],
              translations: questionTranslations ?? undefined,
              orderIndex: qIdx + 1,
              status: 'PUBLISHED',
            },
            create: {
              code,
              lessonId: lesson.id,
              skillId: skill.id,
              type: 'MULTIPLE_CHOICE',
              source: 'FIXED',
              format: q[7] ?? 'STANDARD',
              difficulty: q[0],
              prompt: q[1],
              explanation: q[2],
              translations: questionTranslations ?? undefined,
              orderIndex: qIdx + 1,
              status: 'PUBLISHED',
            },
          });

          await prisma.questionOption.deleteMany({
            where: { questionId: question.id },
          });

          await prisma.questionOption.createMany({
            data: buildOptions(q, grade + node.index + qIdx).map((opt) => ({
              questionId: question.id,
              text: opt.text,
              isCorrect: opt.isCorrect,
              orderIndex: opt.orderIndex,
              translations: opt.translations ?? undefined,
            })),
          });

          totalQuestions += 1;
        }
      }
    }

    console.log(`Seeded Grade ${grade}/6 successfully.`);
  }

  console.log(
    `Database seed completed! (${totalLessons} lessons, ${totalQuestions} questions across Grades 1–6).`
  );
}

main()
  .catch((error) => {
    console.error('Database seed failed:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });