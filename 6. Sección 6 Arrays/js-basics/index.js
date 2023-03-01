// Adding Elements
const numbers = [3, 4];

// ---End---
numbers.push(5, 6);
console.log(numbers);

// ---Beginnining---
numbers.unshift(1, 2);
console.log(numbers);

// ---Middle---
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);

// Finding Elements (Primitives)
console.log('**********************************');

const numbers2 = [1, 2, 3, 1, 4];

console.log(numbers2.indexOf(1));
console.log(numbers2.indexOf(1, 2));
console.log(numbers2.indexOf('1'));

console.log(numbers2.lastIndexOf(1));

console.log(numbers2.indexOf(1) !== -1);
console.log(numbers2.indexOf('1') !== -1);

console.log(numbers2.includes(1));
console.log(numbers2.includes('1'));

// Finding Elements (Reference Types)
console.log('***********************************');
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
const course = courses.find(function(course){
    return course.name === 'a';
});

console.log(course);

const course2 = courses.findIndex(function(course){
    return course.name === 'xyz';
});

console.log(course2);

const course3 = courses.findIndex(function(course){
    return course.name === 'a';
});

console.log(course3);

// Arrow Functions
console.log('************************************');

const course4 = courses.find(course => {
    return course.name === 'a'
});

console.log(course4);

const course5 = courses.find(course => course.name === 'a');
console.log(course5);

// Removing Elements
console.log('*************************************');

const numbers3 = [1, 2, 3, 4, 5, 6];
const numbers4 = [1, 2, 3, 4, 5, 6];

// End
const last = numbers3.pop();
console.log(numbers3);
console.log(last);

// Beginning
const first = numbers3.shift();
console.log(numbers3);
console.log(first);

// Middle
const middle = numbers4.splice(1, 2);
console.log(numbers4);
console.log(middle);

// Emptying an Array
console.log('***********************************');

let numbers5 = [1, 2, 3, 4];
let numbers6 = [1, 2, 3, 4];
let numbers7 = [1, 2, 3, 4];
let numbers8 = [1, 2, 3, 4];
let another = numbers5;

// Solution 1
numbers5 = [];
console.log(numbers5);
console.log(another);

// Solution 2
numbers6.length = 0;
console.log(numbers6);

// Solution 3
numbers7.splice(0, numbers.length);
console.log(numbers7);

// Solution 4
while(numbers8.length > 0){
    numbers8.pop();
}

console.log(numbers8);