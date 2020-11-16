// Задачи на построение фигур
// 1. Напишите функцию pattern(n, m) которая
// принимает размеры n, m и возвращает строку,
// содержащую узор: (n звездочек в одном ряду, m рядов)
// **********
// **********
// **********
// **********

// с использованием вложенных циклов
// function pattern(n, m){
//   let s = '';
//   for (let i = 1; i <= m; i++){
//     for (let j = 1; j <= n; j++){
//       s += '*';
//     }
//     s += (i < m) ? '\n' : '';
//   }
//   return s;
// }

// console.log(pattern(5, 20));


// второй способ с методом repeat();
// function pattern(n, m){
//   let s = '';
//   for (let i = 1; i <= n; i++){
//     s = s + '*'.repeat(m)+'\n';
//   }
//   return s.slice(0, -1);
// }
// console.log(pattern(5, 20));


// 3 способ
// function pattern(n, m){
//   let s = ('*'.repeat(m)+'\n').repeat(n);
//   return s.slice(0, -1);
// }
// console.log(pattern(5, 20));

// let s = 'Hello'.repeat(10);
// console.log(s); //"HelloHelloHelloHelloHelloHelloHelloHelloHelloHello"

// let s1 = "Hello\n";
// s1 = s1.repeat(10).slice(0, -1);
// console.log(s1);

// let str = 'summer';
// console.log(str.slice(0, 3)); //"sum"
// console.log(str.slice(0, -1)); //"summe"


// вернуть массив из строк
// function pattern(n, m){
//   let res = [];
//   for (let i = 1; i <= n; i++){
//     res.push("*".repeat(m))
//   }
//   return res;
// }
// console.log(pattern(4, 10));


//2. Напишите функцию drawTriangle(n) которая
// принимает количество строк n и возвращает строку,
// содержащую рисунок:
// *
// **
// ***
// ****

//1 способ
// function drawTriangle(n){
//   let s = '';
//   for (let i = 1; i <= n; i++){
//     for (let j = 1; j <= i; j++){
//       s += '*';
//     }
//     s += '\n';
//   }
//   return s;
// }

// console.log(drawTriangle(4));

//2 способ
// function drawTriangle(n){
//   let s = '';
//   for (let i = 1; i <= n; i++){
//       s += '*'.repeat(i) + '\n';
//   }
//   return s.slice(0, -1);
// }

// console.log(drawTriangle(4));


//перевернутый треугольник
// function drawTriangle(n){
//   let s = '';
//   for (let i = n; i >= 1; i--){
//       s += '*'.repeat(i) + '\n';
//   }
//   return s.slice(0, -1);
// }

// console.log(drawTriangle(4));


// 4. Напишите функцию drawTriangle(n) которая
// принимает ширину треугольника (здесь 7) n и возвращает строку,
//содержащую рисунок:
//     *
//    ***
//   *****
//  *******

// function drawTriangle(n){
//   let s = '';
//   for (let i = 1; i <= n; i+=2){
//     s = s + ' '.repeat((n-i)/2) + '*'.repeat(i) + '\n';
//   }
//   return s.slice(0, -1);
// }
// console.log(drawTriangle(10));


// christmas tree
//     *
//    ***
//   *****
//  *******
//     |

// function tree(n){
//   let s = '';
//   for (let i = 1; i <= n; i+=2){
//     s = s + ' '.repeat((n-i)/2) + '*'.repeat(i) + '\n';
//   }
//   let stHeight = Math.trunc(n/4);
//   for (let i = 1; i <= stHeight; i++){
//     s += ' '.repeat((n - 1)/2) + '|' + '\n'
//   }
//   return s.slice(0, -1);
// }
// console.log(tree(25));


// дана высота n, нарисовать елочку
//     *
//    ***
//   *****
//  *******
// function triangle(n){
//   let width = n * 2 - 1;
//   let s = '';
//   for (let i = 1; i <= width; i+=2){
//     s += ' '.repeat((width - i)/2) + '*'.repeat(i) + '\n'
//   }
//   return s.slice(0, -1);
// }
// console.log(triangle(10));


// Узор из чисел: (n  чисел в строке, m строк)
// 11111
// 22222
// 33333
// 44444
// function pattern(n, m){
//   let s = '';
//   for (let i = 1; i <= n; i++){
//     for(let j = 1; j <= m; j++){
//       s += i;
//     }
//     s += '\n';
//   }
//   return s.slice(0, -1);
// }
// console.log(pattern(4, 5));


//1
//23
//456
//7890
//12345
//678901

// function numTriangle(n){
//   let s = '';
//   let x = 1;
//   for (let i = 1; i <= n; i++){
//     for (let j = 1; j <= i; j++){
//       if (x > 9){
//         x = 0;
//       }
//       s += x; // s += x % 10;
//       x++;
//     }
//     s += '\n';
//   }
//   return s.slice(0, -1);
// }
// console.log(numTriangle(6));


// Walk-down Stairs
// "1 1
// 1 2 2 1
// 1 2 3 3 2 1
// 1 2 3 4 4 3 2 1
// 1 2 3 4 5 5 4 3 2 1
// 1 2 3 4 5 6 6 5 4 3 2 1 "

function stairs(n){
let s = '';
  for (let i = 1; i <= n; i++){ // число строк
    for (let j = 1; j <= i; j++){ // одна строка 123
      s += j + ' ';
    }
    for (let j = i; j >= 1; j--){ // одна строка 123
      s += j + ' ';
    }
    s = s.slice(0, -1);
    s += '\n';
  }
  return s.slice(0, -1);
}
console.log(stairs(6));
