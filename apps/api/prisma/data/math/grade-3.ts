import type { CompactQ } from '../types.js';

export const MATH_GRADE_3: Record<number, CompactQ[]> = {
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
};