var chai = require('chai');
var expect = chai.expect;
var permutationPalindrome = require('../30.permutationPalindrome');

describe('30.permutationPalindrome', function() {
  it('should be a function', function() {
    expect(permutationPalindrome).to.be.a('function');
  });

  it('should return true for input that has a permutation that is a palindrome', function() {
    expect(permutationPalindrome('civic')).to.equal(true);
    expect(permutationPalindrome('ivicc')).to.equal(true);
  })

  it('should return false if no permutation is a palindrome', function() {
    expect(permutationPalindrome('civil')).to.equal(false);
    expect(permutationPalindrome('livci')).to.equal(false);
  })
});