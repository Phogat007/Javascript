// DOM manipulation [Part-2]

// Attributes

// getAttribute() - returns the value of an attribute
// setAttribute() - sets the value of an attribute

// get attribute methods
let div = document.querySelector("#box");
console.log(div); // prints the element with id 'box'

let id = div.getAttribute("id");
console.log(id); // prints the value of the id attribute

let para = document.querySelector("p");
console.log(para); // prints the element with tag name 'p'
let parag = para.getAttribute("class");
console.log(parag); // prints the value of the class attribute

// set attribute methods
para.setAttribute("class", "newClass");
console.log(para.getAttribute("class")); // prints updated class attribute

// Inserting elements in the DOM
let btn = document.createElement("button"); // creates a new button element
btn.innerText = "Click"; // sets the text content of the button

// Append button to div at the end
let divBox = document.querySelector("#box");
divBox.append(btn); 

// Append button at the beginning of div
divBox.prepend(btn);

// Insert button before and after div element
let body = document.querySelector("body");
divBox.before(btn);
divBox.after(btn);

// Deleting elements in the DOM
let deleteBtn = document.querySelector("button");
deleteBtn.remove(); // removes the button element

// Practice Questions

// Q1. Create a new button element, give it the text "Click", background color "red", and font color "white", then insert it at the beginning of the body element

let newBtn = document.createElement("button"); // creates a new button element
newBtn.innerText = "Click"; // sets the text content of the button
newBtn.style.backgroundColor = "red"; // sets background color
newBtn.style.color = "white"; // sets font color

let bodyElement = document.querySelector("body"); // selects body element
bodyElement.prepend(newBtn); // inserts button at the beginning of body
