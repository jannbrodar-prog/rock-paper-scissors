// It’s best practice to link to an external JavaScript file inside this script tag.
// Using an external JavaScript file keeps your HTML file clean and organized.
// This is why we created this .js file

console.log("Hello!");

// lets make a function that returns a random string (rock, paper or scissors)
// PSEUDOCODE
// get a random number between 0 and 1 and store it in a variable
// if the number in the variable in between 0 and 0.33 return "rock"
// if the number in the variable is between 0.34 and 0.66 return "paper"
// if the number in the variable is between 0.67 and 1 return "scissors"

function getComputerChoice() {
  let number = Math.random() * 3;
  if (number < 1) {
    return "rock";
  } else if (number >= 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// next we need the human input
// PSEUDOCODE
// ask the user for the input - they must choose between "Rock", "Paper" or "Scissors"
// test it with console.log

function getHumanChoice() {
  let userChoice = prompt(
    "Choose between Rock, Paper and Scissors. Please enter your choice"
  );
  return userChoice.toLowerCase();
}

// Now we need to create the logic to play a single round
// PSEUDOCODE
// Declare a function playRound
// Define two parameters for playRound: humanChoice and computerChoice
// Make the function’s humanChoice parameter case-insensitive
// Write the code for your playRound function to console.log a string value
// representing the round winner, such as: “You lose! Paper beats Rock”
// Increment the humanScore or computerScore variable based on the round winner.

// Write the logic to play the entire game
//PSEUDOCODE
// Declare function playGame
// Move your playRound function and score variables
// so that they’re declared inside of the new playGame function
// Play 5 rounds by calling playRound 5 times

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    return "Its a tie!";
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    return "You lose, Paper beats Rock!";
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    return "You win, Rock beats Scissors!";
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    return "You win, Paper beats Rock!";
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    return "You lose, Scissors beats Paper!";
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    return "You lose, Rock beats Scissors!";
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    return "You win, Scissors beats Paper!";
  } else {
    return "You entered an invalid word.";
  }
}

// Here is the for loop calling the playRound 5 times

for(i = 1; i < 6; i++){
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log("--------------------------------");
console.log(`Round ${i} of 5`);
console.log(`You chose : ${humanSelection}`);
console.log(`Computer chose : ${computerSelection}`);
console.log(playRound(humanSelection, computerSelection));
}

// This is the last part - the final score

console.log("--------------------------------");
console.log("The final score is:");
console.log("Computer score is: " + computerScore);
console.log("Your score is: " + humanScore);

}
playGame();

