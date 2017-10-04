const imagePop = () => {
  const listLength = document.querySelectorAll('.img-wrap').length;
  const body = $('body');
  const target = $('aside');
  const popImg = $('.pop-img');
  let i = 0;
  const clickHandler = (element) => {
    const currentClickElement = $('#' + element);
    const currentImg = currentClickElement[0].childNodes[0].attributes[0].nodeValue;
    currentClickElement.click(() => {
      body.removeClass();
      body.addClass('pop');
      $(popImg).css('background-image', 'url(' + currentImg + ')');
      setTimeout(() => {
        popImg.addClass('scale');
      }, 250);
      setTimeout(() => {
        $(target).css({
          'opacity': 1,
          'pointer-events': 'auto'
        });
      }, 250);
    });
  }
  $(target).click(() => {
    $(target).css({
      'opacity': 0,
      'pointer-events': 'none'
    });
    popImg.removeClass('scale');
    setTimeout(() => {
      body.removeClass();
    }, 750);
  });
  while (i < listLength) {
    clickHandler('img' + i);
    i++
  }
}

module.exports = imagePop;
