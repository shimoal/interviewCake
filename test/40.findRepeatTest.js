var chai = require('chai');
var expect = chai.expect;
var findRepeat = require('../40.findRepeat');

describe('40.findRepeat', function() {
  it('should be a function', function() {
    expect(findRepeat).to.be.a('function');
  });

  it('should find any integer that is a duplicate', function() {
    expect(findRepeat([2, 3, 4, 5, 1, 4])).to.equal(4);
  })
});