function nodeDepths(root) {
  // Write your code here.

  // store a sum
  let sum = 0
  // base case:
  // Left and right node are both null

  // Actions:
  // recursive left passing current sum
  // then
  // recuresive right passing current sum

  // Need to back up to correct node - going over same node twice atm

  const depthSum = (node, currentSum) => {
    currentSum++
		console.log('currentsum',currentSum)
    if(node.left === null && node.right === null) {
      sum += currentSum
			console.log('sum', sum)
			console.log('backign up')
    }

    if(node.left) {
			console.log('going left', currentSum)
      depthSum(node.left, currentSum)
    }

    if(node.right) {
			console.log('going right', currentSum)
      depthSum(node.right, currentSum)
    }
  }
  
  depthSum(root, -1)
	console.log(sum)
	return sum


}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
