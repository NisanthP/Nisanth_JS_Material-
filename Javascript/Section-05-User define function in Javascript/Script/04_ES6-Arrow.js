// Arrow Function [ECMAScript 6 (ES6)]
// syntax for an arrow function
// const functionName = (parameters) =>{ function body };
// For example
const add = (a, b) => {
  return a + b;
};
console.log(add(1, 2)); // 3

/*
const add = (a, b) => a + b;
console.log(add(1, 2)); // 3
*/

// 1. Using arrow functions with map():
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// 2. Using arrow functions with filter():
let words = ["apple", "banana", "orange", "grape"];
let filteredWords = words.filter((word) => word.length > 5);
console.log(filteredWords); // ['banana', 'orange']

// 3. Using arrow functions with reduce():
/*
let numbers = [1, 2, 3, 4, 5];
let total = numbers.reduce((sum, number) => sum + number, 0);
console.log(total); // 15
*/

// 4. Using arrow functions to create a closure:
let createCounter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};
let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// Default Parameter Function
function addition(a, b = 5) {
  return a + b;
}
console.log(addition(25, 30));
console.log(addition(25));

// Function hoisting
hoistedFunction(); // Output: "I'm a hoisted function"
function hoistedFunction() {
  console.log("I'm a hoisted function");
}

notHoistedFunction(); // ReferenceError
let notHoistedFunction = function () {
  console.log("I'm a function expression");
};

// Nested Function
function outerFunction() {
  let outerVariable = "I am a variable in the outer function";

  function innerFunction() {
    let innerVariable = "I am a variable in the inner function";
    console.log(outerVariable); // Output: "I am a variable in the outer function"
    console.log(innerVariable); // Output: "I am a variable in the inner function"
  }

  innerFunction();
}
outerFunction();

// Lexical scope in JavaScript function
let globalVariable = "I am a global variable";

function outerFunction() {
  let outerVariable = "I am a variable in the outer function";

  function innerFunction() {
    let innerVariable = "I am a variable in the inner function";
    console.log(globalVariable); // Output: "I am a global variable"
    console.log(outerVariable); // Output: "I am a variable in the outer function"
    console.log(innerVariable); // Output: "I am a variable in the inner function"
  }

  innerFunction();
}
outerFunction();
