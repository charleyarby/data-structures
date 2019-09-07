
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var istrue = false;
  var node =  Tree(value);
    this.children.push(node);

};



treeMethods.contains = function(target) {
  var istrue=false;
  if (this.value === target) {istrue=true};
  function findChild(branch){
    for (var j = 0; j < branch.children.length; j++) {

      if(branch.child ){

        findChild(this.child)
      }
      if (branch.value === target) {istrue = true;}

      if (branch.children[j].value === target) {istrue = true;}
       if (branch.children[j]) {
         findChild(branch.children[j])
       }
    }
  }
  for (var i = 0; i < this.children.length; i++){
    if (this.children[i].value === target) {return true}
    else{
      findChild(this.children[i])
    }
  }
  if (istrue === true) {return true}
  return false
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
