var storage = {} ;
var count=0

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count=0
  this.storage={};
};


Queue.prototype.enqueue = function (value) {
  this.storage[count] = value
  count++
  return this.storage
},
Queue.prototype.dequeue = function () {
  var array = Object.keys(this.storage)
  var currentElement = array[0]
  var temp = this.storage[currentElement]
  delete this.storage[currentElement]
  return temp
},
Queue.prototype.size = function () {

  var array = Object.keys(this.storage)
  return array.length
}