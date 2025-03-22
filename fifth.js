// -------------------------------
// Functions in JavaScript
// -------------------------------

// Function Declaration
function myFunction() {
    console.log("One piece is real");
}

// Function Call
myFunction(); 

// Function with Parameters
function add(a, b) {
    console.log(a + b);
}
add(32, 33); // 65

// Function with Return Statement
function sum(a, b) {
    return a + b;
}
let result = sum(22, 33);
console.log(result); // 55

// Arrow Functions
let mul = (a, b) => a * b;
console.log(mul(2, 4)); // 8
console.log(mul(22, 33)); // 726

// -------------------------------
// Practice Questions
// -------------------------------

// Function to Count Vowels in a String
function countVowels(str) {
    let count = 0;
    str = str.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}
console.log(countVowels("One piece is real")); // 8

// Arrow Function for the Same
const vowelCount = (str) => {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    str.toLowerCase().split('').forEach(char => {
        if (vowels.includes(char)) count++;
    });
    return count;
};
console.log(vowelCount("One piece is real"));

// -------------------------------
// Array Methods & Loops
// -------------------------------

// Using forEach Loop to Print Squares
let arr = [1, 2, 3, 4, 5, 6];
arr.forEach(val => console.log(val ** 2));

// Alternative Way with a Separate Function
let square = val => console.log(val ** 2);
arr.forEach(square);

// Map Function - Modifies Array but Does Not Change Original
let arr1 = [34, 11, 23, 45, 67];
let squaredArr = arr1.map(val => val ** 2);
console.log(squaredArr);

// Filter Function - Get Even Numbers
let numbers = [2, 3, 5, 3, 7, 9, 1, 4, 6, 8];
let evens = numbers.filter(val => val % 2 === 0);
console.log(evens);

// Reduce Function - Sum of Array
let reduceArr = [1, 2, 3, 4, 5, 6];
let sumOfArray = reduceArr.reduce((prev, curr) => prev + curr);
console.log(sumOfArray);

// -------------------------------
// Additional Practice
// -------------------------------

// Filter Students with Marks > 90
let marks = [34, 56, 78, 90, 23, 45, 67, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
let toppers = marks.filter(val => val > 90);
console.log(toppers);

// Create an Array from 1 to N (User Input)
let num = parseInt(prompt("Enter a number"));
let arr2 = Array.from({ length: num }, (_, i) => i + 1);
console.log(arr2);

// Sum Using Reduce
let totalSum = arr2.reduce((prev, curr) => prev + curr, 0);
console.log(totalSum);

// Product Using Reduce
let product = arr2.reduce((prev, curr) => prev * curr, 1);
console.log(product);
