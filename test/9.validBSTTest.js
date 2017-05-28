var chai = require('chai');
var expect = chai.expect;
var BST = require('../BST.js');
var validBST = require('../9.validBST.js');

describe('validBST', function() {
  it ('should be a function', function() {
    expect(validBST).to.be.a('function');
  });
});