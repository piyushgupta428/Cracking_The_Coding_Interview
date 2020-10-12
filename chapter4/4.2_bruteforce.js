// Approach: divide and conquer, array and insert into tree
var Queue = require('./util/Queue');
var BST = require('./util/BST');

var insertBalanced = function(array){
  var bst = new BST();
  var q = new Queue();
var currentarray;
q.add(array);

while(!q.isEmpty()){
  currentarray = q.remove();
  bst.insert(currentarray[Math.floor(currentarray.length/2)]);

  if(currentarray.slice(0,Math.floor(currentarray.length/2)).length>0){
    q.add(currentarray.slice(0,Math.floor(currentarray.length/2)));
  }
  if(currentarray.slice(Math.floor(currentarray.length/2+1)).length >0){
    q.add(currentarray.slice(Math.floor(currentarray.length/2)+1))
  }
}
return bst;
}

/* TEST */
// var arr1 = [1, 2, 3, 4, 5, 6];
// var tree1 = insertBalanced(arr1);
// tree1.printLevelOrder();

var arr2 = [1, 2, 3, 4, 5, 6, 7,9];
var tree2 = insertBalanced(arr2);
tree2.printLevelOrder();


// var m = ['But', 'Will', 'It', 'Blend', 'Question'];
// if(m.slice(0,Math.floor(m.length/2)).length>0);
//   console.log(m.slice(0,Math.floor(m.length/2))) 

//   if(m.slice(Math.floor(m.length/2)+1).length>0);
//   console.log(m.slice(Math.floor(m.length/2)+1)) 