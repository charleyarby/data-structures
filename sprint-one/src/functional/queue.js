var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count=0;
  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
    return storage;
  };

  someInstance.dequeue = function() {
    var array = Object.keys(storage)
    var currentElement = array[0]
   // console.log(currentElement)
    var temp = storage[currentElement]
    delete storage[currentElement]

    return temp;

  };

  someInstance.size = function() {
    var array = Object.keys(storage)
    var length = array.length
    return length
  };

  return someInstance;
};
