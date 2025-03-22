# **Building a Rock-Paper-Scissors Game with JavaScript**  

Rock-Paper-Scissors is a classic game that’s easy to play and fun to implement using JavaScript. Here, we will break down the code for a simple interactive Rock-Paper-Scissors game, explaining each part step by step.  

---

## **1. Understanding the Game Logic**  
The rules of the game are simple:  
- **Rock beats Scissors**  
- **Scissors beats Paper**  
- **Paper beats Rock**  
- If both choices are the same, the game is a **draw**  

We will implement this logic using JavaScript and update the game dynamically based on user interactions.

---

## **2. Setting Up JavaScript Variables**  
To keep track of the game state, we need two variables:  
```javascript
let userscore = 0;
let compscore = 0;
```
- `userscore` stores the user’s points.  
- `compscore` stores the computer’s points.  

---

## **3. Selecting DOM Elements**  
We need to interact with different parts of the webpage, such as score display and game messages.  
```javascript
const choices = document.querySelectorAll('.choice');
const userScorePara = document.querySelector('#user p:last-child');
const compScorePara = document.querySelector('#comp p:last-child');
const msg = document.querySelector('#msg');
```
- `choices` selects all elements that represent rock, paper, and scissors.  
- `userScorePara` and `compScorePara` select the score display for the user and computer.  
- `msg` selects the element where we will display the game result.  

---

## **4. Generating the Computer’s Choice**  
Since the computer should pick a random move, we use `Math.random()`:  
```javascript
const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};
```
- The `options` array contains all possible choices.  
- `Math.random()` generates a random number between `0` and `2` to pick an element from the array.  

---

## **5. Determining the Winner**  
We now compare the user’s choice with the computer’s choice:  
```javascript
const compareChoices = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        return "draw";
    } else if (
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')
    ) {
        return "win";
    } else {
        return "lose";
    }
};
```
- If both choices are the same, the game is a **draw**.  
- We check if the user’s choice **beats** the computer’s choice and return `"win"` if true.  
- Otherwise, the user **loses** the round.  

---

## **6. Updating the Score**  
After determining the winner, we update the displayed score:  
```javascript
const updateScore = () => {
    userScorePara.textContent = userscore;
    compScorePara.textContent = compscore;
};
```
This ensures that the latest scores are always shown on the screen.

---

## **7. Displaying the Game Result**  
We create messages to inform the user of the game outcome:  
```javascript
const showMessage = (result, userChoice, compChoice) => {
    const messages = {
        win: `You Win! ${userChoice} beats ${compChoice}`,
        lose: `You Lose! ${compChoice} beats ${userChoice}`,
        draw: "Game Draw!"
    };
    
    msg.textContent = messages[result];
    msg.classList.remove("win", "lose", "draw");
    msg.classList.add(result);
};
```
- This function sets the message text dynamically based on whether the user **won, lost, or drew**.  
- It also updates the CSS class to apply relevant styling (e.g., color changes for win/loss).  

---

## **8. Implementing Game Logic**  
Now, we put everything together in the `playGame` function:  
```javascript
const playGame = (userChoice) => {
    const compChoice = genCompChoice(); // Get computer's choice
    const result = compareChoices(userChoice, compChoice); // Compare choices

    if (result === "win") {
        userscore++; // Increase user score
    } else if (result === "lose") {
        compscore++; // Increase computer score
    }

    updateScore(); // Update scores on the screen
    showMessage(result, userChoice, compChoice); // Show result message
};
```
- The function generates a **random computer choice**,  
- Compares it with the **user’s selection**,  
- Updates the **score and message** accordingly.  

---

## **9. Adding Event Listeners**  
We listen for clicks on the choices (rock, paper, scissors) and start the game:  
```javascript
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});
```
- When the user clicks on an element, we retrieve its `id` (rock, paper, or scissors).  
- We then pass it to `playGame` to determine the outcome.  

---

## **10. How the Game Works Step by Step**
1. The user clicks on **rock, paper, or scissors**.  
2. The computer randomly selects **rock, paper, or scissors**.  
3. The choices are compared to determine the **winner**.  
4. The **score is updated** accordingly.  
5. The **result message is displayed** on the screen.  
6. The user can **play again** by clicking a choice.  

---

## **Conclusion**  
This Rock-Paper-Scissors game is a great way to practice JavaScript fundamentals such as:  
✔ Handling **user interactions** with event listeners  
✔ Working with **random numbers** for computer choices  
✔ Updating the **DOM dynamically**  
✔ Using **functions** to keep the code organized  

This game can be further improved by:  
- Adding **animations** for a better UI experience  
- Implementing a **reset button** to restart the scores  
- Enhancing with **sound effects** when the game is won or lost  
