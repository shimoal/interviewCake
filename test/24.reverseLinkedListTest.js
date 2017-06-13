var chai = require('chai');
var expect = chai.expect;
var LinkedList = require('../LinkedList.js');
var reverseList = require('../24.reverseLinkedList.js');

describe('reverseList', function() {
  it ('should be a function', function() {
    expect(reverseList).to.be.a('function');
  });

  it('should return the previous tail as the new head', function() {
    var list = new LinkedList();
    var a = list.addNodeToTail('a');
    var b = list.addNodeToTail('b');
    var c = list.addNodeToTail('c');
    var d = list.addNodeToTail('d');
    var reverseHead = reverseList(a);
    expect(reverseHead).to.equal(d);
  });

  it('should properly link to the nodes in reverse order', function() {
    var list = new LinkedList();
    var a = list.addNodeToTail('a');
    var b = list.addNodeToTail('b');
    var c = list.addNodeToTail('c');
    var d = list.addNodeToTail('d');
    var reverseHead = reverseList(a);
    expect(reverseHead.next).to.equal(c);
    expect(reverseHead.next.next).to.equal(b);
    expect(reverseHead.next.next.next).to.equal(a);
  });

  it('should work on an empty list', function() {
    var list = new LinkedList();
    expect(reverseList(list.head)).to.equal(null);
  })
});