
var storage = {} ;
var count=0
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  count=0;
  storage={}
  return someInstance
};

queueMethods = {
  enqueue  : function (value) {
    storage[count] = value
    count++
    return storage
  },
  dequeue : function () {
    var array = Object.keys(storage)
    var currentElement = array[0]
    var temp = storage[currentElement]
    delete storage[currentElement]
    return temp
  },
  size : function (){

    var array = Object.keys(storage)
    return array.length
  }
};