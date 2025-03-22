// Loops in JavaScript

// For loop: Print numbers from 1 to 5
for (let i = 0; i < 5; i++) {
    console.log("ok");
}

// Calculate sum of numbers 1 to 5
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum);

// While loop
let j = 1;
while (j <= 5) {
    console.log("teddy");
    j++; 
}

// Do-while loop
let i = 10;
do {
    console.log("teddy");
    i++;
} while (i <= 5); 

// For-of loop
let str1 = "luffy";
for (let val of str1) {
    console.log("val =", val);
}

let str2 = "monkey d luffy";
let size = 0;
for (let val of str2) {
    console.log("val =", val);
    size++;
}
console.log("size =", size);

// For-in loop
let student = {
    name: "luffy",
    age: 18,
    city: "new york"
};
for (let key in student) {
    console.log("key =", key, "value =", student[key]);
}

// Practice Problems

// 1. Print all even numbers from 1 to 10
for (let even = 1; even <= 10; even++) {
    if (even % 2 == 0) {
        console.log(even);
    }
}

// 2. Game to guess the number by taking input from user
let num = 5;
let guess = prompt("Guess the number");

while (guess != num) {
    guess = prompt("You guessed wrong. Try again");
}
console.log("You guessed the number!");

// Strings
let str3 = "one piece";
console.log(str3);

// String methods
let str = "one piece";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.slice(0, 7));
console.log(str.slice(5));
console.log(str.charAt(0));
console.log(str.charAt(5));
console.log(str.indexOf("e"));
console.log(str.lastIndexOf("e"));
console.log(str.includes("one"));
console.log(str.includes("two"));
console.log(str.replace("one", "two"));
console.log(str.split(" "));
console.log(str.split(""));
console.log(str.trim());
console.log(str.concat(" is the best"));
console.log(str.repeat(2));

// Template literals
let obj = {
    name: "luffy",
    age: 18,
    city: "new york"
};
console.log(`name: ${obj.name}, age: ${obj.age}, city: ${obj.city}`);

// String interpolation
let exp = `The expression example is ${2 + 3}`;
console.log(exp);

// Strings Practice Problems

// Username generator based on user input
let name = prompt("Enter your full name");

let username = `@${name}${name.length}`;
console.log(username);

console.log("@" + name + name.length);
console.log("@", name, name.length);
console.log("@" + name.concat(name.length));

let uname = "@" + name + name.length;
console.log(uname);
