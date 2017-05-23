// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
// Write a function get_products_of_all_ints_except_at_index() that takes an array of integers and returns an array of the products.

// Do not use division in your solution.

function productOfOthers(array) {

  var arrayOfProducts = new Array(array.length).fill(1);

  for (var i = 1; i < array.length; i++) {
    arrayOfProducts[i] = arrayOfProducts[i-1] * array[i - 1] ;
  }
  
  var productSoFar = array[array.length - 1];

  for (var j = array.length - 2; j >=0; j--) {
    arrayOfProducts[j] = arrayOfProducts[j] * productSoFar;
    productSoFar *= array[j];
  }

  return arrayOfProducts;
  
}

//O(n) time and O(n) space

module.exports = productOfOthers;