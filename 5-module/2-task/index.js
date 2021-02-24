function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  let a = true;
  btn.addEventListener('click', hide);
  function hide() {
    if (a === true) {
      document.getElementById('text').setAttribute('hidden', 'true');
    }
    else {
      document.getElementById('text').removeAttribute('hidden');
    }
    a = !a;
  }
}
