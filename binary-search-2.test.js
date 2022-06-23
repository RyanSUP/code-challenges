function binarySearch(array, target) {
    // Write your code here.
    let left = 0
    let right = array.length - 1
    while(left <= right) {
        // Middle is target
        // Target is less than middle
        // Target is greater than middle
        let middle = Math.trunc((right + left) / 2)
        if(array[middle] === target) {
            return middle
        }

        if(target < array[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }

    }
    return -1

}
// 0 1 2 3 4
let test = [1,2,3,4,5]
  
it('returns 0', ()=> {
    expect(binarySearch(test, 1)).toBe(0)
})

it('returns 1', ()=> {
    expect(binarySearch(test, 2)).toBe(1)
})

it('returns 2', ()=> {
    expect(binarySearch(test, 3)).toBe(2)
})

it('returns 3', ()=> {
    expect(binarySearch(test, 4)).toBe(3)
})

it('returns 4', ()=> {
    expect(binarySearch(test, 5)).toBe(4)
})

it('returns -1', ()=> {
    expect(binarySearch(test, 6)).toBe(-1)
})
  