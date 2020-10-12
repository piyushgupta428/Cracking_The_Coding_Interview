// var pqr= 'rotor';
// function palindrom(str){
//     for(var i=0; i<str.length;i++){
//         if(str[i] !==str[str.length-1-i]){
//             console.log(str[i]);
//             return false;
//         }
//     }return false;
// }console.log(palindrom('rotor'));

function palindrome(str){
    // str=str.replace(/\W/g,'');
    // str =str.toLowerCase();
     return str === str.split('').reverse().join('');
}console.log(palindrome('level'));

// function palindrome(str){
//     var newstr= str;
//     var mnstr= newstr.split('').reverse().join('');
//     return newstr === mnstr;
// }console.log(palindrome('civic'));