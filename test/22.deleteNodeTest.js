var chai = require('chai');
var expect = chai.expect;
var deleteNode = require('../22.deleteNode.js');
var LinkedList = require('../LinkedList.js');

describe('LinkedList', function() {
  var list = new LinkedList();
  it('should start with a tail and head set to null', function() {
    expect(list.head).to.equal(null);
    expect(list.tail).to.equal(null);
  });

  it('should be able to add nodes to the tail', function() {
    list.addNodeToTail(1);
    expect(list.head.val).to.equal(1);
    list.addNodeToTail(2);
    expect(list.tail.val).to.equal(2);
    expect(list.tail.next).to.equal(null);
  });
});


describe('deleteNode', function() {
  it('should be a function', function() {
    expect(deleteNode).to.be.a('function');
  });

  it('should remove a node from the center of a linked list', function() {
    

  });
});