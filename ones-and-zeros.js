const binaryArrayToNumber = arr => {
  console.log(arr)
  // your code'
  // since there's varying lengths
  // reverse the array
  // if that position in array is 1, add 2 to the inxdex power to my total
  return arr.reverse().reduce((a,b,i) => (b) ? a + 2 ** i : a + b)

};

console.log(binaryArrayToNumber([0,0,1,1]))