//1
const sum = () => {
  if (!params.length) return 0;
  return params.reduce((prev, next) => prev + next);
};

//2


const convertToObject = (num) => ({
  value: num,
  isOdd: Boolean(num % 2)
}); 

