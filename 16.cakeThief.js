// You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane profit margins. You end up hitting the jackpot, breaking into the world's largest privately owned stock of cakes— the vault of the Queen of England.
// While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.
// Each type of cake has a weight and a value, stored in tuples↴ with two positions:
// 1. An integer representing the weight of the cake in kilograms
// 2. An integer representing the monetary value of the cake in British pounds

// You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.
// Write a function max_duffel_bag_value() that takes an array of cake tuples and a weight capacity, and returns the maximum monetary value the duffel bag can hold.

function cakeThief(cakes, weightCap) {
  var maxWeights = [];
  var currentWeightCap = 0;
  while (currentWeightCap <= weightCap) {
    var maxVal = 0;
    cakes.forEach(function(cake) {
      var cakeWeight = cake[0];
      var cakeVal = cake[1];

      if (cakeWeight <= currentWeightCap) {
        var numberOfCakes = Math.floor(currentWeightCap / cakeWeight);
        var currentVal = cakeVal * numberOfCakes;
        var remainingWeight = currentWeightCap - (numberOfCakes * cakeWeight);
        currentVal += maxWeights[remainingWeight]; 
        maxVal = Math.max(maxVal, currentVal);        
      }
    });

    maxWeights.push(maxVal);
    currentWeightCap++;    
  }

   return maxWeights[weightCap];
}

module.exports = cakeThief;