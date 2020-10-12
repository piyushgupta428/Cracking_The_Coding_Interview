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
//algorithm to return the k-th to last element

lastelementreturn(ele){
    let current = this.head;
    let previous =this.head;
    let count=1;
while(count<=ele-1){
    current=current.next;
    count++;
}
while(current.next!= null){
    current=current.next;
    previous=previous.next;
}
console.log(previous.data);
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
lll.lastelementreturn(4);
lll.printll();




