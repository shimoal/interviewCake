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
});