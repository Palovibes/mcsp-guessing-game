// Log to indicate the script is running
console.log('app.js runs');

// Define global variables for minimum and maximum guessing range, and for tracking the first game's guesses
let min = 1;
let max = 10;
let firstGameGuesses = 0;
let previousPlayerName = "";

// Function to generate a random number between min and max (inclusive)
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min); // Round min up
    max = Math.floor(max); // Round max down
    return Math.floor(Math.random() * (max - min + 1)) + min; // Return the random number
}

// Function to prompt the user to guess a number
function guessOnce() {
    let randomNumber = getRandomIntInclusive(min, max); // Generate the random number for this game
    console.log(`This is the random number: ${randomNumber}`);

    let userGuess; // To store the user's guess
    let guessToInt; // To store the user's guess converted to an integer
    let guesses = []; // To track all guesses made in this game

    let userNameInput = prompt('What is your name?'); // Prompt user for their name
    if (userNameInput === null) { // Check if user clicked 'Cancel' on the name prompt
        alert('Name is required to play the game!');
        return; // Exit the function if user cancels
    }

    let userName = userNameInput.trim(); // Trim the user input
    while (!userName) { // Check if the input is empty and re-prompt
        alert('Please enter a valid name!');
        userNameInput = prompt('What is your name?');
        if (userNameInput === null) {
            alert('Name is required to play the game!');
            return; // Exit the function if user cancels again
        }
        userName = userNameInput.trim();
    }

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
            alert(`Wowser ${userName}! You guessed it in fewer attempts than last time.`);
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

        // Ask if the user wants to play again
        let playAgain = prompt('Would you like to play again? Y/N');
        if (playAgain && (playAgain.toLowerCase() === 'y' || playAgain.toLowerCase() === 'yes')) {
            guessOnce(); // Call the function again to start a new game
        } else {
            alert('Please come again!'); // End the game if user chooses not to play again
        }
    }    
// Execute the guessing game function
guessOnce();