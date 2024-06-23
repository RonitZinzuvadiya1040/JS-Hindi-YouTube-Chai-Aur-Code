const score = 500
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// ***************** Maths ******************

// console.log(Math);
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 9
// console.log(Math.min(4,2,9)); // 2
// console.log(Math.max(4,2,9)); // 9


console.log(Math.random()); // return between 0 to 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1); // return between 1 to 9


const min = 10
const max = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min)