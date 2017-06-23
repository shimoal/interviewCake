var chai = require('chai');
var expect = chai.expect;
var wordCloud = require('../34.wordCloud');

describe('34.wordCloud', function() {
  it('should be a function', function() {
    expect(wordCloud).to.be.a('function');
  });

  it('should map the frequencies of the words', function() {
    expect(wordCloud('After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar.'))
      .to.deep.equal({
        after: 1,
        beating: 1,
        the: 2,
        eggs: 2,
        dana: 1,
        read: 1,
        next: 1,
        step: 1,
        add: 2,
        milk: 1,
        and: 2,
        then: 1,
        flour: 1,
        sugar: 1
      });
  });

});