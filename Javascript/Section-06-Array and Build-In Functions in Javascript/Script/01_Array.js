// Normal way to create an array
let a = [10, 20, 30, 40, 50];
console.log(a);
console.table(a);
// Accessing an array
console.log(a[2]);

// create an array using Array() Class
let b = new Array(10, 20, 30, 40, 50);
console.log(b);

let c = new Array("Sudhesh", 20, true, { age: 25, dept: "IT" }, 50.25);
console.log(c[3]);
console.table(c[3]);

// For of Loop
for (let i of c) {
  console.log(i);
}
