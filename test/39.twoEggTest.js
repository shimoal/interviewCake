var chai = require('chai');
var expect = chai.expect;
var twoEgg = require('../39.twoEgg');

describe('39.twoEgg', function() {
  it('should be a function', function() {
    expect(twoEgg).to.be.a('function');
  });

  xit('should return a different random number each call', function() {
    var rand1 = twoEgg();
    var rand2 = twoEgg();
    expect(rand1).to.not.equal(rand2);
  });

  xit('should return a number between 1 and 5', function() {
    expect(twoEgg()).to.be.at.least(1);
    expect(twoEgg()).to.be.below(6);
  });

  xit('should return a number', function() {
    expect(twoEgg()).to.be.a('number');
  });

});