// Logs a message to the console to indicate the script is running
console.log('app.js runs');

// Define global variables for the minimum and maximum guessing range
let min = 1;
let max = 10;

// Generate a random number between min and max using a helper function
let randomNumber = getRandomIntInclusive(min, max);
// Log the random number to the console for debugging purposes
console.log(`This is the random number" ${randomNumber}`);

// Function to prompt the user to guess a number
function guessOnce() {
  let userGuess;
  let guessToInt;

  do {
    userGuess = prompt('Guess a number between 1 and 10');

    // Check if user clicked 'Cancel'
    if (userGuess === null) {
      alert('Gave up already?');
      return; // Exit the function
    }

    guessToInt = parseInt(userGuess);
    if (isNaN(guessToInt)) {
      alert('Please enter a number');
    }
  } while (isNaN(guessToInt));

  while (guessToInt !== randomNumber) {
    if (guessToInt < randomNumber) {
      userGuess = prompt('Guess higher!');
    } else if (guessToInt > randomNumber) {
      userGuess = prompt('Guess lower!');
    }

    // Check if user clicked 'Cancel' in subsequent prompts
    if (userGuess === null) {
      alert('Gave up already?');
      return; // Exit the function
    }

    guessToInt = parseInt(userGuess);

    // Check again for a valid number in each iteration
    while (isNaN(guessToInt)) {
      userGuess = prompt('Guess a number between 1 and 10');

      // Check if user clicked 'Cancel' during re-prompting
      if (userGuess === null) {
        alert('Gave up already?');
        return; // Exit the function
      }

      guessToInt = parseInt(userGuess);
    }
  }

  alert('Correctomundo!');
}

// Function to generate a random number between min and max (inclusive)
function getRandomIntInclusive (min, max) {
  // Adjust min to be the next largest integer
  min = Math.ceil(min);
  // Adjust max to be the next smallest integer
  max = Math.floor(max);
  // Generate and return the random number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Execute the guessing game function
guessOnce();







