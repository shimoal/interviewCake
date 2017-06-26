function rand5() {
  return Math.floor(Math.random() * 5) + 1;
}

function rand7() {
  var num = (rand5() - 1) * 5 + rand5();

  while (num > 21) {
    var num = (rand5() - 1) * 5 + rand5();
  }

  return num % 7 + 1;
}

module.exports = rand7;
