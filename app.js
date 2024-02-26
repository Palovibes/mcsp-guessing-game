// Log to indicate the script is running
console.log('app.js runs');

// Define global variables for minimum and maximum guessing range
let min = 1;
let max = 10;
let firstGameGuesses = 0;
let previousPlayerName = "";

// Function to generate a random number between min and max (inclusive)
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to prompt the user to guess a number
function guessOnce(previousPlayerName = "") {
    let userName;
    let isNewPlayer = false;

    // If there's a previous player, ask if the current player is the same
    if (previousPlayerName) {
        let samePlayer = prompt(`Are you the same player as before (${previousPlayerName})? Y/N`).toLowerCase();
        if (samePlayer === 'y' || samePlayer === 'yes') {
            alert(`Welcome back, ${previousPlayerName}! Let's start a new game.`);
            userName = previousPlayerName;
        } else {
            isNewPlayer = true;
        }
    }

    // Prompt for new player's name if it's a new player or if there's no previous player
    if (!previousPlayerName || isNewPlayer) {
        userName = prompt('What is your name?').trim();
        while (!userName) {
            alert('Please enter a valid name!');
            userName = prompt('What is your name?').trim();
        }
    }

    let randomNumber = getRandomIntInclusive(min, max); // Generate the random number for this game
    console.log(`This is the random number: ${randomNumber}`);

    let userGuess; // To store the user's guess
    let guessToInt; // To store the user's guess converted to an integer
    let guesses = []; // To track all guesses made in this game

    do { // Loop to get a valid number guess from the user
        userGuess = prompt(`Hello ${userName}. Guess a number between 1 and 10`);
        if (userGuess === null) { // Check if user clicked 'Cancel'
            alert('Gave up already?');
            return; // Exit the function if 'Cancel' is clicked
        }
        guessToInt = parseInt(userGuess); // Convert the guess to an integer
        if (!isNaN(guessToInt)) { // Check if the guess is a valid number
            guesses.push(guessToInt); // Add valid guess to the guesses array
        } else {
            alert('Please enter a number'); // Alert if the guess is not a valid number
        }
    } while (isNaN(guessToInt)); // Continue until a valid number is entered

    while (guessToInt !== randomNumber) { // Main game loop, continues until correct number is guessed
        userGuess = guessToInt < randomNumber ? prompt(`Sorry ${userName}, guess higher!`) : prompt(`Sorry ${userName}, guess lower!`);
        if (userGuess === null) { // Check if user clicked 'Cancel' during guessing
            alert(`Gave up already ${userName}?`);
            console.log(`Previous guesses: ${guesses.join(', ')}`);
            return; // Exit if 'Cancel' is clicked
        }
        guessToInt = parseInt(userGuess); // Convert new guess to an integer
        if (!isNaN(guessToInt)) {
            guesses.push(guessToInt); // Add valid guess to the array
        }
    }

    alert(`Correctomundo ${userName}! Your previous guesses were ${guesses.join(', ')}`); // Notify the correct guess

    // Compare the current game's performance to the previous game
    if (userName === previousPlayerName && firstGameGuesses !== 0) {
        if (guesses.length < firstGameGuesses) {
            alert(`${userName}, you guessed it in fewer attempts than last time.`);
        } else if (guesses.length > firstGameGuesses) {
            alert(`${userName}, you guessed it in more attempts than last time.`);
        } else {
            alert(`${userName}, you guessed it in the same number of attempts as last time.`);
        }
    } else if (firstGameGuesses !== 0) {
        alert(`Welcome, ${userName}! The last player, ${previousPlayerName}, guessed it in ${firstGameGuesses} attempts.`);
    } else {
        alert(`Welcome, ${userName}! You're the first player.`);
    }

    // Update previousPlayerName and firstGameGuesses for the next game
    previousPlayerName = userName;
    firstGameGuesses = guesses.length;

    // At the end of the game, ask if they want to play again
    let playAgain = prompt('Would you like to play again? Y/N');
    if (playAgain.toLowerCase() === 'y' || playAgain.toLowerCase() === 'yes') {
        guessOnce(userName); // Pass the current player's name to the next game if they want to play again
    } else {
        alert('Hasta la vista, BABY!!'); // End the game with a farewell message
    }
}

// Start the first game with no previous player name
guessOnce();
   