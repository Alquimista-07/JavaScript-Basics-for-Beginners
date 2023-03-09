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

// Default Parameters
console.log('**************************************');

function interest(principal, rate = 3.5, years){
    //years = years || 5;
    return principal * rate / 100 * years;
}

console.log(interest(10000, undefined,  5));

// Getters and Setters
console.log('***************************************');

const person = {
    firstName: 'Mosh',
    lastName: 'Hemadani',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'John Smith';

// getters => access properties
// setters => change (mutate) then

console.log(person);

// Try and Catch
console.log('**************************************');

const person2 = {
    firstName: 'Mosh',
    lastName: 'Hemadani',
    set fullName(value) {

        if(typeof value !== 'string'){
            throw new Error('Value is not a string');
        }
        const parts = value.split(' ');
        if(parts.length !== 2){
            throw new Error('Enter a first and last name');
        }

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person2.fullName = '';
}
catch(err){
    alert(err);
}

console.log(person2);

// Local vs. Global Scope
console.log('*********************************************');

const color = 'red'; // global scope

function start() {
    const message = 'hi'; // Local scope
    const color = 'blue'; // Local
    console.log(color);

    if(true){
        const another = 'bye';
    }
    
    for( let i = 0; i < 5; i ++){
        console.log(i);
    }
    // console.log(i); // Error i is not defined
}

function stop() {
    const message = 'bye'; // Local scope
}

start();

// Let vs Var
// Note: When we use var the scope is not limited to the block 
// and this can cause problems
console.log('********************************************');

function start2(){
    for( var i = 0; i < 5; i++ ){
        console.log(i);
        if(true){
            let color2 = 'red';
        }
    }

    console.log(i);
    // console.log(color2); // Error caused by scope
}

// var => function-scoped
// ES6 (ES2015): let, const => block-scoped

start2();

// The This Keyword
console.log('***************************************');

// method -> obj
// function -> global (window, global)

//----------------------------
// method -> obj
//----------------------------
const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.stop = function() {
    console.log(this);
}

// video.play();
video.stop();

//------------------------------------------------
// function -> global (window, global)
//------------------------------------------------
function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('b'); // {}

//------------------
const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag){
            console.log(this, tag);
        }, this);
    }
};

video2.showTags();