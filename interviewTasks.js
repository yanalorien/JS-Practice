// // поменять гласные местами
let str = "Hello world";

function swapVowels(str){
  let vowels = 'aeoiuAEOIU';
  let arr = [];
  let swapped = [];
  for (let i = 0; i < str.length; i++){
    if (vowels.includes(str[i])) {
      arr.push(str[i]);
    }
  }
  for (let i = 0; i < str.length; i++){
    if (vowels.includes(str[i])) {
      swapped.push(arr.pop());
    } else {
      swapped.push(str[i])
    }
  }
  return swapped.join('');
}
console.log(swapVowels(str));

// массив чисел полож и отриц, исключить все отрицательные числа
let arr = [-5, 3, 5, -8, 4, -10];
function numbers(arr){
  return arr.filter(el => el > 0);
}
console.log(numbers(arr));

// str, меняем регистр
let str = 'spongebob';
function changeCase(str){
  let str1 = '';
  for (let i = 0; i < str.length; i++){
    let a = Math.random();
    if (a >= 0.5) {
      str1 += str[i].toLowerCase();
    } else {
      str1 += str[i].toUpperCase();
    }
  }
  return str1;
}
console.log(changeCase(str));


// str отдать в посчитанном виде объект, который возвращает сколько раз
//каждая буква встречается
let str = 'Javascript and Java';
function countChar(){
  let obj = {};
  str = str.toLowerCase().replace(/ /g, '');
   for (let char of str){
     if (obj[char]) {
       obj[char]++;
     } else {
       obj[char] = 1;
     }
   }
  return obj;
}
console.log(countChar(str));


//строка из разных слов, нужно определить есть ли повторяющиеся слова,
//игнорить регистр, вернуть тру или фолс (вернуть количество повторений)
let words = 'apple Banana lemon abanAna watermelon APPLE pear';

function hasDuplicates(words){
    words = words.toLowerCase().split(' ');
    let duplicates;
    duplicates = words.filter(el => words.indexOf(el) !== words.lastIndexOf(el));
    return duplicates.length >= 2;
}
console.log(hasDuplicates(words));

// последовательность от 1 до 100. Найти какое число пропущено.
// (Можно найти сумму и отнять от суммы чисел от 1 до 100 (5050))
function missingNumbers(arr){
  const mn = [];
  for (let i = 1, j = 0; i <= 100; i++){
    if (arr[j] === i) j++;
    else mn.push(i)
  }
  return mn;
}
console.log(missingNumbers([1, 2, 5, 99]));