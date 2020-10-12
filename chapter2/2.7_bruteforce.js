// LEETCODE 160 copy and paste the function on that question


// var getIntersectionNode = function(headA, headB) {
//     if(headA == null || headB == null){return null;}
    
//     let ARunner = headA;
//     let BRunner = headB;
    
//     while(ARunner != BRunner){
//         if(ARunner == null){
//             ARunner = headB;
//         }else{
//             ARunner = ARunner.next;
//         }
//         if(BRunner == null){
//             BRunner = headA;
//         }else{
//             BRunner = BRunner.next;
//         }   
//     }
//     return ARunner;
// }


var getIntersectionNode = function(headA, headB) {


    if (headA == null || headB == null){
        return null;
    }

    let aslow = headA;
    let bslow = headB;

    while(aslow != bslow){
        if(aslow == null){
            aslow = headB;
        }else{
            aslow=aslow.next;
        }
        if(bslow== null){
            bslow = headA;
        }else{
            bslow = bslow.next;
        }
    }
    return aslow;
};