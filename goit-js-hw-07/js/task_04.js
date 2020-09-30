// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

"use strict"

const counterValue = document.querySelector("#value")
const btnInc = document.querySelector("button[data-action=\"increment\"]");
const btnDec = document.querySelector("button[data-action=\"decrement\"]");

const increment = () => {

    counterValue.textContent = Number(counterValue.textContent) + 1;
}
const decrement = () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
}
btnInc.addEventListener("click", increment);
btnDec.addEventListener("click", decrement);