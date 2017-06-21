function reverseStringInPlace(string) {
  var end = Math.floor(string.length / 2);
  
  for (var i = 0; i < end; i++) {
    var secondIndex = string.length - 1 -i;
    string = swap(string, i, secondIndex);
  }

  return string;
}

function swap(s, i1, i2) {
  var chars = s.split('');
  var temp = chars[i1];

  chars[i1] = chars[i2];
  chars[i2] = temp;

  return chars.join('');
}

module.exports = reverseStringInPlace;