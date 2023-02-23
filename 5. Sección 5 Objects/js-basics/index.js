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