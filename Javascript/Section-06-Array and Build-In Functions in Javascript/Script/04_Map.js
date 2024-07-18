// Map()
const users = [
  { names: "Ravi", age: 25, city: "chennai", salary: 10000 },
  { names: "Ravi", age: 8, city: "madurai", salary: 10000 },
  { names: "Ravi", age: 25, city: "chennai", salary: 10000 },
  { names: "Ravi", age: 15, city: "chennai", salary: 10000 },
  { names: "Ravi", age: 25, city: "chennai", salary: 10000 },
  { names: "Ravi", age: 12, city: "chennai", salary: 10000 },
];

console.table(users);

let a = users.map((user) => ({
  ...user, // spread operator
  status: user.age >= 18 ? "Ok" : "Not",
}));

console.log(a);
console.table(a);
