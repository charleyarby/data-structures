const storage = {};
let count = 0;
class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    count += 1;
    this.storage[count] = value;
    return this.storage;
  }

  pop() {
    const temp = this.storage[count];
    delete this.storage[count];
    count -= 1;
    if (count < 0) {
      count = 0;
    }
    return temp;
  }

  size() {
    const array = Object.keys(this.storage);
    const { length } = array;
    return length;
  }
}
