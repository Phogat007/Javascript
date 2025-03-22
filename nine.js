// Prototype example
const employee = {    
    calcTax() {
        console.log("Tax is 10%");  
    }
};

const luffy = {
    salary: 50000,
    calcTax() {
        console.log("Tax is 20%");  // Overrides prototype method
    }
};

// Class definition
class HondaCar {
    constructor(color, mileage) {
        if (!color || !mileage) throw new Error("Color and mileage are required");
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

try {
    let brio = new HondaCar("Red", 16);
    console.log(brio);
} catch (error) {
    console.error("Error:", error.message);
}

// Inheritance example
class Car {
    start() {
        console.log("Car started");
    }
    stop() {
        console.log("Car stopped");
    }
}

class Honda extends Car {
    carType() {
        console.log("This is a Honda car");
    }
}

let brio = new Honda();
brio.start();

// Super keyword usage in inheritance
class Person {
    constructor(name, age) {
        if (!name || !age) throw new Error("Name and age are required");
        this._name = name;
        this._age = age;
    }
    eat() {
        console.log(`${this._name} is eating`);
    }
}

class Engineer extends Person {
    constructor(name, age, sector, salary) {
        super(name, age);
        if (!sector || !salary) throw new Error("Sector and salary are required");
        this._sector = sector;
        this._salary = salary;
    }
    work() {
        console.log(`${this._name} is working in ${this._sector}`);
    }
}

try {
    let engObj = new Engineer("Luffy", 18, "IT", 50000);
    console.log(engObj);
} catch (error) {
    console.error("Error:", error.message);
}

// User class with error handling
let Data = "Some data";
class User {
    constructor(name, email) {
        if (!name || !email) throw new Error("Name and email are required");
        this._name = name;
        this._email = email;
    }
    viewData() {
        try {
            console.log("Data:", Data);
        } catch (error) {
            console.error("Error viewing data:", error.message);
        }
    }
}

// Admin class inherits from User
class Admin extends User {
    editData(newData) {
        if (!newData) throw new Error("New data is required");
        Data = newData;
    }
}

try {
    let admin1 = new Admin("Mohit", "mohit@123");
    admin1.editData("Updated data");
    console.log(Data);
} catch (error) {
    console.error("Error:", error.message);
}
