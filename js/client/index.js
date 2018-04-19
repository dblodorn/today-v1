const socketImageSwap = require('./scripts/socket-image-swap');
const imagePop = require('./scripts/image-pop');
socketImageSwap(window.url);
window.addEventListener('load', (event) => {
  imagePop();
  // INFO
  console.log('URL:: ', window.url, ' IMG-COUNT:: ', window.imgCount);
});
