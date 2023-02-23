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

const circle4 = new Circle3(1);