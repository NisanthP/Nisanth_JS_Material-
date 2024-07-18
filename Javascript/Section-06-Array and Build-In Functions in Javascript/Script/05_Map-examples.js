// Exploring the "map" Method in JavaScript: Practical Questions and Answers
/*
1. Map an array of prices to formatted currency strings with dollar sign

Input:
[15.99, 29.5, 7.25]
Output:
['$15.99', '$29.50', '$7.25']
Solution:

const prices = [15.99, 29.5, 7.25];
const formattedPrices = prices.map(price => `$${price.toFixed(2)}`);

console.log(formattedPrices);// Output:    ['$15.99', '$29.50', '$7.25']

2. Map an array of numbers to "even" or "odd" strings.

Input:
[1, 2, 3, 4, 5]
Output:
['odd', 'even', 'odd', 'even', 'odd']
Solution:

const numbers = [1, 2, 3, 4, 5];
const evenOdd = numbers.map(number => (number % 2 === 0 ? "even" : "odd"));

console.log(evenOdd);

3. Map an array of arrays to arrays with their sums.

Input:
[[1, 2, 3], [4, 5], [6, 7, 8]]
Output:
[6, 9, 21]
Solution:

const arrays = [[1, 2, 3], [4, 5], [6, 7, 8]];
const arraySums = arrays.map(array => array.reduce((sum, num) => sum + num, 0));

console.log(arraySums); 

4. Map an array of timestamps to formatted time strings.

Input:
[1630488000000, 1631179200000, 1633708800000]
Output:
['2:50:00 PM', '2:50:00 PM', '9:30:00 PM']
Solution:

const timestamps = [1630488000000, 1631179200000, 1633708800000];
const formattedTimes = timestamps.map(timestamp => new Date(timestamp).toLocaleTimeString());

console.log(formattedTimes); 

5. Map an array of URLs to print link strings.

Input:
["https://www.tutorjoes.com", "https://www.tutorjoes.in", "https://github.com"]
Output:
['[Link](https://www.tutorjoes.com)', '[Link](https://www.tutorjoes.in)', '[Link](https://github.com)']
Solution:

const urls = ["https://www.tutorjoes.com", "https://www.tutorjoes.in", "https://github.com"];
const markdownLinks = urls.map(url => `[Link](${url})`);

console.log(markdownLinks);

6. Map an array of strings to an array of CSS class names.

Input:
["primary", "success", "warning", "error"]
Output:
['btn-primary', 'btn-success', 'btn-warning', 'btn-error']
Solution:

const tags = ["primary", "success", "warning", "error"];
const classNames = tags.map(tag => `btn-${tag}`);

console.log(classNames);

7. Map an array of strings to an array of unique IDs.

Input:
["Alice", "Bob", "Charlie"]
Output:
['Alice_pascqr', 'Bob_x6zue9i', 'Charlie_i15dw']
Solution:

const names = ["Alice", "Bob", "Charlie"];
const uniqueIDs = names.map(name => `${name}_${Math.random().toString(36).substring(7)}`);

console.log(uniqueIDs); 

8. Map an array of strings to an array of text display with letter spacing.

Input:
["hello", "world", "javascript"]
Output:
['h e l l o', 'w o r l d', 'j a v a s c r i p t']
Solution:

const words = ["hello", "world", "javascript"];
const gapWords = words.map(word => word.split("").join(" "));

console.log(gapWords);

9. Map an array of numbers to an array of arrays containing incremental values

Input:
[2, 4, 3, 5]
Output:
[1, 2]
[1, 2, 3, 4]
[1, 2, 3]
[1, 2, 3, 4, 5]
Solution:

const numbers = [2, 4, 3, 5];
const arraysOfIncrementalValues = numbers.map(number => Array.from({ length: number }, (_, index) => index + 1));

console.log(arraysOfIncrementalValues);

10. Map an array of birthdates to an array of age differences in years

Input:
["1990-05-15", "1985-10-10", "1995-02-20"]
Output:
[33, 38, 28]
Solution:

const birthdates = ["1990-05-15", "1985-10-10", "1995-02-20"];
const ageDifferences = birthdates.map(birthdate => calculateAgeDifference(birthdate));

console.log(ageDifferences);

function calculateAgeDifference(birthdate) {
    const birthYear = new Date(birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

11. Map an array of numbers to an array of matrices with rows and columns

Input:
[1, 2, 3]
Output:
0: [1]
1: [2, 2]
   [2, 2]
2: [3, 3, 3]
   [3, 3, 3]
   [3, 3, 3]
Solution:

const numbers = [1, 2, 3, 4, 5, 6];
const matrices = numbers.map(number => Array.from({ length: number }, () => Array.from({ length: number }, () => number)));

console.log(matrices);

12. Map an array of strings to arrays containing the frequency of each character.

Input:
["hello", "world", "javascript"]
Output:
0:     {h: 1, e: 1, l: 2, o: 1}
1:    {w: 1, o: 1, r: 1, l: 1, d: 1}
2:    {a:2, c:1, i:1, j:1, p:1, r:1, s:1, t:1, v:1}
Solution:

const words = ["hello", "world", "javascript"];
const characterFrequencies = words.map(word => {
    const frequencies = {};
    for (const char of word) {
    frequencies[char] = (frequencies[char] || 0) + 1;
    }
    return frequencies;
});

console.log(characterFrequencies);

13. Map an array of words to an array of styled text using HTML tags.

Input:
["apple", "banana", "grape"]
Output:
apple banana grape
Solution:

const words = ["apple", "banana", "grape"];
const styledWords = words.map(word => `<span style="color: ${getRandomColor()}">${word}</span>`);

document.getElementById("out").innerHTML=styledWords.join(" ");

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

14. Map an array of objects with height and weight properties to an array of BMI categories.

Input:
[
    { height: 1.7, weight: 65 },
    { height: 1.6, weight: 50 },
    { height: 1.8, weight: 75 }
]
Output:
['Normal Weight', 'Normal Weight', 'Normal Weight']
Solution:

const people = [
    { height: 1.7, weight: 65 },
    { height: 1.6, weight: 50 },
    { height: 1.8, weight: 75 }
];

const bmiCategories = people.map(person => getBmiCategory(person));

console.log(bmiCategories);

function getBmiCategory(person) {
    const bmi = person.weight / (person.height * person.height);
    if (bmi < 18.5) return "Underweight";
    if (bmi < 24.9) return "Normal Weight";
    if (bmi < 29.9) return "Overweight";
    return "Obese";
}

15. Map an array of time durations in seconds to formatted time strings.

Input:
[3600, 1500, 5400]
Output:
['1h 0m', '0h 25m', '1h 30m']
Solution:

const timeDurationsInSeconds = [3600, 1500, 5400];
const formattedTimes = timeDurationsInSeconds.map(duration => formatTime(duration));

console.log(formattedTimes);

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
}

16. Map an array of nested arrays to a single flat array.

Input:
[[1, 2, 3], [4, [5, 6]], [7, 8]]
Output:
0:[1, 2, 3]
1:[4, 5, 6]
2: [7, 8]
Solution:

const nestedArrays = [[1, 2, 3], [4, [5, 6]], [7, 8]];
const flatArray = nestedArrays.map(array => array.flat());

console.log(flatArray);

17. Map an array of numbers to an array of Fibonacci word lengths

Input:
[1, 2, 3, 4, 5, 6, 7]
Output:
[1, 2, 3, 5, 8, 13, 21]
Solution:

const numbers = [1, 2, 3, 4, 5, 6, 7];
const fibonacciWordLengths = numbers.map(number => fibonacciWord(number).length);

console.log(fibonacciWordLengths);

function fibonacciWord(n) {
    if (n === 0) return "a";
    if (n === 1) return "b";
    return fibonacciWord(n - 1) + fibonacciWord(n - 2);
}

18. Map an array of objects to an array of modified objects with discount amount 0.9

Input:
[
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 600 },
    { name: "Tablet", price: 350 }
];
Output:
0: {name: 'Laptop', price: 800, discountedPrice: 720}
1: {name: 'Phone', price: 600, discountedPrice: 540}
2: {name: 'Tablet', price: 350, discountedPrice: 315}
Solution:

const products = [
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 600 },
    { name: "Tablet", price: 350 }
];

const discountedProducts = products.map(product => ({ ...product, discountedPrice: product.price * 0.9 }));

console.log(discountedProducts);

19. Map an array of functions to an array of composed functions.

Input:
[
    x => x + 1,
    x => x * 2,
    x => Math.pow(x, 3)
];
Output:
[3, 5, 16]
Solution:

const functions = [
    x => x + 1,
    x => x * 2,
    x => Math.pow(x, 3)
];

const composedFunctions = functions.map((fn, index) => {
    if (index === 0) return fn;
    return x => functions[index - 1](fn(x));
});

console.log(composedFunctions.map(fn => fn(2)));

20. Map an array of characters to an array of their corresponding ASCII codes.

Input:
['A', 'B', 'C', 'D']
Output:
 [65, 66, 67, 68]
Solution:

const characters = ['A', 'B', 'C', 'D'];
const asciiCodes = characters.map(char => char.charCodeAt(0));

console.log(asciiCodes);
*/
