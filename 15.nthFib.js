// Write a function fib() that a takes an integer n and returns the nth fibonacci↴ number.
// Let's say our fibonacci series is 0-indexed and starts with 0. So:
// fib(0) # => 0 fib(1) # => 1 fib(2) # => 1 fib(3) # => 2 fib(4) # => 3 ...
// Gotchas
// Our solution runs in O(n) time.

function nthFib(n) {
  var firstFib = 0;
  var secondFib = 1;
  var nextFib;

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }


  while (n >= 2) {
    nextFib = firstFib + secondFib;
    firstFib = secondFib;
    secondFib = nextFib;
    n--;
  }

  return nextFib;

}

module.exports = nthFib;