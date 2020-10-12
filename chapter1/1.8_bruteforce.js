function zeroMatrix(matrix){
let n= matrix.length;

for(var r=0;r<n;r++){
    for(var c=0;c<n;c++){
        if(matrix[r][c]===0){
            matrix[r][c]=true;
        }
    }
}
for(var r=0;r<n;r++){
    for(var c=0;c<n;c++){
        if(matrix[r][c]=== true){
            for(var i=0;i<n;i++){
             matrix[r][i]=0;
            }
            for(var i=0; i<n;i++){
             matrix[i][c] = 0;
            }
        }
    }
}
return matrix;
}
console.log(zeroMatrix([[4,1,3],[2,-4,0],[5,9,2]])
// ,
// zeroMatrix([[1, 2, 3, 0], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])
);