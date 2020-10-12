class Queue{
    constructor(){
        this.storage = {};
        this.head=0;
        this.tail=0;
    }

    Add(element){
        this.storage[this.tail]= element;
        this.tail++;
    }
    remove(){
        let x = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        return x;
    }
}
const queue = new Queue();
queue.Add('piyush');
queue.Add('chaitanya');
queue.Add('himanshu');

// console.log(queue);

// queue.remove();
console.log(queue.remove());
console.log(queue.remove());
console.log(queue);