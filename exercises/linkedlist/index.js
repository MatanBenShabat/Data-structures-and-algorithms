// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    // this.counter = 0; //thats an option
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
    // this.counter++ // thats an option
    // const node = new Node(data, this.head)  //the same as ^^
    // this.head = node;
  }
  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) return null;
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    this.head ? (this.head = this.head.next) : null;
  }
  removeLast() {
    if (!this.head) return;
    if (!this.head.next) return (this.head = null);
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
  insertLast(data) {
    let last = this.getLast();
    last ? (last.next = new Node(data)) : (this.head = new Node(data));
    // if(!this.head) this.head = new Node(data)
    // if(!this.head.next) this.head.next = new Node(data)
    // let previous = this.head;
    // let node= this.head.next
    // while(node.next){
    //   previous = node
    //   node = node.next
    // }
    // previous.next = new Node(data)
  }
  getAt(integer) {
    if (!this.head) return null;
    // if(this.size() < integer || integer < 0) return;
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === integer) return node;
      counter++;
      node = node.next;
    }

    return null;
  }
  // removeAt(integer) {
  //   if (!this.head) return null;
  //   // if (integer === 0) return this.head = this.head.next;
  //   let counter = 0;
  //   let node = this.head;
  //   let previous;
  //   while (node) {
  //     if (counter === integer) {
  //       if (this.head.next && !previous) {
  //         return (this.head = this.head.next);
  //       } else if (node.next && previous) {
  //         return (previous.next = node.next);
  //       } else {
  //         return (previous.next = null);
  //       }
  //     }
  //     counter++;
  //     previous = node;
  //     node = node.next;
  //   }

  //   return null;
  // }
  removeAt(integer) {
    if (!this.head) return null;
    if (integer === 0) return (this.head = this.head.next);
    const previous = this.getAt(integer - 1);
    if (!previous.next) return null;
    previous.next = previous.next.next;
  }
  insertAt(data, integer) {
    if (!this.head || integer === 0) return this.insertFirst(data);
    const previous = this.getAt(integer - 1) || this.getLast();
    const newNode = new Node(data, previous.next);
    previous.next = newNode;
  }
  forEach(fn) {
    let node = this.head;
    let index = 0;
    while (node) {
      fn(node, index);
      node = node.next;
      index++;
    }
  }
}

module.exports = { Node, LinkedList };
