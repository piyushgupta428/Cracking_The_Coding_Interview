// console.log(permmornot('abcd', 'dcba'));
// function permmornot(str1, str2){
//     var hash={};

//     if(str1.length !== str2.length){
//         return false;
//     }

//     for(var i=0; i<str1.length; i++){
//         var p= str1[i];
//         if(hash[p]){
//             hash[p]++;
//         }else{
//             hash[p] =1;
//         }
//     }

//     for(var i=0; i<str2.length;i++){
//         var p = str2[i];
//         if(hash[p] && hash[p] !==0){
//             hash[p]--;
//         }else{
//             return false;
//         }
//     } return true;
    
// };





function checkoi(str1, str2){
    var hash = {};
    if(str1.length !== str2.length){
        return "they are not equal";
    }
    for (var i=0; i<str1.length;i++){
        var z = str1[i];
        if(hash[z]){
            hash[z]++;
        }else{
            hash[z]=1;
        }
    }
    for(var i=0; i<str2.length;i++){
        var z=str2[i];
        if(hash[z] && hash[z] !== 0){
            hash[z]--
        }else{
            return false;
        }
    }return "they are permutation of each other";
}
console.log(checkoi('abcds','dcba'));