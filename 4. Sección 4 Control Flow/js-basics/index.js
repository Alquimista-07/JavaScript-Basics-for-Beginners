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