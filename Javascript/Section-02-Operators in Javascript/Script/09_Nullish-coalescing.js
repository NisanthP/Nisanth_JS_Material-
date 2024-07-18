//Nullish coalescing operator (??)
/*
const a = null ?? "No Value";
console.log(a);

const b = null ?? 45;
console.log(b);
*/
// ??=
const user = { name: "Sudhesh" };
console.log(user);
console.log(user.name);

user.city ??= "Pollachi";
console.log(user.city);
console.log(user);
