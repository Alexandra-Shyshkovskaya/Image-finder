import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

function onFetchError() {
  Toastify({
    text: 'Sorry, but there is no picture. Try again',
    duration: 3000,
    gravity: 'bottom', 
    position: 'right',
    stopOnFocus: true, 
    className: 'info info-error',
    offset: {
      x: 615, 
      y: 80, 
    },
  }).showToast();
}

export default { onFetchError };