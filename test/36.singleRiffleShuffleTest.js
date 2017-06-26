var chai = require('chai');
var expect = chai.expect;
var singleRiffleShuffle = require('../36.singleRiffleShuffle');

describe('36.singleRiffleShuffle', function() {
  it('should be a function', function() {
    expect(singleRiffleShuffle).to.be.a('function');
  });

  it('should detect a shuffle of a single riffle', function() {
    expect(singleRiffleShuffle([1, 2, 3, 4, 5], [1, 2, 3], [4, 5])).to.equal(true);
  });

  it('should return false if a deck must have been shuffled more than a single riffle', function() {
    expect(singleRiffleShuffle([1, 3, 5, 6, 2], [1, 5, 3], [2, 6])).to.equal(false);
  })
});