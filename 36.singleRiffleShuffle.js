function singleRiffleShuffle(shuffledDeck, half1, half2) {

  half1Index = 0;
  half2Index = 0;

  for (var shuffledDeckIndex = 0; shuffledDeckIndex < shuffledDeck.length; shuffledDeckIndex++) {

    if (half1[half1Index] &&
      half1[half1Index] === shuffledDeck[shuffledDeckIndex]) {
      half1Index++;
    } else

    if (half2[half2Index] &&
      half2[half2Index] === shuffledDeck[shuffledDeckIndex]) {
      half2Index++;
    } 



    else {
      return false;
    }
  }
  return true;
}

module.exports = singleRiffleShuffle;