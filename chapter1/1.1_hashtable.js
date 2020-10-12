function unique(str){
    var hash = {};
    for(var i=0; i<str.length;i++){
        var p = str[i];
        if(hash[p]){
            return false;
        } else{
            hash[p] = true;
        }
    }return true;

}console.log(unique('abcdefgha'));






















// practice again
// function uniq(string){
//     let hash={};
//     for(var i=0;i<string.length;i++){
//         var po = string[i];
//         if(hash[po]){
//             return false;
//         }else{
//             hash[po]= true;
//         }
//     }return true;
// }
// console.log(uniq("applee"));