var Node = function(val) {
  this.val = val;
  this.next = null;
}


var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addNodeToTail = function(val) {
  if (!this.head) {
    this.head = new Node(val);
    this.tail = this.head;
    return;
  }

  this.tail.next = new Node(val);
  this.tail = this.tail.next;

};

module.exports = LinkedList;

