var chai = require('chai');
var expect = chai.expect;
var nthFib = require('../16.nthFib.js');

describe('16.nthFib', function() {
  it('should be a function', function() {
    expect(nthFib).to.be.a('function');
  });

  it('should return the nthFib', function() {
    expect(nthFib(0)).to.equal(0);
    expect(nthFib(1)).to.equal(1);
    expect(nthFib(2)).to.equal(1);
    expect(nthFib(4)).to.equal(3);
    expect(nthFib(7)).to.equal(13);
  })
});