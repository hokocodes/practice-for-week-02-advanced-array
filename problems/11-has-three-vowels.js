/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

function hasThreeVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const uniqueVowels = str.toLowerCase().split('').reduce((acc, char) => {
        if (vowels.includes(char) && !acc.includes(char)) {
            acc.push(char);
        }
        return acc;
    }, []);

    return uniqueVowels.length >= 3;
}

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
