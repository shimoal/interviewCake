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

});