// Mastering the "reduce" Method in JavaScript: Practical Questions and Answers
/*
1. Concatenate elements of an array into a single string using the reduce function.

Input:
["Hello", " ", "world", "!"]
Output:
"Hello world!"
Solution:

const words = ["Hello", " ", "world", "!"];
const concatenatedString = words.reduce((result, word) => result + word, "");

console.log(concatenatedString);

2. Calculate the average of numbers in an array using the reduce function.

Input:
[5, 10, 15, 20]
Output:
12.5
Solution:

const numbers = [5, 10, 15, 20];
const average = numbers.reduce((sum, number, index, array) => {
    sum += number;
    if (index === array.length - 1) {
    return sum / array.length;
    }
    return sum;
}, 0);

console.log(average);

3. Flatten an array of nested arrays into a single array using the reduce function.

Input:
[[1, 2], [3, 4], [5, 6]]
Output:
[1, 2, 3, 4, 5, 6]
Solution:

const nestedArrays = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArrays.reduce((result, array) => result.concat(array), []);

console.log(flattenedArray);

4. Group an array of objects by a category property using the reduce function.

Input:
[
    { category: "A", value: 10 },
    { category: "B", value: 20 },
    { category: "A", value: 15 },
    { category: "B", value: 25 }
];
Output:
A: [10, 15]
B: [20, 25]
Solution:

const data = [
    { category: "A", value: 10 },
    { category: "B", value: 20 },
    { category: "A", value: 15 },
    { category: "B", value: 25 }
];

const groupedData = data.reduce((groups, item) => {
    groups[item.category] = groups[item.category] || [];
    groups[item.category].push(item.value);
    return groups;
}, {});

console.log(groupedData);

5. Find the maximum value in an array using the reduce function.

Input:
[10, 5, 20, 8, 15]
Output:
20
Solution:

const numbers = [10, 5, 20, 8, 15];
const max = numbers.reduce((maxValue, currentValue) => Math.max(maxValue, currentValue), -Infinity);

console.log(max);

6. Remove duplicate values from an array using the reduce function

Input:
[1, 2, 3, 2, 4, 5, 3]
Output:
[1, 2, 3, 4, 5]
Solution:

const numbers = [1, 2, 3, 2, 4, 5, 3];
const uniqueNumbers = numbers.reduce((unique, number) => (unique.includes(number) ? unique : [...unique, number]), []);

console.log(uniqueNumbers);

7. Calculate the factorial of a number using the reduce function

Input:
5
Output:
120
Solution:

const number = 5;
const factorial = Array.from({ length: number }, (_, index) => index + 1).reduce((result, num) => result * num, 1);

console.log(factorial);

8. Calculate the sum of a specific property in an array of objects using the reduce function.

Input:
[
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 600 },
    { name: "Tablet", price: 350 }
];
Output:
1750
Solution:

const products = [
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 600 },
    { name: "Tablet", price: 350 }
];

const totalCost = products.reduce((sum, product) => sum + product.price, 0);

console.log(totalCost);

9. Reverse a string using the reduce function.

Input:
Hello, world!
Output:
!dlrow ,olleH
Solution:

const str = "Hello, world!";
const reversedStr = str.split("").reduce((reversed, char) => char + reversed, "");

console.log(reversedStr);

10. Calculate the sum of prime numbers in an array using the reduce function

Input:
[2, 3, 4, 5, 6, 7, 8, 9]
Output:
17
Solution:

const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
const sumOfPrimes = numbers.reduce((sum, number) => {
    if (isPrime(number)) {
    return sum + number;
    }
    return sum;
}, 0);

console.log(sumOfPrimes);

11. Find the longest word in an array of words using the reduce function

Input:
["apple", "banana", "grape", "kiwi", "orange"]
Output:
banana
Solution:

const words = ["apple", "banana", "grape", "kiwi", "orange"];
const longestWord = words.reduce((longest, word) => (word.length > longest.length ? word : longest), "");

console.log(longestWord);

12. Calculate the product of numbers in an array using the reduce function

Input:
[2, 3, 4, 5]
Output:
120
Solution:

const numbers = [2, 3, 4, 5];
const product = numbers.reduce((result, number) => result * number, 1);

console.log(product);

13. Map an array of words to a comma-separated string using the reduce function

Input:
["apple", "banana", "grape", "kiwi", "orange"]
Output:
apple, banana, grape, kiwi, orange
Solution:

const words = ["apple", "banana", "grape", "kiwi", "orange"];
const commaSeparatedString = words.reduce((result, word, index) => (index === 0 ? word : result + ", " + word), "");

console.log(commaSeparatedString);

14. Count the number of palindromic words in an array using the reduce function

Input:
["racecar", "banana", "deified", "apple", "level"]
Output:
3
Solution:

const words = ["racecar", "banana", "deified", "apple", "level"];
const countPalindromes = words.reduce((count, word) => count + (word === word.split("").reverse().join("") ? 1 : 0), 0);

console.log(countPalindromes);

15. Map an array of words to an array of the number of vowels in each word using the reduce function

Input:
["apple", "banana", "grape", "kiwi", "orange"]
Output:
[2, 3, 2, 2, 3]
Solution:

const words = ["apple", "banana", "grape", "kiwi", "orange"];
const vowelCounts = words.reduce((counts, word) => [...counts, word.split("").reduce((count, char) => count + (/[aeiou]/i.test(char) ? 1 : 0), 0)], []);

console.log(vowelCounts);

16. Calculate the Euclidean distance between two points using the reduce function

Input:
[1, 2]
[4, 6]
Output:
5
Solution:

const point1 = [1, 2];
const point2 = [4, 6];
const euclideanDistance = Math.sqrt(point1.reduce((sum, coord, index) => sum + (coord - point2[index]) ** 2, 0));

console.log(euclideanDistance);

17. Calculate the sum of squares of digits in an array of numbers using the reduce function

Input:
[123, 456, 789]
Output:
235
Solution:

const numbers = [123, 456, 789];
const sumOfDigitSquares = numbers.reduce((sum, number) => sum + [...String(number)].reduce((squaredSum, digit) => squaredSum + digit ** 2, 0), 0);

console.log(sumOfDigitSquares);

18. Find common elements between two arrays using the reduce function

Input:
[1, 2, 3, 4, 5]
[3, 4, 5, 6, 7]
Output:
[3, 4, 5]
Solution:

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const commonElements = arr1.reduce((common, item) => (arr2.includes(item) ? [...common, item] : common), []);

console.log(commonElements);

19. Count the number of odd numbers in an array using the reduce function.

Input:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Output:
5
Solution:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const countOdd = numbers.reduce((count, number) => count + (number % 2 !== 0 ? 1 : 0), 0);

console.log(countOdd);

20. Aggregate values from an array based on a custom function using the reduce function

Input:
[1, 2, 3, 4, 5]
Output:
27
Solution:

const values = [1, 2, 3, 4, 5];
const customAggregation = values.reduce((result, value) => result + (value % 2 === 0 ? value * 2 : value), 0);

console.log(customAggregation);
*/
