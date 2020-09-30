import './styles.css';
import menu from './json/menu.json';
import template from './templates/food-item.hbs';

const list = document.querySelector('.js-menu');

const markup = template(menu);
list.insertAdjacentHTML('beforeend', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const input = document.querySelector('.js-switch-input');
const body = document.querySelector('body');
const currentTheme = localStorage.getItem('theme');

input.addEventListener('change', handleInputChange);

function handleInputChange(e) {
  if (e.target.checked) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    return;
  }
  body.classList.remove(Theme.DARK);
  body.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
}

if (currentTheme === Theme.DARK) {
  input.checked = true;
  body.classList.add(Theme.DARK);
  return;
}
input.checked = false;
body.classList.add(Theme.LIGHT);
