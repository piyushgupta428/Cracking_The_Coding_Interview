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
//algorithm to return the linked list without the middle node
removemiddleelement(){
    let current;
    let previous;
    let count=0;
    current=this.head;
    while(current){
        count++;
        current=current.next;
    }
    console.log(count);
    let some= Math.ceil(count/2);
    console.log(some);
let num =1;
current=this.head;
    while(num <some){
        previous= current;
        num++;
        current=current.next;
    }
    previous.next=current.next;
}



//print ll
printll(){
    let current=this.head;
    while(current){
        console.log(current.data);
        current=current.next;
    }
}


}
let lll= new linkedList();
lll.insertAt(100,0);
lll.insertAt(200,1);
lll.insertAt(300,2);
lll.insertAt(400,3);
lll.insertAt(500,4);
lll.insertAt(600,5);
lll.insertAt(700,6);
lll.insertAt(800,7);
lll.insertAt(900,8);
// lll.insertAt(1000,9);
lll.removemiddleelement();
lll.printll();






