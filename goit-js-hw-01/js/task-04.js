'use strict';

const credits = 23580;
const pricePerDroid = 3000;
const amountOfDroids = prompt('Введите количество дроидов', '');

if (amountOfDroids === null) {
  console.log('Отменено пользователем!');
} else {
  const totalPrice = pricePerDroid * amountOfDroids;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else if (totalPrice < credits) {
    console.log(`Вы купили ${amountOfDroids} дроидов, на счету осталось ${credits -totalPrice} кредитов.`);
  } else {
    console.log("Неверное количество!");
  }
}