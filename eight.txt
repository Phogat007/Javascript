# **JavaScript Event Handling**  

Event handling is one of the most powerful features of JavaScript, allowing us to create interactive web applications. In this article, we will explore different types of events, event listeners, and how to toggle between light and dark modes using JavaScript.  

---

## **1. What Are Events in JavaScript?**  

Events are actions or occurrences that happen in the browser, such as a **click, keypress, form submission, mouse movement**, etc. We can handle these events using JavaScript to make web pages more dynamic.  

### **Types of Events**  

1. **Click Event** – Triggered when an element is clicked.  
2. **Mouseover Event** – Triggered when the mouse moves over an element.  
3. **Mouseout Event** – Triggered when the mouse moves out of an element.  
4. **Keydown Event** – Triggered when a key is pressed.  
5. **Keyup Event** – Triggered when a key is released.  
6. **Submit Event** – Triggered when a form is submitted.  

---

## **2. Ways to Handle Events in JavaScript**  

### **a) Inline Event Handling (Not Recommended)**  

Events can be handled directly inside HTML, but this makes the code bulky and difficult to maintain.  

```html
<button onclick="alert('Button Clicked!')">Click Me</button>
```

### **b) Handling Events Using JavaScript**  

Instead of inline event handling, we can use JavaScript to add event listeners dynamically.  

```javascript
let btn = document.querySelector("button");

btn.onclick = () => {
    console.log("Button Clicked!"); // This function will be executed when the button is clicked
};
```

---

## **3. The Event Object in JavaScript**  

The `event` object contains useful information about the event that occurred. Let's see an example:  

```javascript
let btn = document.querySelector("button");

btn.onclick = (e) => {
    console.log(e); // Prints the event object
    console.log(e.type); // Prints the type of event (e.g., "click")
    console.log(e.target); // Prints the element that triggered the event
    console.log(e.clientX, e.clientY); // Prints the mouse position (x, y coordinates)
};
```

---

## **4. Using Event Listeners in JavaScript**  

Instead of using `onclick`, we can use `addEventListener()` to handle multiple events efficiently.  

```javascript
let btn = document.querySelector("button");

// First event listener
btn.addEventListener("click", () => {
    console.log("Button clicked");
});

// Second event listener
btn.addEventListener("click", () => {
    console.log("Button clicked again");
});
```

**Why Use `addEventListener()` Instead of `onclick`?**  
- Allows multiple event handlers on the same element.  
- Provides more flexibility and better separation of concerns.  

---

## **5. Removing an Event Listener**  

We can remove an event listener using `removeEventListener()`.  

```javascript
let btn = document.querySelector("button");

function handleClick() {
    console.log("Button clicked");
    btn.removeEventListener("click", handleClick); // Removes the event listener after one click
}

btn.addEventListener("click", handleClick);
```

---

## **6. Practice Question: Toggle Dark Mode**  

Let’s create a **toggle button** that switches between light mode and dark mode when clicked.  

### **Solution 1: Using If-Else Condition**  

```javascript
let modeBtn = document.createElement("button"); // Create a new button
modeBtn.innerText = "Toggle Mode"; // Set button text

document.body.append(modeBtn); // Add button to the body

let currMode = "light"; // Track the current mode

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        currMode = "light";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
    console.log("Mode changed to", currMode);
});
```

### **Solution 2: Using CSS Classes**  

Instead of modifying styles directly, we can toggle CSS classes for better maintainability.  

```css
/* Add this in your CSS file */
.dark {
    background-color: black;
    color: white;
}

.light {
    background-color: white;
    color: black;
}
```

```javascript
let modeBtn = document.createElement("button");
modeBtn.innerText = "Toggle Mode";

let body = document.querySelector("body");
body.append(modeBtn);

let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.remove("light");
        body.classList.add("dark");
    } else {
        currMode = "light";
        body.classList.remove("dark");
        body.classList.add("light");
    }
    console.log("Mode changed to", currMode);
});
```

### **Solution 3: Using a Single Line Toggle Class**  

```javascript
let modeBtn = document.createElement("button");
modeBtn.innerText = "Toggle Mode";
document.body.append(modeBtn);

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark"); // Toggle dark mode
    let currMode = document.body.classList.contains("dark") ? "dark" : "light";
    console.log("Mode changed to", currMode);
});
```

---

## **Conclusion**  

In this article, we covered:  
✅ **Different types of events (click, mouseover, keydown, etc.).**  
✅ **Using the event object to get event details.**  
✅ **Handling events using `addEventListener()` and `removeEventListener()`.**  
✅ **Toggling between light and dark modes using JavaScript.**  

With these concepts, you can now make your web pages more interactive and user-friendly! 🚀  

---
