const selectionSort = (array) => {
    // start at 0
    // Find smallest element in array
    // swap smallest element with current index
    // repeat until array has been iterated over.

    for(let i = 0; i < array.length; i++) {
        console.log('Iteration: ', i)
        let smallestValueIndex = i;
        let smallerValueFound = false;
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[smallestValueIndex]) {
                smallestValueIndex = j;
                smallerValueFound = true;
                console.log(array[j], " is smaller than ", array[smallestValueIndex]);
            }
        }
        if(smallerValueFound) {
            // swap values
            console.log('Found smallest value');
            [array[i], array[smallestValueIndex]] = [array[smallestValueIndex], array[i]];
            console.log('Updated array: ', array);
        }
    }
}

const test = [2,3,5,1,-4]
selectionSort(test)