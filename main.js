
let number = [84, 263, 33, 161, 93, 51, 8, 32, 63];

let min = number [0];

for (let i = 1 ; i < number.length; i++) {
   
    if (number [i] < min) {

        min = number [i];
    }
}



console.log(min)








// const arr = [7,2,8,1,4,6,3,5]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1 ; j < arr.length; j++)  {

//         if (arr[j] < arr [i]) { 

//             const temp = arr[j]
//             arr[j] = arr[i]
//             arr[i] = temp

//         }


//     }

// }
// console.log(arr);







// let reqem = [32, 53, 31, 11, 90, 21, 83, 32, 63];
// let min = reqem[0];
// let max = reqem[0];
// let indexMin = 0;
// let indexMax = 0;

// for (let i = 1 ; i < reqem.length; i++) {

//     if (reqem [i] < min) {
//         min = reqem[i];
//         indexMin = i;
//     }
//     if (reqem [i] > max) {

//         max = reqem[i];
//         indexMax = i;
//     }
// }


// let temp = reqem[indexMin];

// reqem[indexMin] = reqem[indexMax];
// reqem[indexMax] = temp
// console.log(reqem)














