var storage = {} ;
var count=0
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  count=0;
  return someInstance
};

var stackMethods = {
  push : function(value) {
    count++;
    storage[count] = value
    return storage[count]
  },
  pop : function() {
    var temp = storage[count]
    delete storage[count]
    count--;
    if(count<0){
      count=0
    }
    return temp;
  },
  size : function() {
    var array = Object.keys(storage)
    var length = array.length

    return length
}
};


