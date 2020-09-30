// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

'use strict';

const findLongestWord = function (string) {
    const arrayForString = string.split(" ");
    let longestWord = arrayForString[0];
    for (const word of arrayForString) {
        if (longestWord.length < word.length) {
            longestWord = word;
        }
    }
    return longestWord;
};

// Вызовы функции для проверки работоспособности реализации:

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'