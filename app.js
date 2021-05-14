const user = {
firstName: 'Anastasiia',
age: 28,
isAdmin: true,
email: 'test@test.com',
'user-address':{
  city: 'Stuttgart'
},
skills: ['html', 'css', 'js']
};
let value;
let prop ='skills';

value = user.firstName;
value = user['isAdmin'];
value = user['user-address'];
value = user['user-address'].city;
value = user['user-address']['city'];
value = user[prop][0];

user.firstName = 'Nastya'
value = user.firstName;
user.info = 'Some info';

value = user.info;

user['user-address'].city = 'Novocherkassk';
user['user-address'].country = 'Russland';


console.log(value);
console.log(user);



const obj = {
product: 'iphone'
};

obj.price = 1000;
obj.currency = 'dollar';
obj.details = {};
obj.details.model = '8';
obj.details.color = 'red';

console.log(obj);