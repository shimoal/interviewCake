var chai = require('chai');
var expect = chai.expect;
var reverseString = require('../26.reverseStringInPlace');

describe('26.reverseStringInPlace', function() {
  it('should be a function', function() {
    expect(reverseString).to.be.a('function');
  });

  it('should reverse a string with odd number of letters', function() {
    expect(reverseString('odd')).to.equal('ddo');
    expect(reverseString('chattycathy')).to.equal('yhtacyttahc');
  });

  it('should reverse a string with even number of letters', function() {
    expect(reverseString('even')).to.equal('neve');
    expect(reverseString('electricboogaloo')).to.equal('oolagoobcirtcele');
  });
})