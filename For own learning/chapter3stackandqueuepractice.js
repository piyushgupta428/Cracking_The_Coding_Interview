//how to make a stack:

// 1. with the array:

                        //from here
// const stack = [];

// // stack.push = 'dog';
// stack.push('dog');
// stack.push('cat');
// stack.push("bear");


// stack.pop();


// //
// let q=stack[stack.length-1];
// console.log(q);
// console.log(stack);

                        //till here

//2. how to make a stack using class;

class Stack{
    constructor(){
        this.storage= {};
        this.size=0;
    }

    yatmal(element){
        this.size++;
        this.storage[this.size]=element;
    }

    pop(){
        let removedelement= this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        console.log(removedelement);
        // return removedelement;
    }

    peek(){
        console.log(this.storage[this.size]);
    // return this.storage[this.size];
    }
}

const stack = new Stack();

stack.yatmal('chaitanya')
stack.yatmal('piyush')
stack.yatmal('shitiz')

// stack.pop();

stack.peek();

console.log(stack);
// return stack;
