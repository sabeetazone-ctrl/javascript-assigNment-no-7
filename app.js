// --- CHAPTERS 26-30: MATH METHODS ---

const mathDiv = document.getElementById('math-results');
const randomDiv = document.getElementById('random-results');

// 1. Positive Floating Point Number
var posNum = +prompt("Enter a positive floating point number (e.g., 3.452):");
if (posNum > 0) {
    mathDiv.innerHTML += `
        <h3>Positive Number Analysis</h3>
        <p>Number: ${posNum}</p>
        <p>Round off value: ${Math.round(posNum)}</p>
        <p>Floor value: ${Math.floor(posNum)}</p>
        <p>Ceil value: ${Math.ceil(posNum)}</p>
    `;
}

// 2. Negative Floating Point Number
var negNum = +prompt("Enter a negative floating point number (e.g., -2.673):");
if (negNum < 0) {
    mathDiv.innerHTML += `
        <h3>Negative Number Analysis</h3>
        <p>Number: ${negNum}</p>
        <p>Round off value: ${Math.round(negNum)}</p>
        <p>Floor value: ${Math.floor(negNum)}</p>
        <p>Ceil value: ${Math.ceil(negNum)}</p>
    `;
}

// 3. Absolute Value
var absInput = +prompt("Enter a number to find its absolute value:");
mathDiv.innerHTML += `<p>The absolute value of ${absInput} is <strong>${Math.abs(absInput)}</strong></p>`;

// 4. Dice Simulator
var diceValue = Math.floor(Math.random() * 6) + 1;
randomDiv.innerHTML += `<h3>Dice Simulator</h3><p>Random dice value: <strong>${diceValue}</strong></p>`;

// 5. Coin Toss Simulator
var coinValue = Math.floor(Math.random() * 2) + 1;
var coinText = (coinValue === 2) ? "Heads" : "Tails";
randomDiv.innerHTML += `<h3>Coin Toss</h3><p>${coinValue}<br>Random coin value: <strong>${coinText}</strong></p>`;

// 6. Random Number 1-100
var rand100 = Math.floor(Math.random() * 100) + 1;
randomDiv.innerHTML += `<p>Random number between 1 and 100: <strong>${rand100}</strong></p>`;

// 7. Parse Weight
var weightInput = prompt("Enter your weight in kilograms (e.g., 50, 50kgs, 50.2kilograms):");
// parseFloat extracts the number from the start of the string
var parsedWeight = parseFloat(weightInput);
document.getElementById('weight-display').innerHTML = `<h3>Weight</h3><p>The weight of user is <strong>${parsedWeight}</strong> kilograms</p>`;

// 8. Secret Number Guess Game
var secretNum = Math.floor(Math.random() * 10) + 1;
var userGuess = +prompt("Guess the secret number between 1 and 10:");
if (userGuess === secretNum) {
    alert("Congratulations! You guessed the secret number.");
} else {
    alert("Try again! The secret number was " + secretNum);
}
