function findRepeat(array) {
  var sortedArray = array.sort(function(a, b) {
    return a - b;
  });
  for (var i = 0; i < sortedArray.length - 1; i++) {
    if (sortedArray[i] === sortedArray[i+1]) {
      return sortedArray[i];
    }
  }
  return -1;
}

module.exports = findRepeat;