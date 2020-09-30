// Есть массив цветов в hex-формате и кнопки Start и Stop.
// Напиши скрипт, который после нажатия кнопки Start, раз в
//  секунду меняет цвет фона body на случайное значение из массива
//  используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠ Учти, на кнопку Start можно нажать бесконечное количество раз.
//  Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов),
//  используй функцию randomIntegerFromInterval.

"use strict";
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]')
};

const colorSwitch = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.colorSwitchBtnId = setInterval(randomBodyColor, 1000);
  },
  stop() {
    clearInterval(this.colorSwitchBtnId);
    this.isActive = false;
  }
};

refs.startBtn.addEventListener("click", colorSwitch.start.bind(colorSwitch));
refs.stopBtn.addEventListener("click", colorSwitch.stop.bind(colorSwitch));

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomBodyColor() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length)];
}
