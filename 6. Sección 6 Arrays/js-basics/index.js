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

// Combining and Slicing Arrays
console.log('***********************************');

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

let combined = firstArray.concat(secondArray);

console.log(combined);

const slice = combined.slice(2, 5);
const slice2 = combined.slice();

console.log(slice);
console.log(slice2);

// The Spread Operator
console.log('************************************');

const firstArray1 = [1, 2, 3];
const secondArray1 = [4, 5, 6];

const combined1 = [...firstArray1, 'a', ...secondArray1, 'b'];

console.log(combined1);

// Iterating an Array
console.log('****************************************');

const num = [1, 2, 3];

for(let number of num){
    console.log(number);
}

num.forEach(function(number){
    console.log(number);
});

num.forEach(number => {
    console.log(number);
});

num.forEach(number => console.log(number));

num.forEach((number, index) => console.log(index, number));

// Joining Arrays
console.log('****************************************');

const num2 = [1, 2, 3];
const joined = num2.join(';');

console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');

console.log(parts);

const combined2 = parts.join('-');
console.log(combined2);

// Sorting Arrays
console.log('***************************************');

const numb = [2, 3, 1];
console.log(numb);

numb.sort();
console.log(numb);

numb.reverse();
console.log(numb);

const courses1 = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'javaScript' },
];

// NOTA: https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html
courses1.sort(function(a, b){
    // a < b => -1
    // a > b => 1
    // a === b => 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses1);

// Testing the Elements of an Array
console.log('************************************');

const num3 = [1, -1, 2, 3];

const allPositive = num3.every(function(value){
    return value >= 0;
});

console.log(allPositive);

const atLeastOnePositive = num3.some(function(value){
    return value >= 0;
});

console.log(atLeastOnePositive);

// Filtering an Array
console.log('**************************************');

const numbr = [1, -1, 2, 3];

const filtered = numbr.filter(function(value){
    return value >= 0;
});

const filtered2 = numbr.filter(n => n >= 0);

console.log(filtered);
console.log(filtered2);

// 82. 15- Mapping an Array
console.log('***************************************');

const numbe = [1, -1, 2, 3];

const items = numbe
                .filter(n => n >= 0)
                .map(n => ({ value: n } ))
                .filter(obj => obj.value > 1)
                .map(obj => obj.value);

console.log(items);

// Reducing an Array
console.log('*****************************************');

const numberss = [1, -1, 2, 3];

let sum = 0;

// Without using the reduce method
for(let n of numberss){
    sum += n;
}

console.log(sum);

// Using reduce method
// a = 1, curr = -1 => a = 0
// a = 0, curr = 2 => a = 2
// a = 2, curr = 3 => a = 5
const sum2 = numberss.reduce((acumulator, currentValue) => {
    return acumulator + currentValue;
});

// We can initialize the current value of by adding the value as the second argument
// For example
/*
const sum2 = numberss.reduce((acumulator, currentValue) => {
    return acumulator + currentValue;
},0);
*/

console.log(sum2);

// Exercise 1- Array from Range
console.log('*******************************************');

const numbersss = arrayFromRange(-10, -4);

console.log(numbersss);

function arrayFromRange(min, max){
    const output = [];
    for(let i = min; i <= max; i++){
        output.push(i);
    }
    return output;
}

// Exercise 2- Includes
console.log('***************************************');

const nums = [1, 2, 3, 4];

console.log(includes(nums, 1));

function includes(array, searchElement){
    for(let element of array){
        if(element === searchElement){
            return true
        }
    }
    return false;
}

// Exercise 3- Except
console.log('***************************************');

const numss = [1, 2, 3, 4, 1, 1];

const output2 = except(numss, [1, 2]);

console.log(output2);

function except(array, excluded){
    const output = [];
    for(let element of array){
        if(!excluded.includes(element)){
            output.push(element) 
        }
    }
    return output;
}

// Exercise 4- Moving an Element
console.log('***************************************');

const numbs = [1, 2, 3, 4];

const output3 = move(numbs, 1, 2);

console.log(output3);

function move(array, index, offset){
    const position = index + offset;
    if(position >= array.length || position < 0){
        console.log('Invalid offset.');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;

}

// Exercise 5- Count Occurrences
console.log('****************************************');

const numbss = [1, 2, 3, 4, 1];

const count = countOcurrences(numbss, 1);

console.log(count);

function countOcurrences(array, searchElement){

    return array.reduce((acummulator, current) => {
        const ocurrence = (current === searchElement) ? 1 : 0;
        console.log(acummulator, current, searchElement);
        return acummulator + ocurrence;
    }, 0);

}

// Exercise 6- Get Max
console.log('*******************************************');

const numbs2 = [1, 2, 3, 4];

const max = getMax(numbs2);

console.log(max);

function getMax(arr){
    if(arr.length === 0) return undefined;
    
    return arr.reduce((a, b) => (a > b) ? a : b);

}

// Exercise 7- Movies
console.log('********************************************');

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

const titles = movies
                    .filter(m => m.year === 2018 && m.rating >= 4)
                    .sort((a, b) => a.rating - b.rating)
                    .reverse()
                    .map(m => m.title);

console.log(titles);