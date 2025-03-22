## JavaScript Fundamentals - Loops, Strings, and Arrays**  

JavaScript is a powerful language used for web development, and understanding its core concepts like loops, strings, and arrays is essential. In this guide, we'll break down these topics with practical examples.  

---

### **Loops in JavaScript**  
Loops allow us to execute a block of code multiple times. JavaScript provides different types of loops:

1. **For Loop** – Used when we know how many times to run the loop.  
   ```js
   // Print numbers from 1 to 5
   for (let i = 1; i <= 5; i++) {
       console.log(i);
   }
   ```
2. **While Loop** – Runs as long as the given condition is `true`.  
   ```js
   // Print "Hello" 5 times
   let i = 1;
   while (i <= 5) {
       console.log("Hello");
       i++;
   }
   ```
3. **Do-While Loop** – Executes the block at least once, even if the condition is `false`.  
   ```js
   let i = 10;
   do {
       console.log("This runs at least once!");
       i++;
   } while (i <= 5);
   ```
4. **For-Of Loop** – Iterates over iterable objects like strings and arrays.  
   ```js
   let str = "JavaScript";
   for (let char of str) {
       console.log(char);
   }
   ```
5. **For-In Loop** – Iterates over object properties.  
   ```js
   let student = { name: "John", age: 20, city: "New York" };
   for (let key in student) {
       console.log(`${key}: ${student[key]}`);
   }
   ```

---

### **Strings in JavaScript**  
Strings are sequences of characters enclosed in quotes (`""`, `''`, or `` ` ` `` for template literals).  

#### **String Methods**  
```js
let str = "JavaScript";
console.log(str.length);         // 10
console.log(str.toUpperCase());  // "JAVASCRIPT"
console.log(str.toLowerCase());  // "javascript"
console.log(str.slice(0, 4));    // "Java"
console.log(str.includes("Java"));// true
console.log(str.replace("Java", "ECMA")); // "ECMAScript"
console.log(str.split(""));      // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
console.log(str.trim());         // Removes extra spaces from start & end
console.log(str.concat(" is fun!")); // "JavaScript is fun!"
console.log(str.repeat(2));      // "JavaScriptJavaScript"
```

#### **Template Literals**  
Template literals allow embedding expressions inside strings:  
```js
let name = "John";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);
```

---

### **Arrays in JavaScript**  
Arrays store multiple values in a single variable.  

#### **Array Methods**  
```js
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.push("Orange"));  // Add at the end
console.log(fruits.pop());           // Remove last element
console.log(fruits.unshift("Mango")); // Add at the beginning
console.log(fruits.shift());         // Remove first element
console.log(fruits.indexOf("Banana"));// 1
console.log(fruits.includes("Apple"));// true
console.log(fruits.slice(1, 3));     // Extract part of array
console.log(fruits.sort());          // Sort alphabetically
console.log(fruits.reverse());       // Reverse array
console.log(fruits.join(", "));      // "Apple, Banana, Cherry"
```

#### **Loops in Arrays**  
```js
let heros = ["Iron Man", "Captain America", "Thor"];
for (let hero of heros) {
    console.log(hero);
}
```

#### **Practice Problem: Find Average Marks**
```js
let marks = [90, 85, 78, 92, 88];
let sum = 0;

for (let mark of marks) {
    sum += mark;
}

let average = sum / marks.length;
console.log(`Average Marks: ${average}`);
```

#### **Practice Problem: Apply Discount to Prices**
```js
let prices = [100, 200, 300, 400, 500];
let discount = 10;

for (let i = 0; i < prices.length; i++) {
    prices[i] -= (prices[i] * discount) / 100;
}

console.log("Discounted Prices:", prices);
```

---

## **Conclusion**  
Understanding loops, strings, and arrays in JavaScript is essential for mastering the language. With practice, these concepts will become second nature. Keep coding! 🚀  

---
