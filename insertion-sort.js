const insertionSort = (array) => {
    // Iterate over array
    // if array[i] < array[i + 1] then swap
        // while swapped value is smaller than previous value, swap
    for(let i = 0; i < array.length; i++) {
        if(array[i] > array[i+1]) {
            console.log('Swap ', i, i + 1)
            let temp = array[i+1]
            array[i+1] = array[i]
            array[i] = temp
            for(let j = i; j !== 0; j--) {
                if(array[j] < array[j-1]) {
                    console.log('Swap ', j, j - 1)
                    let temp = array[j-1]
                    array[j-1] = array[j]
                    array[j] = temp    
                }
            }
        }
    }
    return array
}

const test = [2,5,-3,1,6,4]

console.log(insertionSort(test))