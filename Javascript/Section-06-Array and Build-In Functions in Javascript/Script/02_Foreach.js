// forEach()
// Example-1
const number = [1, 2, 32, 4, 5, 48, 11, 56, 25, 66, 85];

number.forEach((value) => {
  console.log(value);
});

number.forEach((value, index) => {
  console.log("index : " + index + " value : " + value);
});

// Example-2
const user = [
  { names: "Ravi", age: 25, city: "chennai", salary: 10000 },
  { names: "Ravi", age: 25, city: "madurai", salary: 10000 },
  { names: "Ravi", age: 25, city: "chennai", salary: 10000 },
  { names: "Ravi", age: 25, city: "chennai", salary: 10000 },
  { names: "Ravi", age: 25, city: "chennai", salary: 10000 },
  { names: "Ravi", age: 25, city: "chennai", salary: 10000 },
];

console.table(user);

user.forEach((i) => {
  console.log(i.city);
});
