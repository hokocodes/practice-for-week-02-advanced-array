/*
Write a function `removeEWords(sentence)` that accepts a sentence string as an
arg. The function should return a new string, containing only the words that
don't have the letter "e" in them.

Solve this using Array's `filter()` method.

Examples:

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

*/

function removeEWords(sentence) {
  return sentence
      .split(' ') // Split the sentence into an array of words
      .filter(word => !word.includes('e') && !word.includes('E')) // Filter out words containing 'e' or 'E'
      .join(' '); // Join the remaining words back into a string
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = removeEWords;
} catch (e) {
  module.exports = null;
}
