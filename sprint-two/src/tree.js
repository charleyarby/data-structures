var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //console.log(this)
  var node = new Tree(value)
  this.children.push(node)

};
var istrue = false;

treeMethods.contains = function(target) {
  istrue = false;
  console.log(this.children.length)
  debugger
  //console.log(this.children[0].children.length)
  if(this.children.length >0){

    for(var i=0; i<this.children.length; i++){

      if(this.value === target){
        console.log('equals true ' + this.children[i].value)
        istrue = true;
        console.log(istrue)
        return true;
      }else{
        console.log(istrue)

        console.log("ARE YOU HERE?")
      this.children[i].contains(target)
      }
    }
  }
  console.log(istrue)

  console.log('there you')
  console.log(this)
  if(this.value === target){
    console.log('value equals target')
    istrue=true
  }
  if(istrue==true){
    return true
  }else{
    return false
  }
  //  for (var i = 0; i < this.children.length; i++){
  //    if (this.children.length !==1) {
  //      console.log('not equal to 1')
  //     function findChildren() {
  //       if (this.children[i].length !== 1) {
  //         findChildren(this.children[i]);
  //       };

  //       if (this.value === target) {
  //         return true
  //       }
  //       console.log('hello')

  //     }
  //     findChildren(this.children[i]);
  //   }
  //  }
   return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
