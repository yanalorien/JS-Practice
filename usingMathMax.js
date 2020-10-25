// Лекция 5. Работа с массивами: Поиск максимума и минимума

//Вернуть первый отрицательный элемент
// let arr = [34, 3, -5, 8, -9, 2];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     console.log(arr[i]);
//     break;
//   }
// }

//Вернуть индекс первого отриц-го элемента
// let arr = [34, 3, -5, 8, -9, 2];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     console.log(i);
//     break;
//   }
// }

// function indexOfNeg(arr) {
//    for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       return i;
//     }
//   }
//   return 'No negative elements';
// }
// let arr = [34, 3, 5, 8, 9, 2];
// console.log(indexOfNeg(arr));

//Поменять местами два элемента массива
// function swap(arr, n, m) {
//   if (n >= 0 && n < arr.length && m >= 0 && m < arr.length) {
//     let temp = arr[n];
//     arr[n] = arr[m];
//     arr[m] = temp;
//     return arr;
//   }
//   return 'invalid index';
// }

// let arr = [3, 300, 5, 8, 900, 2];
// console.log(swap(arr, 1, 40));


//Поиск минимума
// let arr = [7, 2, 4, -9, 10, 0, 15, 5];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min);

//Поиск максимума
// let arr = [7, 2, 4, -9, 10, 0, 15, 5];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

// let a = 9;
// let b = 6;
// let c = 12;
// let min = Math.min(a, b, c);
// console.log(min);


// let arr = [7, 2, 4, -9, 10, 0, 15, 5];
// // console.log(arr);
// // console.log(...arr); //spread operator, представляет массив в виде последовательности чисел
// let min = Math.min(...arr)
// console.log(min);
// let max = Math.max(...arr)
// console.log(max);

// let str = 'hello';
// console.log(...str); //spread operator
// let arr = [...str] // ["h", "e", "l", "l", "o"]
// console.log(arr);


//соединить 2 массива в один
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr = [...arr1, ...arr2]
// console.log(arr); //[1, 2, 3, 4, 5, 6]
//2 cпособ
// let arrrr = arr1.concat(arr2);
// console.log(arrrr);
// let arr3 = [7, 8, 9];
// let arr4 = arr1.concat(arr2, arr3);
// console.log(arr4); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


//Найти сумму элементов массива за исключением наибольшего и наименьшего элементов
//(если таких элементов несколько, отнять одну и ту же величину только один раз).
// let arr = [9, 1, 10, 1, 2, 5, 10];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum - Math.max(...arr) - Math.min(...arr));

//Найти сумму элементов массива за исключением всех наибольших и наименьших элементов
// let arr = [9, 1, 10, 1, 2, 5, 10];
// let sum = 0;
// let min = Math.min(...arr);
// let max = Math.max(...arr);
// for (let el of arr) {
//   if (el === max || el === min) {
//     continue;
//   } else {
//     sum += el;
//   }
// }
// console.log(sum);

//Найти сумму элементов массива за исключением наибольшего и наименьшего элементов
function sumArray(arr) {
    let sum = 0;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    for (let el of arr) {
        sum += el
    }
    return arr.length === 0 ? 0 : sum - max - min;
}
console.log(sumArray([9, 1, 10, 1, 2, 5, 10]));
console.log(sumArray(null));

// let arr = [];
// let max = Math.max(...arr); //-Infinity
// let min = Math.min(...arr); //Infinity
// console.log(max, min);
