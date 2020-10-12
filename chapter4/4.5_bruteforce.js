//Leetcode number 98:=


var isvalidBST = function(root, min=Number.MIN_VALUE , max = Number.MAX_VALUE){
if(!root){return true;}
if(root.val <= min || root.val >= max){return false;}
return isvalidBST(root.left, min, root.val) && isvalidBST(root.right, root.val, max);
}


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */

// var isValidBST = function(root, min = -Infinity, max = Infinity) {
//     if (!root) { return true }
//     if (root.val <= min || root.val >= max) { return false }
//     return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
//   };
  
  
  //this is a valid solution:-
  // var isValidBST = function(root) {
  //   let lastVal = -Infinity
  //   const stack = []
  //   let node = root
  
  //   while (node || stack.length > 0) {
  //     if (node) {
  //       stack.push(node)
  //       node = node.left
  //     } else {
  //       node = stack.pop()
  //       if (lastVal >= node.val) {
  //         return false
  //       }
  //       lastVal = node.val
  //       node = node.right
  //     }
  //   }
  
  //   return true
  // };