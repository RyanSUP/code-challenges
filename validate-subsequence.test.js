
// Takes 2 non empty arrays
// returns true if the sequence is in the array
  // sequence must be in the same order, so no sorting

// Can loop through array once
// at each index, check if it is the current number in the sequence
// if it is, set check to be next number in sequence
// Time - O(n) - Space O(1)

// Can use a binary search. If index is found I can check to see if it is greater than the last index in the sequence. 
// Time - Checking the entire sequence O(n) - searching O(log(n)) - total O(nlog(n))
// space - O(1) no new arrays created

// Another option is a hashmap
// hash the array as value:index
// for every value in the sequence, check if it is in the hash
// if the value is in the hash, compare indexes
// if index is greater than current sequence, check next
// else the sequence does not exist.
// Time Complexity O(n)
// space complexity O(n)
// However this solution does not handle duplicate numbers.

const isValidSubsequence = (array, sequence) => {
  let currentSequenceIndex = 0
  // loop through for all array elements
  for(let element of array) {
    if(element === sequence[currentSequenceIndex]) currentSequenceIndex++
  }
  return (currentSequenceIndex === sequence.length)
}

console.log(isValidSubsequence([2,1,3], [2, 3]))