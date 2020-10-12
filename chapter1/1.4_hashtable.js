var pqr = "tact coa";
function permpalind(str){
var hash={};
let charcount =0;
// for(var i=0;i<str.length;i++){
//     if(str[i]== str[str.length-1-i]){
//         console.log(str);
//         console.log("It is a palindrome");
//     }
// }
// console.log("it is not a palindrome at all");
for(var i=0;i<str.length;i++){
    var p=str[i];
    if(p=== ' '){
        continue;
    }if(hash[p]){
        delete hash[p];
    }else{
        hash[p]= true;
    } charcount++;
}
if(charcount %2 ==0 && Object.keys(hash).length==0){
    return 'this hash is even because all characters appear two times';
}else if(charcount %2 !==0 && Object.keys(hash).length==1){
    return "this hash is odd because there is only one key left";
} else if(Object.keys(hash).length>1){
    return 'there are more keys in the hash which is false';
}

} console.log(permpalind(pqr));











//practice:-
// function permute (str){
//     var hash={};
//     var count=0;
//     for(var i=0; i< str.length; i++){
//         var p = str[i];
//         if(p===' '){
//             continue;
//         }if(hash[p]){
//             delete hash[p];
//         }else{
//             hash[p]=true;
//         }count++;
//     }
//     if(count %2==0){
//         return Object.keys(hash).length==0;
//     }else{
//         return Object.keys(hash).length==1;
//     }
// }
// console.log(permute('Mai hu jiyaan'));