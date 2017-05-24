var chai = require('chai');
var expect = chai.expect;
var makeChange = require('./../5.makeChange.js');

describe('5.makeChange', function() {
  it('should be a function', function() {
    expect(makeChange).to.be.a('function');
  });

  it('should return ways to make change', function() {
    expect(makeChange(5, [1, 3, 5])).to.equal(3);
    expect(makeChange(4, [1, 2, 3])).to.equal(4);
  });
});