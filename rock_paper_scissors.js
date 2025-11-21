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


function getComputerChoice(){
    let number = Math.random() * 3;
    if (number < 1){
        return "Rock";
    }
    else if (number >= 2){
        return "Paper";
    }
    else{
        return "Scissors"
    }
}

console.log(getComputerChoice());