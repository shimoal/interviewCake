function findKthToLast(k, head) {
  var length = findLengthOfList(head);
  var stepsToTake = length - k;

  var counter = 0;
  var current = head;

  while (counter < stepsToTake) {
    current = current.next;
    counter++;
  }

  return current;

}

function findLengthOfList(head) {
  var length = 0;
  var current = head;

  while (current) {
    length++;
    current = current.next;
  }
  return length;
}

module.exports = findKthToLast;