function rand5() {
  return Math.floor(Math.random() * 5) + 1;
}

function rand7() {
  var results = [
    [1, 2, 3, 4, 5],
    [6, 7, 1, 2, 3],
    [4, 5, 6, 7, 1],
    [2, 3, 4, 5, 6],
    [7, 0, 0, 0, 0]
  ];


  var row = rand5() - 1;
  var col = rand5() - 1;

  while (row === 4 && col > 0) {
    row = rand5() - 1;
    col = rand5() - 1;
  }

  return results[row][col];
}

module.exports = rand7;
