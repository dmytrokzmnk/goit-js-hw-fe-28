// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

"use strict";

const input = document.querySelector("#validation-input");
const handleInputValidation = event => {
  const dataLength = Number(input.getAttribute("data-length"));
  const inputLength = event.currentTarget.value.length;
  if (dataLength === inputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    return;
  }
  input.classList.remove("valid");
  input.classList.add("invalid");
};
input.addEventListener("blur", handleInputValidation);