# Understanding Asynchronous JavaScript: Callbacks, Promises, and Async/Await

JavaScript is a single-threaded, non-blocking language, which means it can handle multiple tasks without waiting for one to finish before starting another. This is achieved through asynchronous programming techniques such as **callbacks, promises, and async/await**. In this blog, we'll explore these concepts with practical examples.

---

## 1. Synchronous vs. Asynchronous Execution

### **Synchronous Execution**
In synchronous execution, tasks are performed sequentially. If a task takes time, it blocks the execution of other tasks.

```js
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
```

**Output:**
```
Task 1
Task 2
Task 3
```

Here, each line executes one after the other without delay.

### **Asynchronous Execution**
JavaScript allows certain operations (like API calls, file handling, and timers) to run in the background, preventing the main thread from being blocked.

```js
console.log("Task 1");
setTimeout(() => {
    console.log("Task 2 (Async)");
}, 3000);
console.log("Task 3");
```

**Output:**
```
Task 1
Task 3
Task 2 (Async)  // Executes after 3 seconds
```

`setTimeout` is an asynchronous function that allows Task 3 to execute while waiting for Task 2 to complete.

---

## 2. Callbacks in JavaScript
A **callback** is a function passed as an argument to another function and executed later.

### **Example:**
```js
function fetchData(id, callback) {
    setTimeout(() => {
        console.log("Fetched Data: ", id);
        callback();
    }, 2000);
}

fetchData(1, () => {
    fetchData(2, () => {
        fetchData(3, () => {
            console.log("All data fetched!");
        });
    });
});
```

### **Callback Hell**
As we nest more callbacks, the code becomes harder to read and maintain. This is called **callback hell**.

---

## 3. Promises in JavaScript
A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation.

### **Promise States:**
1. **Pending** - Initial state, operation not yet completed.
2. **Fulfilled** - Operation completed successfully.
3. **Rejected** - Operation failed.

### **Creating a Promise:**
```js
const myPromise = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
        if (success) {
            resolve("Promise Resolved!");
        } else {
            reject("Promise Rejected!");
        }
    }, 2000);
});

myPromise
    .then(response => console.log(response)) // Runs if resolved
    .catch(error => console.log(error)); // Runs if rejected
```

---

## 4. Promise Chaining
We can chain multiple `.then()` statements to execute promises in sequence.

```js
function fetchData(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched Data: ", id);
            resolve();
        }, 2000);
    });
}

fetchData(1)
    .then(() => fetchData(2))
    .then(() => fetchData(3))
    .then(() => console.log("All data fetched!"));
```

---

## 5. Async/Await: The Modern Approach
`async` and `await` provide a cleaner way to handle asynchronous operations.

### **Example:**
```js
async function fetchAllData() {
    await fetchData(1);
    await fetchData(2);
    await fetchData(3);
    console.log("All data fetched!");
}

fetchAllData();
```

Here, `await` ensures each `fetchData` call completes before moving to the next, making the code more readable.

---

## 6. IIFE (Immediately Invoked Function Expression)
Sometimes, we want an **async function to run immediately** without explicitly calling it.

```js
(async function() {
    await fetchData(1);
    await fetchData(2);
    await fetchData(3);
    console.log("All data fetched!");
})();
```

This self-invoking function starts execution as soon as the script runs.

---

## Conclusion
| Method       | Pros                                         | Cons                                   |
|-------------|--------------------------------|--------------------------------|
| Callbacks   | Simple for small tasks        | Leads to callback hell         |
| Promises    | Handles errors better         | Requires chaining `.then()`    |
| Async/Await | Most readable and manageable  | Requires modern JavaScript     |

For handling multiple asynchronous operations efficiently, **async/await** is the best approach.

---
