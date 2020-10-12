// function ifunique(str){
//     var len= str.length;
//     for(var i=0;i<len;i++){
//       var temp = str[i];
//       for(var x=i+1;x<=len-1;x++){
//         if(temp==str[x]){
//           return false;
//         }
//       }
//     } return true;
//   }
//   console.log(ifunique('apsf'));

function separatee(str){
  for(var i=0; i<str.length;i++){
    for(var x=i+1;x<=str.length;x++){
      if(str[i]==str[x]){
        return false;
      }
    }
  }return true;
}
console.log(separatee('aploie'));