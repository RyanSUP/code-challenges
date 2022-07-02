const binarySearch = (array, target) => {
    let left = 0
    let right = array.length - 1

    while(left <= right) {
        let middle = Math.floor(left + right / 2)
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


let test = [1,2,3]
console.log(binarySearch(test, 1))

