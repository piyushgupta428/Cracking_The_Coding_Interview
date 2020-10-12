// function arraynumber(nums){
// var count =0;
//     for(var i=0;i<nums.length;i++){
//         let num3= nums[i].toString().length;
//         //let num2=String(nums[i]);
//         // let num2= nums.map(function(e){return e.toString});
        
//         if(num3 %2 == 0){
//             count++;
//         }
//     }return count;
// }




// //another problem 327 leetcode
function removeElement(nums, val) {
    for(i=0;i<nums.length;i++){
        if(nums[i]===val){
            nums.splice(i,1);
            //nums[i]= 0;
        }
    }return nums;
};
console.log(removeElement([3,2,2,3],3));



// var person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.id;
//     }
//   };
//   console.log(person.fullName());