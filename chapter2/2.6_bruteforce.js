// LEETCODE 234 copy and paste the function  var isPalindrome = function(head)  on that question.





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


    //algorithm for pallindrome
    // var isPalindrome = function(head) {
    //     let slow = head;
    //     let fast = head;
        
    //     while(fast != null && fast.next !=null){
    //         fast= fast.next.next;
    //         slow = slow.next;
    //     }
        
    //     slow = reversed(slow);
    //     fast=head;
    //     while(slow != null){
    //         if(slow.val != fast.val){
    //             return false;
    //         } slow = slow.next;
    //         fast = fast.next;
    //     } return true;
        
    // }
    //     function reversed(head){
    //         let prev = null;
    //         while(head != null){
    //             let nextt = head.next;
    //             head.next = prev;
    //             prev = head;
    //             head = nextt;
    //         }
    //         return prev;
    //     }
    



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
lll.insertfirst(90);
lll.insertfirst(80);
lll.insertfirst(70);
lll.insertfirst(60);
lll.insertfirst(50);
lll.insertfirst(40);
lll.insertfirst(30);
lll.insertfirst(20);
lll.insertfirst(10);
// lll.insertAt(1000,9);
// lll.removemiddleelement();
lll.reversepal();
lll.printll();
// lll.partition(150);





