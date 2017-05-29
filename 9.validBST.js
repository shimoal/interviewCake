// Write a function to check that a binary tree↴ is a
// valid binary search tree↴ .

// We can do this in O(n) time and O(n) additional space, where n is the number of nodes in our tree. Our additional space is O(lg n) if our tree is balanced.


function validBST(tree, lowerBound, upperBound) {

  lowerBound = lowerBound || -Infinity;
  upperBound = upperBound || Infinity;

    if (!tree) {
      return true;
    }

    if (tree.val > upperBound || tree.val < lowerBound) {
      return false;
    }
    
    return validBST(tree.left, lowerBound, tree.val) && validBST(tree.right, tree.val, upperBound);

}

module.exports = validBST;