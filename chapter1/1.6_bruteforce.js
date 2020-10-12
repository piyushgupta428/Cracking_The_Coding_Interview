// function compression(str){
// var count=1;
// var outputt ='';
// for(var i=0;i<str.length;i++){
//  var p=str[i];
//  var q=str[i+1];
// if(p===q){
//     count++;
// }else{
//     outputt = outputt + p + String(count);
//     count=1;
// }
// }return(outputt);
// // return outputt.length < str.length ? outputt : str;


// }console.log(compression('abcd'));












//practice:-
function compressed(str){
    var output=''
    var count=1;
    for(var i=0;i<str.length;i++){
        var p= str[i];
        var q = str[i+1];
        if (p===q) {
            count++;
        } else {
            output= output + p + String(count);
            count=1;
        }
    // }return output.length < str.length ? output : str;
}return output.length<str.length ? output: str +' the string cannot be compressed anymore';
}
console.log(compressed('abbbbbbcccccccd'));