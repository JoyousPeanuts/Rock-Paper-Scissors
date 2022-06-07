// Create computer logic. Computer needs to generate random number between 0 and 2 and return either Rock, Paper or Scissors.
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'scissors'
    } else if (randomNumber === 1) {
        return 'rock'
    } else if (randomNumber === 2) {
        return 'paper'
    }

}


// Get user inputs. User must be prompted for Rock, Paper or Scissors 
function getUserInput() {
    const userChoice = prompt('Rock, Paper or Scissors?') || ''; // Account for cases where result is null such as when escape key is pressed.
    const userChoiceLowerCase = userChoice.toLowerCase(); // Convert to lower case to ensure standardised user input
    return userChoiceLowerCase;
}

// Compare user input with computer input to determine winner. Needs to get User Choice and compare to Computers choice.
function getWinner(userChoice, computerChoice) {
    if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
        return 'Please enter Rock, Paper or Scissors'
    } else if (userChoice === computerChoice) {
        return 'Tie!'
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return `Computer Chose: ${computerChoice}. You Chose: ${userChoice}, you win!`
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return `Computer Chose: ${computerChoice}. You Chose: ${userChoice}, you win!`
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return `Computer Chose: ${computerChoice}. You Chose: ${userChoice}, you win!`
    } else {
        return `Computer Chose: ${computerChoice}. You Chose: ${userChoice}, you lose :(`
    }
}



// Output Winner 
function outputWinner() {
    alert(getWinner(getUserInput(), getComputerChoice()));
}

// Run the Game
function runGame() {
    outputWinner();
}

runGame();