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
  //store the user's guess
  let userGuess;
  //store the user's guess converted to an integer
  let guessToInt;
  //keep track of all guesses made
  let guesses = [];

  // Prompt the user for their name and remove any leading/trailing whitespace
  let userName = prompt('What is your name?').trim();
 //add loop to ask user for name
 while (!userName) {
  //alert the user if the input is empty
  alert('Please enter a valid name!');
  //re-prompt for the name, trimming whitespace
  userName = prompt('What is your name?').trim();
 }

  //Loop until the user enters a valid number
  do {
    userGuess = prompt(`Hello ${userName }. Guess a number between 1 and 10`);

    // Check if user clicked 'Cancel'
    if (userGuess === null) {
      alert('Gave up already?');
      return; // Exit the function
    }
   //Convert the user's guess to an integer
    guessToInt = parseInt(userGuess);

    //check for a valid number before adding it to the array
    if (isNaN(guessToInt)) {
      alert('Please enter a number');
    }
    //add the first valid guess to the array
    guesses.push(guessToInt);
  } while (isNaN(guessToInt));

  while (guessToInt !== randomNumber) {
    if (guessToInt < randomNumber) {
      userGuess = prompt(`Sorry ${userName}, guess higher!`);
      // add this guess to the array of guesses by pushing the guess to the array
      guesses.push(guessToInt);
    } else if (guessToInt > randomNumber) {
      userGuess = prompt(`Sorry ${userName}, guess lower!`);
      // add this guess to the array of guesses by pushing the guess to the array
      guesses.push(guessToInt);
    }

    // Check if user clicked 'Cancel' in subsequent prompts
    if (userGuess === null) {
      alert(`Gave up already ${userName}?`);
      console.log(`previous guesses: ${guesses.join(', ')}`);
      return; // Exit the function
    }

    guessToInt = parseInt(userGuess);

    // Check again for a valid number in each iteration
    while (isNaN(guessToInt)) {
      userGuess = prompt(`${userName} guess a number between 1 and 10`);

      // Check if user clicked 'Cancel' during re-prompting
      if (userGuess === null) {
        alert(`Gave up already? ${userName}`);
        console.log(`previous guesses: ${guesses.join(', ')}`);
        return; // Exit the function
      }

      guessToInt = parseInt(userGuess);

    }
  }

  // add the correct guess to the array 
  guesses.push(guessToInt);
  // use join method to convert the array elements into a string, each element separated by a comma  
  guesses = guesses.join(', ');
  console.log(`Number of guesses: ${guesses}`);
  alert(`Correctomundo ${userName}! Your previous guesses were ${guesses}!`);
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







