function reverseStringInPlace(string) {
  var end = Math.floor(string.length / 2);
  
  for (var i = 0; i < end; i++) {
    var secondIndex = string.length - 1 -i;
    string = swap(string, i, secondIndex);
  }

  return string;
}

function swap(s, i1, i2) {
  var swap2 = s.charAt(i1);
  var swap1 = s.charAt(i2);
  var beg = s.substr(0, i1);
  var middle =  (i2 - i1 > 1) ? s.substr(i1 + 1, i2) : '';
  var end = s.substr(i2 + 1);

  s = beg + swap1 + middle + swap2 + end ;

  return s;
}

module.exports = reverseStringInPlace;