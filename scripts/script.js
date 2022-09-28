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
    //compare user's inputs to the computer's input and return if they win, lose or tie
    if(computerChoice === playerChoice) {
        //tie game
        return("You tied!");
    }

    if(computerChoice == 'rock') {
        if(playerChoice == 'paper') {
            return("You win!");
        }
        if(playerChoice == 'scissors') {
            return("You lose!");
        }
    }

    if(computerChoice == 'paper') {
        if(playerChoice == 'rock') {
            return("You lose!");
        }
        if(playerChoice == 'scissors') {
            return("You win!");
        }
    }

    if(computerChoice == 'scissors') {
        if(playerChoice == 'rock') {
            return("You win!");
        }
        if(playerChoice == 'paper') {
            return("You lose!");
        }
    }
}

function game() {
    
}




//collect information from the buttons
const gameButtons = document.querySelectorAll('div.button-box button');

//do thing for each button on click
gameButtons.forEach((button) => {

    button.addEventListener('click', function(e) {
        //on click, generate a random computer choice
        //collect the user input from the button's class
        //play a game
        let cpuChoice = getComputerChoice();
        let playerChoice = e.target.className; //this value is a string
        let result = playRound(cpuChoice, playerChoice);
        console.log(result);
        
    });

});
