import type { CompactQ } from '../types.js';

export const MATH_GRADE_1: Record<number, CompactQ[]> = {
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
};