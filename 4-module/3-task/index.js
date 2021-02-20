function highlight(table) {
  let bodyTable = table.querySelector('tBody');
  for (let row of bodyTable.rows) {
    if (row.querySelectorAll('td')[1].innerHTML < 18) {
      row.style.textDecoration = "line-through";
    }
    if (row.querySelectorAll('td')[2].innerHTML === 'm') {
      row.classList.add('male')
    }
    if (row.querySelectorAll('td')[2].innerHTML === 'f') {
      row.classList.add('female')
    }
    if (row.querySelectorAll('td')[3].getAttribute('data-available') === null) {
      row.setAttribute('hidden', 'true');
    }
    if (row.querySelectorAll('td')[3].getAttribute('data-available') === 'true') {
      row.classList.add('available');
    }
    if (row.querySelectorAll('td')[3].getAttribute('data-available') === 'false') {
      row.classList.add('unavailable');
    }
  }
}
