var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = new Node(value);
    if (list.head === null) {
      list.head = node;
    }
    else{
      var current = list.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    list.tail = node;
    return list.tail;
  };


  list.removeHead = function() {
    var temp = list.head
    list.head=list.head.next
    return temp.value;
  };

  list.contains = function(target) {
  var current = list.head;
  while(current.value !== target && current !== list.tail) {
    current = current.next;
  };
  if (current.value === target) {
    return true;
  }
  else {
    return false;
  }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
