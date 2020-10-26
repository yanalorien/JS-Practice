// Лекция 4. Массивы. Циклы по массиву

// const arr = [4, 1, 5, -6, 0, 12, -7];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[arr.length -1]);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }


// •	сумма элементов
// const arr = [4, 1, 5, -6, 0, 12, -7];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// •	произведение элементов
// const arr = [4, 1, 5, -6, 10, 12, -7];
// let product = 1;
// for (let i = 0; i < arr.length; i++) {
//   product *= arr[i];
// }
// console.log(product);

// •	сумма четных элементов
// const arr = [4, 1, 5, -6, 10, 12, -7];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     sum  += arr[i];
//   }
// }
// console.log(sum);

// •	количество нечетных элементов
// const arr = [4, 1, 5, -6, 10, 12, -7];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 !== 0) {
//     sum  += arr[i];
//   }
// }
// console.log(sum);

// •    количество чисел в смешанном массиве
// const arr = ['a', 12, true, -5, 'hello', [], {}];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === 'number') {
//     count++;
//   }
// }
// console.log(count);

// •	сумма элементов с четными индексами
// const arr = [4, 1, 5, -6, 10, 12, -7];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 === 0) {
//     sum  += arr[i];
//   }
// }
// console.log(sum);

// •	количество целых чисел массива
// const arr = [4, 1.5, 5, -6.69, 10, 12.2, -7.5];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 1 === 0) {
//     count++;
//   }
// }
// console.log(count);

// •	количество элементов, являющихся квадратами целых чисел
// const arr = [4, 5, 9, -6, 36, 49, -7];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (Math.sqrt(arr[i]) % 1 === 0) {
//     count++;
//   }
// }
// console.log(count);

//  Заполнение массива:

//• получить массив [0,1,2,3,4,5,6,7,8,9,10]
// let arr = [];
// for (let x = 0; x <= 10; x++) {
//   arr.push(x);
// }
// console.log(arr);

//• получить массив [1,2,3,4,5,6,7,8,9,10]
// let arr = [];
// for (let x = 1; x <= 10; x++) {
//   arr.push(x);
// }
// console.log(arr);

//• получить массив [2, 4, 6, 8, 10]
// let arr = [];
// for (let x = 2; x <= 10; x+=2) {
//   arr.push(x);
// }
// console.log(arr);

//• получить массив [-1, 2, -3, 4, -5, 6, -7, 8,-9, 10]
// let arr = [];
// for (let x = 1; x <= 10; x++) {
//   if (x % 2 !== 0) {
//     arr.push(-x);
//   } else {
//     arr.push(x);
//   }
// }
// console.log(arr);


// Изменение массива:

// •	изменить знак всех элементов
// const arr = [4, 5, 9, -6, 36, 49, -7];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = -arr[i];
// }
// console.log(arr);

// •    отрицательные элементы сделать положительными
// const arr = [4, 5, 9, -6, 36, 49, -7];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     arr[i] = -arr[i];
//   } else {
//     arr[i] = arr[i];
//   }
// }
// console.log(arr);

// •	четные возвести в квадрат, нечетные заменить нулем
const arr = [4, 5, 9, -6, 36, 49, -7];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        arr[i] = arr[i] ** 2;
    } else {
        arr[i] = 0;
    }
}
console.log(arr);
