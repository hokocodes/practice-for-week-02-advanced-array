/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

function hipsterfy(sentence) {
    const vowels = 'aeiouAEIOU';

    const removeLastVowel = (word) => {
        for (let i = word.length - 1; i >= 0; i--) {
            if (vowels.includes(word[i])) {
                return word.slice(0, i) + word.slice(i + 1);
            }
        }
        return word;
    };

    return sentence
        .split(' ') // Split the sentence into an array of words
        .map(removeLastVowel) // Remove the last vowel from each word
        .join(' '); // Join the words back into a single string
}
// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
