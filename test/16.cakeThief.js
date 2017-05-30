var chai = require('chai');
var expect = chai.expect;
var cakeThief = require('../16.cakeThief.js');

describe('16. cakeThief', function() {
  it('should be a function', function() {
    expect(cakeThief).to.be.a('function');
  });

  it('should find the optimal price for cakes', function() {
    expect(cakeThief([[7, 160], [3, 90], [2, 15]], 20)).to.equal(555);
    expect(cakeThief([[2, 15], [7, 160], [3, 90]], 20)).to.equal(555);
  });

  it('should work for 0 weight cakes', function() {
    expect(cakeThief([[1, 10], [0, 300]], 5)).to.equal(50);
  });

  it('should work for 0 weight duffle bags', function() {
    expect(cakeThief([[3, 40], [2, 10], [19, 200]], 0)).to.equal(0);
  })
});