function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * 3)] //returns the 0th, 1st or 2nd index
}

function getPlayerChoice() {
    while(true) {
        const input = prompt("Rock, Paper or Scissors?");
        const choice = input.toLowerCase();
        if(choice === 'rock' || choice === 'paper' || choice === 'scissors') {
            //valid input, return
            return choice;
        }
        else {
            alert("invalid choice, type 'rock', 'paper', or 'scissors'");
        }
    }
}

function playRound(computerChoice, playerChoice) {
    //compare the player inputs to the computer's input
    if(computerChoice === playerChoice) {
        //tie game
    }

    if(computerChoice == 'rock') {
        if(playerChoice == 'paper') {
            
        }
        if(playerChoice == 'scissors') {
            
        }
    }

    if(computerChoice == 'paper') {
        if(playerChoice == 'rock') {

        }
        if(playerChoice == 'scissors') {
            
        }
    }

    if(computerChoice == 'scissors') {
        if(playerChoice == 'rock') {

        }
        if(playerChoice == 'paper') {
            
        }
    }
}