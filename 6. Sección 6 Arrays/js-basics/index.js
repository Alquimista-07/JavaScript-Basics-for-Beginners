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