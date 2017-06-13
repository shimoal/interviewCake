var chai = require('chai');
var expect = chai.expect;
var LinkedList = require('../LinkedList.js');
var reverseList = require('../24.reverseLinkedList.js');

describe('reverseList', function() {
  it ('should be a function', function() {
    expect(reverseList).to.be.a('function');
  });
});