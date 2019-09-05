var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var count=0;

  someInstance.push = function(value) {
    count++;
    storage[count] = value
    return storage[count]
  };

  someInstance.pop = function() {
    var temp = storage[count]
    delete storage[count]
    count--;
    return temp;
  };

  someInstance.size = function() {
    if(count<0){
      return 0
    }
    return count;
  };

  return someInstance;
};
