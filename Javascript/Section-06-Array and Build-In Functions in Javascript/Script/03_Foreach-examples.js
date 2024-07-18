// Mastering the "forEach" Method in JavaScript: Practical Questions and Answers

/*
1. Find the length of each string in an array:

Input:
["apple", "banana", "grape"];   
Output:
[5, 6, 5]
Solution:

const words = ["apple", "banana", "grape"];
const lengths = [];
words.forEach(word => lengths.push(word.length));
console.log(lengths); // Output: [5, 6, 5]

2. Skip negative numbers in an array:

Input:
[1, -2, 3, -4, 5]
Output:
[1, 3, 5]
Solution:

const numbers = [1, -2, 3, -4, 5];
const positiveNumbers = [];

numbers.forEach(number => {
  if (number > 0) {
    positiveNumbers.push(number);
  }
});
console.log(positiveNumbers); // Output: [1, 3, 5]

3. Change Grade property value using forEach:

Input:
students = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "C" }
];
Output:
{name: 'Alice', grade: 'A+'} 
{name: 'Bob', grade: 'A+'}
{name: 'Charlie', grade: 'A+'}
Solution:

const students = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "C" }
];
students.forEach(student => student.grade = "A+");
console.log(students);
/* output
    {name: 'Alice', grade: 'A+'} 
    {name: 'Bob', grade: 'A+'}
    {name: 'Charlie', grade: 'A+'}
*/

/*
4. Increment all elements in an array by 1.

Input:
[1, 2, 3]
Output:
[2, 3, 4]
Solution:

const array = [1, 2, 3];
array.forEach((element, index, arr) => arr[index] = element + 1);

console.log(array); // Output: [2, 3, 4]

5. Increase the age of all users in an array of objects.

Input:
[
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];
Output:
{ name: "Alice", age: 26 },
{ name: "Bob", age: 31 },
{ name: "Charlie", age: 23 }
Solution:

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];
users.forEach(user => user.age += 1);
console.log(users);

6. Remove elements from an array within forEach.

Input:
[1, 2, 3, 4, 5]
Remove Index:
[1, 3]
Output:
[1, 3, 5]
Solution:

const numbers = [1, 2, 3, 4, 5];
const indicesToRemove = [1, 3];

indicesToRemove.forEach(index => numbers.splice(index, 1));

console.log(numbers);

7. Use a custom function to calculate the square of each element

Input:
[2, 3, 4]
Output:
4
9
16
Solution:

function squareAndPrint(number) {
    const squared = number * number;
    console.log(squared);
}
const numbers = [2, 3, 4];
numbers.forEach(squareAndPrint);

8. Calculate the sum of even numbers in an array

Input:
[1, 2, 3, 4, 5, 6]
Output:
12
Solution:

const numbers = [1, 2, 3, 4, 5, 6];
let evenSum = 0;

numbers.forEach(number => {
    if (number % 2 === 0) {
    evenSum += number;
    }
});

console.log(evenSum);

9. Create an HTML list using array elements

Input:
["Item 1", "Item 2", "Item 3"]
Output:
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
Solution:

const items = ["Item 1", "Item 2", "Item 3"];
let itemList = "<ul>";

items.forEach(item => {
    itemList += `<li>${item}</li>`;
});

itemList += "</ul>";

console.log(itemList);

10. Change the text content of multiple HTML elements

Input:
<p class="element">Test</p>
<h1 class="element">Test</h1>
Output:
<p class="element">New Content</p>
<h1 class="element">New Content</h1>
Solution:

const elements = document.querySelectorAll(".element");
elements.forEach(element => {
    element.textContent = "New Content";
});

11. Remove duplicate elements from an array

Input:
[1, 2, 2, 3, 4, 4, 5]
Output:
[1, 2, 3, 4, 5]
Solution:

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [];

numbers.forEach(number => {
    if (!uniqueNumbers.includes(number)) {
    uniqueNumbers.push(number);
    }
});

console.log(uniqueNumbers);

12. Show the names of people whose salaries are greater than or equal to 4000 from the array of staff details

Input:
staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
];
Output:
Jam Josh
Jane Doe
Solution:

const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
];

staffsDetails.forEach(({name, salary}) => {
    if(salary >= 4000){
    console.log(name);
    }
});

13. Comparison to make is in a situation whereby the array we are iterating over has some missing values/array items

Input:
[70, , 12, 55, , 70, 47]
Output:
70
12
55
70
47
Solution:

const studentsScores = [70, , 12, 55, , 70, 47];
studentsScores.forEach((stundentScore) => {
    console.log(stundentScore);
});

14. Identify prime numbers from an array of numbers

Input:
[2, 3, 4, 5, 6, 7, 8, 9, 10]
Output:
[2, 3, 4, 5, 7, 9]
Solution:

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = [];

numbers.forEach(number => {
    if (number > 1 && isPrime(number)) {
    primeNumbers.push(number);
    }
});

console.log(primeNumbers);

function isPrime(number) {
    for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
        return false;
    }
    }
    return true;
}

15. Group objects by a specific age property using forEach

Input:
[
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }
]
Output:
25 : ['Alice', 'Charlie']
30: ['Bob']
Solution:

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }
];

const groupedByAge = {};

people.forEach(person => {
    if (!groupedByAge[person.age]) {
        groupedByAge[person.age] = [];
    }
    groupedByAge[person.age].push(person.name);
});    

console.log(groupedByAge);

16. Capitalize the first letter of each sentence in an array

Input:
["hello world.", "welcome to javascript.", "have a nice day!"]
Output:
['Hello world.', 'Welcome to javascript.', 'Have a nice day!']
Solution:

const sentences = ["hello world.", "welcome to javascript.", "have a nice day!"];
const capitalizedSentences = [];

sentences.forEach(sentence => {
    const capitalized = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    capitalizedSentences.push(capitalized);
});

console.log(capitalizedSentences);

17. Reverse each string in an array

Input:
["apple", "banana", "cherry"]
Output:
['elppa', 'ananab', 'yrrehc']
Solution:

const words = ["apple", "banana", "cherry"];
const reversedWords = [];

words.forEach(word => {
    const reversed = word.split("").reverse().join("");
    reversedWords.push(reversed);
});

console.log(reversedWords);

18. Check if each string in an array is a palindrome.

Input:
["level", "hello", "deified", "world"]
Output:
['level', 'deified']
Solution:

const words = ["level", "hello", "deified", "world"];
const palindromes = [];

words.forEach(word => {
    if (isPalindrome(word)) {
    palindromes.push(word);
    }
});

console.log(palindromes);

function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

19. Modifying all array element in lowercase

Input:
["ALICE", "BOB", "CHARLIE"]
Output:
["alice", "bob", "charlie"]
Solution:

const names = ["ALICE", "BOB", "CHARLIE"];
names.forEach((name, index, arr) => arr[index] = name.toLowerCase());

console.log(names);

20. Filter out odd numbers from an array using forEach

Input:
[1, 2, 3, 4, 5]
Output:
[2, 4]
Solution:

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = [];

numbers.forEach(number => {
    if (number % 2 === 0) {
    evenNumbers.push(number);
    }
});

console.log(evenNumbers);
*/
