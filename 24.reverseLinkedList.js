function reverseLinkedList(head) {
  
  var previous = null;
  var current = head;

  while (current) {
    var oldNext = current.next;
    current.next = previous;
    previous = current;
    current = oldNext;
  }

  return previous;


}

module.exports = reverseLinkedList;