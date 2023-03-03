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