var storage = {} ;
var count=0

var Stack = function(storage, count) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count=0
  this.storage={};
};


Stack.prototype.push =  function(value) {
  count++;
  this.storage[count] = value
  console.log(this.storage)
  return this.storage
}

Stack.prototype.pop = function() {
  var temp = this.storage[count]
  delete this.storage[count]
  count--;
  if(count<0){
    count=0
  }
  return temp;
}
Stack.prototype.size = function() {
  var array = Object.keys(this.storage)
  var length = array.length
  console.log(length)
  return length
}