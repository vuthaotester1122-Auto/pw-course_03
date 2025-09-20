//3.1
// function multiply (a,b){
//     console.log(`${a}*${b} = ${a*b}`);
// }
// multiply(1,5);
// multiply(6,9);

const { throwDeprecation } = require("process")


// 3.2
// function findMin (a,b,c){
//     if (a<b && a<c){
//         console.log(a);
//     }
//     if (b<a&&b<c){
//        console.log(b);
//     }
//     if (c<a&&c<b){
//        console.log(c);
//     }

// }
// findMin(9,5,6);
// findMin(8,2,9);

3.3
// const students = {
//     name : 'Thao',
//     score : 9
// }
// function threshold(){
//     if (students.score > 8)
//         console.log (students['score']);
// }
// threshold();

2.4
function calculateInterest (principal,rate,year){
    const total = principal + (principal*rate*year)/100;
    console.log(total);
}
calculateInterest(1000000,5,10);

