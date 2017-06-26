var chai = require('chai');
var expect = chai.expect;
var rand5 = require('../37.fiveSidedDie');

describe('37.rand5', function() {
  it('should be a function', function() {
    expect(rand5).to.be.a('function');
  });

  it('should return a different random number each call', function() {
    var rand1 = rand5();
    var rand2 = rand5();
    expect(rand1).to.not.equal(rand2);
  });

  it('should return a number between 1 and 5', function() {
    expect(rand5()).to.be.below(0);
    expect(rand5()).to.be.at.least(6);
  });

  it('should return a number', function() {
    expect(rand5()).to.be.a('number');
  });

});