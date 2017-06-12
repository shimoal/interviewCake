var chai = require('chai');
var expect = chai.expect;
var hasCycle = require('../23.linkedListCycle.js');
var LinkedList = require('../LinkedList.js');

describe('23.hasCycle', function() {
  it('should be a function', function() {
    expect(hasCycle).to.be.a('function');
  });

  it('should return false for LinkedList without a cycle', function() {
    var list = new LinkedList();
    var start = list.addNodeToTail(1);
    list.addNodeToTail(2);
    list.addNodeToTail(3);
    list.addNodeToTail(4);
    list.addNodeToTail(5);
    expect(hasCycle(start)).to.equal(false);
  })
});