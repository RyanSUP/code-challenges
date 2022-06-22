function productSum(array) {
    // Write your code here.
    // Depth 1 []
    // Depth 2 [[]]
    // Depth 3 [[[]]]
    // .. etc

    // What do I know?
    // sums are multiplied by their depth
    
    // The plan
    // I'm thinking recursive ...
    // Save depth (starting at 1)
    // For each value in array, add to total
    // if a value is an array, call the sum helper function and pass it the depth
    // recursivly sum, then multiply by depth
    // return sum from helper

    const helperSum = (array, depth) => {
        let total = 0;
        for(let v of array) {
            console.log(v)
            if(typeof(v) === 'object') {
                total += helperSum(v, depth + 1) * (depth + 1)
                console.log('total after helper', total)
            } else {
                total += v
                console.log('total at depth', depth, total)
            }
        }
        return total
    }

    return helperSum(array, 1)
}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]))