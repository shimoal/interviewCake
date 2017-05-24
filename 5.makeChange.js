// Imagine you landed a new job as a cashier...
// Your quirky boss found out that you're a programmer and has a weird request about something they've been wondering for a long time.
// Write a function that, given: 1. an amount of money
// 2. a list of coin denominations
// computes the number of ways to make amount of money with coins of the available
// denominations.
// Example: for amount=4 (4¢) and denominations=[1, 2, 3] (1¢, 2¢ and 3¢), your program
// would output 4—the number of ways to make 4¢ with those denominations:
//
// 1. 1¢, 1¢, 1¢, 1¢ 
// 2. 1¢, 1¢, 2¢
// 3. 1¢, 3¢
// 4. 2¢, 2¢


// We can do this in O(n ∗ m) time and O(n) space, where n is the amount of money and m is the number of denominations.

function makeChange(amount, denominations) {
  var ways = new Array(amount + 1).fill(0);
  ways[0] = 1; 

  for (var i = 0; i < denominations.length; i++) {
    var coin = denominations[i];
    for (var j = coin; j < amount + 1; j++) {
      var higherAmount = j;
      var remainder = higherAmount - coin;
      ways[higherAmount] += ways[remainder];
    }
  }

 return ways[amount]

}


module.exports = makeChange;