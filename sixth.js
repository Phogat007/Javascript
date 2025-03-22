// DOM manipulation

// Selecting the element by ID
let heading = document.getElementById("heading");
console.log(heading); // Prints the element with ID 'heading'

// Selecting elements by class name
let headings = document.getElementsByClassName("headings");
console.log(headings); // Prints elements with class 'headings' in an HTMLCollection

// Selecting elements by tag name
let paras = document.getElementsByTagName("p");
console.log(paras); // Prints all <p> elements in an HTMLCollection

// Selecting elements using querySelector
let para = document.querySelector("p");
console.log(para); // Prints the first <p> tag

// Selecting elements using querySelectorAll
let paras1 = document.querySelectorAll("p");
console.log(paras1); // Prints all <p> tags in a NodeList

// Properties of an element
console.log(heading.innerText); // Prints the text content
console.log(para.innerText);
console.log(heading.innerHTML); // Prints the HTML content
console.log(para.innerHTML);
console.log(heading.tagName); // Prints the tag name
console.log(para.tagName);
console.log(heading.textContent);
console.log(para.textContent);

// Changing element text
heading.innerText = "I am changed";
para.textContent = "I am changed";

// Changing element HTML
heading.innerHTML = "<b>I am changed</b>";
para.innerHTML = "<b>I am changed</b>";

// Changing element style
heading.style.color = "red";
heading.style.backgroundColor = "black";
heading.style.fontSize = "50px";
heading.style.fontWeight = "bold";

// Changing the class of the element
heading.className = "heading";
para.className = "para";

// Practice Questions

// Q1: Append "Monkey D. Luffy" to the text of an <h2> heading with ID 'Q1'
let h2 = document.querySelector("#Q1");
console.log(h2.innerText);
h2.innerText = h2.innerText + " ~ Monkey D. Luffy";

// Q2: Add text "box 1", "box 2", "box 3" to divs with class "box"

// Method 1: Using querySelectorAll and index
let boxes = document.querySelectorAll(".box");
console.log(boxes);
boxes[0].innerText = "Box 1";
boxes[1].innerText = "Box 2";
boxes[2].innerText = "Box 3";

// Method 2: Using for-of loop
for (let newval of boxes) {
    console.log(newval.innerText);
    newval.innerText = "New " + newval.innerText;
}

// Method 3: Using forEach loop
let boxes1 = document.querySelectorAll(".box");
console.log(boxes1);
boxes1.forEach(val => {
    console.log(val.innerText);
    val.innerText = "New " + val.innerText;
});
