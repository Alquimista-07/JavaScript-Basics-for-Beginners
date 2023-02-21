// If...else

// Hour
// If hur is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let hour = 10;

if ( hour >= 6 && hour < 12 ){
    console.log('Good morning!');
}
else if ( hour >= 12 && hour < 18 ){
    console.log('Good afternoon!');
}
else{
    console.log('Good evening!');
}

// Switch...case
console.log('********************************');

let role = 'guest';

switch ( role ){

    case 'guest':
        console.log('Guest User');
        break;
    
    case 'moderator':
        console.log('Moderatpr User');
        break;
    
        default:
            console.log('Unknown User');
}

// For
console.log('*******************************');

for (let i = 1; i <= 5; i++) {
    if ( i % 2 !== 0 ) console.log('Hello World', i);
}

for (let i = 5; i >= 1; i--) {
    if ( i % 2 !== 0 ) console.log('Hello World', i);
}

// While
console.log('**********************************');

let i = 0;

while (i <= 5) {
    if ( i % 2 !== 0 ) console.log( i );
    i++;
}

// Do...While
console.log('***********************************');

let i2 = 9;

do {
    if ( i2 % 2 !== 0 ) console.log( i2 );
    i2++;
}
while ( i2 <= 5 );

// Infinite Loops
console.log('************************************');

/*************************************************
let i3 = 0;
while ( i3 < 5){
    console.log(i3);
    //i3++;
}

while (true){

}

let x = 0;
do {
    //x++;
} while ( x < 5 )

for (let i = 0; i > 0; i++) {
    
}

for (let i = 0; i < 10;) {
    
}
*************************************************/

// For...In
console.log('***********************************');

const person = {
    name: 'Mosh',
    age: 30
}

for ( let key in person ){
    console.log(key, person[key]);
}

const colors = ['red', 'green', 'blue'];

for( let index in colors ){
    console.log(index, colors[index]);
}

// For...of
console.log('**********************************');

for (let color of colors) {
    console.log(color);
}

// Break and Continue
console.log('***********************************');

let i4 = 0;

while ( i4 <= 10 ){

    // if ( i4 === 5 ) break;
    if( i4 % 2 === 0 ){
        i4++;
        continue;
    }
    
    console.log(i4);
    i4++;
}

// Max of Two Numbers
console.log('******************************');

let number = max( 5, 8 );
console.log('Max number is: ', number);

function max( num1, num2 ){
    return (num1 > num2) ? num1 : num2;
}

// Exercise- Landscape or Portrait
console.log('*******************************');

console.log( isLandscape( 800, 500 ) );

function isLandscape( width, height ){
    return ( width > height );
}

// Exercise- FizzBuzz
console.log('********************************');

const output = fizzBuzz(false);
console.log(output);

function fizzBuzz( input ){

    if(typeof input !== 'number'){
        return NaN;
    }

    if((input % 3 === 0) && (input % 5 === 0)){
        return 'FizzBuzz';
    }

    if(input % 3 === 0){
        return 'Fizz';
    }

    if(input % 5 === 0){
        return 'Buzz';
    }

    return input;

}