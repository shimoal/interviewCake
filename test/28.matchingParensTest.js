var chai = require('chai');
var expect = chai.expect;
var findMatch = require('../28.matchingParens');

describe('28.matchingParens', function() {
  it('should be a function', function() {
    expect(findMatch).to.be.a('function');
  });

  it('should find a matching paren', function() {
    expect(findMatch("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10))
      .to.equal(79);
  })
})