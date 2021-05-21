/*
function getArray(num){
  let arr = [];
  for  (i = 1 ; i <= num; i++) {
    arr.push(i);
    
  }
  return arr;
}
console.log (getArray (10));

getArray(10);


function doubleArray(arr) {
 let res = [];
 res = arr.concat(arr);
 console.log(res);
 return res;
}

doubleArray([1,2,3]) // [1,2,3,1,2,3] 

function changeCollection() {
  let res = [];

  for (let i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      const elements = arguments[i].slice();
      elements.shift();
      res.push(elements)
    }
  }
  return res;
}

console.log(changeCollection([1,2,3])) */

const users = [
  {
    "_id": "5e36b779dc76fe3db02adc32",
    "balance": "$1,955.65",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "name": "Berg Zimmerman",
    "gender": "male"
  },
  {
    "_id": "5e36b779d117774176f90e0b",
    "balance": "$3,776.14",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "name": "Deann Winters",
    "gender": "female"
  },
  {
    "_id": "5e36b779daf6e455ec54cf45",
    "balance": "$3,424.84",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "name": "Kari Waters",
    "gender": "female"
  }
]


function filterUsers(arr, key, value) {

  let res = [];
  if (!Array.isArray(arr)) return new Error('Это не массив');
  if (typeof key !== "string" || key === '') return new Error('Входные данные не верны');
  if (value === undefined || value === null) return new Error('Данные не верны, введите число');

  for (i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      res.push(arr[i])
    }
  }

  return res;
}

console.log(filterUsers(users, "age", 36))