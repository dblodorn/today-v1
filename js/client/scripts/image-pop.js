const imagePop = () => {
  const listLength = document.querySelectorAll('.img-wrap').length;
  const body = document.querySelector('body');
  const popup = document.querySelector('#popup');
  const popImg = $('.pop-img');
  let i = 0;
  // ClickHandler For Image
  const clickHandler = (element) => {
    const currentClickElement = $('#' + element);
    const currentImg = currentClickElement[0].childNodes[0].attributes[0].nodeValue;
    currentClickElement.click(() => {
      body.removeAttribute('class');
      body.classList.add('pop');
      $(popImg).css('background-image', 'url(' + currentImg + ')');
    });
  }
  popup.addEventListener('click', (event) => {
    setTimeout(() => {
      body.removeAttribute('class');
      event.preventDefault();
    }, 50);
  });
  while (i < listLength) {
    clickHandler('img' + i);
    i++
  }
}

module.exports = imagePop;
