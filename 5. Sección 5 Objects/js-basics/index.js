// Basics
/*
// Object-oriented Programming (OOP)
const circle = {

    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function(){
        console.log('draw');
    }

};

circle.draw(); // Method
*/

// Factory Functions
console.log('**********************************');

function createCircle(radius){

    return {
        radius,
        draw(){
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

// Constructor Functions
console.log('************************************');

// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle3 = new Circle(1);

// Dynamic Nature of Objects
console.log('*****************************');

const circle4 = {
    radius: 1
};

circle4.color = 'red';
circle4.draw = function(){}

console.log(circle4);

delete circle4.color;
delete circle4.draw;

console.log(circle4);

// Constructor Property
console.log('*********************************');

let y = {};

// let y = new Object();

new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3, 4, ...

// Functions are Objects
console.log('**********************************');

function Circle2(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const Circle3 = new Function('radius', `
this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
`);

Circle.call({}, 1, 2, 3);
Circle.call({}, [1, 2, 3]);

const circle5 = new Circle3(1);

// 54. 7- Value vs. Reference Types
console.log('*************************************');

// Value Types: Number, String, Boolean, Symbol, undefined, null
// Reference Types: Object, Function, Array

let w = 10;
let v = w;

w = 20;

console.log(w);
console.log(v);

let w2 = {value: 10};
let v2 = w2;

w2.value = 20;

console.log(w2);
console.log(v2);

let number = 10;

function increase(number){
    number++;
    // console.log(number);
}

increase(number);
console.log(number);

let obj = { value: 10 };

function increase2(obj){
    obj.value++;
}

increase2(obj);
console.log(obj);

// Enumerating Properties of an Object
console.log('*************************************');

const circlee = {
    radius: 1,
    draw(){
        console.log('draw');
    }
}

for(let key in circlee){
    console.log(key, circlee[key]);
}

// Error because circlee is not iterable
// for(let key of circlee){
//     console.log(key);
// }

for(let key of Object.keys(circlee)){
    console.log(key);
}

for(let entry of Object.entries(circlee)){
    console.log(entry);
}

if( 'radius' in circlee) console.log('yes');
if( 'draw' in circlee) console.log('yes');
if( 'color' in circlee) console.log('yes');

// Cloning an Object
console.log('**********************************');

const circleee = {
    radius: 1,
    draw(){
        console.log('draw');
    }
}

const another = {};

for (let key in circleee) {
    another[key] = circleee[key];    
}

console.log(another);

// Another method to copy objects
const another2 = Object.assign({}, circleee);
console.log(another2);

// Another method to copy objects by adding an additional property.
const another3 = Object.assign({
    color: 'yellow'
}, circleee);
console.log(another3);

// Using spred operation
const another4 = { ...circleee };
console.log(another4);

// 58. 11- Math
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math
console.log('*************************************');

console.log(Math.round(1.9));
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));

// 59. 12- String
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String
console.log('***************************************');

// String primitive
const message = ' This is my \'first \nmessage ';

// String object
const anotherString = new String('hi');

console.log(typeof(message));
console.log(typeof(anotherString));
console.log(message.length);
console.log(message[0]);
console.log(message[1]);
console.log(message.includes('my'));
console.log(message.includes('not'));
console.log(message.startsWith('This'));
console.log(message.startsWith('this'));
console.log(message.endsWith('e'));
console.log(message.indexOf('my'));
console.log(message.replace('first', 'second'));
console.log(message.toUpperCase());
console.log(message.toLocaleLowerCase());
console.log(message.trim());
console.log(message.trimStart());
console.log(message.trimEnd());
console.log(message.split(' '));

// Template Literals
console.log('**************************************');

// String primitive
// This looks very bad, for this we have the literal template shown below
const message2 = 'This is my\n' + 
                 '\'first\' message';

console.log(message2);

// Object literal: {}
// Boolean literal: true, false
// String literal: ', ""
// Template literal: ``

const message3 = 
`This si my
'fist' message`;
console.log(message3);

const name = 'John';
const message4 = 'Hi ' + name + ',\n';

const anotherMessage = `Hi ${name} ${ 2 + 3 },

Thank you for joining my mailing list.

Regards,
Mosh`;

console.log(anotherMessage);

// Date
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
console.log('******************************');

const now = new Date();
const date1 = new Date('May 11 2023 09:00');
const date2 = new Date(2023, 4, 11, 9, 0);

console.log(now);
console.log(date1);
console.log(date2);

console.log(now.getDay());
console.log(now.setFullYear(2017));
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());

// Exercise 1- Address Object
console.log('******************************');

let address = {
    street: 'Car. 123 # 34-64',
    city: 'New York',
    zipCode: 10001
};

function showAddress(address){
    for (let key in address){
        console.log(key, address[key]);
    }
}

showAddress(address);

// Exercise- Factory and Constructor Function
console.log('************************************');

let address2 = createAddress('a', 'b', 'c');
let address3 = new Address('a', 'b', 'c');

console.log(address2);
console.log(address3);

// Factory function
function createAddress(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    }
}

// Constructor function
function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

// Exercise 3- Object Equality
console.log('************************************');

let address4 = new Address('a', 'b', 'c');
let address5 = new Address('a', 'b', 'c');
let address6 = address4;

console.log(areEqual(address4, address5));
console.log(areSame(address4, address5));
console.log(areSame(address4, address6));

// Constructor function
function Address2(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address4, address5){
    return address4.street === address5.street &&
           address4.city === address5.city &&
           address4.zipCode === address5.zipCode;
}

function areSame(address4, address5){
    return address4 === address5;
}