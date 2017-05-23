var chai = require('chai');
var expect = chai.expect;
var makeChange = require('./../5.makeChange.js');

describe('5.makeChange', function() {
  it('should be a function', function() {
    expect(makeChange).to.be.a('function');
  });
});