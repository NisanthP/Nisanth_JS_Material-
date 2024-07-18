/*
for (initialize variable; condition checking; increment or decrement) {
  code to be executed
}
*/

// Example-1
/*
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
*/

// Example-2
/*
let sum = 0;
for (let i = 2; i <= 100; i += 3) {
  if (i % 5 == 0) {
    sum += i;
  }
}
console.log(sum);
*/

let arr = [];
for (let i = 0; i < 100; i += 2) {
  arr.push(i);
}
console.log(arr);
console.log(arr[49]);
