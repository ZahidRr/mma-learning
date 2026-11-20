import type { CompactQ } from '../types.js';

export const MATH_GRADE_2: Record<number, CompactQ[]> = {
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
};