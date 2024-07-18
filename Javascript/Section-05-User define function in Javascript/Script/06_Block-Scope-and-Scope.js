// Block Scope and Function Scope in JavaScript
// For example

if (true) {
  let blockScopeVariable = "I am a variable with block scope";
  console.log(blockScopeVariable); // Output: "I am a variable with block scope"
}
console.log(blockScopeVariable); // ReferenceError: blockScopeVariable is not defined

// For example

function myFunction() {
  var functionScopeVariable = "I am a variable with function scope";
  console.log(functionScopeVariable); // Output: "I am a variable with function scope"
}
console.log(functionScopeVariable); // ReferenceError: functionScopeVariable is not defined

function myFunction() {
  if (true) {
    let fullname = "Sudhesh";
    console.log(fullname);
  }
  console.log(fullname);
}
myFunction();

function myFunction() {
  if (true) {
    var fullname = "Sudhesh";
    console.log(fullname);
  }
  console.log(fullname);
}
myFunction();
