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