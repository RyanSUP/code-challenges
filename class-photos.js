function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
	// 2 rows
	// all students in a row must have the same color shirt
	// all students in the back row must be taller than students
	// in the front row.
  // each class will have at least 2 students (1 in each array)
	
	// Concept
	// Sort both arrays
	// compare sizes of each array starting at 0
	// 1 3 4 5 8
	// 2 3 5 6 9
	// if 1 array is consistently less or == to the other array,
		// return true
	// else
		// return false
	
	// implementation
  // questions: 
  // Can I mutate input arrays?

  redShirtHeights.sort((a,b) => a - b)
  blueShirtHeights.sort((a,b) => a - b)
  
  let backRow = null

  for(let i = 0; i < redShirtHeights.length; i++) {
    if(redShirtHeights[i] === blueShirtHeights[i]) return false
    if(redShirtHeights[i] > blueShirtHeights[i]) {
      if(backRow === null) backRow = redShirtHeights
      else if(backRow !== redShirtHeights) {
        return false
      }
    } else if (redShirtHeights[i] < blueShirtHeights[i]) {
      if(backRow === null) backRow = blueShirtHeights
      else if(backRow !== blueShirtHeights) {
        return false
      }
    }
  }
  // time O(nlogn)
  // space O(1)
  return true;

  // redShirtHeights.sort((a,b) => a - b)
  // blueShirtHeights.sort((a,b) => a - b)

  // return (redShirtHeights.every((num, idx) => num > blueShirtHeights[idx]) ||
  //         blueShirtHeights.every((num, idx) => num > redShirtHeights[idx]))
}

console.log(classPhotos([1,2,3], [1,2,3]))

