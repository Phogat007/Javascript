// ========================
// 1. Assignment Operators
// ========================
let x = 2;
let y = 6;

console.log(x += y);  // x = x + y (8)
console.log(x -= y);  // x = x - y (2)
console.log(x *= y);  // x = x * y (12)
console.log(x /= y);  // x = x / y (2)
console.log(x %= y);  // x = x % y (2)
console.log(x **= y); // x = x ** y (64)

/* 
Why they matter: 
- Shortcut for variable modification
- Essential in loops and state management
*/

// ========================
// 2. Comparison Operators
// ========================
let a = 2;
let b = "2";

// Loose vs Strict Comparison
console.log(a == b);  // true (value match)
console.log(a === b); // false (type mismatch)
console.log(a != b);  // false
console.log(a !== b); // true

// Numerical Comparisons
console.log(5 > 3);   // true
console.log(5 <= 3);  // false

/* 
Pro Tip: 
Always use === and !== to avoid type coercion surprises
*/

// ========================
// 3. Logical Operators
// ========================
const isSunny = true;
const isWarm = false;

// AND (&&) - Both must be true
console.log(isSunny && isWarm); // false 

// OR (||) - At least one true
console.log(isSunny || isWarm); // true

// NOT (!) - Inverts boolean
console.log(!isSunny); // false

// Real-world use case
const shouldWearSunglasses = isSunny && !isWarm;
console.log(shouldWearSunglasses); // true

// ========================
// 4. Ternary Operator
// ========================
const temperature = 25;
const weatherMessage = temperature > 30 
  ? "Stay hydrated!" 
  : "Enjoy the weather!";

console.log(weatherMessage); // "Enjoy the weather!"

/* 
When to use:
- Simple conditional assignments
- JSX in React components
- Avoid for complex logic
*/

// ========================
// 5. Conditional Statements
// ========================
const age = 18;
const hasID = true;

// Basic if-else
if (age >= 18) {
  console.log("Eligible for voting");
} else {
  console.log("Come back when older");
}

// Multi-condition check
if (age >= 21 && hasID) {
  console.log("Bar entry allowed");
} else if (age >= 18 && hasID) {
  console.log("Limited access");
} else {
  console.log("Access denied");
}

// Switch Statement
const day = "Monday";
switch(day) {
  case "Monday":
    console.log("Start of work week");
    break;
  case "Friday":
    console.log("Weekend approaching!");
    break;
  default:
    console.log("Regular day");
}