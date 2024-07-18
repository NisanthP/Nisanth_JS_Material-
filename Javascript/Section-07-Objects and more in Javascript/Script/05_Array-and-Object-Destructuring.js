// The basic syntax for array destructuring is as follows:
// let [variable1, variable2, ..., variableN] = array;

// array destructuring like this:
/*
let numbers = [10, 20, 30, 40, 50];
let [a, b, c] = numbers;
console.log(a); //10
console.log(b); //20
console.log(c); //30
*/

//  For example, you can de-structure an array of arrays like this:
/*
let nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let [[a, b], [c, d], [e, f]] = nestedArray;
console.log(a); //1
console.log(b); //2
console.log(c); //3
console.log(d); //4
console.log(e); //5
console.log(f); //6
*/

// destructuring to extract elements from the end of an array like this:
/*
let numbers = [10, 20, 30, 40, 50];
let [a, b, ...c] = numbers;
console.log(a); //10
console.log(b); //20
console.log(c); // [30,40,50]
*/

// Array destructuring in JavaScript on Objects
// The basic syntax for object de-structuring is as follows:
// let {property1: variable1, property2: variable2, ..., propertyN: variableN} = object;
/*
let person = { name: "Ravi", age: 5, gender: "female" };
let { name, age, gender } = person;
console.log(name); // "Ravi"
console.log(age); // 5
console.log(gender); // "female"
*/

// For example, you can de-structure an object with nested objects like this:
/*
let address = {
  street: "100 feet Road",
  city: "covai",
  state: "Tamil Nadu",
  zip: "636007",
};
let employee = { names: "Ravi", age: 12, gender: "male", address };
let {
  names,
  age,
  gender,
  address: { city, state, zip },
} = employee;
console.log(names); // "Ravi"
console.log(age); // 30
console.log(gender); // "male"
console.log(city); // "covai"
console.log(state); // "Tamil Nadu"
console.log(zip); // "636007"
*/

// For example, you can destructure an object and set default values for properties like this:
/*
let { names = "guest", age = 25, gender = "unknown" } = person;
console.log(names); // "John"
console.log(age); // 30
console.log(gender); // "male"
*/
