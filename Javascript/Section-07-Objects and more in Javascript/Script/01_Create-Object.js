// Creating Objects in JavaScript:
// 1.Using object literals:
/*
const person = {
  name: "John",
  age: 30,
  job: "Developer",
};
console.log(person);
*/

// 2.Using the object constructor:
/*
const person = new Object();
person.name = "John";
person.age = 30;
person.job = "Developer";
console.log(person);
*/

// 3. Using the Object.create() method:
/*
const personProto = {
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
// console.log(personProto);

const person = Object.create(personProto);
person.name = "John";
person.age = 30;
person.job = "Developer";
console.log(person);
*/

// 4.Using class:
/*
class Person {
  constructor(NAME, AGE, JOB, DEPT) {
    this.names = NAME;
    this.age = AGE;
    this.job = JOB;
    this.dept = DEPT;
    console.log(
      `Hello, my name is ${this.names}, and I'm ${this.age} years of Old..`
    );
  }

  display(NAME, AGE, JOB) {
    this.names = NAME;
    this.age = AGE;
    this.job = JOB;
    console.log("Hello, my name is " + this.names);
    // `Hello, my name is ${this.name}`
  }
}
/*
const karthik = new Person(); // create object an Class
karthik.display("Karthik", 25, "designer"); // call the function inside the class using object

const dinesh = new Person(); // create object an Class
karthik.display("dinesh", 25, "designer");
*/
// Error
// const Ravi = new Person(); // create object an Class
// Ravi.constructor("dinesh", 25, "designer");

// const Ravi = new Person("Ravikumar", 30, "Developer");

class Man {
  // Property or Member variables
  names;
  ages;
  depts;
  salarys;

  // Functions or Member Functions

  // Default constructor
  /*
  constructor() {
    console.log("Im constructor function...");
  }*/

  // parameterized constructor
  constructor(name, age, dept, salary) {
    this.names = name;
    this.ages = age;
    this.depts = dept;
    this.salarys = salary;

    console.log(`Im ${this.names}, and im ${this.ages} year's of old..`);

    // console.log(name);
    // console.log(age);
    // console.log(dept);
    // console.log(salary);
  }

  hand() {
    console.log("Im using hand now...");
  }

  ear() {
    console.log("Im using ear now...");
  }

  eye() {
    console.log("Im using eye now...");
  }
}

const ravi = new Man("Sudhesh", 25, "IT", 10000);
// ravi.hand();
// ravi.eye();
// ravi.ear();
// ravi.constructor();
