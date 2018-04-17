const socketImageSwap = require('./scripts/socket-image-swap');
const imagePop = require('./scripts/image-pop');
// STAGING:
// socketImageSwap('http://today-counter.dmbk.io');
// LOCAL:
socketImageSwap('http://localhost:3001');
// PRODUCTION:
// socketImageSwap('http://today.sebastianpardo.com');

window.addEventListener('load', (event) => {
  setTimeout(() => {
    document.getElementById('images').style.opacity = 1;
  }, 150);
  imagePop();
});
