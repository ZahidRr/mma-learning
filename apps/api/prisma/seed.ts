import 'dotenv/config';

import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';

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

type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';
type Format = 'STANDARD' | 'WORD_PROBLEM';
type GradeTier = 'tier1' | 'tier2' | 'tier3';

function getGradeTier(grade: number): GradeTier {
  if (grade >= 5) return 'tier3';
  if (grade >= 3) return 'tier2';
  return 'tier1';
}

type CompactQ = [
  difficulty: Difficulty,
  prompt: string,
  explanation: string,
  correct: string,
  w1: string,
  w2: string,
  w3: string,
  format?: Format,
];

type NodeMeta = {
  index: number; // 1..9
  topicSlug: string;
  topicNames: Record<GradeTier, string>;
  topicDesc: string;
  skillSlug: string;
  skillNames: Record<GradeTier, string>;
  skillDesc: string;
};

const MATH_NODES: NodeMeta[] = [
  {
    index: 1,
    topicSlug: 'counting-meadow',
    topicNames: { tier1: 'Counting Meadow', tier2: 'Number Meadow', tier3: 'Integer Meadow' },
    topicDesc: 'Padang rumput tempat petualangan bilangan dimulai.',
    skillSlug: 'counting-and-numbers',
    skillNames: { tier1: 'Counting & Numbers', tier2: 'Rounding & Primes', tier3: 'Exponents & Integers' },
    skillDesc: 'Number sense, patterns, primes, exponents, and integers.',
  },
  {
    index: 2,
    topicSlug: 'counting-meadow',
    topicNames: { tier1: 'Counting Meadow', tier2: 'Number Meadow', tier3: 'Integer Meadow' },
    topicDesc: 'Padang rumput tempat petualangan bilangan dimulai.',
    skillSlug: 'place-value',
    skillNames: { tier1: 'Place Value', tier2: 'Large Place Value', tier3: 'Decimal Place Value' },
    skillDesc: 'Understanding digit values in whole and decimal numbers.',
  },
  {
    index: 3,
    topicSlug: 'add-sub-village',
    topicNames: { tier1: 'Add & Sub Village', tier2: 'Operation Village', tier3: 'Algebra Village' },
    topicDesc: 'Desa ceria untuk melatih operasi penjumlahan dan pengurangan.',
    skillSlug: 'addition',
    skillNames: { tier1: 'Addition', tier2: 'Multi-Digit Addition', tier3: 'Integer & Decimal Add' },
    skillDesc: 'Adding whole numbers, decimals, and integers accurately.',
  },
  {
    index: 4,
    topicSlug: 'add-sub-village',
    topicNames: { tier1: 'Add & Sub Village', tier2: 'Operation Village', tier3: 'Algebra Village' },
    topicDesc: 'Desa ceria untuk melatih operasi penjumlahan dan pengurangan.',
    skillSlug: 'subtraction',
    skillNames: { tier1: 'Subtraction', tier2: 'Multi-Digit Subtraction', tier3: 'Integer & Decimal Sub' },
    skillDesc: 'Subtracting whole numbers, decimals, and integers accurately.',
  },
  {
    index: 5,
    topicSlug: 'fractions-desert',
    topicNames: { tier1: 'Fractions Desert', tier2: 'Fractions Desert', tier3: 'Rational Desert' },
    topicDesc: 'Gurun pasir tempat belajar pecahan dan desimal.',
    skillSlug: 'fractions',
    skillNames: { tier1: 'Basic Fractions', tier2: 'Equivalent Fractions', tier3: 'Fraction Operations' },
    skillDesc: 'Understanding, simplifying, and operating with fractions.',
  },
  {
    index: 6,
    topicSlug: 'fractions-desert',
    topicNames: { tier1: 'Fractions Desert', tier2: 'Fractions Desert', tier3: 'Rational Desert' },
    topicDesc: 'Gurun pasir tempat belajar pecahan dan desimal.',
    skillSlug: 'decimals',
    skillNames: { tier1: 'Intro Decimals', tier2: 'Decimal Operations', tier3: 'Advanced Decimals' },
    skillDesc: 'Understanding and operating with decimals.',
  },
  {
    index: 7,
    topicSlug: 'multi-forest',
    topicNames: { tier1: 'Multi Forest', tier2: 'Multi Forest', tier3: 'Ratio Forest' },
    topicDesc: 'Hutan rimbun tempat berlatih persen, rasio, dan perkalian.',
    skillSlug: 'percentages',
    skillNames: { tier1: 'Intro Percentages', tier2: 'Calculating Percent', tier3: 'Discounts & % Change' },
    skillDesc: 'Understanding and calculating percentages and percentage change.',
  },
  {
    index: 8,
    topicSlug: 'multi-forest',
    topicNames: { tier1: 'Multi Forest', tier2: 'Multi Forest', tier3: 'Ratio Forest' },
    topicDesc: 'Hutan rimbun tempat berlatih persen, rasio, dan perkalian.',
    skillSlug: 'multiplication',
    skillNames: { tier1: 'Multiplication', tier2: 'Multi-Digit Multiply', tier3: 'Rates & Integers' },
    skillDesc: 'Multiplying numbers, rates, and solving equal-group problems.',
  },
  {
    index: 9,
    topicSlug: 'geometry-castle',
    topicNames: { tier1: 'Sharing Castle', tier2: 'Division Castle', tier3: 'Mastery Castle' },
    topicDesc: 'Kastil kristal untuk tantangan pembagian dan pemecahan masalah.',
    skillSlug: 'division',
    skillNames: { tier1: 'Basic Division', tier2: 'Long Division', tier3: 'Unit Rates & Division' },
    skillDesc: 'Dividing numbers, unit rates, and sharing equally.',
  },
];

const ENGLISH_NODES: NodeMeta[] = [
  {
    index: 1,
    topicSlug: 'alphabet-library',
    topicNames: { tier1: 'Alphabet Library', tier2: 'Word Root Library', tier3: 'Etymology Library' },
    topicDesc: 'Perpustakaan ajaib untuk huruf, fonik, ejaan, dan akar kata.',
    skillSlug: 'alphabet-and-phonics',
    skillNames: { tier1: 'Alphabet & Phonics', tier2: 'Prefixes & Spelling', tier3: 'Roots & Etymology' },
    skillDesc: 'Letters, spelling patterns, prefixes, and word roots.',
  },
  {
    index: 2,
    topicSlug: 'alphabet-library',
    topicNames: { tier1: 'Alphabet Library', tier2: 'Word Root Library', tier3: 'Etymology Library' },
    topicDesc: 'Perpustakaan ajaib untuk huruf, fonik, ejaan, dan akar kata.',
    skillSlug: 'pronunciation',
    skillNames: { tier1: 'Rhyming & Sounds', tier2: 'Homophones & Syllables', tier3: 'Phonetics & Stress' },
    skillDesc: 'Rhymes, syllables, homophones, and word sounds.',
  },
  {
    index: 3,
    topicSlug: 'vocab-harbor',
    topicNames: { tier1: 'Vocab Harbor', tier2: 'Lexicon Harbor', tier3: 'Expression Harbor' },
    topicDesc: 'Pelabuhan kata untuk memperkaya kosakata dan ungkapan.',
    skillSlug: 'vocabulary',
    skillNames: { tier1: 'Daily Vocabulary', tier2: 'Context Vocabulary', tier3: 'Academic & Idioms' },
    skillDesc: 'Building rich English vocabulary and expressions.',
  },
  {
    index: 4,
    topicSlug: 'vocab-harbor',
    topicNames: { tier1: 'Vocab Harbor', tier2: 'Lexicon Harbor', tier3: 'Expression Harbor' },
    topicDesc: 'Pelabuhan kata untuk memperkaya kosakata dan ungkapan.',
    skillSlug: 'parts-of-speech',
    skillNames: { tier1: 'Nouns & Verbs', tier2: 'Adverbs & Pronouns', tier3: 'Clauses & Gerunds' },
    skillDesc: 'Nouns, verbs, adjectives, adverbs, and clauses.',
  },
  {
    index: 5,
    topicSlug: 'grammar-quarter',
    topicNames: { tier1: 'Grammar Quarter', tier2: 'Grammar Quarter', tier3: 'Syntax Quarter' },
    topicDesc: 'Kawasan tata bahasa untuk sinonim, nuansa kata, dan kalimat.',
    skillSlug: 'synonyms',
    skillNames: { tier1: 'Basic Synonyms', tier2: 'Strong Synonyms', tier3: 'Word Nuances' },
    skillDesc: 'Words with similar meanings and nuances.',
  },
  {
    index: 6,
    topicSlug: 'grammar-quarter',
    topicNames: { tier1: 'Grammar Quarter', tier2: 'Grammar Quarter', tier3: 'Syntax Quarter' },
    topicDesc: 'Kawasan tata bahasa untuk sinonim, nuansa kata, dan kalimat.',
    skillSlug: 'grammar-and-tenses',
    skillNames: { tier1: 'Basic Grammar', tier2: 'Tenses & Comparison', tier3: 'Conditionals & Passive' },
    skillDesc: 'Sentence structure, verb tenses, and advanced grammar.',
  },
  {
    index: 7,
    topicSlug: 'listening-garden',
    topicNames: { tier1: 'Listening Garden', tier2: 'Dialogue Garden', tier3: 'Rhetoric Garden' },
    topicDesc: 'Taman tenang untuk percakapan, diskusi, dan pemahaman.',
    skillSlug: 'conversations',
    skillNames: { tier1: 'Polite Greetings', tier2: 'Group Discussions', tier3: 'Formal & Debate' },
    skillDesc: 'Polite, persuasive, and natural everyday dialogues.',
  },
  {
    index: 8,
    topicSlug: 'listening-garden',
    topicNames: { tier1: 'Listening Garden', tier2: 'Dialogue Garden', tier3: 'Rhetoric Garden' },
    topicDesc: 'Taman tenang untuk percakapan, diskusi, dan pemahaman.',
    skillSlug: 'listening',
    skillNames: { tier1: 'Listening Clues', tier2: 'Main Idea & Details', tier3: 'Tone & Inference' },
    skillDesc: 'Understanding spoken clues, main ideas, and inference.',
  },
  {
    index: 9,
    topicSlug: 'speaking-lodge',
    topicNames: { tier1: 'Speaking Lodge', tier2: 'Story Lodge', tier3: 'Essay Lodge' },
    topicDesc: 'Pondok salju untuk melatih ekspresi, cerita, dan penulisan.',
    skillSlug: 'speaking',
    skillNames: { tier1: 'Simple Sentences', tier2: 'Story & Transitions', tier3: 'Thesis & Conciseness' },
    skillDesc: 'Expressing ideas clearly, logically, and accurately.',
  },
];

