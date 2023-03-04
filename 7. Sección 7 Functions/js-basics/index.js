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

// Arguments
console.log('************************************************');

function sum(a, b){
    console.log(arguments);
    return a + b;
}

function sum2(){
    let total = 0;
    for(let value of arguments){
        total += value;
    }
    return total;
}

console.log(sum(1));
console.log(sum());
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5));

//----------------------------------------
console.log(sum2(1, 2, 3, 4, 5, 10));

// The Rest Operator
console.log('********************************************');

// We use the rest operator which in writing is equal to the operator 
// spred (...) but we must not confuse it since the spred is used with arrays.
function sum3(discount, ...prices) {
    console.log(prices);
    const total =  prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}
console.log(sum3(0.1, 20, 30));

function sum4(args) {
    console.log(args);
}
sum4(1,2,3,5,10);