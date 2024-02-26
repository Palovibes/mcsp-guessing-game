function getUserName(previousPlayerName) {
    if (previousPlayerName && confirm(`Are you the same player as before (${previousPlayerName})?`)) {
        return previousPlayerName;
    } else {
        let userName = prompt('What is your name?').trim();
        while (!userName) {
            alert('Please enter a valid name!');
            userName = prompt('What is your name?').trim();
        }
        return userName;
    }
}

function getValidGuess(promptMessage) {
    let guess;
    do {
        let input = prompt(promptMessage);
        if (input === null) {
            alert('Gave up already?');
            return null; // User cancelled
        }
        guess = parseInt(input);
        if (isNaN(guess)) {
            alert('Please enter a number');
        }
    } while (isNaN(guess));
    return guess;
}

function playGame(userName) {
    let randomNumber = getRandomIntInclusive(min, max);
    let guesses = [];
    let guess;

    while ((guess = getValidGuess(`Hello ${userName}. Guess a number between 1 and 10`)) !== null) {
        guesses.push(guess);
        if (guess === randomNumber) {
            alert(`Correctomundo ${userName}! Your previous guesses were ${guesses.join(', ')}`);
            return guesses.length;
        }
        alert(guess < randomNumber ? 'Guess higher!' : 'Guess lower!');
    }

    return guesses.length; // Return the number of guesses even if the user quits
}

function guessOnce(previousPlayerName = "") {
    let userName = getUserName(previousPlayerName);
    let guessCount = playGame(userName);

    // ... compare the current game's performance to the previous game ...

    // ... prompt to play again and handle the response ...
}

// Start the first game with no previous player name
guessOnce();
