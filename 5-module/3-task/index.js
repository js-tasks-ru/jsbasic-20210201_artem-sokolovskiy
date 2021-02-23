function initCarousel() {
  let width = document.querySelector('.carousel__inner').offsetWidth;
  let move = 0;
  let leftButton = document.querySelector('.carousel__arrow_left');
  let rightButton = document.querySelector('.carousel__arrow_right');
  let elem = document.querySelector('.carousel__inner');
  leftButton.style.display = 'none';
  leftButton.addEventListener('click', left);
  rightButton.addEventListener('click', right);
  function left() {
    rightButton.style.display = '';
    move +=width;
    elem.style.transform = "translateX(" + move + "px)"
    if (move > -1) {
      leftButton.style.display = 'none';
    }
  }
  function right() {
    leftButton.style.display = '';
    rightButton.style.display = '';
    move-=width;
    elem.style.transform = "translateX(" + move + "px)"
    if (move < -2 * width) {
      rightButton.style.display = 'none';
    }
  }
}
