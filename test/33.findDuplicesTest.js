var chai = require('chai');
var expect = chai.expect;
var findDuplicates = require('../33.findDuplicates');

describe('33.findDuplicates', function() {
  it('should be a function', function() {
    expect(findDuplicates).to.be.a('function');
  });

  it('should find the duplicate value', function() {
    expect(findDuplicates([5, 6, 3, 1, 5, 2, 4])).to.equal(5);
  });

});