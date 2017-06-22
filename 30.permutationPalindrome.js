function permutationPalindrome(string) {
  var chars = {};

  for (var i = 0; i < string.length; i++) {

    var char = string.charAt(i);

    if (!chars[char]) {
      chars[char] = 1;
    } else {
      delete chars[char];
    }
  }

  if (Object.keys(chars).length > 1) {
    return false;
  }

  return true;

}

module.exports = permutationPalindrome;