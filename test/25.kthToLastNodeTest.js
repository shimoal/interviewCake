var chai = require('chai');
var expect = chai.expect;
var findKthToLast = require('../25.kthToLastNode.js');
var LinkedList = require('../LinkedList.js');

describe('findKthToLast', function() {
  var list = new LinkedList();
  var start = list.addNodeToTail(1);
  list.addNodeToTail(2);
  list.addNodeToTail(3);
  list.addNodeToTail(4);
  list.addNodeToTail(5);
  var thirdToLast = findKthToLast(3, start);

  it('should return a node', function() {
    expect(thirdToLast.val).to.equal(3);
  })
});