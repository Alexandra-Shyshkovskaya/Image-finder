export default function getRefs() {
  return {
    searchForm: document.querySelector('#search-form'),
    galleryContainer: document.querySelector('.js-gallery-list'),
    largeImage: document.querySelector('.large-img'),
    scrollMore: document.querySelector('#scroll-more'),
  };
}