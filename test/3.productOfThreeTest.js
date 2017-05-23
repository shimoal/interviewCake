var chai = require('chai');
var expect = chai.expect;
var productOfThree = require('../3.highestProductOfThree.js');

describe('3.productOfThree', function() {
  var product = productOfThree([4, 6, 10, 100, 3, 4]);

  it('should be a function', function() {
    expect(productOfThree).to.be.a('function');
  })

  it('should return an integer', function() {
    expect(product).to.be.a('number');
  });

  it('should return the highest product of highestProductOfThree', function() {
    expect(product).to.equal(6000);
  });

  it('should work for negative numbers', function() {
    expect(productOfThree([-10, -10, 1, 3, 2])).to.equal(100);
  })
});