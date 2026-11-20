import type { CompactQ } from '../types.js';

export const MATH_GRADE_4: Record<number, CompactQ[]> = {
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
};