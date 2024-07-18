// Callback Functions in JavaScript
// Here is an example of a higher-order function that takes a callback function as an argument:
function higherOrderFunction(callback) {
  // some code
  callback();
  // some code
}

// The callback function can then be passed as an argument when the higher-order function is called:
function myCallback() {
  console.log("I am a callback function");
}

higherOrderFunction(myCallback);
// Output: "I am a callback function"

setTimeout(function () {
  console.log("Hello, world!");
}, 1000); // Output: "Hello, world!" after 1 second

const numbers = [1, 2, 3];

numbers.forEach(function (number) {
  console.log(number);
}); // Output: 1 2 3
