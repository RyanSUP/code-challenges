function findClosestValueInBst(tree, target) {
  // This can be a recursive problem based on what I know about the tree:
  // The values to the left of CV will always be < CV
  // The values to the right of CV will always be >= CV

  // Actions:
  // Get distance of CV, LV, RV to target
  // Base case: CV is closest to the Target
  // If Left is closer
    // return Recursion with left node
  // If right is closer || right node == CV
    // return recursion with right node
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}