function rand7() {
  return Math.floor(Math.random() * 7) + 1;
}

function rand5() {
  var num = rand7();
  return num <=5 ? num : rand5();
}

module.exports = rand5;