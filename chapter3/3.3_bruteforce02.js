var stackOfStacks = function(stackCapacity){
    this.stackCapacity = stackCapacity;
    this.Stackk = [];
}

stackOfStacks.prototype.getLastStack = function (){
    return this.Stackk[this.Stackk.length -1];
}

stackOfStacks.prototype.push = function(element){
    let last = this.getLastStack();
    if(this.Stackk.length ===0 || last.length === this.stackCapacity){
        var newStack = [];
        newStack.push(element);
        this.Stackk.push(newStack);
    }else{
        this.Stackk.push(element);
    }
}

stackOfStacks.prototype.pop = function(){
    let last = this.getLastStack();
    if(this.Stackk.length ===0){
        return undefined;
    }
    let value = last.length-1;
    if(last.length===0){
        this.Stackk.pop();
    }return value;

}

stackOfStacks.prototype.peek= function(){
    let last = this.getLastStack()
    return last.length-1;
}

stackOfStacks.prototype.popAt = function (index){
    // if(index <0 || index>=this.Stackk.length){
    //     return false;
    // }else if (this.Stackk[index].length ===0){
    //     return this.Stackk.pop();
    // }
    // return this.Stackk[index].length-1;
    if (index < 0 || index >= this.Stackk.length) return false;
    let value = this.Stackk[index].length-1;
    if (this.Stackk[index].length == 0) {
      // clear the stack from the set
      this.Stackk.splice(index, 1);
    }
    return value;
  }
    


var nstack = new stackOfStacks(3);
nstack.push(1);
nstack.push(2);
nstack.push(3);
nstack.push(4);
nstack.push(5);
nstack.push(6);
nstack.push(7);
nstack.push(8);
nstack.push(9);
nstack.push(10);
nstack.push(11);
nstack.push(12);
nstack.push(13);
nstack.push(14);

console.log(nstack);
console.log(nstack.peek(),14);

nstack.popAt(2);
nstack.popAt(2);
nstack.popAt(2);

console.log(nstack.peek(), 14);

nstack.pop();
nstack.pop();
nstack.pop();
nstack.pop();
nstack.pop();
nstack.pop();
nstack.pop();
nstack.pop();
nstack.pop();

console.log(nstack.peek(), 2);