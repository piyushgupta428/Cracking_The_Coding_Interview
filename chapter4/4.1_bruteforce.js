var Graph = require('./util/Graph');
var Queue = require('./util/Queue');

var checkRouote = function(value1,value2,graph){
var q1 = new Queue();
var q2 = new Queue();

var visited1 = {};
var visited2 = {};
//now inserting values into the queue
visited1[value1]= true;
visited2[value2] = true;

if(graph.hasNode(value1)){
    for(var edge in graph.findEdges(value1)){
        q1.add(edge);
    }
}

if(graph.hasNode(value2)){
    for(var edge in graph.findEdges(value2)){
        q2.add(edge);
    }
}

var nextEdge1;
var nextEdge2;

while(!q1.isEmpty() || !q2.isEmpty()){

    if(!q1.isEmpty()){
        nextEdge1 = q1.remove();
        if(nextEdge1 === value2){
            return true;
        }
        if(visited1[nextEdge1]=== undefined){
            visited1[nextEdge1]= true;
            if(graph.hasNode(nextEdge1)){
                for(var edge in graph.findEdges(nextEdge1)){
                    q1.add(edge);
                }
            }
        }
    }

    if(!q2.isEmpty()){
        nextEdge2 =q2.remove();
        if(nextEdge2=== value1){
            return true;
        }
        if (visited2[nextEdge2] === undefined){
            visited2[nextEdge2] = true;
            if(graph.hasNode(nextEdge2)){
                for(var edge in graph.findEdges(nextEdge2)){
                    q2.add(edge);
                }
            }
        }
    }
}

return false;

};

var graph = new Graph();
graph.addNode('A');

graph.addNode('B');

graph.addNode('C');

graph.addNode('D');

graph.addNode('E');

graph.addEdge('A', 'B');
graph.addEdge('B', 'D');
graph.addEdge('D', 'C');
graph.addEdge('C', 'E');

console.log(checkRouote('D','A',graph));