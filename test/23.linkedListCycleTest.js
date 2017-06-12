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
  });

  it('should return true for LinkedList with a cycle in the middle', function() {
    var list = new LinkedList();
    var start = list.addNodeToTail(1);
    var cyclePoint = list.addNodeToTail(2);
    list.addNodeToTail(3);
    list.addNodeToTail(4);
    var cycle = list.addNodeToTail(5);
    cycle.next = cyclePoint;
    expect(hasCycle(start)).to.equal(true);
  });

  it('should return true for LinkedList with a cycle going back to the head', function() {
    var list = new LinkedList();
    var start = list.addNodeToTail(1);
    list.addNodeToTail(2);
    list.addNodeToTail(3);
    list.addNodeToTail(4);
    var cycle = list.addNodeToTail(5);
    cycle.next = start;
    expect(hasCycle(start)).to.equal(true);    
  });
});