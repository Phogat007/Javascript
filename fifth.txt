# Mastering JavaScript: Arrays, Functions, and Higher-Order Methods  

JavaScript is a powerful language that enables dynamic web development. This blog covers fundamental and advanced concepts, including arrays, loops, functions, and essential higher-order methods like `map()`, `filter()`, and `reduce()`.  

## **Understanding Arrays in JavaScript**  

An **array** is a collection of elements stored in a single variable. You can perform various operations on arrays using built-in methods.  

### **Declaring and Accessing Arrays**  

```javascript
let marks = [97, 88, 78, 89, 90];
console.log(marks);      // Output: [97, 88, 78, 89, 90]
console.log(marks[0]);   // Accessing first element: 97
console.log(marks.length); // Finding length: 5
```

### **Array Methods**  

- **`pop()` and `push()`** – Remove and add elements at the end  
- **`shift()` and `unshift()`** – Remove and add elements at the beginning  
- **`indexOf()` and `includes()`** – Search for elements  
- **`slice()` and `splice()`** – Extract and modify parts of an array  

Example:  
```javascript
console.log(marks.pop());   // Removes last element (90)
console.log(marks.push(100));  // Adds 100 at the end
console.log(marks.includes(78));  // Checks if 78 exists (true)
console.log(marks.slice(1,3));  // Extracts [88, 78]
```

## **Loops in Arrays**  

We use loops to iterate over array elements efficiently.  

### **Using a `for` Loop**  
```javascript
let heros = ["Luffy", "Zoro", "Sanji", "Nami"];
for (let i = 0; i < heros.length; i++) {
    console.log(heros[i]);
}
```

### **Using `for...of` Loop**  
```javascript
for (let hero of heros) {
    console.log(hero);
}
```
The `for...of` loop simplifies iteration without needing index-based logic.

### **Practice Question: Finding the Average of Marks**
```javascript
let marks = [97, 88, 78, 89, 90, 60];
let sum = 0;
for (let mark of marks) {
    sum += mark;
}
console.log(sum / marks.length);  // Output: 83.67
```

## **Functions in JavaScript**  

Functions allow us to encapsulate logic for reusability and better structure.  

### **Function Declaration**  
```javascript
function greet() {
    console.log("One Piece is real!");
}
greet();  // Calling the function
```

### **Passing Parameters to Functions**  
```javascript
function add(a, b) {
    return a + b;
}
console.log(add(32, 33));  // Output: 65
```

### **Arrow Functions**  
Arrow functions provide a concise syntax:  
```javascript
const multiply = (a, b) => a * b;
console.log(multiply(2, 4));  // Output: 8
```

### **Practice: Counting Vowels in a String**  
```javascript
function countVowels(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) count++;
    }
    return count;
}
console.log(countVowels("One Piece is real"));  // Output: 8
```

## **Higher-Order Functions: `map()`, `filter()`, `reduce()`**  

### **Using `forEach()` to Iterate**  
```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num ** 2)); // Squares each number
```

### **Using `map()` to Modify Arrays**  
```javascript
let squares = numbers.map(num => num ** 2);
console.log(squares);  // Output: [1, 4, 9, 16, 25]
```

### **Using `filter()` to Extract Data**  
```javascript
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  // Output: [2, 4]
```

### **Using `reduce()` for Aggregation**  
```javascript
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // Output: 15
```

### **Practice: Finding Students with High Marks**
```javascript
let marks = [34, 56, 78, 90, 91, 92, 95, 100];
let toppers = marks.filter(mark => mark > 90);
console.log(toppers);  // Output: [91, 92, 95, 100]
```

### **User Input Example: Creating an Array from 1 to n**  
```javascript
let num = prompt("Enter a number:");
let arr = Array.from({ length: num }, (_, i) => i + 1);
console.log(arr);
```

### **Using `reduce()` to Calculate Sum and Product**
```javascript
let sum = arr.reduce((acc, val) => acc + val, 0);
console.log(sum);  // Sum from 1 to n

let product = arr.reduce((acc, val) => acc * val, 1);
console.log(product);  // Product from 1 to n
```

## **Conclusion**  

Mastering JavaScript arrays, functions, and higher-order methods like `map()`, `filter()`, and `reduce()` is essential for effective programming. Understanding these concepts will help you write cleaner, more efficient code for web development.  

What concept did you find most useful? Let us know in the comments! 🚀  
