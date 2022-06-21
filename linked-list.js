const createNode = (value, next) => {
    return {
        value,
        next
    }
}

const createListFromValueArray = (valueArray) => {
    if (valueArray.length === 0) {
        return null
    }
    let node
    for(let i = 0; i < valueArray.length; i++) {
        let val, rest
        [val, ...rest] = valueArray
        const nextNode = createListFromValueArray(rest)
        node = createNode(val, nextNode)
    }
    return node
}

const printValuesFromList = (head) => {
    if(head === null) {
        console.log('Empty list')
    }

    let currentNode = head
    while(currentNode) {
        console.log(currentNode.value)
        currentNode = currentNode.next
    }
}


const vals = [1,2,3,4,5,6,7,8,9,10]
const numberList = createListFromValueArray(vals)
printValuesFromList(numberList)