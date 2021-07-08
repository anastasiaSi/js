/*function processString(string, handler) {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
      newString += handler(string[i]);
  }

  return newString;
}
processString('Hello, easycode!',
  function (symbol) {
      return symbol.toUpperCase();
  });
  processString('Hello, easycode!',
  function (symbol) {
      return symbol + '_';
  });
  processString('Hello, easycode!',
  function (symbol) {
      return symbol.charCodeAt();
  });
  



/*1. Создать две функции и дать им осмысленные названия:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

Первая функция возвращает строку “New value: ” и результат обработки:

firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
“New value: Jhon is 45, Aaron is 20,”
firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются


Подсказка: secondFunc должна быть представлена функцией, которая принимает
один аргумент (каждый элемент массива) и возвращает результат его обработки*/

// 1
function firstFunc(arr, handler) {
  let res = 'New value: ';
  for (let i = 0; i < arr.length; i ++) {
    res += handler(arr[i]);
    
  } 
  return res;
}
const res1 = firstFunc(['my', 'name', 'is', 'Trinity'], function(item) {
  return item[0].toUpperCase() + item.slice(1);
});

const res2 = firstFunc([10, 20, 30], function(item) {
  return item * 10 + ' ';
});

const res3 = firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], function(item){
  return `${item.name} is ${item.age}, ` 
});

const res4 = firstFunc(['abc', '123'], function(item){
  return item.split('').reverse().join('') + ',';
});

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);


function firstFunc(arr, fn) {
  let res = 'New value: ';

  for (let i = 0; i < arr.length; i++) {
    res += fn(arr[i]);
  }

  return res.trim();
}

function handler1(el) {
  return el[0].toUpperCase() + el.slice(1);
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

function handler2(el) {
  return Number(el) * 10 + ', ';
}

console.log(firstFunc([10, 20, 30], handler2) )

function handler3(el) {
  return `${el.name} is ${el.age}, `
}

console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

function handler4(el) {
  return el.split('').reverse().join('') + ', ';
}

console.log(firstFunc(['abs', '123'], handler4));





const isAllNumbers = [2, 3, 4 ,5].every(function(num) {
  return typeof num === 'number';
});

function every(arr, handler) {
 for (let i = 0; i < arr.lenght; i++)
  if (!handler(arr[i])){
    return false;
  }
  return true;
}
const isNum = every([2, 3, 4 ,5], function(num) {
  return typeof num === 'number';
});
console.log(isNum);