//1, 2, 3, 4, 5

function hasCycle(headOfList) {
  var fastRunner = headOfList; 
  var slowRunner = headOfList; 

  var cycleFound = false; 

  while (!cycleFound ) {

    if (fastRunner.next === null || fastRunner.next.next === null ) {
      return false;
    }

    
    fastRunner = fastRunner.next.next;
    slowRunner = slowRunner.next;

    if (fastRunner === slowRunner) {
      cycleFound = true;
    }

  }

  return cycleFound;
}

module.exports = hasCycle;