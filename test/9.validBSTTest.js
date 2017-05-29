var chai = require('chai');
var expect = chai.expect;
var BST = require('../BST.js');
var validBST = require('../9.validBST.js');


describe('validBST', function() {
  it ('should be a function', function() {
    expect(validBST).to.be.a('function');
  });

  it('should return false for balanced Invalid BST', function() {
    var balancedInvalidBST = new BST(50);
    balancedInvalidBST.addNode(30);
    balancedInvalidBST.left.right = new BST(60);
    balancedInvalidBST.addNode(80);
    balancedInvalidBST.addNode(20);
    balancedInvalidBST.addNode(70);
    balancedInvalidBST.addNode(90);

    expect(validBST(balancedInvalidBST)).to.equal(false);
  });

  it('should return true for balanced Valid BST', function() {
    var balancedValidBST = new BST(50);
    balancedValidBST.addNode(30);
    balancedValidBST.addNode(40);
    balancedValidBST.addNode(80);
    balancedValidBST.addNode(20);
    balancedValidBST.addNode(70);
    balancedValidBST.addNode(90);

    expect(validBST(balancedValidBST)).to.equal(true);
  });

  it('should return false for unbalanced invalid BST', function() {
    var unbalancedInvalidBST = new BST(50);
    unbalancedInvalidBST.addNode(3);
    unbalancedInvalidBST.addNode(60);
    unbalancedInvalidBST.addNode(54);
    unbalancedInvalidBST.addNode(66);
    unbalancedInvalidBST.right.right.left = new BST(12);

    expect(validBST(unbalancedInvalidBST)).to.equal(false);
  });

  it('should return true for balanced valid BST', function() {
    var unbalancedValidBST = new BST(50);
    unbalancedValidBST.addNode(3);
    unbalancedValidBST.addNode(60);
    unbalancedValidBST.addNode(54);
    unbalancedValidBST.addNode(66);
    unbalancedValidBST.addNode(73);

    expect(validBST(unbalancedValidBST)).to.equal(true);
  })

});