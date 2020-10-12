// var Queue = require('./../util/Queue');

// Queue.prototype.enqueue = Queue.prototype.add;

function Queue(){
    this.elements =[];
}
Queue.prototype.add= function (e){
    this.elements.push(e);
}
Queue.prototype.remove = function(){
    return this.elements.shift();
}
Queue.prototype.peek = function (){
    return !this.isEmpty() ? this.elements[0] : undefined;
}
Queue.prototype.isEmpty = function (){
    return this.elements.length ==0;
}
var AnimalShelter = function (){
    this.dogQ = new Queue;
    this.catQ = new Queue;
    this.allQ = new Queue;
    this.tempQ = new Queue;
}
AnimalShelter.prototype.enqueuee = function (animal){
    if(animal.type == 'cat'){
        this.catQ.add(animal);
    }else if(animal.type =='dog'){
        this.dogQ.add(animal);
    }
    this.allQ.add(animal);
}
AnimalShelter.prototype.dequeueAny = function(){
    if(this.allQ.peek()=== this.dogQ.peek()){
        this.dogQ.remove();
    }else if(this.allQ.peek() === this.catQ.peek()){
        this.catQ.remove();
    } return this.allQ.remove();
}
AnimalShelter.prototype.dequeueByType = function(type){
    var yesQ;
    if(type==='dog'){
        yesQ=this.dogQ;
    }else if (type ==='cat'){
        yesQ = this.catQ;
    }
    while(!this.allQ.isEmpty() && this.allQ.peek().type !== type){
        this.tempQ.add(this.allQ.remove());
    }
    var animal = this.allQ.remove();
    yesQ.remove();
    while(!this.allQ.isEmpty()){
        this.tempQ.add(this.allQ.remove());
    }
    while(!this.tempQ.isEmpty()){
        this.allQ.add(this.tempQ.remove());
    }   
    return animal; 
}
AnimalShelter.prototype.dequeueDog = function (){
    return this.dequeueByType('dog'); 
}
AnimalShelter.prototype.dequeueCat = function (){
    return this.dequeueByType('cat');
}

/* TESTS */

var a =new AnimalShelter();
a.enqueuee({type:'dog', name:'moti'});
a.enqueuee({type:'dog', name:'bhura'});
a.enqueuee({type:'cat', name:'chamkeeli'});
a.enqueuee({type:'dog', name:'kaalu'});
a.enqueuee({type:'cat', name:'sunheri'});
a.enqueuee({type:'cat', name:'kallan'});
a.enqueuee({type:'dog', name:'Kela'});

console.log(a.dequeueAny());
console.log(a.dequeueCat());
console.log(a.dequeueAny());
console.log(a.dequeueAny());
console.log(a.dequeueAny());
console.log(a.dequeueAny());
console.log(a.dequeueAny());

