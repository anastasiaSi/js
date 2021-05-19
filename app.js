/*
function sayHello(firstName, lastName) {
  console.log(firstName, lastName);
  console.log('Hello world');
  return `Hello ${firstName} ${lastName}`;
}
let res1 = sayHello('Nastya', 'Simonova');
let res2 = sayHello('Nastya', 'Simonova');
console.log(res2);

function multiply() {
  if (arguments.length === 0) return 0;
  let res = 1;
  for (i = 0; i < arguments.length; i++){
    res *= arguments[i];
  }

  console.log(res);
  return res;
};
multiply(2, 4, 5, 6);
multiply();


function reverseString(str) {
  let string = String(str);
  let res = '';
  for (let i = string.length - 1; i >= 0; i--){
    res += string[i];
  } 
  console.log(res);
  return res; 
};

reverseString('test');
reverseString(' ');
reverseString(null);
reverseString(undefined);
reverseString();


function getCodeStringFromText(str) {
  let res = '';
    for (i = 0; i < str.length; i ++) {
      console.log(str[i]);
      res += str[i].charCodeAt() + ' ';
      
      
    }
    console.log(res);
    return res.trim();
    
}

getCodeStringFromText("hello");*/

function guessTheNumber(num) {
  let number = Number(num);

  if (typeof number !== "number" || isNaN(number)) return new Error("Please provide a valid number");
  if (number < 0 || number > 10) return new Error("Please provide number in range 0 - 10");

  let random = Math.ceil(Math.random() * 10);

  if (random === number) return "You win!";

  return `You are lose, your number is ${number}, the random number is ${random}`;
}

console.log(guessTheNumber(5)); 
