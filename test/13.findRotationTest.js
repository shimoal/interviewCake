var chai = require('chai');
var expect = chai.expect;
var findRotation = require('../13.findRotation.js');

describe('13. findRotation', function() {
  it('should be a function', function() {
    expect(findRotation).to.be.a('function');
  });

  it('should find the index of a rotated array', function() {
    var words = [ 'ptolemaic','retrograde','supplant','undulate','xenoepist','asymptote', 'babka','banoffee', 'engender', 'karpatka', 'othellolagkage']
    expect(findRotation(words)).to.equal(5);
  });

  it('should find the index when the rotation point is at the beginning', function() {
    var words = ['zoo', 'apple', 'banana', 'candy'];
    expect(findRotation(words)).to.equal(1);
  });

  it('should find the index when the rotation point is at the end', function() {
    var words = ['banana', 'candy', 'dog', 'egg', 'apple'];
    expect(findRotation(words)).to.equal(4);
  });

});