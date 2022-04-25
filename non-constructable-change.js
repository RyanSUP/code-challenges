function nonConstructibleChange(coins) {
  // Sort the array
  coins.sort((a,b) => a - b)
  console.log(coins)
  // Set the min number of change I can make
  let min = 0
  // loop through every number
  for(let num of coins) {
    console.log('min', min)
    if(num > min + 1) {
      console.log('returning ', min + 1)
      return min + 1
    }
    else {
      min += num
      console.log('new min: ', min)
    }
  }
  // if number is greater than min + 1, return that number.
  // WHy? I know I could never have enough change to create that value.
  // if number is less than or equal to min + 1, add coin to min
  // Write your code here.
  return min + 1;
}

console.log(nonConstructibleChange([1,1,2,3,5,7,22]))