// Logs a message to the console to indicate the script is running
console.log('app.js runs');

// Define global variables for the minimum and maximum guessing range
let min = 1;
let max = 10;

// Function to prompt the user to guess a number
function guessOnce() {
  // Generate a random number between min and max using a helper function
  let randomNumber = getRandomIntInclusive(min, max);
  // Log the random number to the console for debugging purposes
  console.log(`This is the random number: ${randomNumber}`);

  // Variable declarations for the user's guess and the guess converted to an integer
  let userGuess;
  let guessToInt;

  // Array to keep track of all guesses made
  let guesses = [];

  // Prompt the user for their name
  let userNameInput = prompt('What is your name?');

  // Check if user clicked 'Cancel' on the name prompt
  if (userNameInput === null) {
    alert('Name is required to play the game!');
    return; // Exit the function if user cancels the game
  }

  // Trim the user input and re-prompt if it is empty
  let userName = userNameInput.trim();
  while (!userName) {
    alert('Please enter a valid name!');
    userNameInput = prompt('What is your name?');
    if (userNameInput === null) {
      alert('Name is required to play the game!');
      return; // Exit the function if user cancels again
    }
    userName = userNameInput.trim();
  }

  // Loop until the user enters a valid number
  do {
    userGuess = prompt(`Hello ${userName}. Guess a number between 1 and 10`);

    // Check if user clicked 'Cancel' on the number guess prompt
    if (userGuess === null) {
      alert('Gave up already?');
      return; // Exit the function if 'Cancel' is clicked
    }

    // Convert the user's guess to an integer
    guessToInt = parseInt(userGuess);

    // Check if the guess is a valid number before adding it to the array
    if (!isNaN(guessToInt)) {
      guesses.push(guessToInt);
    } else {
      alert('Please enter a number');
    }
  } while (isNaN(guessToInt));

  // Main guessing loop, continues until the user guesses the correct number
  while (guessToInt !== randomNumber) {
    userGuess = guessToInt < randomNumber ? prompt(`Sorry ${userName}, guess higher!`) : prompt(`Sorry ${userName}, guess lower!`);

    // Check if user clicked 'Cancel' during guessing
    if (userGuess === null) {
      alert(`Gave up already ${userName}?`);
      console.log(`Previous guesses: ${guesses.join(', ')}`);
      return; // Exit the function if 'Cancel' is clicked
    }

    guessToInt = parseInt(userGuess);

    // Check again for a valid number in each iteration
    if (!isNaN(guessToInt)) {
      guesses.push(guessToInt);
    }
  }

  // Notify the user of the correct guess and show all previous guesses
  alert(`Correctomundo ${userName}! Your previous guesses were ${guesses.join(', ')}`);

  // Prompt to ask if the user wants to play again
  let playAgain = prompt('Would you like to play again? Y/N');

  // Check if the user wants to play again
  if (playAgain && (playAgain.toLowerCase() === 'y' || playAgain.toLowerCase() === 'yes')) {
    guessOnce(); // Call the function again to start a new game
  } else {
    alert('Thanks for playing!'); // End the game if user chooses not to play again
  }
}

// Function to generate a random number between min and max (inclusive)
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min); // Round min up to the nearest whole number
  max = Math.floor(max); // Round max down to the nearest whole number
  return Math.floor(Math.random() * (max - min + 1)) + min; // Generate and return the random number
}

// Execute the guessing game function
guessOnce();
