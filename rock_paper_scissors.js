// It’s best practice to link to an external JavaScript file inside this script tag.
// Using an external JavaScript file keeps your HTML file clean and organized.
// This is why we created this .js file

console.log("Hello!");

//here we declare 2 variables to keep the score

let humanScore = 0;
let computerScore = 0;

// lets make a function that returns a random string (rock, paper or scissors)
// PSEUDOCODE
// get a random number between 0 and 1 and store it in a variable
// if the number in the variable in between 0 and 0.33 return "rock"
// if the number in the variable is between 0.34 and 0.66 return "paper"
// if the number in the variable is between 0.67 and 1 return "scissors"

function getComputerChoice() {
  let number = Math.random() * 3;
  if (number < 1) {
    return "Rock";
  } else if (number >= 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

//console.log(getComputerChoice());

// next we need the human input
// PSEUDOCODE
// ask the user for the input - they must choose between "Rock", "Paper" or "Scissors"
// test it with console.log

function getHumanChoice() {
  let userChoice = prompt(
    "Choose between Rock, Paper and Scissors. Please enter your choice"
  );
  return userChoice;
}
//console.log(getHumanChoice());

// Now we need to create the logic to play a single round
// PSEUDOCODE
// Declare a function playRound
// Define two parameters for playRound: humanChoice and computerChoice
// Make the function’s humanChoice parameter case-insensitive
// Write the code for your playRound function to console.log a string value
// representing the round winner, such as: “You lose! Paper beats Rock”
// Increment the humanScore or computerScore variable based on the round winner.

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    return "Its a tie!";
  } else if (humanChoice == "Rock" && computerChoice == "Paper") {
    return "You lose, Paper beats Rock!";
  } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
    return "You win, Rock beats Scissors!";
  } else if (humanChoice == "Paper" && computerChoice == "Rock") {
    return "You win, Paper beats Rock!";
  } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
    return "You lose, Scissors beats Paper!";
  } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
    return "You lose, Rock beats Scissors!";
  } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    return "You win, Scissors beats Paper!";
  } else {
    return "You entered an invalid word.";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