// =====================================================
// MATH QUESTION BANK (GRADES 1 - 6, 9 NODES EACH)
// =====================================================

const MATH_BANK: Record<number, Record<number, CompactQ[]>> = {
  // -------------------- GRADE 1 --------------------
  1: {
    1: [
      ['EASY', 'Which number comes right after 7?', '8 comes immediately after 7.', '8', '6', '9', '10'],
      ['MEDIUM', 'There are 5 red apples and 4 green apples. How many apples in total?', '5 + 4 = 9 apples.', '9 apples', '7 apples', '8 apples', '10 apples', 'WORD_PROBLEM'],
      ['HARD', 'Which number is missing? 12, 13, __, 15', '14 comes between 13 and 15.', '14', '11', '16', '17'],
    ],
    2: [
      ['EASY', 'In the number 14, how many tens are there?', '14 has 1 ten and 4 ones.', '1 ten', '4 tens', '10 tens', '14 tens'],
      ['MEDIUM', 'What number has 2 tens and 5 ones?', '20 + 5 = 25.', '25', '52', '20', '15'],
      ['HARD', 'Which digit is in the ones place of 38?', 'In 38, 8 is in the ones place.', '8', '3', '30', '11'],
    ],
    3: [
      ['EASY', '3 + 4 = ?', '3 plus 4 equals 7.', '7', '6', '8', '9'],
      ['MEDIUM', 'Alya has 6 stickers and gets 5 more. How many does she have now?', '6 + 5 = 11 stickers.', '11 stickers', '10 stickers', '12 stickers', '13 stickers', 'WORD_PROBLEM'],
      ['HARD', '8 + 7 = ?', '8 plus 7 equals 15.', '15', '14', '16', '17'],
    ],
    4: [
      ['EASY', '9 - 4 = ?', '9 minus 4 equals 5.', '5', '4', '6', '3'],
      ['MEDIUM', 'You have 10 potions and use 3. How many potions are left?', '10 - 3 = 7 potions.', '7 potions', '6 potions', '8 potions', '13 potions', 'WORD_PROBLEM'],
      ['HARD', '15 - 8 = ?', '15 minus 8 equals 7.', '7', '6', '8', '9'],
    ],
    5: [
      ['EASY', 'If you cut a pizza into 2 equal pieces, what is 1 piece called?', '1 of 2 equal parts is one half (1/2).', 'One half (1/2)', 'One quarter (1/4)', 'One whole', 'Two thirds (2/3)'],
      ['MEDIUM', 'How many quarters make 1 whole cake?', 'Four quarters make 1 whole.', '4 quarters', '2 quarters', '3 quarters', '5 quarters'],
      ['HARD', 'Which fraction is bigger: 1/2 or 1/4?', '1/2 is larger than 1/4.', '1/2', '1/4', 'They are equal', '1/8'],
    ],
    6: [
      ['EASY', 'Which decimal is equal to one half (1/2)?', '1/2 = 0.5.', '0.5', '0.2', '0.8', '1.5'],
      ['MEDIUM', 'Which decimal is greater: 0.3 or 0.7?', '0.7 is greater than 0.3.', '0.7', '0.3', '0.1', '0.2'],
      ['HARD', '0.5 + 0.5 = ?', 'Two halves make 1.0.', '1.0', '0.10', '1.5', '2.0'],
    ],
    7: [
      ['EASY', 'What percentage means 1 whole (all of it)?', '100% means the complete whole.', '100%', '10%', '50%', '200%'],
      ['MEDIUM', 'What percentage is the same as half?', 'Half of 100% is 50%.', '50%', '25%', '75%', '100%'],
      ['HARD', 'There are 10 coins and you keep 50%. How many coins do you keep?', 'Half of 10 is 5 coins.', '5 coins', '2 coins', '8 coins', '10 coins', 'WORD_PROBLEM'],
    ],
    8: [
      ['EASY', '2 × 3 = ?', '2 groups of 3 is 6.', '6', '5', '8', '9'],
      ['MEDIUM', 'There are 3 chests with 4 coins each. How many coins in total?', '3 × 4 = 12 coins.', '12 coins', '7 coins', '10 coins', '15 coins', 'WORD_PROBLEM'],
      ['HARD', '5 × 4 = ?', '5 groups of 4 equals 20.', '20', '15', '18', '25'],
    ],
    9: [
      ['EASY', '6 ÷ 2 = ?', '6 shared equally by 2 is 3.', '3', '2', '4', '8'],
      ['MEDIUM', '12 gems are shared equally among 3 friends. How many does each get?', '12 ÷ 3 = 4 gems.', '4 gems', '3 gems', '5 gems', '6 gems', 'WORD_PROBLEM'],
      ['HARD', '20 ÷ 5 = ?', '20 divided by 5 equals 4.', '4', '3', '5', '10'],
    ],
  },

  // -------------------- GRADE 2 --------------------
  2: {
    1: [
      ['EASY', 'Skip count by 5s: 15, 20, __, 30', 'Adding 5 to 20 gives 25.', '25', '22', '24', '26'],
      ['MEDIUM', 'Which number is the largest: 48, 84, 79, 65?', '84 has the largest tens digit (8).', '84', '48', '79', '65'],
      ['HARD', 'Which number is an even number?', 'Even numbers end in 0, 2, 4, 6, or 8.', '46', '31', '57', '89'],
    ],
    2: [
      ['EASY', 'What is the value of the digit 6 in 64?', '6 is in the tens place, so its value is 60.', '60', '6', '600', '40'],
      ['MEDIUM', 'What number has 3 hundreds, 2 tens, and 7 ones?', '300 + 20 + 7 = 327.', '327', '372', '237', '723'],
      ['HARD', 'In 485, which digit is in the hundreds place?', '4 is in the hundreds place.', '4', '8', '5', '40'],
    ],
    3: [
      ['EASY', '24 + 15 = ?', '20+10=30 and 4+5=9, so 39.', '39', '38', '40', '49'],
      ['MEDIUM', 'Budi has 37 marbles and buys 26 more. How many marbles now?', '37 + 26 = 63 marbles.', '63 marbles', '53 marbles', '62 marbles', '73 marbles', 'WORD_PROBLEM'],
      ['HARD', '48 + 35 = ?', '48 + 35 = 83.', '83', '73', '82', '93'],
    ],
    4: [
      ['EASY', '56 - 23 = ?', '50-20=30 and 6-3=3, so 33.', '33', '32', '34', '23'],
      ['MEDIUM', 'A basket had 42 oranges. 17 were eaten. How many are left?', '42 - 17 = 25 oranges.', '25 oranges', '24 oranges', '35 oranges', '29 oranges', 'WORD_PROBLEM'],
      ['HARD', '71 - 28 = ?', '71 - 28 = 43.', '43', '42', '53', '47'],
    ],
    5: [
      ['EASY', 'A chocolate bar has 3 equal pieces. You eat 1. What fraction did you eat?', '1 out of 3 equal pieces is 1/3.', '1/3', '1/2', '1/4', '2/3'],
      ['MEDIUM', 'Which fraction is smaller: 1/2 or 1/3?', '1/3 is smaller because the whole is split into more parts.', '1/3', '1/2', 'They are equal', '2/2'],
      ['HARD', '2/4 is equal to which simpler fraction?', '2 out of 4 is the same as 1 out of 2 (1/2).', '1/2', '1/3', '1/4', '3/4'],
    ],
    6: [
      ['EASY', '0.4 + 0.3 = ?', '4 tenths + 3 tenths = 7 tenths (0.7).', '0.7', '0.6', '0.8', '7.0'],
      ['MEDIUM', '0.9 - 0.4 = ?', '9 tenths - 4 tenths = 5 tenths (0.5).', '0.5', '0.4', '0.6', '1.3'],
      ['HARD', 'Which decimal is between 1.2 and 1.5?', '1.4 lies between 1.2 and 1.5.', '1.4', '1.1', '1.6', '2.0'],
    ],
    7: [
      ['EASY', 'What percentage is equal to one quarter (1/4)?', '1/4 of 100% is 25%.', '25%', '20%', '50%', '75%'],
      ['MEDIUM', '50% of 20 candies is how many candies?', 'Half of 20 is 10 candies.', '10 candies', '5 candies', '15 candies', '20 candies', 'WORD_PROBLEM'],
      ['HARD', '25% of 12 stars is how many stars?', 'One quarter of 12 is 12 ÷ 4 = 3 stars.', '3 stars', '4 stars', '6 stars', '9 stars', 'WORD_PROBLEM'],
    ],
    8: [
      ['EASY', '4 × 5 = ?', '4 groups of 5 equals 20.', '20', '15', '25', '9'],
      ['MEDIUM', 'A spider has 8 legs. How many legs do 3 spiders have?', '3 × 8 = 24 legs.', '24 legs', '16 legs', '21 legs', '28 legs', 'WORD_PROBLEM'],
      ['HARD', '6 × 5 = ?', '6 times 5 equals 30.', '30', '25', '35', '36'],
    ],
    9: [
      ['EASY', '16 ÷ 4 = ?', '4 × 4 = 16, so 16 ÷ 4 = 4.', '4', '3', '5', '6'],
      ['MEDIUM', '25 stickers are shared equally among 5 kids. How many each?', '25 ÷ 5 = 5 stickers.', '5 stickers', '4 stickers', '6 stickers', '10 stickers', 'WORD_PROBLEM'],
      ['HARD', '24 ÷ 3 = ?', '3 × 8 = 24, so 24 ÷ 3 = 8.', '8', '6', '7', '9'],
    ],
  },

  // -------------------- GRADE 3 --------------------
  3: {
    1: [
      ['EASY', 'Round 67 to the nearest ten.', '67 is closer to 70 than to 60.', '70', '60', '65', '80'],
      ['MEDIUM', 'What comes next in the pattern? 120, 150, 180, __', 'The pattern adds 30 each step: 180 + 30 = 210.', '210', '200', '220', '190'],
      ['HARD', 'Round 349 to the nearest hundred.', 'Since 49 < 50, 349 rounds down to 300.', '300', '350', '400', '340'],
    ],
    2: [
      ['EASY', 'What is the value of the digit 5 in 2,540?', '5 is in the hundreds place, so its value is 500.', '500', '50', '5,000', '5'],
      ['MEDIUM', 'Write 4,000 + 300 + 8 as a standard number.', '4,000 + 300 + 0 + 8 = 4,308.', '4,308', '4,380', '4,038', '438'],
      ['HARD', 'Which number has 7 in the thousands place?', '7,125 has 7 in the thousands place.', '7,125', '1,725', '2,571', '5,217'],
    ],
    3: [
      ['EASY', '230 + 145 = ?', '230 + 145 = 375.', '375', '365', '385', '355'],
      ['MEDIUM', 'A library has 248 math books and 175 science books. Total books?', '248 + 175 = 423 books.', '423 books', '413 books', '433 books', '323 books', 'WORD_PROBLEM'],
      ['HARD', '568 + 279 = ?', '568 + 279 = 847.', '847', '837', '857', '747'],
    ],
    4: [
      ['EASY', '450 - 120 = ?', '450 - 120 = 330.', '330', '320', '340', '230'],
      ['MEDIUM', 'A bakery made 312 muffins and sold 168. How many are left?', '312 - 168 = 144 muffins.', '144 muffins', '154 muffins', '134 muffins', '146 muffins', 'WORD_PROBLEM'],
      ['HARD', '604 - 239 = ?', '604 - 239 = 365.', '365', '375', '355', '465'],
    ],
    5: [
      ['EASY', '2/5 + 1/5 = ?', 'Same denominator: (2 + 1)/5 = 3/5.', '3/5', '3/10', '2/5', '4/5'],
      ['MEDIUM', 'Which fraction is equivalent to 1/3?', 'Multiply top and bottom by 2: 2/6.', '2/6', '2/5', '3/6', '1/6'],
      ['HARD', '7/8 - 3/8 = ? (simplify if possible)', '7/8 - 3/8 = 4/8 = 1/2.', '1/2', '3/8', '5/8', '1/4'],
    ],
    6: [
      ['EASY', '1.4 + 2.3 = ?', '1.4 + 2.3 = 3.7.', '3.7', '3.6', '3.8', '4.7'],
      ['MEDIUM', '5.8 - 2.5 = ?', '5.8 - 2.5 = 3.3.', '3.3', '3.2', '3.4', '2.3'],
      ['HARD', 'Which decimal is equal to 3/10?', '3 tenths is written as 0.3.', '0.3', '0.03', '3.0', '0.33'],
    ],
    7: [
      ['EASY', '10% of 100 is ?', '10% of 100 equals 10.', '10', '1', '20', '50'],
      ['MEDIUM', '50% of 46 stickers is how many stickers?', 'Half of 46 is 23 stickers.', '23 stickers', '22 stickers', '24 stickers', '26 stickers', 'WORD_PROBLEM'],
      ['HARD', '25% of 40 is ?', 'One quarter of 40 is 40 ÷ 4 = 10.', '10', '8', '12', '20'],
    ],
    8: [
      ['EASY', '7 × 6 = ?', '7 times 6 equals 42.', '42', '36', '48', '49'],
      ['MEDIUM', 'There are 8 rows with 9 chairs each. How many chairs in total?', '8 × 9 = 72 chairs.', '72 chairs', '64 chairs', '78 chairs', '81 chairs', 'WORD_PROBLEM'],
      ['HARD', '14 × 3 = ?', '10×3 + 4×3 = 30 + 12 = 42.', '42', '32', '44', '39'],
    ],
    9: [
      ['EASY', '54 ÷ 6 = ?', '6 × 9 = 54, so 54 ÷ 6 = 9.', '9', '7', '8', '6'],
      ['MEDIUM', '63 apples are packed into 7 boxes equally. How many per box?', '63 ÷ 7 = 9 apples.', '9 apples', '7 apples', '8 apples', '10 apples', 'WORD_PROBLEM'],
      ['HARD', '72 ÷ 8 = ?', '8 × 9 = 72, so 72 ÷ 8 = 9.', '9', '7', '8', '6'],
    ],
  },

  // -------------------- GRADE 4 --------------------
  4: {
    1: [
      ['EASY', 'Round 4,680 to the nearest thousand.', '680 ≥ 500, so 4,680 rounds up to 5,000.', '5,000', '4,000', '4,700', '4,600'],
      ['MEDIUM', 'Which number is a multiple of both 4 and 6?', '12 is divisible by both 4 and 6.', '12', '8', '18', '16'],
      ['HARD', 'Which of these numbers is a prime number?', '17 only has factors 1 and 17.', '17', '15', '21', '27'],
    ],
    2: [
      ['EASY', 'What is the value of the digit 8 in 38,412?', '8 is in the thousands place: 8,000.', '8,000', '800', '80,000', '80'],
      ['MEDIUM', 'What is 10 times greater than 450?', '450 × 10 = 4,500.', '4,500', '45,000', '460', '4,050'],
      ['HARD', 'In 72,905, which digit is in the ten-thousands place?', '7 is in the ten-thousands place.', '7', '2', '9', '5'],
    ],
    3: [
      ['EASY', '1,250 + 2,340 = ?', '1,250 + 2,340 = 3,590.', '3,590', '3,490', '3,690', '3,580'],
      ['MEDIUM', 'A town has 3,485 adults and 1,765 children. Total population?', '3,485 + 1,765 = 5,250.', '5,250', '5,150', '5,240', '4,250', 'WORD_PROBLEM'],
      ['HARD', '6,789 + 2,456 = ?', '6,789 + 2,456 = 9,245.', '9,245', '9,145', '9,235', '8,245'],
    ],
    4: [
      ['EASY', '4,800 - 1,350 = ?', '4,800 - 1,350 = 3,450.', '3,450', '3,550', '3,350', '3,400'],
      ['MEDIUM', 'A plane flies 5,200 km. After 2,675 km, how far is left?', '5,200 - 2,675 = 2,525 km.', '2,525 km', '2,625 km', '2,535 km', '3,525 km', 'WORD_PROBLEM'],
      ['HARD', '8,000 - 3,468 = ?', '8,000 - 3,468 = 4,532.', '4,532', '4,542', '4,632', '5,532'],
    ],
    5: [
      ['EASY', 'Which fraction is equivalent to 3/4?', 'Multiply top and bottom by 2: 6/8.', '6/8', '4/6', '9/16', '5/8'],
      ['MEDIUM', 'Convert the improper fraction 7/3 to a mixed number.', '7 ÷ 3 = 2 remainder 1, so 2 1/3.', '2 1/3', '2 2/3', '1 4/3', '3 1/3'],
      ['HARD', '5/6 + 2/6 = ? (as a mixed number)', '7/6 = 1 1/6.', '1 1/6', '1 2/6', '7/12', '1 1/3'],
    ],
    6: [
      ['EASY', '2.45 + 1.32 = ?', '2.45 + 1.32 = 3.77.', '3.77', '3.67', '3.87', '3.75'],
      ['MEDIUM', '6.40 - 2.15 = ?', '6.40 - 2.15 = 4.25.', '4.25', '4.35', '4.15', '3.25'],
      ['HARD', 'Which decimal is equal to 7/100?', '7 hundredths is 0.07.', '0.07', '0.7', '0.007', '7.0'],
    ],
    7: [
      ['EASY', 'What is 10% of 80?', '10% of 80 = 80 ÷ 10 = 8.', '8', '4', '10', '16'],
      ['MEDIUM', 'What is 75% of 40?', '75% is 3/4. 3/4 of 40 = 30.', '30', '20', '25', '35'],
      ['HARD', 'A toy costs $20 and is 25% off. How much is the discount?', '25% of $20 = $5.', '$5', '$4', '$10', '$15', 'WORD_PROBLEM'],
    ],
    8: [
      ['EASY', '24 × 5 = ?', '20×5 + 4×5 = 120.', '120', '100', '115', '125'],
      ['MEDIUM', 'A box holds 18 pencils. How many pencils in 12 boxes?', '18 × 12 = 216 pencils.', '216 pencils', '196 pencils', '206 pencils', '226 pencils', 'WORD_PROBLEM'],
      ['HARD', '35 × 14 = ?', '35×10 + 35×4 = 350 + 140 = 490.', '490', '450', '480', '510'],
    ],
    9: [
      ['EASY', '96 ÷ 4 = ?', '96 ÷ 4 = 24.', '24', '22', '26', '28'],
      ['MEDIUM', '144 cookies are packed into 6 jars equally. How many per jar?', '144 ÷ 6 = 24 cookies.', '24 cookies', '22 cookies', '26 cookies', '18 cookies', 'WORD_PROBLEM'],
      ['HARD', '225 ÷ 9 = ?', '9 × 25 = 225, so 225 ÷ 9 = 25.', '25', '23', '24', '27'],
    ],
  },

  // -------------------- GRADE 5 --------------------
  5: {
    1: [
      ['EASY', 'What is the greatest common factor (GCF) of 18 and 24?', 'Both 18 and 24 are divisible by 6 (the largest common factor).', '6', '3', '9', '12'],
      ['MEDIUM', 'What is the least common multiple (LCM) of 6 and 8?', 'Multiples of 6: 6,12,18,24; of 8: 8,16,24. LCM = 24.', '24', '12', '36', '48'],
      ['HARD', 'Evaluate: 3 + 4 × 5', 'Multiply first: 4 × 5 = 20, then 3 + 20 = 23.', '23', '35', '19', '27'],
    ],
    2: [
      ['EASY', 'What is the value of the digit 6 in 4.36?', '6 is in the hundredths place: 0.06.', '0.06', '0.6', '6', '0.006'],
      ['MEDIUM', 'Round 7.486 to the nearest tenth.', 'Since 8 ≥ 5, 7.486 rounds up to 7.5.', '7.5', '7.4', '7.49', '7.0'],
      ['HARD', 'What is 3.45 × 100?', 'Moving the decimal point 2 places right gives 345.', '345', '34.5', '3,450', '0.0345'],
    ],
    3: [
      ['EASY', '12.45 + 7.8 = ?', '12.45 + 7.80 = 20.25.', '20.25', '19.25', '20.15', '13.23'],
      ['MEDIUM', 'Rina ran 3.75 km on Monday and 4.65 km on Tuesday. Total distance?', '3.75 + 4.65 = 8.4 km.', '8.4 km', '7.4 km', '8.3 km', '8.5 km', 'WORD_PROBLEM'],
      ['HARD', '15,480 + 28,675 = ?', '15,480 + 28,675 = 44,155.', '44,155', '43,155', '44,055', '45,155'],
    ],
    4: [
      ['EASY', '15.6 - 4.85 = ?', '15.60 - 4.85 = 10.75.', '10.75', '11.25', '10.85', '11.75'],
      ['MEDIUM', 'A ribbon is 12.5 m long. You cut off 4.75 m. How much remains?', '12.50 - 4.75 = 7.75 m.', '7.75 m', '8.25 m', '7.85 m', '8.75 m', 'WORD_PROBLEM'],
      ['HARD', '50,000 - 18,465 = ?', '50,000 - 18,465 = 31,535.', '31,535', '31,635', '32,535', '31,545'],
    ],
    5: [
      ['EASY', '1/2 + 1/4 = ?', '2/4 + 1/4 = 3/4.', '3/4', '2/6', '1/3', '2/4'],
      ['MEDIUM', '2/3 + 1/6 = ?', '4/6 + 1/6 = 5/6.', '5/6', '3/9', '4/6', '1/2'],
      ['HARD', '3/4 × 2/5 = ? (simplified)', '(3×2)/(4×5) = 6/20 = 3/10.', '3/10', '6/9', '5/9', '3/5'],
    ],
    6: [
      ['EASY', '0.6 × 4 = ?', '6 × 4 = 24, with 1 decimal place = 2.4.', '2.4', '0.24', '24', '2.04'],
      ['MEDIUM', '1.5 × 0.4 = ?', '15 × 4 = 60, with 2 decimal places = 0.6.', '0.6', '6.0', '0.06', '1.9'],
      ['HARD', '4.8 ÷ 6 = ?', '48 ÷ 6 = 8, so 4.8 ÷ 6 = 0.8.', '0.8', '8.0', '0.08', '0.6'],
    ],
    7: [
      ['EASY', 'What is 20% of 50?', '20% = 1/5, and 50 ÷ 5 = 10.', '10', '5', '15', '20'],
      ['MEDIUM', 'What is 30% of 90?', '10% of 90 is 9, so 30% is 9 × 3 = 27.', '27', '18', '30', '36'],
      ['HARD', 'A jacket costs $60 and is 15% off. How much is the discount?', '10% is $6, 5% is $3, total = $9.', '$9', '$6', '$12', '$15', 'WORD_PROBLEM'],
    ],
    8: [
      ['EASY', '125 × 8 = ?', '125 × 8 = 1,000.', '1,000', '900', '1,020', '800'],
      ['MEDIUM', 'A factory makes 145 toys per day. How many in 12 days?', '145 × 12 = 1,740 toys.', '1,740 toys', '1,640 toys', '1,720 toys', '1,840 toys', 'WORD_PROBLEM'],
      ['HARD', '234 × 25 = ?', '234 × 25 = 5,850.', '5,850', '5,750', '5,950', '4,850'],
    ],
    9: [
      ['EASY', '360 ÷ 15 = ?', '15 × 24 = 360, so 360 ÷ 15 = 24.', '24', '22', '25', '26'],
      ['MEDIUM', '432 students are divided into 12 equal teams. How many per team?', '432 ÷ 12 = 36 students.', '36 students', '34 students', '38 students', '32 students', 'WORD_PROBLEM'],
      ['HARD', 'What is the remainder when 95 is divided by 8?', '8 × 11 = 88; 95 - 88 = 7.', '7', '5', '6', '3'],
    ],
  },

  // -------------------- GRADE 6 --------------------
  6: {
    1: [
      ['EASY', 'What is the value of 2⁴?', '2 × 2 × 2 × 2 = 16.', '16', '8', '12', '32'],
      ['MEDIUM', 'Which integer is greater: -3 or -8?', 'On a number line, -3 is to the right of -8.', '-3', '-8', '-10', 'They are equal'],
      ['HARD', 'Evaluate: (6 + 4) × 3 - 5²', '10 × 3 - 25 = 30 - 25 = 5.', '5', '15', '25', '10'],
    ],
    2: [
      ['EASY', 'What is the value of the digit 9 in 0.249?', '9 is in the thousandths place: 0.009.', '0.009', '0.09', '0.9', '9'],
      ['MEDIUM', 'Write 4.2 × 10³ as a standard number.', '4.2 × 1,000 = 4,200.', '4,200', '420', '42,000', '4.200'],
      ['HARD', 'Round 12.6749 to the nearest hundredth.', 'The thousandths digit is 4 (< 5), so it stays 12.67.', '12.67', '12.68', '12.7', '12.675'],
    ],
    3: [
      ['EASY', '-5 + 12 = ?', 'Starting at -5 and moving 12 right lands on 7.', '7', '-7', '17', '-17'],
      ['MEDIUM', 'A submarine is at -120 m and rises 45 m. What is its new depth?', '-120 + 45 = -75 m.', '-75 m', '-165 m', '75 m', '-85 m', 'WORD_PROBLEM'],
      ['HARD', '14.875 + 29.65 = ?', '14.875 + 29.650 = 44.525.', '44.525', '44.425', '43.525', '44.625'],
    ],
    4: [
      ['EASY', '8 - 13 = ?', '8 minus 13 equals -5.', '-5', '5', '-21', '21'],
      ['MEDIUM', 'The temperature dropped from 4°C to -6°C. By how many degrees did it drop?', '4 - (-6) = 10°C.', '10°C', '2°C', '6°C', '12°C', 'WORD_PROBLEM'],
      ['HARD', '100 - 37.625 = ?', '100.000 - 37.625 = 62.375.', '62.375', '62.475', '63.375', '62.275'],
    ],
    5: [
      ['EASY', 'Simplify 18/24 to its lowest terms.', 'Divide both by 6: 3/4.', '3/4', '2/3', '6/8', '4/5'],
      ['MEDIUM', '3/4 ÷ 1/2 = ?', 'Multiply by reciprocal: 3/4 × 2/1 = 6/4 = 3/2 (1 1/2).', '1 1/2', '3/8', '2/3', '2'],
      ['HARD', '5/6 - 1/4 = ?', '10/12 - 3/12 = 7/12.', '7/12', '4/2', '1/2', '2/3'],
    ],
    6: [
      ['EASY', 'Convert 3/8 to a decimal.', '3 ÷ 8 = 0.375.', '0.375', '0.38', '0.325', '0.425'],
      ['MEDIUM', '2.4 × 1.5 = ?', '2.4 × 1 + 2.4 × 0.5 = 2.4 + 1.2 = 3.6.', '3.6', '3.4', '3.8', '2.9'],
      ['HARD', '7.2 ÷ 0.9 = ?', 'Same as 72 ÷ 9 = 8.', '8', '0.8', '80', '9'],
    ],
    7: [
      ['EASY', 'Convert 3/5 into a percentage.', '3/5 = 60/100 = 60%.', '60%', '35%', '50%', '75%'],
      ['MEDIUM', 'A $80 bicycle is discounted by 25%. What is the sale price?', '25% of $80 is $20; $80 - $20 = $60.', '$60', '$55', '$65', '$20', 'WORD_PROBLEM'],
      ['HARD', 'A score increased from 40 to 50. What is the percentage increase?', 'Increase = 10; 10/40 = 1/4 = 25%.', '25%', '10%', '20%', '30%', 'WORD_PROBLEM'],
    ],
    8: [
      ['EASY', '(-4) × 7 = ?', 'Negative times positive equals -28.', '-28', '28', '-24', '24'],
      ['MEDIUM', 'A car travels at 65 km/h for 3.5 hours. How far does it travel?', '65 × 3.5 = 227.5 km.', '227.5 km', '217.5 km', '230 km', '195 km', 'WORD_PROBLEM'],
      ['HARD', '(-6) × (-9) = ?', 'Negative times negative equals positive 54.', '54', '-54', '45', '-45'],
    ],
    9: [
      ['EASY', '(-48) ÷ 6 = ?', 'Negative divided by positive equals -8.', '-8', '8', '-6', '6'],
      ['MEDIUM', 'If 5 notebooks cost $12.50, what is the cost of 1 notebook?', '$12.50 ÷ 5 = $2.50.', '$2.50', '$2.25', '$2.75', '$3.00', 'WORD_PROBLEM'],
      ['HARD', '675 ÷ 25 = ?', '25 × 27 = 675, so 675 ÷ 25 = 27.', '27', '25', '26', '29'],
    ],
  },
};

