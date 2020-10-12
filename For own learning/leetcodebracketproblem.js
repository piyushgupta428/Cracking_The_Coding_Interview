/**
 * @param {string} s
 * @return {boolean}
 */
class Stack { 
  
    // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
    } 

    push (element){
        this.items.push(element);
    }

    pop() 
{ 
    // return top most element in the stack 
    // and removes it from the stack 
    // Underflow if stack is empty 
    if (this.items.length == 0) 
        return "Underflow"; 
    return this.items.pop(); 
} 

peek() 
{ 
    // return the top most element from the stack 
    // but does'nt delete it. 
    return this.items[this.items.length - 1]; 
} 
isEmpty() 
{ 
    // return true if stack is empty 
    return this.items.length == 0; 
} 
  
    // Functions to be implemented 
    // push(item) 
    // pop() 
    // peek() 
    // isEmpty() 
    // printStack() 
} 
function shubham(s) {
    // s = s.split('');
    var stack = new Stack();
    // var stack = function() {
    //     this.count = 0;
    //     this.storage = {};
    // }
    for(var i = 0; i < s.length; i++){
        if(s[i] == "(" || s[i] == "{" || s[i] == "["){
            stack.push(s[i]);
        }
        else if(!stack.isEmpty() && s[i] == ")" && stack.peek() == "("){
            stack.pop();
        }
        else if(!stack.isEmpty() && s[i] == "}" && stack.peek() == "{"){
            stack.pop();
        }
        else if(!stack.isEmpty() && s[i] == "]" && stack.peek() == "["){
            stack.pop();
        }   
        else{
            return false
        }
    }
    return stack.isEmpty();
    
};
console.log(shubham("{]("));
console.log(shubham("({[]})"))
// console.log(isValid("()[]{}"))
// console.log(isValid("()[][}"))