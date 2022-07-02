const bubbleSort = (array) => {
    let sorted = false
    while(!sorted) {
        sorted = true
        for(let i = 0; i < array.length; i++) {
            console.log('before swap a[i]', array[i])
            console.log('before swap a[i + 1]', array[i + 1])
            if(array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]]
                sorted = false
            }
        }
    }
    return array
}

let test = [8,5,2,9,5,6,3]
bubbleSort(test)
console.log(test)