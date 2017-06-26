var chai = require('chai');
var expect = chai.expect;
var inPlaceShuffle = require('../35.inPlaceShuffle');

describe('35.inPlaceShuffle', function() {
  it('should be a function', function() {
    expect(inPlaceShuffle).to.be.a('function');
  });

  it('should shuffle an array', function() {
    expect(inPlaceShuffle([1, 2, 3, 4, 5])).to.not.deep.equal([1, 2, 3, 4, 5]);
  })
});