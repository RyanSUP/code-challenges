// https://leetcode.com/problems/two-sum/

const twoSum = (nums, target) => {
  const map = {} // val:index
  for(let i = 0; i < nums.length; i++) {
    // subtract number from target
    let val = target - nums[i]
    // check if val is in the hash map
    console.log('looking for ', val, map[val])
    if(map[val] !== undefined) return [i, map[val]]
    else map[nums[i]] = i
  }
}


/* 

Example 1

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/