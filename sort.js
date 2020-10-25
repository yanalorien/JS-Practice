// Сортировка массива (в цикле и методом sort())

// сортировка методом выбора:
// - по возрастанию
// let arr = [30, 50, 20, 10, 40];
// for (let i = 0; i < arr.length - 1; i++){
//   let min = arr[i];
//   let indMin = i;
//   for (let j = i+1; j < arr.length; j++){
//     if (arr[j] < min) {
//       min = arr[j];
//       indMin = j;
//     }
//   }
// // меняем местами элемент по индексу i и минимальный элемент
//   let temp = arr[i];
//   arr[i] = min;
//   arr[indMin] = temp;
// //  [arr[i], arr[indMin]] = [arr[indMin], arr[i]] // 2й способ перемены мест
// }
// console.log(arr);


// function bubble(arr){
//   let swap = true;
//   while (swap) { //пишем условие для работы цикла
//     swap = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i+1]){
//         [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
//         swap = true;
//       }
//     }
//   }
//   return arr;
// }

// let arr = [30, 50, 20, 10, 40];
// console.log(bubble(arr));



// с помощью метода sort()
// let names = ['Bob', 'anna', 'Alice', 'Sofia'];
// names = names.sort();
// console.log(names); //["Alice", "Bob", "Sofia", 'anna'] строки сортирует в алфавитном порядке

// let arr = [4, 1, 8, 2, 9, 0, 3];
// arr = arr.sort();
// console.log(arr); //[0, 1, 2, 3, 4, 8, 9]

// let arr1 = [41, 1, 18, 32, 9, 0, 3];
// arr1 = arr1.sort();
// console.log(arr1); //[0, 1, 18, 3, 32, 41, 9]


//чтобы отсортировать двухзначные и больше числа нужно использовать внутри sort функцию
// по возрастанию:
// let arr = [4, 1, 8, 2, 9, 0, 3];
// arr = arr.sort((a, b) => a - b) //если разность a И b полож число, то они поменяются местами
// console.log(arr); //[0, 1, 2, 3, 4, 8, 9]

//по убыванию:
// let arr = [4, 1, 8, 2, 9, 0, 3];
// arr = arr.sort((a, b) => b - a);
// console.log(arr); //[9, 8, 4, 3, 2, 1, 0]



// function compare(a, b){
//   return a > b ? 1 : -1; //если функция возвращает полож результат, то сорт сработает
// }

// let arr = [41, 1, 18, 32, 9, 0, 3];
// arr = arr.sort(compare)
// console.log(arr);


//отсортировать вложенные массивы в порядке возрастания чисел
// let arr = [['anna', 10], ['bob', 6], ['inna', 14]]
// arr = arr.sort((a, b) => a[1] - b[1]);
// console.log(arr); //[["bob", 6], ["anna", 10], ["inna", 14]]


// let arr = [[23, 4], [30, 2], [12, 45], [8, 100]];
// arr = arr.sort((a, b) => a[0] - b[0]);
// console.log(arr); //[[8, 100], [12, 45], [23, 4], [30, 2]]


// let arr = ['grapefruit', 'banana', 'pear', 'lime', 'kiwi', 'apple'];
// arr = arr.sort((a, b) => a.length - b.length);
// console.log(arr);


//отстортировать по фамилии
// function compare(a, b){
//   a = a.split(' ')[1];
//   b = b.split(' ')[1];
//   return a > b ? 1 : -1;
// }
// let names = ['Bob Smith', 'Alice Moon', 'Amelia Carter', 'Art Star'];
// // names = names.sort(compare);
// names = names.sort((a, b) => a.split(' ')[1] > b.split(' ')[1] ? 1 : -1)
// console.log(names);


// найти студента с наименьшим возрастом
let students = [{name:"Bob", age:25}, {name:"Sam", age:19}, {name:"Alla", age:24}];
students = students.sort((a, b) => a.age - b.age).map(el => el.age);
// console.log(students[0].age);
console.log(students[0]);





































