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
    //insert first
    insertfirst(data){
    this.head = new node(data, this.head);
    this.size++;
    }


    //algorithm for partition
     partition = function(head, x) {
        let before_head = new node(0);
        let before = before_head;
        let after_head= new node(0);
        let after = after_head;
        
        let current = this.head;
        while(current != null){
            if(current.data < x){
                before.next= current;
                before=before.next;
            }else{
                after.next=current;
                after=after.next;
            }
            current= current.next;
            
        }
        // after.next= null;
        before.next = after_head.next;
        
        console.log (before_head.next) ;
    };



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
lll.insertfirst(650);
lll.insertfirst(750);
lll.insertfirst(700);
lll.insertfirst(60);
lll.insertfirst(11);
lll.insertfirst(600);
lll.insertfirst(305);
lll.insertfirst(150);
lll.insertfirst(250);
// lll.insertAt(1000,9);
// lll.removemiddleelement();
lll.printll();
lll.partition(150);





