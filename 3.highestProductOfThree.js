// Given an array_of_ints, find the highest_product you can get from three of the integers.
// The input array_of_ints will always have at least three integers.
// Gotchas
// Does your function work with negative numbers? If array_of_ints is [−10, −10, 1, 3, 2] we should return 300 (which we get by taking −10 ∗ −10 ∗ 3).
// We can do this in O(n) time and O(1) space.

function productOfThree(array) {
  var highestNumSoFar = array[0];
  var lowestNumSoFar = array[0];
  var secondHighestNum = array[0];
  var highestProductSoFar = array[0] * array[1] * array[2];

  for (var i = 0; i < array.length; i++) {
    var current = array[i];

    if (current * highestNumSoFar * secondHighestNum > highestProductSoFar) {
      highestProductSoFar = current * highestNumSoFar * secondHighestNum;
    }

    if (current * lowestNumSoFar * highestNumSoFar > highestProductSoFar) {
       highestProductSoFar = current * highestNumSoFar * lowestNumSoFar;     
    }

    if (current > highestNumSoFar) {
      secondHighestNum = highestNumSoFar;
      highestNumSoFar = current;
    } else if (current > secondHighestNum) {
      secondHighestNum = current;
    } else if (current < lowestNumSoFar) {
      lowestNumSoFar = current;
    }



  }

  return highestProductSoFar;
  
}


module.exports = productOfThree;