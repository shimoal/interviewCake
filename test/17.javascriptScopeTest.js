var chai = require('chai');
var expect = chai.expect;
var logit = require('../17.javascriptScope.js');

describe('17.javascriptScope', function() {
  it ('should be a funtion', function() {
    expect(logit).to.be.a('function');
  })
  it('should log text', function() {
    expect(logit()).to.equal(undefined);
  });
});