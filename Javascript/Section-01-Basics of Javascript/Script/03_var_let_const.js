/*
  1997
  var
    2015 E6
  let
  const
*/

/*
var a=25;
var b=35;
console.log(a+b);
*/
//-----------------------------------
//1.Scope

if (true) {
  let msg = "Welcome to Sudhesh";
  //let msg="Welcome to Sudhesh";
  // const msg="Welcome to Sudhesh";
  //console.log(msg);
}

console.log(msg);

//-----------------------------------
//2.Variable Re-declaration

var a = 25;
console.log(a);

var a = 45;
console.log(a);

/*
let a=25;
console.log(a)

let a=45;


const a=25;
console.log(a)

const a=45;

*/
//-----------------------------------
//3.Value assignment

var a = 25;
console.log(a);
a = 45;
console.log(a);

/*
let a=25
console.log(a);
a=45;
console.log(a);

const a=25;
console.log(a);
a=45;  //Constant Error
console.log(a);
*/

// const student = { name: "Sudhesh", age: 12 };
// console.table(student);
// console.log(student.name);
// student.name = "Ram kumar";
// console.table(student);
