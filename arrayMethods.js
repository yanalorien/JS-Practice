// Методы массивов map(), includes(),
//indexOf(), lastIndexOf(), reverse(), filter(), join()

// map()
// let arr = [2, 4, -1, 7, -9];
// let double = arr.map(el => el*2);
// console.log(double);

// let opposite = arr.map(el => -el);
// console.log(opposite);

// let strings = arr.map(el => el + '');
// console.log(strings);

// let s = ['1', '3', '5'];
// let nums = s.map(el => +el);
// console.log(nums);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //элементы с четными индексами удвоить,
// //с нечетными индексами -  утроить
// let change = arr.map((el, i) => i % 2 === 0? el * 2: el * 3);
// console.log(change);

//четные элементы удвоить, нечетные - изменить знак
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr1 = arr.map(el => el % 2 === 0? el * 2: -el);
// console.log(arr1);

//['1 day', '2days', ,,, '10days']

// function str(num) {
//   return num === 1? '1 day' : `${num} days`;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let strings = arr.map(str);
// console.log(strings);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let strings = arr.map(el => el === 1? '1 day' : `${el} days`);
// console.log(strings);

// reverse()
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr1 = arr.reverse();
// console.log(arr1);

// split();
// let str = 'i like to eat apples';
// let array = str.split(' ');
// console.log(array.length);

// let str = 'i like to eat apples';
// let s = str.split(' ').map(el => el + 'ay').join(' ');
// console.log(s);

// let str = 'i like to eat apples';
// let arr = str.split('e'); //можно удалить буквы 'e'
// console.log(arr);

// let time = '23:15:45';
// let arr = time.split(':').map(el => +el);
// console.log(arr);

// let n = 1234567890;
// let arr = +(n + '').split('').reverse().join('');
// console.log(arr);

// let n = 1234567890;
// //получить массив цифр числа в обратном порядке
// let arr = [];
// while (n > 0) {
//   let last = n % 10;
//   arr.push(last);
//   n = (n - last) / 10;
// }
// console.log(arr);

// let n = 1234567890;
// //получить массив цифр числа
// let arr = [];
// while (n > 0) {
//   let last = n % 10;
//   arr.unshift(last);
//   n = (n - last) / 10;
// }
// console.log(arr);

//let arr = [1, 2, 4, 1, 5, 6, 1, 5];
// console.log(arr.indexOf(1)); //выводит индекс первого попавшегося элемента
// console.log(arr.lastIndexOf(1)); //выводит индекс последнего попавшегося элемента
// console.log(arr.indexOf(10)); // если элемент не существует, возвращает -1

// есть ли такой элемент в данном массиве
// function isInclude(arr, item) {
//   return arr.indexOf(item) !== -1;
// }
// let arr = [1, 2, 4, 1, 5, 6, 1, 5];
// console.log(isInclude(arr, 4));

//является ли элемент уникальным?
// function isUnique(arr, el) {
//   return arr.indexOf(el) === arr.lastIndexOf(el) && arr.indexOf(el) !== -1;
// }
// let arr = [1, 2, 4, 1, 5, 6, 1, 5];
// console.log(isUnique(arr, 10));

//includes();
// let arr = [1, 2, 4, 1, 5, 6, 1, 5];
// console.log(arr.includes(1));
// console.log(arr.includes(100));

//filter()
// let arr = [1, 2, 4, 1, 5, 6, 1, 5];
// // отобрать все четные элементы
// let even = arr.filter(el => el % 2 === 0) // если true, то этот элемент проходит фильтр
// console.log(even);

// let positive = arr.filter(el => el > 0);
// console.log(positive);

//найти максимальный четный элемент массива
// let arr = [2, 101, 3, 1, 0, -1, 20, 3];
// let max = Math.max(...arr.filter(el => el % 2 === 0));
// console.log(max);

//получить массив элементов с нечетными индексами
// let arr = [2, 101, 3, 1, 0, -1, 20, 3];
// let oddIndex = arr.filter((el, i) => i % 2)
// console.log(oddIndex);

// let text = 'I see a big monkey and a small rabbit';
// //количество слов длиной 3
// let arr = text.split(' ');
// let shortWords = arr.filter(el => el.length === 3)
// console.log(shortWords);

let a = ["i", "see", "a", "big", "monkey", "and", "a", "small", "rabbit"]
//отобрать слова начинающиеся с гласной
function startWithVowel(str){
    let vowels = 'aeuio'
    return vowels.includes(str[0]);
}
let wordsVowels =  a.filter(startWithVowel);
console.log(wordsVowels);








