function hideSelf() {
  let btn = document.querySelector('.hide-self-button');
  btn.addEventListener('click', buttn);
  function buttn() {
    this.setAttribute('hidden', 'true');
  }
}
