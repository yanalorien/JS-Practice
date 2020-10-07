// function mult(a, b) {
//   return a * b;
// }
// console.log(mult(3, 5));

// function greet(name) {
//   if(!name) {
//      return 'Hello world!'
//   }
//   return `Hello ${name}!`
// }
// console.log(greet('Abbas'));
// console.log(greet(''));
// console.log(greet());

//tempF= tempC * 9/5 + 32
// function celciusToFahrenheit(c) {
//   let f = c * 9 / 5 + 32;
//   return Math.round(f);
// }
// console.log(celciusToFahrenheit(29));

// 1+2+3+4+...+n
// function sum(n){
//   let s = 0;
//   let x = 1;
//   while (x <= n){
//     s = s +x;
//     x++;
//   }
//   return s;
// }
// console.log(sum(3));
// console.log(sum(10));
// console.log(sum(100));

// function sum(n){
//   let s = 0;
//   for (let x = 1; x <= n; n++){
//     s = s + x;
//   }
//   return s;
// }
// console.log(sum(3));

// function sum(n) {
//   let s = 0;
//   let x = 1;
//   do {
//     s = s + x;
//     x++;
//   } while (x <= n)
//   return s;
// }
// console.log(sum(3));

// function lastDigit(num) {
//   return num % 10;
// }
// console.log(lastDigit(3235));

//найти последнюю цифру дробного числа:
// function lastDigit(num) {
//   let last = num + '';
//   return +last[last.length - 1]
// }
// console.log(lastDigit(3235.4554));


// function money(salary, bonus) {
//   return bonus? salary * 10 : salary;
// }
// console.log(money(340, true));
// console.log(money(250, false));

// //Если треугольник существует- найти его площадь, если нет, то вывести сообщение
// function triangle(a, b, c) {
//   if (a < b + c && b < a + c && c < a + b) {
//     let p = (a + b + c) / 2;
//     let s = (p * (p - a) * (p - b) * (p - c)) ** 0.5;
//     return s;
//   } else {
//     return 'Error';
//   }
// }
// console.log(triangle(3, 4, 5));
// console.log(triangle(10, 1, 2));

function digitInWords(digit) {
    let name;
    switch(digit) {
        case 0: name = 'Zero'; break;
        case 1: name = 'One'; break;
        case 2: name = 'Two'; break;
        case 3: name = 'Three'; break;
        case 4: name = 'Four'; break;
        case 5: name = 'Five'; break;
        case 6: name = 'Six'; break;
        case 7: name = 'Seven'; break;
        case 8: name = 'Eight'; break;
        case 9: name = 'Nine'; break;
        default: name = 'Error';
    }
    return name;
}
console.log(digitInWords(0));


























