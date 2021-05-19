/* while, do while, for, for of, for in

let i = 10;
while(i--){
  console.log(i);
}

do {
  console.log('action');
} while(i > 0); 

for (let i = 0; i< 10; i++){
  console.log(i);
} 

let str = 'Hello';
let res = '';

for (let i = 0; i < str.length; i++ ) {
  res += str[i] + '*';
}
 console.log(res); 

 let colors = ['while', 'black', 'yellow', 'orange'];

 for (i = 0; i < colors.length; i++) {
   console.log(colors[i]);
   colors[i] = colors[i].toUpperCase();
 }
 console.log(colors);

 for (let i = 0; i< 10; i++){
  if(i === 5){
    break;
  }
   if(i === 6){
     continue;
   }
  console.log(i);
} 


const users = [
  {
    name: 'Anastasiia',
    age: 28
  },
  {
    name: 'Dmitrii',
    age: 32
  },
  {
    name: 'Julia',
    age: 18
  },
  {
    name: 'Natalia',
    age: 52
  }
];

const usersObj = {};

for (let i = 0; i < users.length; i++) {
  console.log(users[i].name);
  usersObj[users[i].name] = users[i];
}
console.log(usersObj['Anastasiia']); 

// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.

let str = 'i am in the easycode';
let res = '';

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
  if (str[i - 1] === ' ' || i === 0) {
    console.log('Это пробел ! ! !');
    res += str[i].toUpperCase();
  } else {
    res += str[i];
  }
  ;
}
console.log(res); 

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

const str = 'tseb eht ma i';
let res = '';

for (let i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
  res += str[i];
};
console.log(res); 


//3. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.



const f = 10;
let res = 1;

for (let i = 0; i < f; i++){
  res = res * (f - i);
}

console.log(f + '! = ' + res); 


3.1 
let res = 1;

for (let i = 1; i <= 10; i++) {
  res *= i;
}
 
// 4.  На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let str = 'JavaScript is a pretty good language';
let res = '';

for (let i = 0; i < str.length; i++) {
  if (str[i - 1] === ' ' || i === 0) {
    res += str[i].toUpperCase();
  } else {
    res += str[i];
    res = res.replace(/\s/g, '');
  }
  ;
}
console.log(res); 

// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let value;

for(let value of myArray) {
  if (value%2)
  console.log(value);
}

6. Дан объект:
let list = {
     name: ‘denis’,
     work: ‘easycode’,
     age: 29
}
Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.


let list = {
  name: 'denis',
  work: 'easycode',
  age: 29
}

for (let item in list) {
  //console.log(list[item]);
  if (typeof(list[item]) === 'string')
  //console.log(typeOf.list[item]);
  list[item] = list[item].toUpperCase();
}
console.log(list); */


