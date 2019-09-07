

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);

  this._storage.set(index,value);

};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  return this._storage.get(index, key)
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var removeHash = function (storageIndex, cI, storage) {
    console.log('inside call back')
    if (cI === index) {
      console.log('got splice')
      storage.splice(cI, 1)
    }
  }
  this._storage.each(removeHash)
};


//getIndexBelowMaxForKey(str, max)

/*
 * Complexity: What is the time complexity of the above functions?
 */


