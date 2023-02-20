// Arithmetic Operators

let x = 10;
let x2 = 10;
let y = 3;
let y2 = 3;

console.log('-----------------------------');
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / 7);
console.log(x % 7);
console.log(x ** y);
console.log('-----------------------------');

// Increment operators (++)
console.log('*****************************');
console.log(++x); // -> 11
console.log('*****************************');

console.log('*****************************');
console.log(x2++);
console.log(x2); //-> 11
console.log('*****************************');

// Decrement operators (--)
console.log('*****************************');
console.log(--y);
console.log('*****************************');

console.log('*****************************');
console.log(y2--);
console.log(y2);
console.log('*****************************');

// Assignment Operators
let a = 10;
let a2 = 10;

console.log(a = a + 5);
console.log(a += 5);

console.log(a2 = a2 * 3);
console.log(a2 *= 3);

console.log('*****************************');

// Comparison Operators
let b = 1;

console.log(b > 0);
console.log(b >= 1);
console.log(b < 1);
console.log(b <= 1);

console.log('------------------------------');

// Equality
console.log(b === 1);
console.log(b !== 1);