class Stack{
    constructor(){
        this.capacity={};
        this.size=0;
    }

    push(element){
        this.capacity[this.size]=element;
        this.size++;
    }
    pop(){
        let popped= this.capacity[this.size-1];
        delete this.capacity[this.size-1];
        this.size--;
        return popped;
    }
    peek(){
        return this.capacity[this.size-1];
    }
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }
}

var sortStack = function (){
    this.mainStack = new Stack();
    this.tempStack = new Stack();
}

sortStack.prototype.sort = function (){
    if(this.mainStack === null || this.mainStack.isEmpty()){return this.mainStack;}

    this.tempStack.push(this.mainStack.pop());
    while(!this.mainStack.isEmpty()){
        let temp = this.mainStack.pop();
        while(!this.tempStack.isEmpty() && temp> this.tempStack.peek()){
            this.mainStack.push(this.tempStack.pop());
        }
        this.tempStack.push(temp);
    }
    return this.tempStack;
};


var t = new sortStack();
t.mainStack.push(1);
t.mainStack.push(4);
t.mainStack.push(2);
t.mainStack.push(6);
t.mainStack.push(10);
console.log(t);
// t.sort();
console.log(t.sort());





// var t =new sortStack();
// t.mainStack.push(1);t.mainStack.push(3);t.mainStack.push(533);t.mainStack.push(2);t.mainStack.push(8);
// console.log(t.sort())





