var chai = require('chai');
var expect = chai.expect;
var MaxStack = require('../20.largestStack.js');

describe('20.largestStack', function() {
  it('should be a function', function() {
    expect(MaxStack).to.be.a('function');
  });

  it('should add items to the stack', function() {
    var max = new MaxStack();
    max.append(1);
    expect(max.items.length).to.equal(1);
    max.append(2);
    max.append(3);
    max.append(4);
    expect(max.items.length).to.equal(4);
  });

  it('should remove items', function() {
    var max = new MaxStack();
    max.append(10);
    max.append(20);
    max.append(50);
    expect(max.pop()).to.equal(50);
  });

  it('should peek at the top of the stack', function() {
    var max = new MaxStack();
    max.append(10);
    max.append(9);
    max.append(8);
    max.append(7);
    max.append(6);
    max.append(5);
    expect(max.peek()).to.equal(5);
    expect(max.items.length).to.equal(6);
  });

  it('should get the max of the stack without removing items', function() {
    var max = new MaxStack();
    max.append(10);
    max.append(40);
    max.append(3);
    expect(max.getMax()).to.equal(40);
    expect(max.items.length).to.equal(3);
  })
});