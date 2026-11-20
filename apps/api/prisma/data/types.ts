export type Locale = 'en' | 'id' | 'zh';
export type Difficulty = 'EASY' | 'MEDIUM' | 'HARD';
export type Format = 'STANDARD' | 'WORD_PROBLEM';
export type GradeTier = 'tier1' | 'tier2' | 'tier3';

export type QuestionTranslation = {
  prompt: string;
  explanation: string;
  correct: string;
  w1: string;
  w2: string;
  w3: string;
};

export type CompactQ = [
  difficulty: Difficulty,
  prompt: string,
  explanation: string,
  correct: string,
  w1: string,
  w2: string,
  w3: string,
  format?: Format,
  translations?: Partial<Record<Exclude<Locale, 'en'>, QuestionTranslation>>,
];