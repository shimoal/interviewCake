var chai = require('chai');
var expect = chai.expect;
var product = require('../2.productOfAllOthers.js');

describe('2.productOfAllOthers', function() {
  var products = product([2, 3, 4, 5]);

  it('should return an array', function() {
    expect(products).to.be.an('array');
  });

  it('should return an array of products of all other integers', function() {
    expect(products).to.deep.equal([60, 40, 30, 24]);
    expect(product([1, 7, 3, 4])).to.deep.equal([84, 12, 28, 21]);
  });
});