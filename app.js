// 1
let a = 'none';

switch(a) {
  case 'block':
    console.log('block');
    break;
  case 'none':
    console.log('none');
    break;
  case 'inline':
    console.log('inline');
    break;
  default:
    console.log('other');
}

// 2 Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”

let b = 'hidden';
b = b === 'hidden' ? b = 'visible' : b = 'hidden';
console.log(`b: ${b}`);

// 3 
/* Используя if, записать условие:
если переменная равна нулю, присвоить ей 1;
если меньше нуля - строку “less then zero”;
если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).*/


let c = 20;

c = c === 0 ? 1 : c < 0 ? 'less then zero' : c *= 10;
console.log(c);
