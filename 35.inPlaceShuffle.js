function inPlaceShuffle(array) {

  for (var index = 0; index < array.length - 1; index++) {
    var numPlaces = array.length - index - 1;
    var randomIndex = Math.floor(Math.random() * numPlaces) + index;
    swap(array, index, randomIndex);
  }
  
  return array;
}

function swap(array, a, b) {
  var temp = array[a];
  array[a]= array[b];
  array[b] = temp;
  return array;
}

module.exports = inPlaceShuffle;
