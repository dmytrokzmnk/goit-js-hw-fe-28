//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//после чего вставит все li за одну операцию в список ul.ingredients.
//Для создания DOM-узлов используй document.createElement().

"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
const list = document.querySelector("#ingredients");
const arr = [];

const pushItemToList = ingredients.forEach(el => {
  const item = document.createElement("li");
  arr.push(item);
  item.textContent = el;
});
list.append(...arr);
