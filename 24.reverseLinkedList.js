function reverseLinkedList(head) {
  if (head === null) {
    return null
  }

  var previous = null;
  var current = head;

  while (current.next) {
    var oldNext = current.next;
    current.next = previous;
    previous = current;
    current = oldNext;
  }

  current.next = previous;
  return current;


}

module.exports = reverseLinkedList;