// function checkspace(str){
//     return str.trim().replace(/\s/g,'%20');
// }console.log(checkspace("mr john smith"));

// function spacestonumber(str){
//     var count=0;
// for(var i=0; i<str.length; i++){
//     if(str[i]== " "){
//     count++;
//     }
    
// }return count;
// } 
// console.log(spacestonumber("my name is piyush"));

// function nospace(str,length){
//     var count=0;
//     for(var i=0; i< str.length;i++){
//         if(str[i]==" "){
//             count++;
//         }
//     }
//    var newlength = length + count * 2;
//    str1 = str;
//    str = str[newlength];
//    for(i=0;i<str1.length;i++){
//        str[i]==str1[i];
//     for(i=length-1; i>=0;i--){
//         if(str[i]=" "){
//             str[newlength-1]= '0';
//             str[newlength-2]= '2';
//             str[newlength-3]= '%';
//             newlength = newlength -3;

//         }else {
//             str[newlength-1]=str[i];
//             newlength = newlength-1;
//         }
//     }
//    }
//     console.log(str);
// }console.log(nospace("i am piyush gupta", 17));
function insertLetters(str, length) {
   str = str.split('');
    var spaces = 0;
    for(var i =0; i <length; i++) {
      if(str[i] === ' ') {
        spaces++;
      }
    }
    // str[1]='K';
    // console.log("srt",str,"spaces",spaces);
    
    var index = length + spaces * 2;
    
    for(i = length - 1; i >= 0; i--) {
      if(str[i] === ' ') {
        str[index - 1] = '0';
        str[index - 2] = '2';      
        str[index - 3] = '%';
        index -= 3;
      } else {
        str[index - 1] = str[i];
        index--;
      }
    }
//    return str;
    return str.join('');
  }
  var str = 'My name is piyush    ';
  var length = 17;
  console.log(insertLetters(str, length));