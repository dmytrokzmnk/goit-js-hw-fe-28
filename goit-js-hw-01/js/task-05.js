'use strict';

let userInputContry = prompt('Введите страну конечной доставки', '');
const priceForChina = 100;
const priceForChile = 250;
const priceForAustralia = 170;
const priceForIndia = 80;
const priceForJamaica = 120;

if (userInputContry === null) {
  alert('Отменено пользователем!');
} else {
  switch (userInputContry.toLowerCase()) {
    case ('китай'):
      console.log(`Доставка в Китай будет стоить ${priceForChina} кредитов`);
      break;
    case ('чили'):
      console.log(`Доставка в Чили будет стоить ${priceForChile} кредитов`);
      break;
    case ('австралия'):
      console.log(`Доставка в Австралия будет стоить ${priceForAustralia} кредитов`);
      break;
    case ('индия'):
      console.log(`Доставка в Индия будет стоить ${priceForIndia} кредитов`);
      break;
    case ('ямайка'):
      console.log(`Доставка в Ямайка будет стоить ${priceForJamaica} кредитов`);
      break;
    default:
      alert('В вашей стране доставка не доступна');
  }
}