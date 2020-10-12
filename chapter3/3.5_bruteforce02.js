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
        return this.size <= 0;
    }
    getSize(){
        return this.size;
    }
    sortStack(){
        this.pop();
    }
}

var sortStack = function (mainStack){
  //  mainStack = new Stack();
    let tempStack = new Stack();

    if(!mainStack){
        return mainStack;
    }

    tempStack.push(mainStack.pop());
    while(!mainStack.isEmpty()){
        let temp = mainStack.pop();
        console.log("temp is",temp," tempstack",tempStack.peek())
        while(!tempStack.isEmpty() && temp > tempStack.peek()){
            mainStack.push(tempStack.pop());
        }
        tempStack.push(temp);
    }
    return tempStack;
}

// sortStack.prototype.push= function(element){
//     // this.mainStack[this.mainStack.length-1].push(element);
//     this.mainStack[this.mainStack.length-1]=element;
//     }

// sortStack.prototype.sort = function (){
   
// }



var newwStack= new Stack();
newwStack.push(1);
newwStack.push(3);
newwStack.push(4);
newwStack.push(2);
console.log(newwStack);
// var test = sortStack(newwStack);
newwStack.sortStack();

console.log(newwStack);
// while(!newwStack.isEmpty()){
//     console.log(newwStack.pop());
// }
// newwStack.sort();