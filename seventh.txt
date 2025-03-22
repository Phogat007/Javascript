# **JavaScript DOM Manipulation – Part 2**  

In the previous part, we explored how to select elements using various methods. Now, let’s dive deeper into how we can **access and manipulate attributes**, **insert elements into the DOM**, and **delete elements dynamically**.  

---

## **1. Working with Attributes in the DOM**  

Every HTML element has attributes such as `id`, `class`, `src`, and `href`. JavaScript provides two key methods to work with these attributes:  

### **a) getAttribute() – Retrieving Attribute Values**  

The `getAttribute()` method allows us to fetch the value of an attribute from an element.  

```javascript
// Selecting an element by its ID
let div = document.querySelector("#box");
console.log(div.getAttribute("id")); // Output: box

// Selecting an element by its tag name
let para = document.querySelector("p");
console.log(para.getAttribute("class")); // Output: any class assigned to <p>
```

### **b) setAttribute() – Modifying Attribute Values**  

The `setAttribute()` method lets us modify or assign new values to attributes.  

```javascript
let para = document.querySelector("p");
para.setAttribute("class", "newClass"); // Changes the class attribute
console.log(para.getAttribute("class")); // Output: newClass
```

---

## **2. Inserting Elements into the DOM**  

We can dynamically **add new elements** to our webpage using JavaScript. The primary method for this is `document.createElement()`, which allows us to create an element before inserting it into the DOM.  

```javascript
// Creating a new button element
let btn = document.createElement("button");
btn.innerText = "Click Me"; // Adding text inside the button
```

Now, let’s explore different ways to insert this button into the DOM:

### **a) Append the Button to an Existing Element**  

Using `append()` and `prepend()`, we can add an element to an existing HTML structure.  

```javascript
let divBox = document.querySelector("#box");

// Add button at the end of the div
divBox.append(btn);

// Add button at the beginning of the div
divBox.prepend(btn);
```

### **b) Insert Before or After an Element**  

We can also position an element **outside** a selected element using `before()` and `after()`.  

```javascript
let body = document.querySelector("body");

// Insert button before div
divBox.before(btn);

// Insert button after div
divBox.after(btn);
```

---

## **3. Removing Elements from the DOM**  

We can remove elements dynamically using the `remove()` method.  

```javascript
let deleteBtn = document.querySelector("button");
deleteBtn.remove(); // This will remove the selected button element from the DOM
```

---

## **Practice Questions**  

### **Q1: Create a Button with Specific Styles and Insert it into the DOM**  

**Task:**  
- Create a new `<button>` element.
- Set the text to **"Click"**.
- Change its background color to **red** and text color to **white**.
- Insert the button at the **beginning of the `<body>`**.

**Solution:**  

```javascript
let newBtn = document.createElement("button");
newBtn.innerText = "Click";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

let bodyElement = document.querySelector("body");
bodyElement.prepend(newBtn); // Insert button at the beginning of the body
```

---

## **Conclusion**  

In this article, we explored how to:  
✅ **Get and modify attributes using `getAttribute()` and `setAttribute()`.**  
✅ **Insert elements dynamically with `append()`, `prepend()`, `before()`, and `after()`.**  
✅ **Delete elements using `remove()`.**  

With these techniques, you can now dynamically modify web pages and make them more interactive using JavaScript! 🚀  

---
