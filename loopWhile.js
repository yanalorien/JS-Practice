// Циклы. Работа с числами
// while (condition) {
//   //body
// }

// let x = 2;
// while (x <= 10) {
//   console.log(x);
//   x+=2;
// }

// for (let x = 2; x <= 10; x+=2) {
//   console.log(x);
// }

// let x = 10;
// while (x >= 1) {
//   console.log(x);
//   x--;
// }

// 1 + 2 + 3 + ... + n
// function sum(n) {
//   let s = 0;
//   for (let x = 1; x <= n; x++){
//     s = s + x;
//   }
//   return s;
// }
// console.log(sum(5));

//Задача 1. В небольшом городке население в начале года составляет p0 = 1000 человек.
//Население регулярно увеличивается на 2 процента в год, и более того, 50 новых жителей в год приезжают жить в город.
//Сколько лет нужно городу, чтобы его население стало больше или равно p = 1200 жителей?
// function population(p0, percent, come, p) {
//   let year = 0;
//   while (p0 < p) {
//     p0 = p0 + (p0 * percent / 100) + come;
//     year++;
//   }
//   console.log(p0);
//   return year;
// }

// console.log(population(1000, 2, 50, 1200));

//Задача 2 Найти количество цифр числа не переводя число в строку
// function countDigits(num) {
//   let count = 0;
//   let last;
//   while (num > 0) {
//     last = num % 10;
//     num = (num - last) / 10;
//     count++;
//   }
//   return count;
// }

// console.log(countDigits(53658));

//Найти количество четных цифр числа не переводя число в строку

// function countDigits(num) {
//   let count = 0;
//   let last;
//   while (num > 0) {
//     last = num % 10;
//     num = (num - last) / 10;
//     if (last % 2 === 0) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countDigits(53658));

// function countDigits(num) {
//   let count = 0;
//   let last;
//   for ()
// }



//Задача 3.  Банкомат выдает деньги только купюрами 500, 200, 100, 50, 20, 10 .
//Вы хотите получить n долларов. Найдите минимальное количество купюр, чтобы получить данную сумму.
//Если это невозможно, возвратить -1.

// function atm(n) {
//   if (n % 10 !== 0) return -1;
//   let count = 0;
//   while (n >= 500) {n = n - 500; count++;}
//   while (n >= 200) {n = n - 200; count++;}
//   while (n >= 100) {n = n - 100; count++;}
//   while (n >= 50) {n = n - 50; count++;}
//   while (n >= 20) {n = n - 20; count++;}
//   while (n >= 10) {n = n - 10; count++;}
//   return count;
// }
// console.log(atm(125)); //-1
// console.log(atm(550)); //2
// console.log(atm(1250)); //4
// console.log(atm(880)); //6


// function atm(n) {
//   if (n % 10 !== 0) return -1;
//   let count = 0;
//   let money = [500, 200, 100, 50, 20, 10];
//   for (let bill of money) {
//     while (n >= bill) {
//       n = n - bill;
//       count++;
//     }
//   }
//   return count;
// }

// console.log(atm(125)); //-1
// console.log(atm(550)); //2
// console.log(atm(1250)); //4
// console.log(atm(880)); //6


//Задача 4. Дано число. Можете ли вы округлить его до следующего числа кратного 5?
//  (0 -->0, 2 -->5, 3 -->5, 10-->10, 12-->15, -2--> 0, -5-->-5)
// function roundTo5(n) {
//   while (n % 5 !== 0) {
//     n++;
//   }
//   return n;
// }

// console.log(roundTo5(3));

// console.log(Math.trunc(3.99)); //3 округляет до точки
// console.log(Math.round(3.99)); //4 округляет по правилам математики
// console.log(Math.round(3.99)); //4 округляет вверх
// console.log(Math.round(3.99)); //3 округляет вниз
// console.log((3.5354653).toFixed(2)); //'3.52' возвращает строку числа, округляя по мат правилам, до указанного кол-ва знаков в дробной части



// Задача 4. Дано число. Можете ли вы округлить его до ближайшего числа кратного 5?
//  (0 -->0, 2 -->0, 3 -->5, 10-->10, 12-->10, -2--> 0, -5-->-5)

// function roundTo5(n) {
//   let last = n % 10;
//   if (last === 3 || last === 4 || last === 8 || last === 9) {
//     while (n % 5 !== 0) {
//       n++;
//     }
//   } else {
//     while (n % 5 !== 0) {
//       n--;
//     }
//   }
//   return n;
// }
// console.log(roundTo5(251));

//Дробь задана в виде строки типа “345/55” . Получить строку, содержащую дробь после сокращения.
// 6/4 --> 3/2, 345/55 --> 69/11

function nod(a, b) {
    while (a !== b) {
        if (a > b) a = a - b;
        else b = b - a;
    }
    return a;
}

// console.log(nod(95, 15));

function fract(str) {
    let slash = str.indexOf('/');
    let num1 = +str.slice(0, slash);
    console.log(num1);
    let num2 = +str.slice(slash + 1);
    console.log(num2);
    let n = nod(num1, num2);
    console.log(n);
    num1 = num1 / n;
    num2 = num2 / n;
    return `${num1}/${num2}`;
}
console.log(fract("345/55"));
