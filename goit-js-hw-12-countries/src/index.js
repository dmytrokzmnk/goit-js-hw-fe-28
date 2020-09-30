import PNotify from 'pnotify/dist/es/PNotify.js';
import 'pnotify/dist/PNotifyBrightTheme.css';
import 'pnotify/dist/es/PNotifyAnimate';
import debounce from 'lodash.debounce';
import './css/styles.css';
import './css/Animate.css';
import fetchCountries from './js/fetchCountries';
import itemsTemplate from './template/items.hbs';
import contentTemplate from './template/content.hbs';

const input = document.querySelector('#input-countries');
input.classList.add('active');
const info = document.querySelector('.wrapper-info');

const renderList = arr => {
  const list = document.createElement('ul');
  list.classList.add('list-countries');
  const markup = itemsTemplate(arr);
  list.insertAdjacentHTML('beforeend', markup);
  info.append(list);
};

const renderContent = arr => {
  const content = document.createElement('div');
  content.classList.add('content-countries');
  const markup = contentTemplate(arr);
  content.insertAdjacentHTML('beforeend', markup);
  info.append(content);
};

const checkAmountCountries = arr => {
  const strIncorrect =
    'No results were found for your request. Please enter a correct country!';
  const strTooMany = 'Too many matches found. Please enter a more specific!';
  if (arr.length >= 2 && arr.length <= 10) {
    input.classList.remove('error');
    input.classList.add('active');
    renderList(arr);
    return;
  }
  if (arr.length === 1) {
    input.classList.remove('error');
    input.classList.add('active');
    renderContent(arr);
    return;
  }
  if (arr.length > 10) {
    input.classList.remove('active');
    input.classList.add('error');
    return;
  }
  input.classList.remove('active');
  input.classList.add('error');
  showRich(strIncorrect);
};

const showRich = str => {
  PNotify.error({
    title:
      '<span  style="font-family: Roboto, sans-serif;color: black;">Uh Oh!</' +
      'span>',
    titleTrusted: true,
    text: `<span style="font-family: Roboto, sans-serif;color: black;">${str}</' +
      'span>`,
    textTrusted: true,
    delay: 3000,
    remove: true,
    modules: {
      Animate: {
        animate: true,
        inClass: 'bounceInLeft',
        outClass: 'bounceOutRight',
      },
    },
  });
};

const searchInputCountries = e => {
  const inputValue = e.target.value;
  if (inputValue === '') {
    input.classList.remove('error');
    input.classList.add('active');
    info.innerHTML = '';
    return;
  }
  info.innerHTML = '';
  fetchCountries(inputValue)
    .then(arr => checkAmountCountries(arr))
    .then(data => console.log(data));
};

input.addEventListener('input', debounce(searchInputCountries, 800));
input.addEventListener('blur', () => {
  if (input.classList.contains('active')) {
    input.classList.remove('active');
    input.classList.add('default');
  }
});
input.addEventListener('focus', () => {
  if (input.classList.contains('default')) {
    input.classList.remove('default');
    input.classList.add('active');
  }
});
