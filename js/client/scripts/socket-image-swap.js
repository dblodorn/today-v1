const imagePop = require('./image-pop');

const socketImageSwap = (url) => {
  const socket = io.connect(url);
  socket.on('TIME_STAMP', (data) => {
    const timeStamp = document.getElementById('time');
    timeStamp.innerHTML = '';
    timeStamp.innerHTML = data;
  });
  socket.on('IMAGE_SWAP', (data) => {
    const imgData = document.getElementById('images');
    imagePop();
    const imgLi = (img, i) => {
      return `<li class="img-wrap" id="img${i}" onClick="clickUp(event);"><img src=${img}></li>`
    };
    const imgList = (images) => {
      return`
        ${images.map((img, index) => imgLi(img, index)).join('')}
      `
    };
    imgData.innerHTML = '';
    imgData.innerHTML = imgList(data);
  });
}

module.exports = socketImageSwap;
