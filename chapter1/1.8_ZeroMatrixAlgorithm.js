function zeromatrix(matrix){
var m=matrix.length
var n= matrix[0].length
var firstrowzero=false;
var firstcolzero=false;

for(var j=0;j<n;j++){
    if(matrix[0][j]===0){
        firstrowzero= true;
    }
}
for(var i=0;i<m;i++){
    if(matrix[i][0]===0){
        firstcolzero= true;
    }
}

for(var i=1;i<m;i++){
    for(var j=1;j<n;j++){
        if(matrix[i][j]===0){
            matrix[i][0]=0;
            matrix[0][j]=0;
        }
    }
}
for(var i=1;i<m;i++){
    for(var j=1;j<n;j++){
        if(matrix[i][0]===0 || matrix[0][j]===0){
            matrix[i][j]=0;
        }
    }
}
if(firstrowzero){
    for(var j=0;j<n;j++){
        matrix[0][j]=0;
    }
}
if(firstcolzero){
    for(var i=0;i<m;i++){
        matrix[i][0]=0;
    }
}
return matrix;
}console.log(zeromatrix([[4,1,3,5,0],[2,-4,0,5,6],[5,9,2,5,6]]));