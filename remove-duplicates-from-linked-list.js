// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
  
function removeDuplicatesFromLinkedList(linkedList) {
    // What do I know?
    // The linked list is in sorted order
    // I know the int value at each node
    // I can't simply move on to the next node each time.

    // The Plan
    // Start at the head stored as currentNode
    // Pass currentNode to a function
    // (currentNode) =>
    // function checks current value and next value
        // return true if the same
        // false if different
    // if function returns true
        // currentNode.next = currentNode.next.next
    // else currentNode = currentNode.next

    let currentNode = linkedList

    while(currentNode) {
        let nextNode = currentNode.next
        if(nextNode && currentNode.value === nextNode.value) {
            currentNode.next = nextNode.next
        } else {
            currentNode = nextNode
        }

    }

    return linkedList;
}

const a = new LinkedList(1)
const b = new LinkedList(1)
const c = new LinkedList(1)

a.next = b
b.next = c
c.next = null

removeDuplicatesFromLinkedList(a)

console.log(a)
