var chai = require('chai');
var expect = chai.expect;
var rand7 = require('../38.sevenSidedDie');

describe('38.rand7', function() {
  it('should be a function', function() {
    expect(rand7).to.be.a('function');
  });

  it('should return a different random number each call', function() {
    var rand1 = rand7();
    var rand2 = rand7();
    expect(rand1).to.not.equal(rand2);
  });

  it('should return a number between 1 and 5', function() {
    expect(rand7()).to.be.at.least(1);
    expect(rand7()).to.be.below(6);
  });

  it('should return a number', function() {
    expect(rand7()).to.be.a('number');
  });

});