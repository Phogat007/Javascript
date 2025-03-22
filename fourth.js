// -------------------------------
// Arrays in JavaScript
// -------------------------------

let marks = [97, 88, 78, 89, 90];
console.log(marks); // [97, 88, 78, 89, 90]
console.log(typeof marks); // object
console.log(marks.length); // 5
console.log(marks[0]); // 97

// -------------------------------
// Array Methods
// -------------------------------

console.log(marks.pop()); // Removes last element -> 90
console.log(marks); // [97, 88, 78, 89]

console.log(marks.push(90)); // Adds 90 at the end -> New length: 5
console.log(marks); // [97, 88, 78, 89, 90]

console.log(marks.shift()); // Removes first element -> 97
console.log(marks); // [88, 78, 89, 90]

console.log(marks.unshift(97)); // Adds 97 at the beginning -> New length: 5
console.log(marks); // [97, 88, 78, 89, 90]

console.log(marks.indexOf(78)); // Finds index of 78 -> 2
console.log(marks.indexOf(100)); // Not found -> -1

console.log(marks.includes(78)); // true
console.log(marks.includes(100)); // false

console.log(marks.slice(1, 3)); // Extracts elements from index 1 to 2 -> [88, 78]
console.log(marks.slice(2)); // Extracts from index 2 to end -> [78, 89, 90]

console.log(marks.splice(2, 1)); // Removes 1 element at index 2 -> [78]
console.log(marks); // [97, 88, 89, 90]

console.log(marks.splice(2, 0, 78)); // Inserts 78 at index 2
console.log(marks); // [97, 88, 78, 89, 90]

marks[2] = 0; // Arrays are mutable, replacing 78 with 0
console.log(marks); // [97, 88, 0, 89, 90]

console.log(marks.sort()); // Sorts in ascending order -> [0, 88, 89, 90, 97]
console.log(marks.reverse()); // Reverses the array -> [97, 90, 89, 88, 0]

console.log(marks.join(" ")); // Joins with space -> "97 90 89 88 0"
console.log(marks.join("")); // Joins with no separator -> "979089880"
console.log(marks.join("-")); // Joins with hyphen -> "97-90-89-88-0"

// -------------------------------
// Loops in Arrays
// -------------------------------

let heros = ["Luffy", "Zoro", "Sanji", "Nami", "Usopp"];

// Normal for loop
for (let i = 0; i < heros.length; i++) {
    console.log(heros[i]);
}

// For-of loop (automatically iterates through array)
for (let hero of heros) {
    console.log(hero);
}

// -------------------------------
// Practice Questions
// -------------------------------

// 1. Find average marks of students
let marksArray = [97, 88, 78, 89, 90, 60];
let sum = 0;

for (let mark of marksArray) {
    sum += mark;
}

let avg = sum / marksArray.length;
console.log(`Average Marks: ${avg}`);

// 2. Apply a 10% discount on prices
let prices = [100, 200, 300, 400, 500];
let discount = 10;

for (let i = 0; i < prices.length; i++) {
    prices[i] -= (prices[i] * discount) / 100;
}

console.log("Discounted Prices:", prices); // [90, 180, 270, 360, 450]

// 3. Modify company names array
let companies = ["Google", "Facebook", "Amazon", "Microsoft", "Apple"];
console.log(companies); // ["Google", "Facebook", "Amazon", "Microsoft", "Apple"]

// a) Remove the first company
console.log(companies.shift()); // Removes "Google"
console.log(companies); // ["Facebook", "Amazon", "Microsoft", "Apple"]

// b) Replace "Amazon" with "Flipkart"
console.log(companies.splice(1, 1, "Flipkart")); // Removes "Amazon", adds "Flipkart"
console.log(companies); // ["Facebook", "Flipkart", "Microsoft", "Apple"]

// c) Add "Amazon" back at the end
console.log(companies.push("Amazon")); // Adds "Amazon"
console.log(companies); // ["Facebook", "Flipkart", "Microsoft", "Apple", "Amazon"]
