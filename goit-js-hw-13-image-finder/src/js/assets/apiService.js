import axios from 'axios';
import 'regenerator-runtime';

const URL = 'https://pixabay.com/api';
const KEY = '&key=15712799-3aac8c662f4646ac4c4de5fd0';

export default {
  page: 1,
  perPage: 12,
  q: '',

  async requestMethod() {
    try {
      const requestApi = `/?image_type=photo&orientation=horizontal&q=${this.q}&page=${this.page}&per_page=${this.perPage}`;
      const res = await axios.get(URL + requestApi + KEY);
      this.resetPage();
      return res.data.hits;
    } catch (err) {
      console.warn(err);
    }
  },
  nextPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
  query(name) {
    this.q = name;
  },
};
