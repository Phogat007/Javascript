// Variables to track score
let userscore = 0;
let compscore = 0;

// DOM Elements
const choices = document.querySelectorAll('.choice');
const userScorePara = document.querySelector('#user p:last-child');
const compScorePara = document.querySelector('#comp p:last-child');
const msg = document.querySelector('#msg');

// Generate computer's choice
const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

// Determine winner
const compareChoices = (userChoice, compChoice) => {
    if(userChoice === compChoice) {
        return "draw";
    } else if(
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')
    ) {
        return "win";
    } else {
        return "lose";
    }
};

// Update score display
const updateScore = () => {
    userScorePara.textContent = userscore;
    compScorePara.textContent = compscore;
};

// Show game result message
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

// Game logic
const playGame = (userChoice) => {
    // Generate computer choice
    const compChoice = genCompChoice();
    
    // Compare choices
    const result = compareChoices(userChoice, compChoice);
    
    // Update scores
    if(result === "win") {
        userscore++;
    } else if(result === "lose") {
        compscore++;
    }
    
    // Update UI
    updateScore();
    showMessage(result, userChoice, compChoice);
};

// Event listeners
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});