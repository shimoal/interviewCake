function reverseWords(string) {
  var words = string.split(' ');
  var end = Math.floor(words.length / 2);
  
  for (var i = 0; i < end; i++) {
    var secondIndex = words.length - 1 -i;
    swap(words, i, secondIndex);
  }

  return words.join(' ');
}

function swap(arr, i1, i2) {
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}


module.exports = reverseWords;