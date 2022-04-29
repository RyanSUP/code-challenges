function findClosestValueInBst(tree, target) {
  // This can be a recursive problem based on what I know about the tree:
  // The values to the left of CV will always be < CV
  // The values to the right of CV will always be >= CV
  
  // Store the closest value
  let node = tree
  let closest = node.value

  while (true) {
    // console.log('Current value', node.value)
    // console.log('current closest', closest)
    if(node.value === target) return node.value
    closest = (Math.abs(target - node.value) < Math.abs(target - closest))
    ? node.value
    : closest
    if(node.value < target) {
      // console.log('go right')
      if(node.right) {
        node = node.right
      } else {
        return closest
      }
    } else {
      // console.log('go left')
      if(node.left) {
        node = node.left
      } else {
        return closest
      }
    }
  }
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let test = new BST(10)
test.right = new BST(15)
test.right.left = new BST(13)
test.left = new BST(5)
console.log(findClosestValueInBst(test, 12))

// Passed all test cases on site.