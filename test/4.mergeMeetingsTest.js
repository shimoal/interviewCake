var chai = require('chai');
var expect = chai.expect;
var merge = require('../4.mergeMeetings.js');

describe('4.mergeMeetings', function() {

  it('should be a function', function() {
    expect(merge).to.be.a('function');
  });

  it('should merge meetings in order', function() {
    expect(merge([[0,1], [3,5], [4,8], [10,12], [9, 10]])).to.deep.equal([[0,1], [3,8], [9,12]]);
  })

});