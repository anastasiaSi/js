/*let a = 0 || 'string'; // string - || находит первое истинное значение
console.log('a =', a);
let b = 1 && 'string'; // string - && все операнды были истинными, возвращает последний.
console.log('b =', b);
let c = null || 25; // 25 -|| находит первое истинное значение
console.log('c = ', c); 
let d = null && 25;// null - если первый операнд ложный, второй игнурируется
console.log('d = ', d);
let e = null || 0 || 35; //35 -|| находит первое истинное значение
console.log('e =', e);
let f = null && 0 && 35; //null  - если первый операнд ложный, остальные игнурируется
console.log('f =', f);*/


let a = 12 + 14 + '12'; // 2612 - особенность бинарного плюса 
console.log('a =', a);
let b = 3 + 2 - '1'; // 4 - минус преобразует строку в число
console.log('b =', b);
let h = '3' + 2 - 1 //31 - особенность бинарного плюса
console.log('h =', h);
let c = true + 2; //3 - true = 1
console.log('c =', c); 
let d = +'10' + 1;//11  - унарный плюс преобразует строку в число
console.log('d =', d); 
let e = undefined + 2;// NaN - undefined не равен нулю и это не мат. действие
console.log('e =', e);
let f = null + 5;//5 - null = 0
console.log('f =', f);
let g = true + undefined; // NaN - undefined не равен нулю и это не мат. действие
console.log('g =', g);


/*
1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”. 

let value = 'hidden';

if (value === 'hidden'){
  console.log(value = 'visible');
} else {
  console.log(value = 'hidden');
} 
*/



/*2. Используя if, записать условие:
если переменная равна нулю, присвоить ей 1;
если меньше нуля - строку “less then zero”;
если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).*/

let value = 5;
if (value === 0) {
  console.log(value = 1);
} else if (value < 0) {
  console.log(value = 'less then zero');
} else if (value >0) {
  console.log(value *=10);
}

/*3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.*/

let car = { 
  name: 'Lexus', 
  age: 10, 
  create: 2008, 
  needRepair: false 
};

if (car.age > 5) {
  console.log('Need Repair');
  car.needRepair = true;
  console.log(car);
} else {
  car.needRepair = false;
  console.log(car);
}

/* 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

let item = { 
  name: 'Intel core i7', 
  price: '100$',
  discount: '15%'
};

let discount = parseFloat(item.discount);
let price = parseFloat(item.price);
let check = !isNaN(discount) && !isNaN(price);

if (check) {
  console.log('Цена со скидкой ', item.priceWithDiscount = price - price/100 * discount);
  console.log(item);
} else {
  console.log('price = ', item.price);
};*/

/*5. Дан следующий код:

Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено. */

let product = {
    name: 'Яблоко',
    price: '10$'
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена
let price = parseFloat(product.price);

if (price >= min && price <= max) {
  console.log(product.name);
} else {
  console.log('товаров не найдено');
}