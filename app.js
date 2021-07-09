const rectangle = {
  width: 35, 
  height:4, 
  getSquare() {
    return this.width * this.height;
  }};

  console.log(rectangle.getSquare());
  //2
  const price = {
    price: 10,
    discount: '15%',
    getPrice() {
      return this.price;
      
    },
    getPriceWithDiscount() {
      const discount = parseFloat(this.discount);
      const priceWithDiscount = this.price - (this.price * (discount / 100));
      return priceWithDiscount;
    }};

 //3
const heightPlus = {
  height: 10,
  sum(){
    this.height += 1;
    return this.height;
  }
}

//4

const numerator = {
  value: 1,
  double() {
    this.value *= 2;
    return this;
  },
  plusOne() {
    this.plusOne += 1;
    return this;
  },
  minusOne() {
    this.minusOne -= 1;
    return this;
  },
  }
  numerator.double().plusOne().minusOne();
  console.log(numerator.value);
  
  //5 - 6
  let product1 = {
    price : 4,
    counts: 100,
    getPrice(){
      return this.price * this.counts;
    } 
  }

  let product2 = {
    price : 5,
    counts: 20,
  }
product1.getPrice.call(product2);
console.log(product1.getPrice.call(product2));

//7 

let sizes = {
  width: 5, 
  height: 10
},
getSquare = function () {
  return this.width * this.height
};
getSquare.call(sizes);
console.log(getSquare.call(sizes));

//8 
let element = {
  height: 25,
  getHeight: function () {
    return this.height;
  }
  };
  
let getElementHeight = element.getHeight.bind(element);
getElementHeight(); // undefined
console.log(getElementHeight());

  