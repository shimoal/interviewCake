var chai = require('chai');
var expect = chai.expect;
var sortScores = require('../32.sortScores');

describe('32.sortScores', function() {
  it('should sort scores', function() {
    expect(sortScores([3, 7, 10, 30, 23, 1, 0, 1, 2], 50)).to.deep.equal([0, 1, 1, 2, 3, 7, 10, 23, 30]);
  });

  it('should sort scores for a high max value', function() {
    expect(sortScores([500, 2, 0, 732, 1, 68, 34], 1000)).to.deep.equal([0, 1, 2, 34, 68, 500, 732]);
  })
})