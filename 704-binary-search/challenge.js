// https://leetcode.com/problems/binary-search/
// Binary search
// Find the midpoint
// Compare the value to the midpoint value..
  // If greater than midpoint, search right half
  // if less than midpoint, search left half
// Repeat the process treating the right / left halves as sub arrays until the number is found or the size of the array is 0
// return index

const search = (nums, target) => {
  let low = 0
  let high = nums.length - 1
  let mid

  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2)
    if(nums[mid] < target) low = mid + 1
    else if(nums[mid] > target) high = mid - 1
    else return mid
  }
  return - 1
}

console.log(search([1,2,3,4,5,6,7,8,9], 4))