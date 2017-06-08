// You've implemented a Stack class, but you want to be able to access the largest element in a stack.

//Current Stack class:
// class Stack:
// # intialize an empty list def __init__(self):
// self.items = []
// # push a new item to the last index def push(self, item):
// self.items.append(item)
// # remove the last item def pop(self):
// # if the stack is empty, return None
// # (it would also be reasonable to throw an exception) if not self.items: return None
// return self.items.pop()
// # see what the last item is def peek(self):
// # if the stack is empty, return None if not self.items: return None
// return self.items[len(self.items)-1]
// Use your Stack class to implement a new class MaxStack with a function get_max() that returns the largest element in the stack. get_max() should not remove the item.

var Stack = function() {
  this.items = [];
}

Stack.prototype.constructor = Stack;

Stack.prototype.append = function(item) {
  this.items.push(item);
}

Stack.prototype.pop = function() {
  if (this.items.length > 0) {
    return this.items.pop();
  }
  return 'None';
}

Stack.prototype.peek = function(item) {
  if (this.items.length > 0) {
    return this.items[this.items.length - 1];
  } 
  return 'None';
}


var MaxStack = function() {
  this.items = [];
  this.maxStack = [];
  this.max = null
}

MaxStack.prototype.constructor = MaxStack;

MaxStack.prototype.append = function(item) {
  if (!this.max || this.max < item) {
    this.max = item;
  }

  this.items.push(item);
  this.maxStack.push(this.max);
}

MaxStack.prototype.pop = function() {
  if (this.items.length === 0) {
    return 'None';
  }
  this.maxStack.pop();
  return this.items.pop();
}

MaxStack.prototype.getMax = function() {
  if (this.maxStack.length > 0) {
    return this.maxStack[this.maxStack.length - 1];    
  }
  return 'None';

}

MaxStack.prototype.peek = function() {
  if (this.items.length > 0) {
    return this.items[this.items.length - 1];
  }
  return 'None';
}

module.exports = MaxStack;