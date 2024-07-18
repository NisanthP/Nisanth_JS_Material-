//Simple Example
/*
const age = 22;
const result = age >= 18 ? "Eligible" : "Not Eligible";
console.log(result);
*/

//Handling null values
/*
function welcome(name) {
  const result = name ? name : "No Name";
  console.log("Welcome " + result);
}

welcome();
welcome(null);
welcome("Sudhesh");
*/

// user = { age: 27 };
// console.log(user);
// console.log(user.name);
// console.log(user.age);

/*
() => {

}
*/
// const greeting = (demo) => {
//   const name = demo.name ? demo.name : "No Name";
//   return "Hello " + name;
// };

// greeting();
// console.log(greeting(user));

// Conditional chains
/*
  avg >=90 A grade
  avg >=80 B grade
  C grade
*/

const avg = 75;
const grade = avg >= 90 ? "A Grade" : avg >= 80 ? "B Grade" : "C Grade";
console.log("Grade : ", grade);
