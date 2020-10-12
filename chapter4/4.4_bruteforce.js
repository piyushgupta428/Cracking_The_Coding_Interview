var BST = require('./util/BST');
var checkBalanced = function(bst){

    if(bst.left === null && bst.right !== null){
        if(bst.right.left !== null || bst.right.right !== null){
            return false;
        }
    }
    if(bst.left !== null && bst.right === null){
        if(bst.left.left !== null || bst.left.right !== null){
            return false;
        }
    }
    var answer =true;
    if(bst.left !== null){
        answer = answer && checkBalanced(bst.left);
    }
    if(bst.right!== null){
        answer = answer && checkBalanced(bst.right);
    }
    return answer;
}

var t= new BST(1);
t.insert(2);
t.insert(3);
t.insert(4);
console.log(checkBalanced(t));

var p = new BST(4);
p.insert(2);
p.insert(6);
p.insert(1);
p.insert(3);
p.insert(5);
p.insert(7);
console.log(checkBalanced(p));
