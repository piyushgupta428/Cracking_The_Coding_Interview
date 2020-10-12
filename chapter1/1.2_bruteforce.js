// function permutationn(str1, str2){
//     if(str1.length != str2.length){
//         return false;
//     }
//     var str1 = str1.split('').sort().join('');
//     var str2 = str2.split('').sort().join('');
//     if(str1 === str2){
//          return "both the strings are permutations of each other";
//         }
//     return "not permutations of each other";
// }console.log(permutationn('abcd','dcba'));

// function sortingg(str){
//     var arr = str.split('');
//     var tempp;
//     for(var i=0; i<arr.length;i++){
//         for(var j=i+1; j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 tempp = arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=tempp;
//             }
//         }
//     }return arr.join('');
// }
// var strng1= sortingg('str1');
// var strng2 = sortingg('str2');
// var str1 = str1.split('').sort().join('');
// var str2 = str2.split('').sort().join('');
// function sortingalphabets(str){
//     return str.split('').sort().join('');
// }
// console.log(strmain);
// console.log(strmain2);
// if(str1 === str2){
//     console.log("both the strings are permutationi of each other");
// }


// function permm(str1, str2){
//     if(str1.length !== str2.length){
//         return false;
//     }
//     str1= str1.split('').sort().join('');
//     str2=str2.split('').sort().join('');
//     if(str1===str2){
//         return("They are permutations of each other");
//         } 
//     return "They are not permutations of each other";
// }
// console.log(permm('abcadi','dcbaae'));









function checkoo(str1, str2){
    if(str1.length !== str2.length){
        return "They are not equal so it can't be a permutation";
    }
    str1= str1.split('').sort().join('');
    str2= str2.split('').sort().join('');
    if(str1===str2){
        return "they are permutation of each other"
    }else return "they are not permutation of each other"
}console.log(checkoo('abscd','abdes'));