const socketImageSwap = (url) => {
  const socket = io.connect(url);
  socket.on('TIME_STAMP', (data) => {
    const timeStamp = document.getElementById('time');
    timeStamp.innerHTML = '';
    timeStamp.innerHTML = data;
  });
  socket.on('IMAGE_SWAP', (data) => {
    const imgData = document.getElementById('images');
    imgData.innerHTML = '';
    imgData.innerHTML = `
      <li class="img-wrap" id="img0"><img src=${data[0]}></li>
      <li class="img-wrap" id="img1"><img src=${data[1]}></li>
      <li class="img-wrap" id="img2"><img src=${data[2]}></li>
      <li class="img-wrap" id="img3"><img src=${data[3]}></li>
      <li class="img-wrap" id="img4"><img src=${data[4]}></li>
    `;
  });
}

module.exports = socketImageSwap;
