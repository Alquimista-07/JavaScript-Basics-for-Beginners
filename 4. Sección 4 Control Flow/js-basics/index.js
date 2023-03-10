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

// Exercise- Demerit Points
console.log('***********************************');

// Speed Limit = 70
checkSpeed(130);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if( speed < speedLimit + kmPerPoint ){
        console.log('OK');
        return;
    }
    else{
        const points =  Math.floor( (speed - speedLimit) / kmPerPoint );
        if(points >= 12){
            console.log('License suspended');
        }
        else{
            console.log('Points: ', points);
        }
       
    }
}

// 41. 14- Exercise- Even and Odd Numbers
console.log('********************************');

showNumbers(10);

function showNumbers(limit){
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}

// 42. 15- Exercise- Count Truthy
console.log('***********************************');

// Falsy
// undefined
// null
// ''
// false
// 0
// NaN

const array = [0, null, undefined, '', 2, 3];

console.log('Count: ', countTruthy(array));

function countTruthy(array){
    
    let count = 0;
    for (let value of array) {
        if (value){
            count++;
        }
    }

    return count;

}

// Exercise- String Properties
console.log('*************************************');

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}

showProperties(movie);

function showProperties(obj){

    for( key in obj ){
        if( typeof obj[key] === 'string'){
            console.log(key, obj[key]);
        }
    }

}

// Exercise- Sum of Multiples 3 and 5
console.log('******************************');

console.log(sumVals(10));

// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10

function sumVals(limit){
    let sumVal = 0;

    for(let ind = 0; ind <= limit; ind++){

        if(ind % 3 === 0 || ind % 5 === 0){
            sumVal += ind;
        }
    }

    return sumVal;

}

// Exercise - Grade
console.log('********************************');

const marks = [80, 80, 50];

// Average = 70
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks));

function calculateGrade(marks){

    const average = calculateAverge(marks);

    if ( average < 60 ) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';

}

function calculateAverge(array){

    let sum = 0;

    for( let value of array )
        sum += value;
    return sum / array.length;

}

// Exercise - Stars
console.log('***************************');

showStars(2);

function showStars(rows){

    for( let row = 1; row <= rows; row++){
        let pattern = '';
        for( let i = 0; i < row; i++){
            pattern += '*';
        }
        console.log(pattern);
    }

}

// Exercise - Prime Numbers
console.log('******************************');

showPrimes(10);

// Prime (whose factors are only 1 an itself)
// Composite

// 12 = 1, 2, 3, 4, 12
// Can be devided evenly by its factors

function showPrimes(limit){

    for( let number = 2; number <= limit; number++ ){
        // 2 - current (number)
        if( isPrime(number)) console.log(number);
    }

}

function isPrime(number){
    for( let factor = 2; factor < number; factor++ ){
        if( number % factor === 0 ){
            return false;
        }
    }
    return true;
}