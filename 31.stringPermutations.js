// function stringPermutations(string) {
//   var permutations = [];

//   var findAllPermutations = function(charsLeft, currentPerm) {
//     currentPerm = currentPerm || '';

//     if (charsLeft.length === 1) {
//       currentPerm += charsLeft.charAt(0);
//       permutations.push(currentPerm);
//       return;
//     }

//     for (var i = 0; i < charsLeft.length; i++) {
//       var newCharsLeft = charsLeft.slice(0, i) + charsLeft.slice(i + 1);
//       findAllPermutations(newCharsLeft, currentPerm + charsLeft.charAt(i));
//     }

//   };

//   findAllPermutations(string);
//   return permutations;
// };

function stringPermutations(charsLeft, currentPerm, allPerms) {
    currentPerm = currentPerm || '';
    allPerms = allPerms || [];

    if (charsLeft.length === 1) {
      currentPerm += charsLeft.charAt(0);
      allPerms.push(currentPerm);
      return allPerms;
    }

    for (var i = 0; i < charsLeft.length; i++) {
      var newCharsLeft = charsLeft.slice(0, i) + charsLeft.slice(i + 1);
      stringPermutations(newCharsLeft, currentPerm + charsLeft.charAt(i), allPerms);
    }

    return allPerms;

};

module.exports = stringPermutations;