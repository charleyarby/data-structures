/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'
/*

  limitedArray.get = function(index, key) {
    checkLimit(index);
    for(var i=0; storage[index].length; i++){
      if(storage[index][i] === key){
        return storage[index]
      }
    }
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);
    storage[index].push(value);

  };
  limitedArray.each = function(callback) {
    console.log('here is each')
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit) {
  var storage = [];
  for(var i=0; i<limit; i++){
    storage[i]=[]
  }
  var limitedArray = {};
  limitedArray.get = function(index, key) {
    checkLimit(index);
    for(var i=0; i < storage[index].length; i++){
      console.log('inside storage')

      console.log(storage)
      console.log(storage[index])
      //console.log(storage[index][0][0])
      //console.log(key)
      if(storage[index][i][0] === key){
          console.log('inside if statement')
        return storage[index][i][1]
      }
    }
    //return storage[index];
  };
  limitedArray.set = function(index, key, value) {
    checkLimit(index);
    var sameKey=false;

    for(var i=0; i<storage[index].length; i++){
      if(storage[index][i][0]===key){
        sameKey=true
        var atIndex=i
      }
    }
    if(sameKey==false){
    storage[index].push([key, value]);
    }else{
      storage[index][atIndex][0]=key
      storage[index][atIndex][1]=value
    }

  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
