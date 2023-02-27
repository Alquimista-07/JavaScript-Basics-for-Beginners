// Adding Elements
const numbers = [3, 4];

// End
numbers.push(5, 6);
console.log(numbers);

// Beginnining
numbers.unshift(1, 2);
console.log(numbers);

// Middle
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);