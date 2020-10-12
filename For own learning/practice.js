class Stack {
    constructor(){
        this.storage = {};
        this.size =0;
    }

    push(element){
        this.size++;
        this.storage[this.size]= element;
    }

    pop(){
        let x = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        return x;
    }
    peek(){
        return this.storage[this.size];
    }
}
const stack = new Stack();

stack.push('himanshu');
stack.push('piyush');
stack.push('chaitanya');

console.log(stack.pop());

// console.log(stack);

console.log(stack.peek());