// =====================================================
// ENGLISH QUESTION BANK (GRADES 1 - 6, 9 NODES EACH)
// =====================================================

const ENGLISH_BANK: Record<number, Record<number, CompactQ[]>> = {
  // -------------------- GRADE 1 --------------------
  1: {
    1: [
      ['EASY', 'Which letter comes right after B?', 'The alphabet order is A, B, C, D.', 'C', 'A', 'D', 'E'],
      ['MEDIUM', 'Which word starts with the letter "S"?', '"Sun" begins with the letter S.', 'Sun', 'Cat', 'Ball', 'Dog'],
      ['HARD', 'Which letter is a vowel?', 'English vowels are A, E, I, O, U.', 'E', 'B', 'M', 'T'],
    ],
    2: [
      ['EASY', 'Which word rhymes with "cat"?', '"Hat" ends with the "-at" sound.', 'Hat', 'Dog', 'Sun', 'Cup'],
      ['MEDIUM', 'Which word rhymes with "star"?', '"Car" ends with the "-ar" sound.', 'Car', 'Book', 'Tree', 'Fish'],
      ['HARD', 'Which word has the same starting sound as "phone"?', '"Ph" sounds like the "f" in "fish".', 'Fish', 'Pen', 'Hat', 'Boat'],
    ],
    3: [
      ['EASY', 'Which word means "merah"?', '"Red" means "merah" in English.', 'Red', 'Blue', 'Green', 'Yellow'],
      ['MEDIUM', 'Which animal can fly in the sky?', 'A bird has wings and can fly.', 'A bird', 'A fish', 'A cow', 'A turtle'],
      ['HARD', 'What tells you the time on the wall?', 'A clock shows the time.', 'A clock', 'A chair', 'A spoon', 'A pillow'],
    ],
    4: [
      ['EASY', 'Which word is an action word (verb)?', '"Jump" is an action.', 'Jump', 'Table', 'Blue', 'Apple'],
      ['MEDIUM', 'Which word is a noun (person, place, or thing)?', '"School" is a place, so it is a noun.', 'School', 'Run', 'Happy', 'Fast'],
      ['HARD', 'Which word describes the dog in "The big dog barks"?', '"Big" is an adjective describing the dog.', 'Big', 'The', 'Dog', 'Barks'],
    ],
    5: [
      ['EASY', 'Which word means almost the same as "happy"?', '"Glad" means happy.', 'Glad', 'Sad', 'Angry', 'Tired'],
      ['MEDIUM', 'Which word means almost the same as "big"?', '"Large" means big.', 'Large', 'Tiny', 'Short', 'Slow'],
      ['HARD', 'Which word means almost the same as "fast"?', '"Quick" is a synonym for fast.', 'Quick', 'Heavy', 'Quiet', 'Cold'],
    ],
    6: [
      ['EASY', 'She ___ a blue hat every day.', 'With "She", add -s: "wears".', 'wears', 'wear', 'wearing', 'wore'],
      ['MEDIUM', 'I ___ a student.', 'We use "am" with "I".', 'am', 'is', 'are', 'be'],
      ['HARD', 'They ___ playing in the park now.', 'We use "are" with "They".', 'are', 'is', 'am', 'was'],
    ],
    7: [
      ['EASY', 'Your friend says "Thank you!" What is a polite reply?', '"You\'re welcome!" replies politely to "Thank you!"', "You're welcome!", 'Goodbye!', 'Good night!', 'Excuse me!'],
      ['MEDIUM', 'Someone asks: "How are you?" What is the best answer?', '"I am fine, thank you!" answers the question.', 'I am fine, thank you!', 'I am 7 years old.', 'My name is Mimo.', 'It is sunny.'],
      ['HARD', 'What do you say when you meet your teacher at 8 AM?', 'At 8 AM we say "Good morning!"', 'Good morning!', 'Good evening!', 'Good night!', 'See you last week!'],
    ],
    8: [
      ['EASY', 'Clue: "I am yellow, sour, and a fruit." What am I?', 'A lemon is yellow and sour.', 'A lemon', 'A carrot', 'A potato', 'A bread', 'WORD_PROBLEM'],
      ['MEDIUM', 'Clue: "You use me in the rain to stay dry." What am I?', 'An umbrella keeps you dry.', 'An umbrella', 'A towel', 'A pencil', 'A blanket', 'WORD_PROBLEM'],
      ['HARD', 'Mimo says: "Put the book on the desk, not under the chair." Where does it go?', 'Mimo asked to put it on the desk.', 'On the desk', 'Under the chair', 'In the bag', 'On the floor', 'WORD_PROBLEM'],
    ],
    9: [
      ['EASY', 'How do you introduce your name?', '"My name is..." is the standard way.', 'My name is Budi.', 'Name my Budi is.', 'I name Budi.', 'Is Budi name my.'],
      ['MEDIUM', 'How do you borrow a pencil politely?', 'Using "May I" and "please" is polite.', 'May I borrow your pencil, please?', 'Give me your pencil!', 'Pencil now!', 'I take your pencil.'],
      ['HARD', 'Which sentence is in the correct order?', 'Subject + verb + object: "I like red apples."', 'I like red apples.', 'Apples red like I.', 'Like I red apples.', 'Red I apples like.'],
    ],
  },

  // -------------------- GRADE 2 --------------------
  2: {
    1: [
      ['EASY', 'Which word has a silent "k"?', 'In "knee", the "k" is silent.', 'Knee', 'Kite', 'King', 'Kick'],
      ['MEDIUM', 'Which word begins with the "sh" blend?', '"Ship" begins with "sh".', 'Ship', 'Chip', 'Slip', 'Trip'],
      ['HARD', 'Which word is spelled correctly?', '"Friend" is the correct spelling.', 'Friend', 'Freind', 'Frend', 'Frind'],
    ],
    2: [
      ['EASY', 'How many syllables are in the word "banana"?', 'ba-na-na has 3 syllables.', '3 syllables', '1 syllable', '2 syllables', '4 syllables'],
      ['MEDIUM', 'Which word sounds the same as "sea"?', '"See" and "sea" are homophones.', 'See', 'Say', 'Sit', 'Saw'],
      ['HARD', 'Which word rhymes with "light"?', '"Bright" ends with the "-ight" sound.', 'Bright', 'Late', 'Lift', 'Left'],
    ],
    3: [
      ['EASY', 'What is the opposite of "hot"?', '"Cold" is the opposite of "hot".', 'Cold', 'Warm', 'Sunny', 'Dry'],
      ['MEDIUM', 'Where do you go to borrow books?', 'You borrow books at a library.', 'Library', 'Bakery', 'Hospital', 'Station'],
      ['HARD', 'What do we call a baby dog?', 'A baby dog is called a puppy.', 'Puppy', 'Kitten', 'Calf', 'Cub'],
    ],
    4: [
      ['EASY', 'Which word is an adjective?', '"Tall" describes a noun, so it is an adjective.', 'Tall', 'Walk', 'Chair', 'Under'],
      ['MEDIUM', 'Find the verb in: "The rabbit hops quickly."', '"Hops" is the action word (verb).', 'Hops', 'Rabbit', 'The', 'Quickly'],
      ['HARD', 'What is the plural form of "box"?', 'Nouns ending in -x take -es: "boxes".', 'Boxes', 'Boxs', 'Boxies', 'Boxen'],
    ],
    5: [
      ['EASY', 'Which word means the same as "small"?', '"Little" is a synonym for "small".', 'Little', 'Huge', 'Loud', 'Tall'],
      ['MEDIUM', 'Which word means the same as "begin"?', '"Start" means the same as "begin".', 'Start', 'Finish', 'Close', 'Stop'],
      ['HARD', 'Which word means the same as "smart"?', '"Clever" means smart.', 'Clever', 'Sleepy', 'Shy', 'Slow'],
    ],
    6: [
      ['EASY', 'Yesterday, I ___ to the zoo.', 'Past tense of "go" is "went".', 'went', 'go', 'going', 'goes'],
      ['MEDIUM', 'The cats ___ sleeping on the sofa.', 'Plural subject "cats" takes "are".', 'are', 'is', 'am', 'be'],
      ['HARD', 'She ___ not like spicy food.', 'With "She", use "does not".', 'does', 'do', 'is', 'are'],
    ],
    7: [
      ['EASY', 'You accidentally bump into someone. What should you say?', '"I\'m sorry!" is the polite apology.', "I'm sorry!", 'Thank you!', 'Congratulations!', 'Good luck!'],
      ['MEDIUM', 'Someone asks: "Where is the canteen?" Which reply helps?', 'Giving clear directions answers the question.', 'It is next to the library.', 'I like noodles.', 'Yes, I am hungry.', 'At 10 o\'clock.'],
      ['HARD', 'Your friend won a drawing contest. What do you say?', '"Congratulations!" celebrates their win.', 'Congratulations!', 'Excuse me!', 'Good night!', 'Never mind!'],
    ],
    8: [
      ['EASY', 'Clue: "I have hands and a face, but I cannot clap." What am I?', 'A clock has hands and a face.', 'A clock', 'A doll', 'A monkey', 'A mirror', 'WORD_PROBLEM'],
      ['MEDIUM', 'Passage: "Siti took her umbrella because the sky turned dark." Why did she take it?', 'Dark skies mean it might rain.', 'It might rain', 'It was very hot', 'She was sleepy', 'She lost her hat', 'WORD_PROBLEM'],
      ['HARD', 'Announcement: "Bring a red pen and a ruler tomorrow." What do you NOT need?', 'A paintbrush was not mentioned.', 'A paintbrush', 'A red pen', 'A ruler', 'Both pen and ruler', 'WORD_PROBLEM'],
    ],
    9: [
      ['EASY', 'Which sentence asks a question correctly?', '"Where do you live?" uses proper question order.', 'Where do you live?', 'Where you live do?', 'Do live where you?', 'You live where?'],
      ['MEDIUM', 'How do you invite a friend to play?', '"Would you like to play with me?" is polite and clear.', 'Would you like to play with me?', 'Play me now!', 'You playing with me.', 'Like play you?'],
      ['HARD', 'Which sentence uses capital letters correctly?', 'Names and the start of sentences are capitalized.', 'My friend Budi lives in Jakarta.', 'my friend budi lives in jakarta.', 'My Friend budi Lives in jakarta.', 'my Friend Budi lives in Jakarta.'],
    ],
  },

  // -------------------- GRADE 3 --------------------
  3: {
    1: [
      ['EASY', 'Which prefix means "not" in the word "unhappy"?', '"Un-" means "not".', 'un-', 're-', 'pre-', 'ful-'],
      ['MEDIUM', 'Which word is spelled correctly?', '"Because" is the correct spelling.', 'Because', 'Becouse', 'Becase', 'Beacuse'],
      ['HARD', 'What is the root word of "replaying"?', 'Removing "re-" and "-ing" leaves "play".', 'Play', 'Replay', 'Playing', 'Lay'],
    ],
    2: [
      ['EASY', 'Which word is a homophone for "flower"?', '"Flour" sounds the same as "flower".', 'Flour', 'Floor', 'Flew', 'Flow'],
      ['MEDIUM', 'How many syllables are in "computer"?', 'com-pu-ter has 3 syllables.', '3 syllables', '2 syllables', '4 syllables', '5 syllables'],
      ['HARD', 'Which pair of words are homophones?', '"Pair" and "pear" have the exact same pronunciation.', 'Pair / Pear', 'Cat / Cut', 'Ship / Sheep', 'Hat / Hate'],
    ],
    3: [
      ['EASY', 'What is a "habitat"?', 'A habitat is the natural home of an animal or plant.', 'An animal\'s natural home', 'A type of food', 'A weather forecast', 'A school subject'],
      ['MEDIUM', 'Which word means "very hungry"?', '"Starving" means very hungry.', 'Starving', 'Freezing', 'Exhausted', 'Bored'],
      ['HARD', 'What does "fragile" on a box mean?', '"Fragile" means easily broken.', 'Easily broken', 'Very heavy', 'Waterproof', 'Very cheap'],
    ],
    4: [
      ['EASY', 'Which word is an adverb in: "She sang softly"?', '"Softly" describes how she sang (adverb).', 'Softly', 'She', 'Sang', 'None'],
      ['MEDIUM', 'Which word is a pronoun?', '"They" replaces a noun, so it is a pronoun.', 'They', 'Quickly', 'Mountain', 'Bright'],
      ['HARD', 'Which word is a conjunction in: "I wanted to go, but it rained"?', '"But" connects two clauses.', 'But', 'Wanted', 'Rained', 'To'],
    ],
    5: [
      ['EASY', 'Which word is a synonym for "brave"?', '"Courageous" means brave.', 'Courageous', 'Afraid', 'Quiet', 'Lazy'],
      ['MEDIUM', 'Which word is a synonym for "enormous"?', '"Gigantic" means enormous.', 'Gigantic', 'Tiny', 'Narrow', 'Weak'],
      ['HARD', 'Which word is a synonym for "ancient"?', '"Very old" matches "ancient".', 'Very old', 'Brand new', 'Modern', 'Colorful'],
    ],
    6: [
      ['EASY', 'Tomorrow, we ___ visit the museum.', '"Will" expresses future tense.', 'will', 'did', 'were', 'was'],
      ['MEDIUM', 'A cheetah is ___ than a horse.', 'Comparative of "fast" is "faster".', 'faster', 'fastest', 'more fast', 'fast'],
      ['HARD', 'Yesterday evening, they ___ dinner together.', 'Past tense of "eat" is "ate".', 'ate', 'eat', 'eaten', 'eating'],
    ],
    7: [
      ['EASY', 'How do you politely ask someone to repeat what they said?', '"Could you please repeat that?" is polite.', 'Could you please repeat that?', 'Say it again now!', 'What?!', 'Speak louder!'],
      ['MEDIUM', 'Your friend looks sad. What is a kind thing to ask?', '"Are you okay? Can I help?" shows empathy.', 'Are you okay? Can I help?', 'Why are you crying?', 'Stop being sad.', 'Go away.'],
      ['HARD', 'At a shop, the cashier asks "Anything else?" How do you say no politely?', '"No, thank you. That\'s all." is polite.', "No, thank you. That's all.", 'No!', 'Nothing.', 'Stop asking.'],
    ],
    8: [
      ['EASY', 'Passage: "Dina watered the seeds every morning. Soon, tiny green shoots appeared." What did Dina grow?', 'Seeds grow into plants.', 'Plants', 'Fish', 'Rocks', 'Bread', 'WORD_PROBLEM'],
      ['MEDIUM', 'Notice: "The science fair starts at 9 AM in the hall. Bring your project by 8:30 AM." When should students arrive?', 'Projects must be brought by 8:30 AM.', 'By 8:30 AM', 'At 9:30 AM', 'At noon', 'After lunch', 'WORD_PROBLEM'],
      ['HARD', 'Clue: "Even though it was cold, Leo forgot his coat and shivered." Why did Leo shiver?', 'He was cold because he forgot his coat.', 'He forgot his coat', 'He ran too fast', 'He was hungry', 'He was laughing', 'WORD_PROBLEM'],
    ],
    9: [
      ['EASY', 'Which sentence gives a clear reason using "because"?', '"I stayed home because I had a fever." links effect and cause.', 'I stayed home because I had a fever.', 'Because I stayed home I fever.', 'I fever because stayed home.', 'Home stayed I because fever.'],
      ['MEDIUM', 'Which sentence is punctuated correctly?', 'Use a comma before the direct quote and end punctuation inside.', 'Mimo said, "Let\'s explore!"', 'Mimo said "Let\'s explore!"', 'Mimo, said "Let\'s explore!"', 'Mimo said Let\'s explore!'],
      ['HARD', 'Which sentence clearly describes a sequence of events?', '"First, then, finally" shows clear order.', 'First I brushed my teeth, then I went to bed.', 'Bed I went teeth brushed first.', 'Then I bed first teeth.', 'Finally first bed teeth.'],
    ],
  },

  // -------------------- GRADE 4 --------------------
  4: {
    1: [
      ['EASY', 'What does the prefix "re-" mean in "rewrite"?', '"Re-" means "again".', 'Again', 'Before', 'Without', 'Under'],
      ['MEDIUM', 'Which suffix turns the verb "teach" into a person?', 'Adding "-er" makes "teacher".', '-er', '-ful', '-less', '-ly'],
      ['HARD', 'Which word is spelled correctly?', '"Necessary" has one c and two s\'s.', 'Necessary', 'Neccessary', 'Necesary', 'Nessessary'],
    ],
    2: [
      ['EASY', 'Which word is a homophone for "knight"?', '"Night" and "knight" sound identical.', 'Night', 'Knit', 'Neat', 'Knot'],
      ['MEDIUM', 'How many syllables are in "information"?', 'in-for-ma-tion has 4 syllables.', '4 syllables', '3 syllables', '5 syllables', '2 syllables'],
      ['HARD', 'In which word does "ch" sound like "k"?', '"School" pronounces "ch" as /k/.', 'School', 'Chair', 'Cheese', 'Child'],
    ],
    3: [
      ['EASY', 'What does "predict" mean?', 'To predict means to guess what will happen next.', 'Guess what happens next', 'Forget something', 'Repeat a story', 'Measure length'],
      ['MEDIUM', 'What is a "biography"?', 'A biography is the true story of a person\'s life.', 'A story of someone\'s life', 'A book of maps', 'A science experiment', 'A fictional poem'],
      ['HARD', 'What does "abundant" mean?', '"Abundant" means existing in large amounts.', 'Plentiful', 'Scarce', 'Hidden', 'Dangerous'],
    ],
    4: [
      ['EASY', 'Which word is a preposition in: "The cat hid beneath the table"?', '"Beneath" shows position (preposition).', 'Beneath', 'Cat', 'Hid', 'Table'],
      ['MEDIUM', 'Identify the abstract noun.', '"Courage" is an idea/quality you cannot touch.', 'Courage', 'Pencil', 'River', 'Elephant'],
      ['HARD', 'Which sentence uses a possessive pronoun correctly?', '"Theirs" does not need an apostrophe.', 'That blue backpack is theirs.', 'That blue backpack is their\'s.', 'That blue backpack is them.', 'That blue backpack is they.'],
    ],
    5: [
      ['EASY', 'Which word is a synonym for "generous"?', '"Giving" means generous.', 'Giving', 'Selfish', 'Greedy', 'Rude'],
      ['MEDIUM', 'Which word is a synonym for "peculiar"?', '"Strange" means peculiar.', 'Strange', 'Ordinary', 'Simple', 'Familiar'],
      ['HARD', 'Which word is a synonym for "cautious"?', '"Careful" is a synonym for cautious.', 'Careful', 'Reckless', 'Noisy', 'Hasty'],
    ],
    6: [
      ['EASY', 'While I ___ reading, the phone rang.', 'Past continuous with "I" uses "was".', 'was', 'were', 'am', 'is'],
      ['MEDIUM', 'Mount Everest is the ___ mountain in the world.', 'Superlative of "high" is "highest".', 'highest', 'higher', 'more high', 'most high'],
      ['HARD', 'Neither the teacher nor the students ___ late.', 'Verb agrees with the nearer plural subject "students".', 'were', 'was', 'is', 'has'],
    ],
    7: [
      ['EASY', 'How do you politely disagree in a group discussion?', '"I see your point, but I think..." is respectful.', 'I see your point, but I think...', 'You are completely wrong!', 'That makes no sense.', 'Be quiet!'],
      ['MEDIUM', 'How do you ask for clarification politely?', '"Could you explain that part again?" is polite and clear.', 'Could you explain that part again?', 'I don\'t get it, hurry up.', 'That was confusing.', 'Skip it.'],
      ['HARD', 'How do you offer help to a new classmate?', '"Would you like me to show you around?" is welcoming.', 'Would you like me to show you around?', 'You look lost.', 'Follow me now.', 'Why are you here?'],
    ],
    8: [
      ['EASY', 'Passage: "Bees carry pollen from flower to flower, helping plants make seeds." What is the main idea?', 'The passage explains how bees help plants reproduce.', 'Bees help plants make seeds', 'Bees like honey', 'Flowers are colorful', 'Seeds grow in winter', 'WORD_PROBLEM'],
      ['MEDIUM', 'Passage: "Although the trail was steep and muddy, the hikers reached the summit smiling." How did the hikers feel?', 'Smiling at the summit shows they felt proud/happy.', 'Proud and happy', 'Angry and lost', 'Scared to climb', 'Disappointed', 'WORD_PROBLEM'],
      ['HARD', 'Note: "Library books are due in 14 days. Late returns cost 500 rupiah per day." If you return a book 2 days late, what happens?', '2 days × 500 = 1,000 rupiah fine.', 'You pay a 1,000 rupiah fine', 'You pay 500 rupiah', 'You keep the book', 'Nothing happens', 'WORD_PROBLEM'],
    ],
    9: [
      ['EASY', 'Which sentence is a complete sentence (not a fragment)?', 'A complete sentence has a subject and a verb.', 'The bright stars shone in the night sky.', 'Running through the green meadow.', 'Under the tall oak tree.', 'Because it was raining heavily.'],
      ['MEDIUM', 'Which transition word best shows contrast?', '"However" introduces a contrasting idea.', 'However', 'Also', 'Next', 'Similarly'],
      ['HARD', 'Which sentence uses active voice?', 'In active voice, the subject performs the action.', 'The chef baked a delicious cake.', 'A delicious cake was baked by the chef.', 'The cake was eaten quickly.', 'The kitchen was cleaned by them.'],
    ],
  },

  // -------------------- GRADE 5 --------------------
  5: {
    1: [
      ['EASY', 'What does the root "tele-" mean in "telescope" and "telephone"?', '"Tele-" comes from Greek meaning "far".', 'Far / Distant', 'Small', 'Sound', 'Light'],
      ['MEDIUM', 'Which word is spelled correctly?', '"Accommodate" has two c\'s and two m\'s.', 'Accommodate', 'Acommodate', 'Accomodate', 'Acomodate'],
      ['HARD', 'What does the prefix "anti-" mean in "antibiotic"?', '"Anti-" means "against".', 'Against', 'With', 'Before', 'Inside'],
    ],
    2: [
      ['EASY', 'Which word is a homophone for "stationary" (not moving)?', '"Stationery" (paper/pens) sounds the same.', 'Stationery', 'Station', 'Stature', 'Stary'],
      ['MEDIUM', 'Where is the stressed syllable in "photograph"?', 'PHO-to-graph is stressed on the first syllable.', 'First syllable (PHO)', 'Second syllable (to)', 'Third syllable (graph)', 'No stress'],
      ['HARD', 'Which word contains a silent "b"?', 'The "b" in "subtle" is silent.', 'Subtle', 'Habit', 'Cabin', 'Robin'],
    ],
    3: [
      ['EASY', 'What does "persevere" mean?', '"Persevere" means to keep trying despite difficulties.', 'Keep trying despite difficulty', 'Give up quickly', 'Travel abroad', 'Speak quietly'],
      ['MEDIUM', 'What does "concise" mean when describing writing?', '"Concise" means brief and clear.', 'Brief and clear', 'Long and detailed', 'Confusing', 'Handwritten'],
      ['HARD', 'What does the idiom "break the ice" mean?', 'It means to start a friendly conversation.', 'Start a conversation comfortably', 'Freeze water', 'Break something', 'End a friendship'],
    ],
    4: [
      ['EASY', 'Identify the subordinating conjunction: "We stayed inside because the storm grew stronger."', '"Because" introduces the dependent clause.', 'Because', 'Inside', 'Stronger', 'Grew'],
      ['MEDIUM', 'Which word is a relative pronoun in: "The book that you lent me was thrilling"?', '"That" introduces the relative clause.', 'That', 'Lent', 'Thrilling', 'Book'],
      ['HARD', 'What part of speech is "swiftly" in "The falcon dived swiftly"?', '"Swiftly" modifies the verb "dived" (adverb).', 'Adverb', 'Adjective', 'Preposition', 'Noun'],
    ],
    5: [
      ['EASY', 'Which word is a synonym for "reluctant"?', '"Hesitant" means reluctant/unwilling.', 'Hesitant', 'Eager', 'Excited', 'Certain'],
      ['MEDIUM', 'Which word is a synonym for "meticulous"?', '"Thorough" means very careful and detailed.', 'Thorough', 'Careless', 'Messy', 'Hasty'],
      ['HARD', 'Which word is a synonym for "resilient"?', '"Tough/adaptable" matches resilient.', 'Adaptable', 'Fragile', 'Weak', 'Rigid'],
    ],
    6: [
      ['EASY', 'She ___ lived in Bandung since 2020.', 'Present perfect with "She" uses "has".', 'has', 'have', 'had', 'is'],
      ['MEDIUM', 'If it rains tomorrow, we ___ cancel the picnic.', 'First conditional uses "will" in the main clause.', 'will', 'would', 'did', 'were'],
      ['HARD', 'By the time we arrived, the movie ___ already started.', 'Past perfect ("had started") shows an earlier past action.', 'had', 'has', 'was', 'is'],
    ],
    7: [
      ['EASY', 'How do you politely interrupt a speaker when urgent?', '"Excuse me, may I add something quickly?" is polite.', 'Excuse me, may I add something quickly?', 'Stop talking now!', 'Listen to me instead!', 'You\'re taking too long.'],
      ['MEDIUM', 'How do you give constructive feedback to a classmate?', 'Praise first, then suggest an improvement kindly.', 'Great start! Maybe we could make the chart clearer.', 'This chart is terrible.', 'You did it all wrong.', 'I don\'t like this.'],
      ['HARD', 'How do you politely decline an invitation?', '"Thank you for inviting me, but I have another commitment." is polite.', 'Thank you for inviting me, but I have another commitment.', 'I don\'t want to go.', 'No way.', 'Ask someone else.'],
    ],
    8: [
      ['EASY', 'Passage: "Solar panels convert sunlight into electricity without producing smoke." What is one benefit mentioned?', 'They produce electricity without smoke (clean energy).', 'They produce no smoke', 'They work best at night', 'They are made of wood', 'They use coal', 'WORD_PROBLEM'],
      ['MEDIUM', 'Passage: "Maya checked her watch twice and tapped her foot while waiting for the bus." What can we infer?', 'Checking her watch and tapping her foot shows impatience.', 'She is impatient or worried about being late', 'She loves waiting', 'She missed breakfast', 'She is sleepy', 'WORD_PROBLEM'],
      ['HARD', 'Passage: "Unlike deserts, rainforests receive heavy rainfall year-round and support half of Earth\'s species." What is the contrast?', 'Rainforests vs. deserts in rainfall and biodiversity.', 'Rainforests are wet while deserts are dry', 'Deserts have more trees', 'Both have heavy rain', 'Rainforests have no animals', 'WORD_PROBLEM'],
    ],
    9: [
      ['EASY', 'Which sentence uses a metaphor?', 'A metaphor directly compares two things without "like" or "as".', 'Time is a thief.', 'He runs like the wind.', 'She is as busy as a bee.', 'The dog barked loudly.'],
      ['MEDIUM', 'Which closing sentence best summarizes a persuasive paragraph about recycling?', 'A strong conclusion restates the call to action clearly.', 'Therefore, recycling every day helps protect our planet for the future.', 'I once saw a blue bin.', 'Plastic is made in factories.', 'Yesterday I drank water.'],
      ['HARD', 'Which sentence avoids a comma splice?', 'Use a conjunction or semicolon to join two independent clauses.', 'The rain stopped, so we went outside.', 'The rain stopped, we went outside.', 'The rain stopped we went outside.', 'The rain, stopped so we went outside.'],
    ],
  },

  // -------------------- GRADE 6 --------------------
  6: {
    1: [
      ['EASY', 'What does the root "bio-" mean in "biology" and "ecosystem"?', '"Bio-" means "life".', 'Life', 'Earth', 'Water', 'Energy'],
      ['MEDIUM', 'Which word is spelled correctly?', '"Environment" includes the "n" before "m".', 'Environment', 'Enviroment', 'Enviornment', 'Envyronment'],
      ['HARD', 'What does the suffix "-ology" mean?', '"-ology" means "the study of".', 'The study of', 'Fear of', 'Full of', 'Capable of'],
    ],
    2: [
      ['EASY', 'Which pair are homophones?', '"Principal" and "principle" are pronounced identically.', 'Principal / Principle', 'Desert / Dessert', 'Quiet / Quite', 'Accept / Except'],
      ['MEDIUM', 'How many syllables are in "responsibility"?', 're-spon-si-bil-i-ty has 6 syllables.', '6 syllables', '4 syllables', '5 syllables', '7 syllables'],
      ['HARD', 'Which word has a silent "p"?', 'The "p" in "psychology" is silent.', 'Psychology', 'Chapter', 'Apple', 'Purple'],
    ],
    3: [
      ['EASY', 'What does "sustainable" mean?', 'Capable of being maintained long-term without harming resources.', 'Able to last without depleting resources', 'Very expensive', 'Temporary', 'Made of metal'],
      ['MEDIUM', 'What does "ambiguous" mean?', '"Ambiguous" means open to more than one interpretation.', 'Unclear / having multiple meanings', 'Completely certain', 'Very loud', 'Extremely fast'],
      ['HARD', 'What does the idiom "a blessing in disguise" mean?', 'Something that seemed bad at first but turned out good.', 'A bad situation that turns out good', 'A hidden treasure chest', 'A costume party', 'A lucky coin'],
    ],
    4: [
      ['EASY', 'Identify the gerund in: "Swimming builds strong lungs."', '"Swimming" is a verb ending in -ing acting as a noun.', 'Swimming', 'Builds', 'Strong', 'Lungs'],
      ['MEDIUM', 'Which sentence contains a relative clause?', '"Who won the medal" is a relative clause.', 'The athlete who won the medal smiled proudly.', 'The athlete smiled proudly after the race.', 'Winning the medal felt amazing.', 'She trained every single morning.'],
      ['HARD', 'In "Having finished the test, Budi checked his answers," what is "Having finished the test"?', 'It is a participial phrase modifying "Budi".', 'Participial phrase', 'Prepositional phrase', 'Independent clause', 'Infinitive phrase'],
    ],
    5: [
      ['EASY', 'Which word is a synonym for "inevitable"?', '"Unavoidable" means inevitable.', 'Unavoidable', 'Optional', 'Unlikely', 'Preventable'],
      ['MEDIUM', 'Which word is a synonym for "eloquent"?', '"Articulate" means fluent and persuasive.', 'Articulate', 'Silent', 'Clumsy', 'Hesitant'],
      ['HARD', 'Which word is a synonym for "alleviate"?', '"Ease" means to make pain or difficulty less severe.', 'Ease', 'Worsen', 'Ignore', 'Create'],
    ],
    6: [
      ['EASY', 'If I ___ you, I would study earlier.', 'Second conditional uses "were" for all subjects.', 'were', 'was', 'am', 'be'],
      ['MEDIUM', 'The bridge ___ built in 1995.', 'Passive past simple with singular subject uses "was".', 'was', 'were', 'is', 'has'],
      ['HARD', 'She asked me where I ___ from.', 'Reported speech shifts present tense to past tense ("came").', 'came', 'come', 'coming', 'will come'],
    ],
    7: [
      ['EASY', 'How do you formally open an email to a school principal?', '"Dear Principal," is the appropriate formal greeting.', 'Dear Principal,', 'Hey there!', 'Yo!', 'What\'s up, Principal?'],
      ['MEDIUM', 'In a debate, how do you cite evidence persuasively?', 'Referencing a specific source strengthens your argument.', 'According to the 2025 study, recycling reduced waste by 30%.', 'Everyone knows I am right.', 'I just feel like it\'s true.', 'Trust me on this.'],
      ['HARD', 'How do you summarize a group\'s decision professionally?', 'Restate the agreed action and next steps clearly.', 'To summarize, we all agreed to finalize the slides by Friday.', 'Okay, we are done talking.', 'Whatever, let\'s go.', 'I forgot what we said.'],
    ],
    8: [
      ['EASY', 'Passage: "Although electric cars produce zero tailpipe emissions, manufacturing their batteries still requires energy." What is the author\'s tone?', 'Presenting both pros and cons is balanced/objective.', 'Balanced and objective', 'Angry', 'Sarcastic', 'Humorous', 'WORD_PROBLEM'],
      ['MEDIUM', 'Passage: "The city planted 10,000 trees; consequently, summer street temperatures dropped by 2°C." What is the cause?', 'Planting 10,000 trees caused the temperature drop.', 'Planting 10,000 trees', 'Summer arrived early', 'Temperatures dropped 2°C', 'Cars stopped driving', 'WORD_PROBLEM'],
      ['HARD', 'Passage: "Every citizen must conserve water now, or future generations will face severe shortages." What is the author\'s purpose?', 'Urging action ("must conserve") is persuasive.', 'To persuade readers to save water', 'To entertain with a joke', 'To describe a vacation', 'To explain how clouds form', 'WORD_PROBLEM'],
    ],
    9: [
      ['EASY', 'Which thesis statement is strongest for an essay on reading?', 'A strong thesis states a clear claim and reasons.', 'Daily reading improves vocabulary, empathy, and focus in students.', 'Books exist in libraries.', 'I read a book yesterday.', 'Reading is a thing people do.'],
      ['MEDIUM', 'Which sentence uses parallel structure correctly?', 'All items in the list use the same -ing form.', 'She enjoys hiking, swimming, and painting.', 'She enjoys hiking, to swim, and paints.', 'She enjoys to hike, swimming, and paint.', 'She enjoys hike, swim, and painting.'],
      ['HARD', 'Which sentence is the most concise without losing meaning?', 'Eliminating wordy filler makes writing sharp.', 'We postponed the match due to rain.', 'Because of the fact that it was raining, we made the decision to postpone the match.', 'The match was postponed on account of the rain that fell.', 'Due to rain falling, we had to postpone the match later.'],
    ],
  },
};

