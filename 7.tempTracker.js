// You decide to test if your oddly-mathematical heating company is fulfilling its All-Time Max, Min, Mean and Mode Temperature GuaranteeTM.
// Write a class TempTracker with these methods:
// 1. insert()—records a new temperature
// 2. get_max()—returns the highest temp we've seen so far
// 3. get_min()—returns the lowest temp we've seen so far
// 4. get_mean()—returns the mean↴ of all temps we've seen so far
// 5. get_mode()—returns the mode↴ of all temps we've seen so far
// Optimize for space and time. Favor speeding up the get_ functions over speeding up the insert() function.
// get_mean() should return a float, but the rest of the get_ functions can return integers. Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0..110.
// If there is more than one mode, return any of the modes.
// Gotchas
// We can get O(1) time for all functions.
// We can get O(1) space relating to our input. Is that surprising? Notice that we don't have a method for getting back the whole set of temperatures recorded. Perhaps we can avoid storing them all...


var TempTracker = function() {
  this.min = null;
  this.max = null;
  this.mean = null;
  this.mode = null;
  this.totalNum = 0;
  this.sumNums = 0;
  this.occurances = {};

}


TempTracker.prototype.insert = function(val) {
  if (!this.min || val < this.min) {
    this.min = val;
  }

  if (!this.max || val > this.max) {
    this.max = val;
  }

  if (!this.occurances[val]) {
    this.occurances[val] = [];
  }

  this.occurances[val]++;

  if (this.occurances[val] > this.mode) {
    this.mode = val;
  }

  this.totalNum += 1;
  this.sumNums += val;
}

TempTracker.prototype.get_max = function() {
  return this.max;
}

TempTracker.prototype.get_min = function() {
  return this.min;
}

TempTracker.prototype.get_mean = function() {
  return this.sumNums / this.totalNum;
}

TempTracker.prototype.get_mode = function() {
  return this.mode;
}

module.exports = TempTracker;