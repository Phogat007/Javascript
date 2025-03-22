// Asynchronous JavaScript: Callbacks, Promises, and Async/Await

// Example of asynchronous behavior using setTimeout
console.log("one");
console.log("two");

setTimeout(() => {
    console.log("Async operation: Executed after 4 seconds"); // This line runs after 4 seconds
}, 4000);

console.log("three");
console.log("four");

// Callbacks: A function passed as an argument to another function
function sum(a, b) {
    console.log("Sum:", a + b);
}

function add(a, b, callback) { // 'callback' is the function being passed
    callback(a, b); // Execute the passed function
}

add(2, 3, sum); // Passing 'sum' as a callback function

// Callback Hell: Multiple nested callbacks make the code difficult to read
function getData(dataId, nextCallback) {
    setTimeout(() => {
        console.log("Fetching data:", dataId);
        if (nextCallback) {
            nextCallback(); // Calls the next function if provided
        }
    }, 2000);
}

// Deeply nested callbacks (Callback Hell)
getData(1, () => {
    getData(2, () => {
        getData(3, () => {
            getData(4, () => {
                getData(5);
            });
        });
    });
});

// Promises: Used to handle asynchronous operations more efficiently
// A Promise represents a value which might be available now, or in the future, or never.
function asyncOperation() {
    return new Promise((resolve, reject) => {
        console.log("Promise example");
        resolve("Success message"); // Simulating successful operation
        // reject("Error message"); // Uncomment to simulate failure
    });
}

let promise = asyncOperation();
promise.then((res) => {
    console.log("Promise Fulfilled:", res);
}).catch((err) => {
    console.log("Promise Rejected:", err);
});

// Promise Chaining: Ensures operations execute sequentially
function fetchData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data received:", dataId);
            resolve("Success");
        }, 3000);
    });
}

console.log("Fetching data 1...");
fetchData(1).then(() => {
    return fetchData(2);
}).then(() => {
    return fetchData(3);
}).then(() => {
    console.log("All data fetched successfully");
});

// Async/Await: Simplifies promise-based asynchronous code
async function processData() {
    console.log("Starting data processing...");
    await fetchData(1);
    await fetchData(2);
    await fetchData(3);
    await fetchData(4);
    console.log("Data processing completed.");
}

// Calling the async function
processData();

// IIFE (Immediately Invoked Function Expression) for auto-execution
(async function () {
    console.log("Starting IIFE async execution...");
    await fetchData(1);
    await fetchData(2);
    await fetchData(3);
    await fetchData(4);
    console.log("IIFE async execution completed.");
})();
