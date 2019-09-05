
class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  enqueue(value) {
    this.storage[count] = value;
    count += 11;
    return this.storage;
  }

  dequeue() {
    const array = Object.keys(this.storage);
    const currentElement = array[0];
    const temp = this.storage[currentElement];
    delete this.storage[currentElement];
    return temp;
  }

  size() {
    const array = Object.keys(this.storage);
    return array.length;
  }
}
