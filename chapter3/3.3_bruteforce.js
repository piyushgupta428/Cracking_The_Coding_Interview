var SetOfStacks = function (capacity){
    this.capacity= capacity;
    this.Stackset = [];
}

SetOfStacks.prototype.push = function (value){
if(this.Stackset.length ===0 || this.Stackset[this.Stackset.length-1].length===this.capacity){
    var newStack = [];
    newStack.push(value);
    this.Stackset.push(newStack);
}else{
    this.Stackset[this.Stackset.length-1].push(value);
}

};

SetOfStacks.prototype.pop = function(){
if(this.Stackset.length === 0){return undefined;}
else if(this.Stackset[this.Stackset.length-1].length===0){
    this.Stackset.pop();
}
return this.Stackset[this.Stackset.length -1].pop();

};
SetOfStacks.prototype.peek = function (){
    var curr = this.Stackset[this.Stackset.length -1];
    return curr[curr.length-1];
};

SetOfStacks.prototype.isEmpty = function (){
    return this.Stackset.length ===0;
};

SetOfStacks.prototype.popAt = function(index){
    return this.Stackset[index].pop();
};



var neww = new SetOfStacks(3);

neww.push(1);
neww.push(2);
neww.push(3);
neww.push(4);
neww.push(5);
neww.push(6);
neww.push(7);
neww.push(8);
neww.push(9);
neww.push(10);
neww.push(11);
neww.push(12);
neww.push(13);
neww.push(14);



neww.pop();
neww.popAt(2);
neww.popAt(2);
neww.popAt(1);

console.log(neww.Stackset);