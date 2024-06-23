// Primitive Datatypes

// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt, 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(typeof(id));
// console.log(typeof(anotherId));
// console.log(id === anotherId);

const bigNumber = 354542545345645n;
console.log(typeof(bigNumber));

// Reference (Non Primitive) Datatypes


// Array
const heros = ["Saktiman", "Superman", "Spiderman"];

// Objects
let myObj = {
    name: "Ronit",
    age: 20
}

// Functions
const myFunction = function(){
    // console.log("Hello World");
}

// console.log(typeof(myFunction));

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ******************************************************** 

// Stack Memory (Primitive), Heap (Non-Primitive)

let myYoutubeName = "ronitzinzuvadiya"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "ronit@google.com"

console.log(userOne.email);
console.log(userTwo.email);