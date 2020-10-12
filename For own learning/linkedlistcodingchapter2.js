
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }


    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    insertLast(data) {
        let current;
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
            return this.head;
        }
        else { current = this.head; }
        // current=this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = node;
        this.size++;
        // return this.head;

    }

    insertAt(data, index) {
        if (index > 0 && index > this.size) {
            return;
        }
        if (index == 0) {
            this.head = new Node(data);
        }

        let node = new Node(data);
        let current = this.head;
        let previous;
        let count = 0;
        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }
        previous.next = node;
        node.next = current;
        this.size++;
    }

    getAt(index) {
        if (index > 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let count = 0;
        while (current) {
            if (count == index) {
                console.log(current.data);
            } count++;
            current = current.next;
        }

    }

    removeAt(index){
        if(index>0 && index>this.size){
            return;
        }
        let current=this.head;
        if(index==0){
            this.head=current.next;
        }else{
        let previous;
        let count=0;
        while(count<index){
           
            previous=current;
           
            count++;
             current=current.next;
        }
        previous.next=current.next;}
        this.size--;
    }

    clearList(){
        this.head=null;
        this.size=0;
    }

    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
let ll = new linkedList();
// ll.insertFirst(10);
// ll.insertFirst(20);
// ll.insertFirst(30);
// ll.insertFirst(40);
// ll.insertFirst(50);
// ll.insertLast(60);
ll.insertLast(70);
ll.insertLast(80);
ll.insertLast(90);
ll.insertLast(100);
// ll.insertLast(70);

ll.insertAt(75, 1);
ll.insertAt(85, 3);
ll.insertAt(95, 5);
// ll.getAt(1);
// ll.removeAt(2);
ll.clearList();

ll.printListData();
