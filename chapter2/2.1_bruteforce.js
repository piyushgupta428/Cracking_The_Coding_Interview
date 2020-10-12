// //to remove duplicates
// //first make a class of linkedlist and the node class
// //insert elements at index
// //find duplicates
// //return the updated linked list
// class Node{
// constructor(data,next=null){
//     this.data=data
//     this.next=next
// }
// }

// class linkedList{
//     constructor(){
//         this.head=null;
//         this.size=0;
//     }
// insertAt(data,index){
//     let current=this.head;
//     let node= new Node(data);
//     let previous;
//     let count=0;
// if(index>0 && index>this.size){
//     return;
// }
// if(index===0){
//     this.head=new Node(data,this.head);
//     this.size++;
//     return;
// }
// while(count<index){
//     previous=current;
//     count++;
//     current=current.next
// }
// previous.next=node;
// node.next=current;
// this.size++;
// }

// removeDuplicates(){
//     let current;
//     let previous;
//     current=this.head;
//     while(current != null && current.next != null){
//         if(current.data === current.next.data){
//             previous=current.next.next;
//             current.next=previous;
//         }
//         current=current.next;
//     }
// }

// printListData(){
//     let current=this.head;
//     while(current){
//         console.log(current.data);
//         current=current.next;
//     }
// }

// }

// const ll= new linkedList();
// ll.insertAt(100,0);
// ll.insertAt(200,1);
// ll.insertAt(300,2);
// ll.insertAt(300,3);
// ll.insertAt(500,4);
// ll.insertAt(500,5);
// ll.insertAt(700,6);
// ll.removeDuplicates();
// ll.printListData();
















//make a node
class node{
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}

//make ll

class linkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    //insert in linked list
insertAt(data,index){
    if(index>0 && index> this.size){
        return;
    }
    if(index==0){
        this.head=new node(data, this.head);
        this.size++;
        return;
    }
    let nodee= new node(data);
    let current =this.head;
    let count=0;
    let previous;
    while(count<index){
        previous=current;
        count++;
        current=current.next;
    }
    previous.next=nodee;
    nodee.nexxt=current;
    this.size++;
}
//print ll
printll(){
    let current=this.head;
    while(current){
        console.log(current.data);
        current=current.next;
    }
}
//algorithm for removing duplicates
removeduplicate(){
    let current=this.head;
    let previous;
    while(current != null && current.next!= null){
        if(current.data===current.next.data){
            previous=current.next.next;
            // if(previous==null){
            //     current.next=null;
            //     break;
            // }
            current.next=previous;
        }if(current.data != current.next.data){
        current=current.next;}

    }

}
SortLinkedList(){

    let current=this.head;
    let previous;
for(current=this.head; current != null; current = current.next){
    for(previous=current.next; previous != null; previous = previous.next){
        if(current.data > previous.data){
            let temp = current.data;
            current.data= previous.data;
            previous.data= temp;
        }
    }
}
}

}
let lll= new linkedList();
lll.insertAt(400,0);
lll.insertAt(500,1);
lll.insertAt(800,2);
lll.insertAt(400,3);
lll.insertAt(600,4);
lll.insertAt(100,5);
lll.insertAt(200,6);
lll.insertAt(600,7);
lll.insertAt(500,8);
lll.SortLinkedList();
lll.removeduplicate();
lll.printll();




