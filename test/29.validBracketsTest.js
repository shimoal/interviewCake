var chai = require('chai');
var expect = chai.expect;
var validateBrackets = require('../29.validateBrackets');

describe('29.validateBrackets', function() {
  it('should be a function', function() {
    expect(validateBrackets).to.be.a('function');
  });

  it('should return true for valid brackets', function() {
    expect(validateBrackets("{ [ ] ( ) }")).to.equal(true);
  });

  it('should return false for improperly nested brackets', function() {
    expect(validateBrackets("[ ( ] ) }")).to.equal(false);
  });

  it('should return false for unclosed brackets', function() {
    expect(validateBrackets("{ [ }")).to.equal(false);
  });
})