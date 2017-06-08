var chai = require('chai');
var expect = chai.expect;
var Queue = require('../19.stackWithTwoQs.js');

describe('19.stackWithTwoQs', function() {
  it('should be a function', function() {
    expect(Queue).to.be.a('function');
  });

  it('should enqueue values', function() {
    var q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.size).to.equal(3);
  });

  it('should dequeue values in order', function(){
    var q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.dequeue()).to.equal(1);
  });
});