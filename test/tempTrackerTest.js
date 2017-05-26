var chai = require('chai');
var expect = chai.expect;
var TempTracker = require('../7.tempTracker.js');

describe('7.tempTracker', function() {
  var tempTracker = new TempTracker();
  it('should have required methods', function() {
    expect(tempTracker.insert).to.be.a('function');
    expect(tempTracker.get_max).to.be.a('function');
    expect(tempTracker.get_min).to.be.a('function');
    expect(tempTracker.get_mean).to.be.a('function');
    expect(tempTracker.get_mode).to.be.a('function');
  });

  tempTracker.insert(1);
  tempTracker.insert(2);
  tempTracker.insert(3);

  it('should insert values', function() {
    expect(tempTracker.totalNum).to.equal(3);
  });

  it('should return the max value', function() {
    expect(tempTracker.get_max()).to.equal(3);
  });

  it('should return the min value', function() {
    expect(tempTracker.get_min()).to.equal(1);
  });

  it('should return the mean', function() {
    expect(tempTracker.get_mean()).to.equal(2);
  });

  it('should return the mode', function() {
    tempTracker.insert(2);
    tempTracker.insert(3);
    tempTracker.insert(3);
    expect(tempTracker.get_mode()).to.equal(3);
  })
});