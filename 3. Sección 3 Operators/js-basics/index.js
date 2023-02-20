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

// Equality Operators
// Strict Equality (Type + value)
console.log(b === 1); // -> true
console.log(b === '1'); // -> false

console.log(b !== 1);

// Lose Equality (Value)
console.log(1 == '1'); // -> true
console.log('1' == '1'); // -> true
console.log(true == 1); // -> true
console.log(true == 0); // -> false


// Ternary Operators
console.log('********************************');

// If a costumer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);

// Logical Operators with Non-booleans
console.log('**********************************');

// Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && true);
console.log(false && true);
console.log(true && false);

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
let highIncome2 = true;
let goodCreditScore2 = false;
let eligibleForLoan2 = highIncome2 || goodCreditScore2;

console.log('Elegible', eligibleForLoan2);

// Logical NOT (!)
let applicationRefuse = !eligibleForLoan2;

console.log('Application Refused', applicationRefuse);

// Logical Operators with Non-Booleans
console.log('-------------------------------------------');
// Falsy (false)
// undefined, null, 0 , false, '', NaN

// Anything that is not Falsy -> Truthy

// Short-circuiting 

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);

// BitWise Operators
console.log('*********************************************');
// 1 = 00000001
// 2 = 00000010
// Result = 00000011
console.log(1 | 2); // Bitwise OR

// 1 = 00000001
// 2 = 00000010
// Result = 00000000
console.log(1 & 2); // Bitwise AND

// Example
// Access Control System (Read, Write, Execute)
// 00000100 -> Read Only
// 00000010 -> Write Only
// 00000001 -> Execute Only

const readPermission = 4;
const writePermision = 2;
const executePermission = 1;

let myPermission = 0;

myPermission = myPermission | writePermision;

let message = ( myPermission & readPermission ) ? 'yes' : 'no';
console.log(message);

// Operator Precedence
console.log('-----------------------------------');
let res = 2 + 3 * 4;
let res2 = (2 + 3) * 4;

console.log( res );
console.log( res2 );

// Exercise- Swapping Variables
console.log('------------------------------------');

let col = 'red';
let col2 = 'blue';

console.log(col);
console.log(col2);

let aux = col;
col = col2;
col2 = aux;

console.log(col);
console.log(col2);