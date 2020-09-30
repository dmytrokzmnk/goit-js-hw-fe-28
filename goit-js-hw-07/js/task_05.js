// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//подставляет его текущее значение в span#name-output.
//Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

"use strict";

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const handleInputChange = event => {
  output.textContent =
    event.currentTarget.value === "" ? "незнакомец" : event.currentTarget.value;
};
input.addEventListener("input", handleInputChange);
