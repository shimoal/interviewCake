var chai = require('chai');
var expect = chai.expect;
var hasCycle = require('../23.linkedListCycle.js');
var LinkedList = require('../LinkedList.js');

describe('23.hasCycle', function() {
  it('should be a function', function() {
    expect(hasCycle).to.be.a('function');
  });
});