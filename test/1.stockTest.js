var chai = require('chai');
var expect = chai.expect;
var stock = require('../1.stock.js');

describe('1.stock', function() {
  it('should be a function', function() {
    expect(stock).to.be.a('function');   
  });

  it('should return the highest profit for positive profit', function() {
    expect(stock([3, 19, 20, 18, 1, 2, 5])).to.equal(17);
    expect(stock([45, 100, 10, 20, 67])).to.equal(57);
    expect(stock([99, 32, 10, 34, 36, 25])).to.equal(26);
  });

  it('should work for negative profit', function() {
    expect(stock([56, 34, 10, 8, 3, 1, 0])).to.equal(-1);
    expect(stock([76, 34, 12, 0])).to.equal(-12);
  });

  it('should work for zero profit', function() {
    expect(stock([0, 0, 0, 0, 0])).to.equal(0);
    expect(stock([12, 12, 12, 12, 12])).to.equal(0);
  });

});