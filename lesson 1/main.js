// Bài 1: Cho 2 mảng sau: arr1 = [1,2,4,5,6]; arr2 = [1, 6, 8, 9, 0].
// Hãy lọc ra một mảng mới chứa 2 phần tử trùng nhau của 2 mảng cho bên trên. (sử dụng filter() )
let arr1 = [1,2,4,5,6]; 
let arr2 = [1, 6, 8, 9, 0];
let arr = [...arr1,... arr2]
console.log(arr)
let Newarr = []
Newarr = arr.filter(function(value){
    return Newarr.includes(value) ? '' : Newarr.push(value)
})
console.log(Newarr)






// Bài 3: Cho array sau: m = [1,2,4,5,6,7]; n = [3,5,675,8,96].
//  Hãy viết một hàm, duyệt cả các mảng m và n; loại bỏ đi phần tử có giá trị bằng 1, 8,10,96,7.
// let m = [1,2,4,5,6,7];
// let n = [3,5,675,8,96];
// let arr = [...m , ...n]
// console.log(arr)
// let mangmoi = arr.filter(function(value){
//     if (value == 1){
//         return false;
//     }else if(value == 8){
//         return false;
//     }else if(value==10){
//         return false;
//     }else if(value==96){
//         return false;
//     }else if(value==7){
//         return false;
//     }return true;
// })
// console.log(mangmoi)
