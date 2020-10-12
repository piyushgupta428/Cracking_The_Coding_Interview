function rotatematrix(matrix){
    n=matrix.length;

    for(var i=0;i<Math.floor(n/2);i++){
        for(var j=0; j<n-(2*i)-1;j++){
            var temp=matrix[i+j][n-1-i];
            matrix[i+j][n-1-i] = matrix[i][i+j];
            matrix[i][i+j] = temp;
            
            temp = matrix[n-1-i][n-1-i-j];
            matrix[n-1-i][n-1-i-j]=matrix[i][i+j];
            matrix[i][i+j] = temp;

            temp= matrix[n-1-i-j][i];
            matrix[n-1-i-j][i]= matrix[i][i+j];
            matrix[i][i+j] = temp;
        }
    }
    return matrix;
};



function compareMatrix (a,b) {
if(!Array.isArray(a) || !Array.isArray(b)){
    return a===b;
} else {
    let output =true;
    for(var i=0; i < Math.max(a.length, b.length); i++){
    if(output){
        output= compareMatrix(a[i], b[i]);
    }else{
        return false;
    }
    }
    return output;
}

}

console.log(
    compareMatrix(rotatematrix([[1, 2],[3, 4]]), [[3, 1], [4, 2]]),
    compareMatrix(rotatematrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]), 
                                 [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]),
    compareMatrix(rotatematrix([]), [])
);


//console.log(
    //     compareMatrix(rotateMatrix([[1, 2], [3, 4]]), [[3, 1], [4, 2]]),
    //     compareMatrix(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [[7, 4, 1], [8, 5, 2], [9, 6, 3]]),
    //     compareMatrix(rotateMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]), 
    //                             [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]),
    //     compareMatrix(rotateMatrix([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), 
    //                             [[21, 16, 11, 6, 1], [22, 17, 12, 7, 2], [23, 18, 13, 8, 3], [24, 19, 14, 9, 4], [25, 20, 15, 10, 5]]),
    //     compareMatrix(rotateMatrix([]), []),
    //     compareMatrix(rotateMatrix([[]]), [[]]),
    //     compareMatrix(rotateMatrix([[1]]), [[1]])
    //   );

//     var i = {};
//     i.name = "asdasd0"
//     i.k = ['asd','asd']
    
// while(i){
//     console.log(i);
// }