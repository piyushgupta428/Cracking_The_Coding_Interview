// Leetcode problem number 155 there are several ways to solve this problem: 



/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack=[];
    this.minst=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(this.stack.length ===0){
        this.minst.push(x);
    }else{
        let minimum = Math.min(x,this.minst[this.minst.length -1]);
        this.minst.push(minimum);
    }
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minst.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
 return this.minst[this.minst.length-1];   
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */