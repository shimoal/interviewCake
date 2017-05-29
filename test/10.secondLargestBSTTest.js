var chai = require('chai');
var expect = chai.expect;
var BST = require('../BST.js');
var getSecond = require('../10.secondLargestBST.js');


describe('10 getSecond', function() {
  it ('should be a function', function() {
    expect(getSecond).to.be.a('function');
  });


  it('should return true for balanced Valid BST', function() {
    var balancedValidBST = new BST(50);
    balancedValidBST.addNode(30);
    balancedValidBST.addNode(40);
    balancedValidBST.addNode(80);
    balancedValidBST.addNode(20);
    balancedValidBST.addNode(70);
    balancedValidBST.addNode(90);

    expect(getSecond(balancedValidBST)).to.equal(80);
  });

  it('should return true for unbalanced valid BST', function() {
    var unbalancedValidBST = new BST(50);
    unbalancedValidBST.addNode(3);
    unbalancedValidBST.addNode(60);
    unbalancedValidBST.addNode(54);
    unbalancedValidBST.addNode(66);
    unbalancedValidBST.addNode(73);

    expect(getSecond(unbalancedValidBST)).to.equal(66);
  })

});