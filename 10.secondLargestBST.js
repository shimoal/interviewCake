// Write a function to find the 2nd largest element in a binary search tree↴ .

// We can do better than O(n) time and O(h) space.
// We can do this in one walk from top to bottom of our BST. This means O(h) time (again, that's
// O(lg n) if the tree is balanced, O(n) otherwise).
// A clean recursive implementation will take O(h) space in the call stack↴ , but we can bring our
// algorithm down to O(1) space overall.

function getSecondLargest(tree) {
  if (!tree.right) {
    return tree.left.val;
  }

  if (tree.right && !tree.right.right && !tree.right.left){
    return tree.val;
  }

  return getSecondLargest(tree.right);
}

module.exports = getSecondLargest;