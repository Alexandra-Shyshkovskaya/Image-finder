const callback = (entries, io) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry.isIntersecting);
      console.log(entry.target);
    }
  });
};

const options = {
  rootMargin: '100px',
};

/*const observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector('#sentinel'));*/
const scrollMore = new betweenScrollMore(callback, options);
scrollMore.observe(document.querySelector('#scroll-more'));
