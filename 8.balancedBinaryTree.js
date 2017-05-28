function balancedBinaryTree(root) {


  //initialize min, max variables to 0
  var max = 0;
  var min = 0;
  var stack = [];
  var current = root;
  stack.push([current, 1]);
  var depth = 1;

  //create stack as empty array

  //set current to root
  //push current into stack

  //while stack is not empty
  while (stack.length > 0) {
      current = stack.pop()[0];
    //while  current has left

        //if current has no children, is a root
    if (!current.left && !current.right) {
        //if larger than max, man is depth
        if (!max || current[1] > max) {
          max = current[1];
        }
        //if smaller than min, min is depth
        if (!min || current[1] < min) {
          min = current[1];
        }
        if (max - min > 1) {
          return false;
        }
    }


     if (current.left) {
        stack.push([current.left, current[1] + 1);
      }

    if (current.right) {
      stack.push([current.right], current[1] + 1);
    }
  }

  return true;
    
}

module.exports = balancedBinaryTree;