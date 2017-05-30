var chai = require('chai');
var expect = chai.expect;
var inflightEntertainment = require('../14.inflightEntertainment.js');

describe('14. inflightEntertainment', function() {
  it('should be a function', function() {
    expect(inflightEntertainment).to.be.a('function');
  });

  it('should return false for movies that don\'t fill the flight time', function() {
    var movies = [13, 24, 68, 9];
    expect(inflightEntertainment(10, movies)).to.equal(false);
  });

  it('should return true fro movies that fill the time exactly', function() {
    var movies = [2, 4, 10];
    expect(inflightEntertainment(6, movies)).to.equal(true);
  });
});