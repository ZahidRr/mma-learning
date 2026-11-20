import type { CompactQ } from '../types.js';

export const MATH_GRADE_6: Record<number, CompactQ[]> = {
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
};