// =====================================================
// HELPER: DETERMINISTIC OPTION ORDER
// =====================================================

function buildOptions(q: CompactQ, seedOffset: number) {
  const raw = [
    { text: q[3], isCorrect: true },
    { text: q[4], isCorrect: false },
    { text: q[5], isCorrect: false },
    { text: q[6], isCorrect: false },
  ];
  const shift = seedOffset % 4;
  const rotated = [...raw.slice(shift), ...raw.slice(0, shift)];
  return rotated.map((opt, idx) => ({
    text: opt.text,
    isCorrect: opt.isCorrect,
    orderIndex: idx + 1,
  }));
}

// =====================================================
// MAIN SEED RUNNER (GRADES 1 - 6)
// =====================================================

async function main() {
  console.log('Starting multi-grade database seed (Grades 1–6)...');

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
    update: { name: 'Mathematics', description: 'Primary mathematics learning.', orderIndex: 1, status: 'PUBLISHED' },
    create: { curriculumId: curriculum.id, name: 'Mathematics', slug: 'mathematics', description: 'Primary mathematics learning.', orderIndex: 1, status: 'PUBLISHED' },
  });

  const englishSubject = await prisma.subject.upsert({
    where: { curriculumId_slug: { curriculumId: curriculum.id, slug: 'english' } },
    update: { name: 'English', description: 'Primary English learning.', orderIndex: 2, status: 'PUBLISHED' },
    create: { curriculumId: curriculum.id, name: 'English', slug: 'english', description: 'Primary English learning.', orderIndex: 2, status: 'PUBLISHED' },
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
      // Cache topic by slug per grade so we don't upsert the same topic twice
      const topicCache = new Map<string, string>();
      let topicOrder = 0;

      for (const node of nodes) {
        const topicName = node.topicNames[tier];
        const skillName = node.skillNames[tier];
        let topicId = topicCache.get(node.topicSlug);

        if (!topicId) {
          topicOrder += 1;
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
              description: node.topicDesc,
              orderIndex: topicOrder,
              status: 'PUBLISHED',
            },
            create: {
              subjectId: subject.id,
              name: topicName,
              slug: node.topicSlug,
              description: node.topicDesc,
              gradeLevel: grade,
              orderIndex: topicOrder,
              status: 'PUBLISHED',
            },
          });
          topicId = topic.id;
          topicCache.set(node.topicSlug, topicId);
        }

        const skill = await prisma.skill.upsert({
          where: {
            topicId_slug: {
              topicId,
              slug: node.skillSlug,
            },
          },
          update: {
            name: skillName,
            description: node.skillDesc,
            orderIndex: node.index,
            status: 'PUBLISHED',
          },
          create: {
            topicId,
            name: skillName,
            slug: node.skillSlug,
            description: node.skillDesc,
            orderIndex: node.index,
            status: 'PUBLISHED',
          },
        });

        const padIndex = String(node.index).padStart(2, '0');
        const lessonId = `lesson_g${grade}_${key}_${padIndex}`;
        const lessonSlug = `${node.skillSlug}-g${grade}`;

        const lesson = await prisma.lesson.upsert({
          where: { id: lessonId },
          update: {
            skillId: skill.id,
            title: `${skillName} (Grade ${grade})`,
            slug: lessonSlug,
            description: `${node.skillDesc} — Primary Grade ${grade}.`,
            orderIndex: 1,
            xpReward: 50 + (grade - 1) * 10,
            status: 'PUBLISHED',
          },
          create: {
            id: lessonId,
            skillId: skill.id,
            title: `${skillName} (Grade ${grade})`,
            slug: lessonSlug,
            description: `${node.skillDesc} — Primary Grade ${grade}.`,
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