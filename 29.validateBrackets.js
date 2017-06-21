function validateBrackets(string) {
  var stack = [];
  var openers = { '{': 1,'[': 1,'(': 1 };
  var closers = { '}': '{', ']': '[', ')': '('};

  for (var i = 0; i < string.length; i++) {
    var currentChar = string.charAt(i);
    if (openers[currentChar]) {
      stack.push(currentChar);
    } else if (closers[currentChar]) {
      var match = stack.pop();
      if (closers[currentChar] !== match) {
        return false;
      }
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
}



module.exports = validateBrackets;