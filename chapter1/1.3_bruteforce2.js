// function eliminatespace(str, N){
//     var count=0; var spaces;
//     //to count characters;
//     for(var i=0; i<str.length;i++){
//         var p=str[i];
//         if(p !== ' '){
//             count++;
//         }
//     }
//     var output;
//     spaces = N-count;
//     for(var i=0;i<str.length;i++){
//         var p=str[i];
//         if(p===' '){
//             output = output + '%20';
//             spaces--;
//         }else if(p!==' '){
//             output = output + p;
//         } 
//     }
// // console.log("done"); 
//     // while(spaces>0){
//     //     output = output + '%20';
//     //     sapces--;
//     // } 
//     return output;

// } console.log(eliminatespace('Mr john sshmith      ',22));





//practice:-
function urlify(str,n){
var output = '';
var counts=0;

for (var i=0;i<str.length;i++){
 var p = str[i];
 if(p !== ' '){
     counts++;
 }
}
var spaces = n-counts;
for(var i=0;i<str.length;i++){
    var p=str[i];
    if(p ===' ' && spaces>0){
        output=output+ '%20';
        spaces--;
    }else if(p !== ' '){
        output=output + p;
    }
}
while(spaces>0){
    output=output+ '%20';
    spaces--;
}
return output;

}console.log(urlify('Mr john sshmith      ', 50));