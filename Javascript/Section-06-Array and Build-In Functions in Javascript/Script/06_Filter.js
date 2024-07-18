// Filtering Data with filter": Practical JavaScript Questions and Answers
/*
1. Filter out falsy values from an array

Input:
[0, "", false, null, undefined, 1, "hello"]
Output:
[1, "hello"]
Solution:

const values = [0, "", false, null, undefined, 1, "hello"];
const truthyValues = values.filter(value => value);

console.log(truthyValues);

2. Filter numbers that are greater than 5 and less than 10

Input:
[3, 6, 8, 11, 14]
Output:
[6, 8]
Solution:

const numbers = [3, 6, 8, 11, 14];
const filteredNumbers = numbers.filter(number => number > 5 && number < 10);

console.log(filteredNumbers);

3. Filter out duplicate values from an array.

Input:
[1, 2, 2, 3, 4, 4, 5]
Output:
[1, 2, 3, 4, 5]
Solution:

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = numbers.filter((value, index, self) => self.indexOf(value) === index);

console.log(uniqueNumbers); 

4. Filter out strings that match a specific pattern

Input:
["apple", "banana", "cherry", "grape"]
Output:
["banana"]
Solution:

const words = ["apple", "banana", "cherry", "grape"];
const filteredWords = words.filter(word => /^b/.test(word));

console.log(filteredWords);

5. Extract objects from an array based on a age property value greater than 18.

Input:
[
    { name: "Alice", age: 12 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];
Output:
{name: 'Bob', age: 30}
{name: 'Charlie', age: 22}
Solution:

const people = [
    { name: "Alice", age: 12 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];

const adults = people.filter(person => person.age >= 18);
console.log(adults)

6. Filter out null and undefined values from an array.

Input:
[1, null, 2, undefined, 3, 4, null,false]
Output:
[1, 2, 3, 4,false]
Solution:

const values = [1, null, 2, undefined, 3, 4, null,false];
const filteredValues = values.filter(value => value !== null && value !== undefined);

console.log(filteredValues);

7. Filter out events that occurred within a specific date range.

Input:
[
    { name: "Conference", date: "2023-08-15" },
    { name: "Workshop", date: "2023-09-10" },
    { name: "Seminar", date: "2023-07-20" }
];
Output:
{name: 'Workshop', date: '2023-09-10'}
Solution:

const events = [
    { name: "Conference", date: "2023-08-15" },
    { name: "Workshop", date: "2023-09-10" },
    { name: "Seminar", date: "2023-07-20" }
];

const upcomingEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const currentDate = new Date();
    return eventDate > currentDate;
});

console.log(upcomingEvents);

8. Filter out arrays that contain negative numbers from an array of arrays

Input:
[[1, 2, 3], [-1, 0, 2], [4, -3, 5]]
Output:
[[1, 2, 3], [4, -3, 5]]
Solution:

const arrays = [[1, 2, 3], [-1, 0, 2], [4, -3, 5]];
const positiveArrays = arrays.filter(array => array.every(num => num >= 0));

console.log(positiveArrays);

9. Filter out words that contain vowels from an array of words.

Input:
["apple", "banana", "grape", "kiwi"]
Output:
["apple", "banana", "grape"]
Solution:

const words = ["apple", "banana", "grape", "kiwi"];
const vowelWords = words.filter(word => /[aeiou]/i.test(word));

console.log(vowelWords);

10. Filter out arrays that have a sum greater than 10.

Input:
[[1, 2, 3], [4, 5], [6, 7, 8]]
Output:
[[1, 2, 3], [4, 5]]
Solution:

const arrays = [[1, 2, 3], [4, 5], [6, 7, 8]];
const smallSumArrays = arrays.filter(array => array.reduce((sum, num) => sum + num, 0) <= 10);

console.log(smallSumArrays);

11. Filter out strings that are entirely lowercase.

Input:
["Hello", "world", "OpenAI", "VERSION-3"]
Output:
["VERSION-3"]
Solution:

[[1,10,5],[2, 4, 6]]
Solution:

const words = ["Hello", "world", "OpenAI", "VERSION-3"];
const uppercaseWords = words.filter(word => word === word.toUpperCase());

console.log(uppercaseWords);

12. Filter out arrays that do not contain any even numbers.

Input:
[[1, 10, 5], [2, 4, 6], [7, 9, 11]]
Output:
[[1,10,5],[2, 4, 6]]
Solution:

const arrays = [[1, 10, 5], [2, 4, 6], [7, 9, 11]];
const arraysWithEvens = arrays.filter(array => array.some(num => num % 2 === 0));

console.log(arraysWithEvens);

13. Filter out people who are both engineers and older than 25.

Input:
[
    { name: "Alice", age: 30, occupation: "Engineer" },
    { name: "Bob", age: 22, occupation: "Teacher" },
    { name: "Charlie", age: 28, occupation: "Engineer" }
];
Output:
{name: 'Alice', age: 30, occupation: 'Engineer'}
{name: 'Charlie', age: 28, occupation: 'Engineer'}
Solution:

const people = [
    { name: "Alice", age: 30, occupation: "Engineer" },
    { name: "Bob", age: 22, occupation: "Teacher" },
    { name: "Charlie", age: 28, occupation: "Engineer" }
];

const engineersOver25 = people.filter(person => person.occupation === "Engineer" && person.age > 25);

console.log(engineersOver25);

14. Filter out prime numbers from an array of numbers.

Input:
[2, 3, 4, 5, 6, 7, 8, 9, 10]
Output:
[2, 3, 5, 7]
Solution:

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = numbers.filter(number => isPrime(number));

console.log(primeNumbers);

function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;

    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
    }

    return true;
}

15. Filter out objects with a certain combination of category Electronics under price 500

Input:
[
    { name: "Laptop", category: "Electronics", price: 200 },
    { name: "Shirt", category: "Clothing", price: 25 },
    { name: "Phone", category: "Electronics", price: 600 }
];
Output:
{name: 'Laptop', category: 'Electronics', price: 200}
Solution:

const products = [
    { name: "Laptop", category: "Electronics", price: 800 },
    { name: "Shirt", category: "Clothing", price: 25 },
    { name: "Phone", category: "Electronics", price: 600 }
];

const electronicsUnder500 = products.filter(product =>
    product.category === "Electronics" && product.price < 500
);

console.log(electronicsUnder500);

16. Filter out strings longer than 5 characters and not starting with "a"

Input:
["apple", "banana", "grape", "kiwi", "orange"]
Output:
['grape', 'kiwi']
Solution:

const words = ["apple", "banana", "grape", "kiwi", "orange"];
const filteredWords = words.filter(word => word.length <= 5 && word[0] !== "a");

console.log(filteredWords);

17. Filter out non-perfect square numbers from an array

Input:
[1, 4, 7, 9, 16, 25]
Output:
[1, 4, 9, 16, 25]
Solution:

const numbers = [1, 4, 7, 9, 16, 25];
const perfectSquares = numbers.filter(number => Math.sqrt(number) % 1 === 0);

console.log(perfectSquares);

18. Filter out strings that are not palindromes

Input:
["radar", "hello", "madam", "world"]
Output:
['radar', 'madam']
Solution:

const words = ["radar", "hello", "madam", "world"];
const palindromes = words.filter(word => isPalindrome(word));

console.log(palindromes);

function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

19. Filter out arrays that contain a specific subarray

Input:
[[1, 2, 3], [4, 5], [6, 7, 8], [1, 2, 3, 4]]
Sub Array:
[1, 2, 3]
Output:
[4, 5]
[6, 7, 8]
Solution:

const arrays = [[1, 2, 3], [4, 5], [6, 7, 8], [1, 2, 3, 4]];
const subarrayToFilter = [1, 2, 3];
const arraysWithoutSubarray = arrays.filter(array => !isSubarray(array, subarrayToFilter));

console.log(arraysWithoutSubarray);

function isSubarray(array, subarray) {
    for (let i = 0; i <= array.length - subarray.length; i++) {
    if (array.slice(i, i + subarray.length).toString() === subarray.toString()) {
        return true;
    }
    }
    return false;
}

20. Filter out objects where the property value matches the index

Input:
[
    { value: 0, name: "Zero" },
    { value: 1, name: "One" },
    { value: 3, name: "Three" }
];
Output:
{value: 0, name: 'Zero'}
{value: 1, name: 'One'}
Solution:

const data = [
    { value: 0, name: "Zero" },
    { value: 1, name: "One" },
    { value: 3, name: "Three" }
];

const matchingIndexValue = data.filter(item => item.value === data.indexOf(item));

console.log(matchingIndexValue);
*/
