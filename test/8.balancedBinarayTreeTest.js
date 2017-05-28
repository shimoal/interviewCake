var chai = require('chai');
var expect = chai.expect;
var balancedBinary = require('../8.balancedBinaryTree.js');

var Tree = function(val){
  this.val = val;
  this.right = null;
  this.left = null
}

Tree.prototype.addNode = function(val) {
  var tree = new Tree(val);
  if (val < this.val) {
    if (!this.left) {
      this.left = new Tree(val);
      return;
    } else {
      this.left.addNode(val);
    }

  }

  if(val > this.val) {
    if (!this.right) {
      this.right = new Tree(val);
      return;
    } else {
      this.right.addNode(val);
    }
  }
}

var myTree = new Tree(30);
myTree.addNode(15);
myTree.addNode(50);
myTree.addNode(8);
myTree.addNode(18);
myTree.addNode(6);
myTree.addNode(10);

describe('8.balancedBinaryTree', function() {
  it('shoulde be a function', function() {
    expect(balancedBinary).to.be.a('function');
  });

  xit('should return false for an unbalanced tree', function() {
    expect(balancedBinary(myTree)).to.equal(false);
  })

  it('should return true for a balanced tree', function() {
    var balancedTree = new Tree(30);
    balancedTree.addNode(15);
    balancedTree.addNode(50);
    balancedTree.addNode(7);
    balancedTree.addNode(20);
    balancedTree.addNode(45);
    balancedTree.addNode(55);
    expect(balancedBinary(balancedTree)).to.equal(true);
  })
});