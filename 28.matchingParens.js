function findMatch(string, firstIndex) {
  var counter = 1;

  for (var i = firstIndex + 1; i < string.length; i++) {
    var currentChar = string.charAt(i);
    if (currentChar === '(') {
      counter++;
    }
    if (currentChar === ')') {
      counter--;
    }

    if (counter === 0) {
      return i;
    }
  }

  return -1;
}



module.exports = findMatch;