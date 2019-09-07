

// Instantiate a new graph
var Graph = function(input) {
  this.graphNode = [];
  this.value=input;
  this.links=[];

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(input) {
  var node = new Graph(input);
  this.graphNode.push(node);

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(target) {
  for(var i = 0; i<this.graphNode.length; i++){
    if(this.graphNode[i].value === target){
      return true
    }
  }
  return false
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(target) {
  for(var i = 0; i<this.graphNode.length; i++){
    if(this.graphNode[i].value === target){
     this.graphNode.splice(i,1)
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for(var i=0 ; i<this.graphNode.length; i++){
    if(this.graphNode[i].value === fromNode){
      var fromIndex = i

    }
  }

  for(var i=0 ; i<this.graphNode.length; i++){
    if(this.graphNode[i].value === toNode){
      var toIndex = i

    }
  }

  for(var i=0; i<this.graphNode[fromIndex].links.length; i++){

    if(this.graphNode[fromIndex].links[i] === toIndex){
      return true
    }
  }return false

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for(var i=0 ; i<this.graphNode.length; i++){
    if(this.graphNode[i].value === fromNode){
      var fromIndex = i

    }
    console.log(fromIndex)
  }

  for(var i=0 ; i<this.graphNode.length; i++){
    if(this.graphNode[i].value === toNode){
      var toIndex = i
    }
  }

  //console.log(toIndex)
  this.graphNode[fromIndex].links.push(toIndex)
  this.graphNode[toIndex].links.push(fromIndex)
  console.log(this)
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for(var i=0 ; i<this.graphNode.length; i++){
    if(this.graphNode[i].value === fromNode){
      var fromIndex = i
    }

  }
  for(var i=0 ; i<this.graphNode.length; i++){
    if(this.graphNode[i].value === toNode){
      var toIndex = i

    }
  }
  this.graphNode[fromIndex].links.splice(toIndex, 1)
  this.graphNode[toIndex].links.splice(toIndex, 1)

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var i=0; i<this.graphNode.length; i++){
    cb(this.graphNode[i])
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


