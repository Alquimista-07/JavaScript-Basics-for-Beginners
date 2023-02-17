let name = 'Ariadna';

console.log(name);

// Rules
//
// Cannot be a reseved keyword: le, if, for, etc
// Shoul be meaningful: a, b, x, etc.
// Cannot start with a number: 1name
// Cannot contain a space o hyphen (-)
// Are case-sensitive

let firstName = 'Mosh', lastName = 'Hamedani';

let firstName2 = 'Mosh';
let lastName2 = 'Hmedani'; 

// Variable
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

// Constant
const interestRate2 = 0.3;
//interestRate2 = 1;
console.log(interestRate2); // Error: you can't change a constant

// Primitive Types: String, Number, Boolean, undefined, null
let name3 = 'Mosh';  // String literal
let age = 30; // Number literal
let isApproved = true; // Boolean leteral (true or false)
let firstName3 = undefined; // undefined
let selectedColor = null; // null

// Dynamic Typing
let name4 = 'Mosh';
console.log(typeof(name4)); // String

name4 = 4;
console.log(typeof(name4)); // Number

// Objects - (Reference Types: Objects, Array, Function)
let person = { 
    name: 'Mosh',
    age: 30
};

console.log(person);
console.log(person.name);
console.log(person.age);

// Dot Notation
person.name = 'John';

console.log(person);
console.log(person.name);

// Backet Notation
person[ 'name' ] = 'Mary'
console.log(person.name);

let selection = 'name';
person[selection] = 'Mary';

console.log(person.name);