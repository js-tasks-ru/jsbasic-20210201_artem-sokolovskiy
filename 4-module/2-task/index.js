function makeDiagonalRed(table) {
  for (let row of table.rows) {
    for (let cell of row.cells) {
      cell.style.backgroundColor = 'red';
    }
  }
}

