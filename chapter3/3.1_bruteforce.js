//link to the medium article:-    https://medium.com/@emmabostian/creating-3-stacks-with-1-array-in-javascript-e1171d661e89



class MultiStack{
    constructor(StackSize){

        this._stackCapacity = StackSize;
        this.values= [];
        this.sizes=[0,0,0]

    }
      get stackCapacity() {
        return this._stackCapacity ;
    }
    isFull(stackNumber){
        return this.sizes[stackNumber]=== this._stackCapacity;
    }
    isEmpty(stackNumber){
        return this.sizes[stackNumber] === 0;
    }

    indexOfTop(stackNumber){
        let offset = stackNumber * this._stackCapacity;
        let size = this.sizes[stackNumber];
        return offset + size -1;
    }

    push (stackNumber, value){
        if (this.isFull(stackNumber)){
            return console.log(`Stack number ${stackNumber} is Full`);
        }
        this.sizes[stackNumber]++;
        this.values[this.indexOfTop(stackNumber)]= value;
        return console.log(`item ${value} has been successfully added to stack ${stackNumber}`);
    }
    pop(stackNumber){
        if(this.isEmpty(stackNumber)){
            return console.log(`Stack NUmber ${stackNumber} is empty`);
        }
        let topIndex = this.indexOfTop(stackNumber);
        let value = this.values[topIndex];
        this.values[topIndex]=0;
        this.sizes[stackNumber]--;
        return value;
    }
    peek(stackNumber){
        if(this.isEmpty(stackNumber)){
            return console.log(`Stack Number ${stackNumber} is empty`);
        }
        let topIndex = this.indexOfTop(stackNumber);
        return this.values[topIndex];
    }

}

let stack = new MultiStack(5);
console.log(stack.stackCapacity); // 5
console.log(stack.indexOfTop(0));
console.log(stack.values);
stack.push(0, 4); // "Item 4 has been successfully added to stack 0"
console.log(stack.indexOfTop(0));
console.log(stack.values);
stack.push(0, 3); // "Item 3 has been successfully added to stack 0"
console.log(stack.indexOfTop(0));
console.log(stack.values);
stack.push(0, 2); // ...
console.log(stack.indexOfTop(0));
console.log(stack.values);
stack.push(0, 1);
console.log(stack.indexOfTop(0));
console.log(stack.values);

stack.push(1, 8);
stack.push(1, 7);
stack.push(1, 6);
stack.push(1, 5);
stack.push(2, 12);
stack.push(2, 11);
stack.push(2, 10);
stack.push(2, 9); // "Item 9 has been successfully added to stack 2"

console.log(stack);
console.log(stack.peek(0)); // 1
console.log(stack.peek(1)); // 5
console.log(stack.peek(2)); // 9
console.log(stack.push(0, 16));
console.log(stack.peek(0)); // 16
console.log(stack.isFull(0)); // true
console.log(stack.push(0, 55)); // "Stack number 0 is full"
console.log(stack.pop(0)); // 16
console.log(stack.isFull(0)); // false
console.log(stack);