const API_KEY = '21960692-4b154a3b2fc4580fa9db92a45';

export default class PhotoApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchPhotos() {
    const searchParams = new URLSearchParams({
      image_type: 'photo',
      orientation: 'horizontal',
      q: this.searchQuery,
      page: this.page,
      per_page: 12,
      key: API_KEY,
    });

    const url = `https://pixabay.com/api/?${searchParams}`;
    
    return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        this.incrementPage();

        return hits;
      })
      .catch(err => console.log(err));
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}