# JavaScript DOM Manipulation: A Beginner's Guide

The **Document Object Model (DOM)** is an essential part of web development that allows JavaScript to interact with and manipulate HTML elements dynamically. In this guide, we will explore various ways to select, modify, and update elements using JavaScript.

## Selecting Elements in the DOM

JavaScript provides multiple ways to select elements in the DOM:

### 1. Selecting by ID
```javascript
let heading = document.getElementById("heading");
console.log(heading); // Outputs the element with ID 'heading'
```

### 2. Selecting by Class Name
```javascript
let headings = document.getElementsByClassName("headings");
console.log(headings); // Returns an HTMLCollection of elements with the class 'headings'
```

### 3. Selecting by Tag Name
```javascript
let paras = document.getElementsByTagName("p");
console.log(paras); // Returns all <p> elements in an HTMLCollection
```

### 4. Selecting by Query Selector
```javascript
let para = document.querySelector("p");
console.log(para); // Selects the first <p> element
```

### 5. Selecting by Query Selector All
```javascript
let paras1 = document.querySelectorAll("p");
console.log(paras1); // Selects all <p> elements in a NodeList
```

## Properties of DOM Elements
Once an element is selected, we can retrieve and modify its properties:

### 1. innerText
Gets or sets the visible text content of an element.
```javascript
console.log(heading.innerText);
```

### 2. innerHTML
Gets or sets the HTML content inside an element.
```javascript
console.log(heading.innerHTML);
```

### 3. tagName
Retrieves the tag name of an element.
```javascript
console.log(heading.tagName);
```

### 4. textContent
Gets or sets the full text content, including hidden elements.
```javascript
console.log(heading.textContent);
```

## Modifying DOM Elements

### 1. Changing Text Content
```javascript
heading.innerText = "I am changed";
para.textContent = "I am changed";
```

### 2. Modifying HTML Content
```javascript
heading.innerHTML = "<b>I am changed</b>";
```

### 3. Styling Elements
```javascript
heading.style.color = "red";
heading.style.backgroundColor = "black";
heading.style.fontSize = "50px";
heading.style.fontWeight = "bold";
```

### 4. Changing Class Names
```javascript
heading.className = "new-heading";
```

## Practice Questions

### Q1: Append Text to an H2 Element
**Create an `<h2>` element with text "One Piece is Real" and append "Monkey D. Luffy" using JavaScript.**
```javascript
let h2 = document.querySelector("#Q1");
h2.innerText = h2.innerText + " ~ Monkey D. Luffy";
```

### Q2: Modify Multiple Elements
**Create three `<div>` elements with a common class "box". Access and modify them using JavaScript.**

#### Solution 1: Using `querySelectorAll` with Index
```javascript
let boxes = document.querySelectorAll(".box");
boxes[0].innerText = "Changed Box 1";
boxes[1].innerText = "Changed Box 2";
boxes[2].innerText = "Changed Box 3";
```

#### Solution 2: Using `for...of` Loop
```javascript
for (let newval of boxes) {
    newval.innerText = "New " + newval.innerText;
}
```

#### Solution 3: Using `forEach` Loop
```javascript
boxes.forEach(val => {
    val.innerText = "New " + val.innerText;
});
```

## Conclusion
Understanding DOM manipulation is a crucial skill for front-end developers. By using JavaScript to select, modify, and update elements dynamically, you can create interactive and engaging web pages. Experiment with these techniques and practice implementing them in real-world projects!

