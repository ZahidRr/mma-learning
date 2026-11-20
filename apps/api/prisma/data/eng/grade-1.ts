import type { CompactQ } from '../types.js';

export const ENGLISH_GRADE_1: Record<number, CompactQ[]> = {
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
};