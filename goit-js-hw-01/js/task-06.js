'use strict';

let input;
let total = 0;

do {
  input = prompt('Введите число', '');
  const inputConversion = Number(input);
  if (Number.isNaN(inputConversion)) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    total += inputConversion;
  }
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);