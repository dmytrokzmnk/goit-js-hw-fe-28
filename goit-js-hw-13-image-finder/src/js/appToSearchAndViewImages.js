import apiService from './assets/apiService';
import itemTemplate from '../templates/item.hbs';
import markup from './assets/templateMarkup';

class AppToSearchAndViewImages {
  constructor() {
    this.body = document.querySelector('body');
    this.form = null;
    this.list = null;
    this.button = null;
    this.lengthList = null;
    this.SumOfMargin = null;
  }
  renderPicture = arr => {
    this.initialLengthOfElem(this.list);
    const markup = arr.reduce((acc, el) => itemTemplate(el) + acc, '');
    this.addToScreen(this.list, 'beforeend', markup);
    this.renderButtonAndAddListenerButton(arr);
  };
  requestOfFormGallery = async e => {
    e.preventDefault();
    this.clear(this.list);
    apiService.query(this.input.value);
    this.disabledTrue(this.input);
    const hits = await apiService.requestMethod();
    this.removeButton(this.button);
    this.renderPicture(hits);
    this.disabledFalse(this.input);
  };

  loadMore = async () => {
    apiService.nextPage();
    const hits = await apiService.requestMethod();
    this.removeButton(this.button);
    this.renderPicture(hits);
    this.scrollTo(this.lengthList, this.SumOfMargin);
  };

  scrollTo = (length, extraLength) => {
    window.scrollTo({
      top: length + extraLength,
      behavior: 'smooth',
    });
  };

  addToScreen = (container, position, el) => {
    container.insertAdjacentHTML(position, el);
  };
  addListener = () => {
    this.form.addEventListener('submit', this.requestOfFormGallery);
  };
  renderButtonAndAddListenerButton = arr => {
    if (arr.length) {
      this.addToScreen(this.body, 'beforeend', markup.button);
      this.button = document.querySelector('.load-pixabay');
      this.button.addEventListener('click', this.loadMore);
      this.initialSumOfMargin(this.form, this.list, this.button);
    }
  };
  removeButton = btn => {
    if (btn) {
      btn.remove();
    }
  };
  clear = element => {
    element.innerHTML = '';
  };
  disabledFalse = element => {
    element.disabled = false;
  };
  disabledTrue = element => {
    element.disabled = true;
  };
  initialElements = () => {
    this.form = document.querySelector('.from-pixabay');
    this.input = document.querySelector('.input-pixabay');
    this.list = document.querySelector('.list-pixabay');
  };
  initialSumOfMargin = (form, list, btn) => {
    const computedStyleForm = getComputedStyle(form);
    const computedStyleList = getComputedStyle(list);
    const computedStyleButton = getComputedStyle(btn);
    const marginBottomForm = parseFloat(computedStyleForm.marginBottom);
    const marginTopForm = parseFloat(computedStyleForm.marginTop);
    const marginBottomList = parseFloat(computedStyleList.marginBottom);
    const marginTopList = parseFloat(computedStyleList.marginTop);
    const marginBottomButton = parseFloat(computedStyleButton.marginBottom);
    const marginTopButton = parseFloat(computedStyleButton.marginTop);
    this.SumOfMargin =
      marginBottomForm +
      marginTopForm +
      marginBottomList +
      marginBottomButton +
      marginTopList +
      marginTopButton;
  };
  initialLengthOfElem = element => {
    this.lengthList = element.clientHeight;
  };
  startApp = () => {
    this.addToScreen(this.body, 'beforeend', markup.form);
    this.addToScreen(this.body, 'beforeend', markup.list);
    this.initialElements();
    this.addListener();
  };
}

new AppToSearchAndViewImages().startApp();
