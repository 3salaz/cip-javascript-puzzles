function sum(a, b) {
  return a + b;
}
module.exports = sum;
// Implement an algorithem to find the kth to last element of a singly listed list.

// each node needs to store data and point to another node

// function Node(data) {
//     this.data = data;
//     this.next = null;
// }

// function SinglyList() {
//     this.__length = 0;
//     this.head = null;
// }

// // METHODS FOR SINGLY-LIST

// // add(value)

// SinglyList.prototype.add = (value) => {
//     let node = new Node(value),
//         currentNode = this.head

//     // an empty list
//     if(!currentNode){
//         this.head = node;
//         this._length++;

//         return node;
//     }

//     // a node-empty list
//     while (currentNode.next) {
//         currentNode = currentNode.next;
//     }
//     currentNode.next = node

//     this._length++;

//     return node
// }

// SinglyList.prototype.searchNodeAt = (position) =>{
//     let currentNode = this.head,
//         length = this._length,
//         count = 1,
//         message = {failure: 'Failure: non-existent node in this list.'};

//     // an invalid position
//     if (length === 0 || position < 1 || position > length) {
//         throw new Error(message.failure);
//     }

//     // a valid position
//     while (count < position) {
//         currentNode = currentNode.next;
//         count++;
//     }

//     return currentNode;
// };

// SinglyList.prototype.remove = function(position) {
//     var currentNode = this.head,
//         length = this._length,
//         count = 0,
//         message = {failure: 'Failure: non-existent node in this list.'},
//         beforeNodeToDelete = null,
//         nodeToDelete = null,
//         deletedNode = null;

//     // An invalid position
//     if (position < 0 || position > length) {
//         throw new Error(message.failure);
//     }

//     // The first node is removed
//     if (position === 1) {
//         this.head = currentNode.next;
//         deletedNode = currentNode;
//         currentNode = null;
//         this._length--;

//         return deletedNode;
//     }

//     // Any other node is removed
//     while (count < position) {
//         beforeNodeToDelete = currentNode;
//         nodeToDelete = currentNode.next;
//         count++;
//     }

//     beforeNodeToDelete.next = nodeToDelete.next;
//     deletedNode = nodeToDelete;
//     nodeToDelete = null;
//     this._length--;

//     return deletedNode;
// };

// linkList
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// used

const n1 = new Node(100);

const ll = new LinkedList();
ll.insertFirst(1);
ll.insertFirst(2);
ll.insertFirst(3);

// console.log(ll)
ll.printList();
console.log(ll);
