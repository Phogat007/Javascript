# **Understanding JavaScript Classes, Prototypes, and Inheritance**  

JavaScript is an object-oriented programming language that provides flexibility in defining objects, classes, and inheritance. In this blog, we will explore key concepts like **prototypes, classes, inheritance, and error handling** in JavaScript, along with practical examples.  

---

## **1. Prototypes in JavaScript**  
Prototypes allow objects to inherit properties and methods from another object. Instead of defining methods directly inside an object, we can define them in the prototype, which helps in memory efficiency.

### **Example of Prototypes in JavaScript**  

```javascript
const employee = {    
    calcTax(){
        console.log("Tax is 10%");  
    }
};

const luffy = {
    salary: 50000,
}    

luffy.__proto__ = employee; // Adding employee as prototype of luffy

luffy.calcTax(); // Output: Tax is 10%
```

Here, `luffy` does not have the `calcTax` method, but since `employee` is its prototype, it inherits the method.

### **Method Overriding in Prototypes**  

If an object and its prototype have the same method, the object's method takes precedence.

```javascript
const employee = {    
    calcTax(){
        console.log("Tax is 10%");  
    }
};

const luffy = {
    salary: 50000,
    calcTax(){
        console.log("Tax is 20%");  
    }
};

luffy.calcTax(); // Output: Tax is 20%
```

Since `luffy` has its own `calcTax` method, it overrides the prototype method.

---

## **2. Classes in JavaScript**  
Classes provide a structured way to create multiple objects with similar properties and behaviors.

### **Example: Creating a Class in JavaScript**  
```javascript
class HondaCar {
    start() {
        console.log("Car started");
    }

    stop() {
        console.log("Car stopped");
    }

    setColor(color) {
        this._color = color; // The `this` keyword refers to the current object
    }
}

// Creating objects of HondaCar class
let brio = new HondaCar();
let amaze = new HondaCar();

brio.setColor("Red");
amaze.setColor("Blue");

console.log(brio, amaze);
```

---

## **3. Constructor in JavaScript Classes**  
The `constructor` method initializes object properties when an object is created.

### **Example: Constructor in a Class**  
```javascript
class HondaCar {
    constructor(color, mileage) {
        this._color = color;
        this._mileage = mileage;
    }

    start() {
        console.log("Car started");
    }

    stop() {
        console.log("Car stopped");
    }
}

let brio = new HondaCar("Red", 16);
console.log(brio); // Output: HondaCar { _color: 'Red', _mileage: 16 }

let amaze = new HondaCar("Blue", 18);
console.log(amaze);
```

Here, `brio` and `amaze` objects are initialized with different values.

---

## **4. Inheritance in JavaScript**  
Inheritance allows a child class to inherit properties and methods from a parent class.

### **Example: Class Inheritance**  
```javascript
class Car {
    start() {
        console.log("Car started");
    }

    stop() {
        console.log("Car stopped");
    }
}

class HondaCar extends Car {  
    carType(){
        console.log("This is a Honda car");
    }
}

let brio = new HondaCar();
brio.start(); // Output: Car started
brio.carType(); // Output: This is a Honda car
```

---

## **5. `super` Keyword in JavaScript Inheritance**  
The `super` keyword is used to call the constructor of the parent class.

### **Example: Using `super` in a Class**  
```javascript
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    eat() {
        console.log(`${this._name} is eating`);
    }

    sleep() {
        console.log(`${this._name} is sleeping`);
    }
}

class Engineer extends Person {
    constructor(name, age, sector, salary) {
        super(name, age); // Calling parent class constructor
        this._sector = sector;
        this._salary = salary;
    }

    work(){
        console.log(`${this._name} is working in ${this._sector}`);
    }
}

let engObj = new Engineer("Luffy", 18, "IT", 50000);
console.log(engObj);
```

---

## **6. Practice Problems**  

### **Problem 1: Create a User Class**  
Create a class `User` with `name` and `email` properties and a method `viewData()` that logs data.

```javascript
let Data = "Some data";

class User {
    constructor(name, email) {
        this._name = name;
        this._email = email;
    }

    viewData() {
        console.log("Data =", Data);
    }
}

let student1 = new User("Luffy", "luffy@123");
let student2 = new User("Zoro", "zoro@123");
let student3 = new User("Sanji", "sanji@123");
```

---

### **Problem 2: Create an Admin Class that Inherits from User**  
Create a class `Admin` that inherits from `User` and adds a method `editData()`.

```javascript
class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }

    editData() {
        Data = "New data";
    }
}

let admin1 = new Admin("Mohit", "mohit@123");
admin1.editData();
console.log(Data); // Output: New data
```

---

## **7. Error Handling in JavaScript**  
Error handling is crucial in JavaScript applications to handle unexpected errors gracefully.

### **Using `try...catch` for Error Handling**  
```javascript
class User {
    constructor(name, email) {
        if (!name || !email) {
            throw new Error("Name and email are required");
        }
        this._name = name;
        this._email = email;
    }

    viewData() {
        try {
            console.log("Data =", Data);
        } catch (error) {
            console.log("Error:", error.message);
        }
    }
}

try {
    let student1 = new User(); // This will throw an error
} catch (error) {
    console.log("Caught Error:", error.message);
}

let student2 = new User("Zoro", "zoro@123");
student2.viewData();
```

### **Using `finally` for Cleanup**  
The `finally` block executes whether an error occurs or not.

```javascript
try {
    console.log("Trying to fetch data...");
    throw new Error("Something went wrong");
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Cleanup done.");
}
```

---

## **Conclusion**  
- **Prototypes** allow objects to inherit properties and methods.  
- **Classes** provide a structured way to define objects.  
- **Inheritance** allows child classes to extend parent classes.  
- **The `super` keyword** is used to call the parent constructor.  
- **Error handling** using `try...catch` ensures the program does not crash unexpectedly.  

By mastering these concepts, you can write cleaner, more efficient, and error-free JavaScript code. Keep practicing! 🚀