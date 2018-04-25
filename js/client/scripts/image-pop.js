const imagePop = () => {
  // DOM elements
  const body = document.querySelector('body');
  const html = document.querySelector('html');
  const popup = document.getElementById('popup');
  const popupImg = document.getElementById('popup-img');
  const popImgs = document.querySelectorAll('.img-wrap');
  // Popup Close
  popup.addEventListener('click', (e) => {
    setTimeout(() => {
      body.removeAttribute('class');
      html.removeAttribute('class');
      e.preventDefault();
      e.stopPropagation();
    }, 50);
  });
  // Popup Open
  const clickHandler = (e) => {
    const bgImg = e.target.currentSrc;
    body.removeAttribute('class');
    body.classList.add('pop');
    html.classList.add('noscroll');
    popupImg.style.backgroundImage = `url("${bgImg}")`;
  }
  window.clickUp = function(e) {
    clickHandler(e);
    e.preventDefault();
    e.stopPropagation();
  };
};

module.exports = imagePop;
