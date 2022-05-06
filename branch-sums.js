// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  console.log(root)
  const branchSumsHelper = (branch, value) => {
    // Actions:
    // get the sum of values.
    console.log('value', value)
    console.log('branch.value', branch.value)
    let sum = value + branch.value
    console.log('sum', sum)
    
    // Base:
    // left and right nodes are null
    // push sum to array
    // return
    if(branch.left === null && branch.right === null) {
      console.log('No branches availble, pushing ', sum)
      sums.push(sum)
      return
    }
    
    // Recursive steps:
    // if left
      // (branchSumsHelper(left, sum))
    // if right
      // (branchSumsHelper(right, sum))
    if(branch.left) {
      console.log('Left branch available', sum)
      branchSumsHelper(branch.left, sum)
    }
    if(branch.right) {
      console.log('Right branch available')
      branchSumsHelper(branch.right, sum)
    }
  }

  const sums = [];
  branchSumsHelper(root, 0);
  return sums;
}

const testTree = new BinaryTree(1)
testTree.left = new BinaryTree(2)
testTree.left.right = new BinaryTree(5)
testTree.left.right.left = new BinaryTree(10)
testTree.left.left = new BinaryTree(4)
testTree.left.left.left = new BinaryTree(8)
testTree.left.left.right = new BinaryTree(9)
testTree.right = new BinaryTree(3)
testTree.right.left = new BinaryTree(6)
testTree.right.right = new BinaryTree(7)

branchSums(testTree)
