function onedit(str1, str2){
var maxlength = Math.max(str1.length, str2.length);
var edit=1;
var absvalue = Math.abs(str1.length - str2.length);

if(absvalue > edit){
    return false;
}
for(var i=0,j=0; i< maxlength || j< maxlength;i++,j++){
var p=str1[i];
var q=str2[j];
if(p!==q){
    edit--;
    if(edit<0){
        return false;
    }
    //insert
    if(p===str2[j+1]){
        j++;
        console.log(q + ' was inserted');
    }else if(str1[i+1]===q){//remove
        i++;
        console.log(p + ' was removed');
    }
}
}
return true;
}console.log(onedit('ple','pale'));