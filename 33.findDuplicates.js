function findDuplicates(array) {
  var n = array.length - 1;
  var sumN = (n * n + n) / 2;

  var sumArray = array.reduce(function(num, sum) {
    return num + sum;
  }, 0);

  return sumArray - sumN;
}

module.exports = findDuplicates;