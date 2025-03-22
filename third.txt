# **Loops, Strings, and More in JavaScript: A Beginner's Guide**  

JavaScript is one of the most powerful programming languages for web development. In this blog, we'll explore essential concepts like **loops, strings, and useful built-in methods** with practical examples.  

---

## **Loops in JavaScript**  
Loops help in executing a block of code multiple times, making programs more efficient and reducing repetitive tasks. Let's explore different types of loops in JavaScript.  

### **1. For Loop**  
A `for` loop is commonly used when we know how many times we want to execute a block of code.  

```javascript
// Print "ok" five times
for (let i = 0; i < 5; i++) {
    console.log("ok");
}
```

### **2. While Loop**  
The `while` loop runs as long as the given condition remains `true`.  

```javascript
// Print "teddy" five times
let j = 1;
while (j <= 5) {
    console.log("teddy");
    j++;
}
```

### **3. Do-While Loop**  
Unlike a `while` loop, a `do-while` loop executes the code **at least once** before checking the condition.  

```javascript
let i = 10;
do {
    console.log("teddy");
    i++;
} while (i <= 5); // Executes once even though the condition is false.
```

### **4. For-of Loop**  
This loop is used to iterate over iterable objects like strings or arrays.  

```javascript
let str = "luffy";
for (let val of str) {
    console.log("val =", val);
}
```

### **5. For-in Loop**  
The `for-in` loop is used to iterate over object properties.  

```javascript
let student = {
    name: "Luffy",
    age: 18,
    city: "New York"
};

for (let key in student) {
    console.log("key =", key, "value =", student[key]);
}
```

---

## **Practice Problems on Loops**  

### **1. Print Even Numbers from 1 to 10**  
```javascript
for (let even = 1; even <= 10; even++) {
    if (even % 2 == 0) {
        console.log(even);
    }
}
```

### **2. Number Guessing Game**  
```javascript
let num = 5;
let guess = prompt("Guess the number");

while (guess != num) {
    guess = prompt("You guessed wrong. Try again");
}
console.log("You guessed the number!");
```

---

## **Working with Strings in JavaScript**  
Strings are sequences of characters used to store and manipulate text.  

```javascript
let str = "one piece";
console.log(str);
```

### **String Methods**  
Here are some common JavaScript string methods:

```javascript
let str = "one piece";

console.log(str.length);        // 9
console.log(str.toUpperCase()); // "ONE PIECE"
console.log(str.toLowerCase()); // "one piece"
console.log(str.slice(0, 7));   // "one pie"
console.log(str.charAt(0));     // "o"
console.log(str.indexOf("e"));  // 3
console.log(str.includes("one"));// true
console.log(str.replace("one", "two")); // "two piece"
console.log(str.split(" "));    // ["one", "piece"]
console.log(str.trim());        // "one piece"
console.log(str.concat(" is the best")); // "one piece is the best"
console.log(str.repeat(2));     // "one pieceone piece"
```

---

## **Template Literals & String Interpolation**  
Template literals provide an easier way to format strings using **backticks (`) instead of quotes**.  

```javascript
let obj = {
    name: "Luffy",
    age: 18,
    city: "New York"
};

console.log(`name: ${obj.name}, age: ${obj.age}, city: ${obj.city}`);
```

We can also insert expressions inside strings using **string interpolation**:  

```javascript
let exp = `The result is ${2 + 3}`;
console.log(exp); // "The result is 5"
```

---

## **Practice Problem: Generate a Unique Username**  
We can create a username by appending the name length to the user's input.

```javascript
let name = prompt("Enter your full name");
let username = `@${name}${name.length}`;
console.log(username);
```

### **Alternative Ways to Create the Username**  
```javascript
console.log("@" + name + name.length);
console.log("@", name, name.length);
console.log("@" + name.concat(name.length));

let uname = "@" + name + name.length;
console.log(uname);
```

---

## **Final Thoughts**  
JavaScript offers powerful features to handle loops and strings efficiently. Mastering these concepts will improve your coding skills and help you build dynamic applications.  

🔹 **Loops** automate repetitive tasks.  
🔹 **String methods** help manipulate text easily.  
🔹 **Template literals** make string formatting simpler.  

Try these examples in your JavaScript projects and keep practicing! 🚀