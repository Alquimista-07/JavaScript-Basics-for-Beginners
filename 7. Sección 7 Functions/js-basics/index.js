// Function Declarations vs. Expressions

// Function Declaration
function walk() {
    console.log('walk');
}

// Anonymous Function Expression
let run = function() {
    console.log('run');
};

// Named Function Expression
let run2 = function walk () {
    console.log('run');
};

let move = run;

run();
move();

// Hoisting
console.log('**************************************');

walk2(); // Run Successfully

// Function Declaration
function walk2(){
    console.log('walk 2');
}

// Function Expression
// run3(); // Error because at this point it is not yet defined

const run3 = function(){
    console.log('run 3');
};