const callback = (entries, io) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry.isIntersecting);
      console.log(entry.target);
    }
  });
};

const options = {
  rootMargin: '200px',
  // threshold: 0.5,
};

const observer = new IntersectionObserver(callback, options);

observer.observe(document.querySelector('#sentinel'));