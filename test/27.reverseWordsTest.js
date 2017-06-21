var chai = require('chai');
var expect = chai.expect;
var reverseWords = require('../27.reverseWords');

describe('27.reverseStringInPlace', function() {
  it('should be a function', function() {
    expect(reverseWords).to.be.a('function');
  });

  it('should reverse a string with odd number of words', function() {
    expect(reverseWords('hi there everybody')).to.equal('everybody there hi');
  });

  it('should reverse a string with even number of letters', function() {
    expect(reverseWords('find you will pain only go you recordings security the into if'))
      .to.equal('if into the security recordings you go only pain will you find');
  });

  it('should return the same string if there is only one word', function() {
    expect(reverseWords('same')).to.equal('same');
  })
})