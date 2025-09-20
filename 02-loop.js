// 2.1
// let total = 0;
// for (i=1 ;i<=100 ;i++){
//     total = (total + i)
// }
// console.log(total);


// 2.2
// for (i=2 ;i<9 ;i++) {
//     for (j=1 ;j<=10 ;j++){
//         console.log(`${i}*${j})= ${i*j}`) // ${} : lấy giá trị trong chuỗi và phải dùng (``)
//     }
// }

// 2.3
// let arr_so_le = [];
// for (i = 1;i <=99;i++) {
//     if (i % 2 == 1){
//         arr_so_le.push(i);
//     }
// }
// console.log(arr_so_le);

// 2.4
// for (i = 1 ; i<=10 ;i++){
//     console.log(`user${i}@example.com`);
// }


2.5
const doanhThu = [{month : 1, total: 10},
{month: 2, total: 20},
{month: 3, total: 30},
{month: 4, total: 40},
{month: 5, total: 50},
{month: 6, total: 60},
{month: 7, total: 70},
{month: 8, total: 80},
{month: 9, total: 90},
{month: 10, total: 100},
{month: 11, total: 110},
{month: 12, total: 120}
];

let total = 0;
for (i = 0 ; i < 12 ; i++){
    total = (total + doanhThu[i].total);
}
console.log(total);