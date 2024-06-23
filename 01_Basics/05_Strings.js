const name = "Ronit"

const repoCount = 50

// console.log(name + repoCount + " Value"); // old way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // new way

const gameName = new String('Ronit-r')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newString1 = "      ronit       "

console.log(newString1);
console.log(newString1.trim());


const url = "https://ronit.com/ronit%20zinzuvadiya"

url.replace('%20', '-');

console.log(url.replace('%20', '-'));


console.log(url.includes('ronisd'));

console.log(gameName.split('-'));
