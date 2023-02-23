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