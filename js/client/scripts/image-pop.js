const imagePop = () => {
  // DOM elements
  const body = document.querySelector('body');
  const popup = document.getElementById('popup');
  const popupImg = document.getElementById('popup-img');
  const popImgs = document.querySelectorAll('.img-wrap');
  // Popup Open
  const clickHandler = (e) => {
    const bgImg = e.path[0].currentSrc;
    body.removeAttribute('class');
    body.classList.add('pop');
    popupImg.style.backgroundImage = `url("${bgImg}")`;
    e.preventDefault();
  }
  // Popup Close
  popup.addEventListener('click', (e) => {
    setTimeout(() => {
      body.removeAttribute('class');
      e.preventDefault();
      e.stopPropagation();
    }, 50);
  });
  window.clickUp = function(e) {
    clickHandler(e);
    e.preventDefault();
    e.stopPropagation();
  };
};

module.exports = imagePop;
