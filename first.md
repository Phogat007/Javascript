# JavaScript Operators and Control Flow: A Visual Guide

```javascript
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
```

---

## **Key Concepts Visualized**

### Operator Cheat Sheet
| Type              | Operators                         | Use Case Example          |
|-------------------|-----------------------------------|---------------------------|
| Assignment        | `=`, `+=`, `-=`, `*=`, `/=`      | `x += 5` (x = x + 5)     |
| Comparison        | `==`, `===`, `!=`, `!==`, `>`, `<` | `age === 18`             |
| Logical           | `&&`, `||`, `!`                   | `isValid && !isLoading`  |
| Ternary           | `? :`                             | `isMember ? 10 : 20`     |

### Control Flow Diagram
```mermaid
graph TD
  A[Start] --> B{Condition}
  B -->|True| C[Execute Code]
  B -->|False| D{Else if?}
  D -->|Yes| E[Check next condition]
  D -->|No| F[Execute else block]
  C --> G[End]
  E --> G
  F --> G
```

---

## **Best Practices**
1. **Always initialize variables** before using them
2. **Use strict equality** (`===`/`!==`) for predictable comparisons
3. **Keep ternaries simple** - use if-else for complex logic
4. **Comment strategically** - explain "why" not "what"
5. **Test edge cases** - what if age is exactly 18? What if hasID is false?

---

## **Try It Yourself!**
1. Create a traffic light system using if-else:
   - Red: Stop
   - Yellow: Slow down
   - Green: Go
2. Convert this if-else to a ternary:
   ```javascript
   if (score > 50) {
     result = "Pass";
   } else {
     result = "Fail";
   }
   ```

---

**Visual Studio Code Pro Tips** 🔥
- Use `Ctrl + /` to quickly comment/uncomment code
- Install "Quokka.js" for real-time code evaluation
- Enable "Bracket Pair Colorizer" for better scope visualization

