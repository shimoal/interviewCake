var Stack = function() {
  this.storage = {};
  this.size = 0;
}

Stack.prototype.push = function(val) {
  this.size++;
  this.storage[this.size] = val;
}

Stack.prototype.pop = function() {
  var popped = this.storage[this.size];
  delete this.storage[this.size];
  this.size--;
  return popped;
}

var Queue = function() {
  this.inBox = new Stack();
  this.outBox = new Stack();
  this.size = 0;
}

Queue.prototype.enqueue = function(val) {
  this.inBox.push(val);
  this.size++;
}

Queue.prototype.dequeue = function() {
  if (this.outBox.size === 0) {
    while (this.inBox.size > 0) {
      this.outBox.push(this.inBox.pop());
    }
  }

  this.size--;
  return this.outBox.pop();
}

module.exports = Queue;