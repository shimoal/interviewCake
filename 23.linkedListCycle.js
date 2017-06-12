function hasCycle(headOfList) {
  var fastRunner = headOfList; 
  var slowRunner = headOfList; 

  while (fastRunner.next !== null && fastRunner.next.next !== null) {

    fastRunner = fastRunner.next.next;
    slowRunner = slowRunner.next;

    if (fastRunner === slowRunner) {
      return true;
    }
  }

  return false;
}

module.exports = hasCycle;