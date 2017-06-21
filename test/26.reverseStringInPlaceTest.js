var chai = require('chai');
var expect = chai.expect;
var reverseString = require('../26.reverseStringInPlace');

describe('26.reverseStringInPlace', function() {
  it('should be a function', function() {
    expect(reverseString).to.be.a('function');
  });
})