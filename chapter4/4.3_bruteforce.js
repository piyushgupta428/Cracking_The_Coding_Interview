 var BST = require('./util/BST');
 var LinkedList = require('./util/LinkedList');
 var Queue = require('./util/Queue');
 
 
 var listOfDepth = function(bst){
 var currentNode = bst;
 var listOfLists = [];
 var list = null;
 var q = new Queue();
 var nextq = new Queue();

 q.add(currentNode);
 while(!q.isEmpty()){
    currentNode = q.remove();
    var newNode = new LinkedList(currentNode.value);
    newNode.next = list;
    list = newNode;
    if(currentNode.right !== null){
        nextq.add(currentNode.right);
    }
    if(currentNode.left !== null){
        nextq.add(currentNode.left);
    }
    if(q.isEmpty()){
        listOfLists.push(list);
        list = null;
        q =nextq;
        nextq = new Queue();
    }
 } return listOfLists;
}

var tree = new BST(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);

console.log(listOfDepth(tree));