var chai = require('chai');
var expect = chai.expect;
var stringPermutations = require('../31.stringPermutations');

describe('31.stringPermutations', function() {
  it('should be a function', function() {
    expect(stringPermutations).to.be.a('function');
  });

  it('should return all permutations of a string', function() {
    expect(stringPermutations('cat')).to.deep.equal(['cat', 'cta', 'act', 'atc', 'tca', 'tac']);
  });


  it('should return an empty array if input is an empty string', function() {
    expect(stringPermutations('')).to.deep.equal([]);
  });

  it('should return an array of one item if stirng is one character', function() {
    expect(stringPermutations('d')).to.deep.equal(['d']);
  });
});