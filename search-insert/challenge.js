// https://leetcode.com/problems/search-insert-position/

const searchInsert = (numbers, target) => {
  let low = 0
  let high = numbers.length - 1
  let mid = 0

  while(low <= high) {
    mid = low + (Math.floor(high - low /2))
    if(numbers[mid] > target) high = mid - 1
    else if (numbers[mid] < target) low = mid + 1
    else return mid
  }
  return low
}

console.log(searchInsert([1,2,4,5], 3))