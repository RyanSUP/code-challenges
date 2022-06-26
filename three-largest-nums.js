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

let test = [2,1,3,-4]
console.log(findThreeLargestNumbers(test))