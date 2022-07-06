// Different searching algos

// Binary search only works on sorted arrays
const binarySearch = (array, target) => {
    let left = 0
    let right = array.length - 1
    while(left <= right) {
        let middle = Math.trunc((left + right) / 2)
        if(array[middle] === target) {
            return middle
        }

        if(array[middle] > target) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }

    return -1
}

// Sorts an array in place
const bubbleSort = (array) => {
    let sorted = false
    while(!sorted) {
        sorted = true
        for(let i = 0; i < array.length; i++) {
            if(array[i] > array[i+1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]]
                sorted = false
            }
        }
    }
    return array
}

const insertionSort = (array) => {
    // Iterate over array
    // if array[i] < array[i + 1] then swap
        // while swapped value is smaller than previous value, swap
}

describe('Searching algo tests', ()=> {
    
    // binary search
    it('Binary search finds target', ()=> {
        let binarySortTestArray = [-4,1,2,3,5,6]
        expect(binarySearch(binarySortTestArray, -4)).toBe(0)
        expect(binarySearch(binarySortTestArray, 1)).toBe(1)
        expect(binarySearch(binarySortTestArray, 2)).toBe(2)
        expect(binarySearch(binarySortTestArray, 3)).toBe(3)
        expect(binarySearch(binarySortTestArray, 5)).toBe(4)
        expect(binarySearch(binarySortTestArray, 6)).toBe(5)
        expect(binarySearch(binarySortTestArray, 0)).toBe(-1)
    })
})

describe('Sorting algo tests', ()=> {
    it('Sorts', ()=> {
        let bubbleTest = [-4,2,4,1,-6]
        expect(bubbleSort(bubbleTest)).toEqual([-6,-4,1,2,4])
    })
})