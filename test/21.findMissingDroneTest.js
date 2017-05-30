var chai = require('chai');
var expect = chai.expect;
var findMissingDrone = require('../21.findMissingDrone.js');

describe('21.findMissingDrone', function() {
  it('should return the sole unqiue id', function() {
    expect(findMissingDrone([23, 65, 14, 8, 23, 8, 65])).to.equal(14);
  })
});