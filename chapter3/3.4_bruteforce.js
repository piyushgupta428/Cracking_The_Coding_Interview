/**
 * Initialize your data structure here.
 */



class Stack{
    constructor(){
        this.capacity = {};
        this.size = 0;
    }
    push(element){
        this.capacity[this.size]= element;
        this.size++;
    }
    pop(){
        let temp = this.capacity[this.size-1];
        delete this.capacity[this.size-1];
        this.size--;
        return temp;
    }
    peek(){
        return this.capacity[this.size-1];
    }
    isEmpty(){
        return this.size ===0;
    }
    getSize(){
        return this.size;
    }
}
var MyQueue = function() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.pushStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.popStack.isEmpty()){
        while(!this.pushStack.isEmpty()){
            this.popStack.push(this.pushStack.pop());
        }
    }
    return this.popStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.popStack.isEmpty()){
        while(!this.pushStack.isEmpty()){
            this.popStack.push(this.pushStack.pop());
        }
    }
    return this.popStack.peek();
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.pushStack.isEmpty() && this.popStack.isEmpty();
    
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */