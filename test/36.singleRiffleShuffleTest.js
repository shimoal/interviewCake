var chai = require('chai');
var expect = chai.expect;
var singleRiffleShuffle = require('../36.singleRiffleShuffle');

describe('36.singleRiffleShuffle', function() {
  it('should be a function', function() {
    expect(singleRiffleShuffle).to.be.a('function');
  });

  it('should shuffle an array', function() {
    expect(singleRiffleShuffle([1, 2, 3, 4, 5])).to.not.deep.equal([1, 2, 3, 4, 5]);
  })
});