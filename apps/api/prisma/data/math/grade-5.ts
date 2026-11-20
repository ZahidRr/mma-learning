import type { CompactQ } from '../types.js';

export const MATH_GRADE_5: Record<number, CompactQ[]> = {
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
};