// Event Handling in JavaScript

// Common Event Types
// 1. click - when the user clicks an element
// 2. mouseover - when the user hovers over an element
// 3. mouseout - when the user moves the cursor away
// 4. keydown - when a key is pressed
// 5. keyup - when a key is released
// 6. submit - when a form is submitted

// Selecting the body element
const body = document.body;

// Creating the toggle button dynamically
const modeBtn = document.createElement("button");
modeBtn.innerText = "Toggle Mode";
body.appendChild(modeBtn);

// Adding event listener for mode toggle
modeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    const currMode = body.classList.contains("dark") ? "dark" : "light";
    console.log(`Mode changed to: ${currMode}`);
});

// Example of Event Object Usage
modeBtn.addEventListener("click", (event) => {
    console.log("Event Type:", event.type);
    console.log("Target Element:", event.target);
    console.log("Mouse Position - X:", event.clientX, "Y:", event.clientY);
});

// Creating a button to remove event listener
const removeBtn = document.createElement("button");
removeBtn.innerText = "Remove Click Event";
body.appendChild(removeBtn);

const logClick = () => console.log("Button clicked!");

// Attaching event listener to modeBtn
modeBtn.addEventListener("click", logClick);

// Removing event listener on button click
removeBtn.addEventListener("click", () => {
    modeBtn.removeEventListener("click", logClick);
    console.log("Click event removed from Toggle Mode button.");
});
