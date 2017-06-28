var chai = require('chai');
var expect = chai.expect;
var mergeArrays = require('../43.mergeSortedArrays');

describe('43.mergeArrays', function() {
  it('should be a function', function() {
    expect(mergeArrays).to.be.a('function');
  });

  it('should return an array', function() {
    expect(mergeArrays([1], [1])).to.be.an('array');
  });

  it('should return a sorted array', function() {
    expect(mergeArrays([1, 5, 9, 10], [2, 3, 4, 6, 7, 8])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});