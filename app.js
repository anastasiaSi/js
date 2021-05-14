/* 1. Получить первую и последнюю буквы строки
let string = 'some test string';
let first;
let last;
first = string[0];
last = string[string.length - 1];
console.log(first, last);*/

/* 2. Сделать первую и последнюю буквы в верхнем регистре
let string = 'some test string';
let first;
let last;
first = string[0];
first = first.toLocaleUpperCase();
last = string[string.length - 1];
last = last.toLocaleUpperCase();
console.log(first, last);
*/

/*3. Найти положение слова ‘string’ в строке
let string = 'some test string';
let value;

value = string.indexOf('string') ;
console.log(value);
*/
/*4. Найти положение второго пробела (“вручную” ничего не считать)
let string = 'some test string';
let value;
value = string.lastIndexOf(' ');
console.log(value);
*/

/* 5. Получить строку с 5-го символа длиной 4 буквы
let string = 'some test string';
let value;
value = string.substr(5, 4);
console.log(value);
*/
/*6. Получить строку с 5-го по 9-й символы
let string = 'some test string';
let value;
value = string.slice(5, 9);
console.log(value);
*/
/*7. Получить новую строку из исходной путем удаления последних 6-и символов
//(то есть исходная строка без последних 6и символов)
let string = 'some test string';
let value;
value = string.slice(0, -6);
console.log(value);
*/
//8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
//содержаться текст “2016”

let a = 20;
let b = 16;
let string;

a = String(a);
string = a + b;
console.log(string);
console.log(typeof string);

