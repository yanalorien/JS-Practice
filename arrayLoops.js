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

//Assume "#" is like a backspace in string.
//This means that string "a#bc#d" actually is "bd"
//Your task is to process a string with "#" symbols.
//Examples:  "abc#d##c"      ==>  "ac"
function cleanString(s) {
    const result = []
    for (const c of s) {
        if (c === "#") {
            result.pop()
        } else {
            result.push(c)
        }
    }
    return result.join("")
};




function sumOfFractionals(n){
    let sum = 1;
    for (let i = 2; i <= n; i++) {
        sum += 1/i;
    }
    return +sum.toFixed(2);
}
//Дано число n > 0. Найдите сумму: 1 + 1/2 + 1/3 + 1/4 + ... + 1/n
//Напишите функцию с именем sumOfFractionals, которая принимает число n
//и возвращает сумму дробей, у которых в числителе 1, а в знаменателе - числа от 1 до n.
//В решении используйте цикл for. Сумму округлите до двух десятичнных знаков.



//Your task is to write a function which returns the sum of following series upto nth term(parameter).
//Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
//Rules: You need to round the answer to 2 decimal places and return it as String.
//If the given value is 0 then it should return 0.00
//You will only be given Natural Numbers as arguments.

function SeriesSum(n){
    let sum = 0;
    let x = 1;
    for (let i = 0; i < n; i++){
        sum += 1 / x;
        x += 3;
    }
    return sum.toFixed(2);
}

//Find the sum of all multiples of n below m
//Keep in Mind: n and m are natural numbers (positive integers)
//m is excluded from the multiples
// 1 способ
function sumMul(n,m){
    let sum = 0;
    if (m < n || m === 0) return 'INVALID';
    for (let i = 1; i * n < m; i++){
        sum += i * n;
    }
    return sum;
}
//2 способ
function sumMul(n,m){
    if (n >= m) return "INVALID";

    var sum = 0;
    for (var i = n; i < m; i+=n) {
        sum += i;
    }
    return sum;
}


// Given a number n, draw stairs using the letter "I",
//n tall and n wide, with the tallest in the top left.
//For example n = 3 result in: "I\n I\n  I"
function drawStairs(n) {
    let str = '';
    let x = ' ';
    for (let i = 1; i <= n; i++) {
        if (i === n) return str += 'I';
        str += "I\n";
        for (let y = 1; y <= i; y++) {
            str += x;
        }
    }
    return str;
}
