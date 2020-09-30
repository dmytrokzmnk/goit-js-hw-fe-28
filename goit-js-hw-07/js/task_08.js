// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div# boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30 px на 30 px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10 px
// Создай функцию destroyBoxes(), которая очищает div# boxes.

"use strict";

const input = document.querySelector("#controls > input");
const boxes = document.querySelector("#boxes");
const createBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');

const colorRandom = () => {
  return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)})`;
};
const createBoxes = amount => {
  let size = 30;
  const arr = [];
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = colorRandom();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    arr.push(box)
    size += 10;
  }
  boxes.append(...arr);
};
const destroyBoxes = () => {
  boxes.innerHTML = "";
};
createBtn.addEventListener("click", function () {
  createBoxes(input.value);
});
destroyBtn.addEventListener("click", destroyBoxes);