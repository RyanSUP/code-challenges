function findThreeLargestNumbers(array) {
    // What do I know?
    // array of at least 3 ints
    // I can't sort the input array
    // must return 3 largest ints sorted

    if(array.length === 3) {
        return [...array].sort((a,b) => a - b)
    }

    // I can't sort, so I'll have to traverse linearly

    // traverse array 3 times
    // each time, find the largest value's index
    // each time after, ommit that index in search

    let arrayOfLargestValueIndex = []

    const helper = () => {
        let indexOfLargest = null
        for(let i = 0; i < array.length; i++) {
            if(indexOfLargest === null) {
                if(!arrayOfLargestValueIndex.includes(i)) {
                    indexOfLargest = i
                }
            } else if (array[i] >= array[indexOfLargest]) {
                if(!arrayOfLargestValueIndex.includes(i)) {
                    indexOfLargest = i
                }
            }
        }
        arrayOfLargestValueIndex.push(indexOfLargest)
    }
    helper()
    helper()
    helper()
    let valueArray = arrayOfLargestValueIndex.map(v => array[v])
    return valueArray.sort((a,b) => a - b)
}

// let test = [2,1,3,-4]
// console.log(findThreeLargestNumbers(test))


// Redo
const getThreeLargest = (array) => {

    // What do I know?
    // I need to end up with an array of 3 sorted values
    // That means [0] < [1] < [2]

    let largestNums = [
        null,
        null,
        null,
    ]

    for(let element of array) {
        updateLargest(largestNums, element)
    }

    function updateLargest(largestNums, element) {
        if(largestNums[2] === null || largestNums[2] < element) {
            shiftAndUpdate(largestNums, element, 2)
        } 
        else if(largestNums[1] === null || largestNums[1] < element) {
            shiftAndUpdate(largestNums, element, 1)
        }
        else if(largestNums[0] === null || largestNums[0] < element) {
            shiftAndUpdate(largestNums, element, 0)
        }
    }

    function shiftAndUpdate(largestNums, element, index) {
        for(let i = 0; i < index + 1; i++) {
            if(i === index) {
                largestNums[i] = element
            } else {
                largestNums[i] = largestNums[i + 1]
            }
        }
    }

    return largestNums

}
let test = [2,1,3,-4]
console.log(getThreeLargest(test))