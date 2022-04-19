const sortedSquares = function(nums) {
  // squaredNums = []
  // for each num
      // square num
      // insert 
  let sortedSquares = [...nums]
  let low = 0
  let high = nums.length - 1
  for(let p = nums.length - 1; p >= 0; p--) {
    // find if low or high end is higher
    let lowVal = Math.abs(nums[low])
    let highVal = Math.abs(nums[high])
    if(lowVal > highVal) {
      sortedSquares[p] = lowVal * lowVal
      low++
    } else {
      sortedSquares[p] = highVal * highVal
      high--
    }
  }
  return sortedSquares
}


console.log(sortedSquares([-4,-1,0,3,10]))

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].