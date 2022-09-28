function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * 3)] //returns the 0th, 1st or 2nd index
}


function playRound(computerChoice, playerChoice) {
    //compare user's inputs to the computer's input and return if they win, lose or tie
    if(computerChoice === playerChoice) {
        //tie game
        return("You tied the round!");
    }

    if(computerChoice == 'rock') {
        if(playerChoice == 'paper') {
            return("You win the round!");
        }
        if(playerChoice == 'scissors') {
            return("You lose the round!");
        }
    }

    if(computerChoice == 'paper') {
        if(playerChoice == 'rock') {
            return("You lose the round!");
        }
        if(playerChoice == 'scissors') {
            return("You win the round!");
        }
    }

    if(computerChoice == 'scissors') {
        if(playerChoice == 'rock') {
            return("You win the round!");
        }
        if(playerChoice == 'paper') {
            return("You lose the round!");
        }
    }
}


function writeRoundStatus(computerChoice, playerChoice, gameResult) {
    //take in strings for the computer and human players; report if the player won
    //write all this info to the output div, class="results-box"

    //get div where info will be written
    const displayDiv = document.querySelector('.results-box');

    //clear any previous results
    clearResults();

    const gameChoices = document.createElement('h3');
    gameChoices.classList.add('game-choices');
    gameChoices.textContent = `You picked: ${playerChoice}, and the Computer picked: ${computerChoice}...`

    const gameResults = document.createElement('h2');
    gameResults.classList.add('game-results');
    gameResults.textContent = `${gameResult}`;

    displayDiv.appendChild(gameChoices);
    displayDiv.appendChild(gameResults);
}


function checkPlayerWin(didPlayerWin) {
    //take in a bool representing the player winning the game (5 rounds)
    //create and display this on the display div, class="results-box"

        //get div where info will be written
        const displayDiv = document.querySelector('.results-box');

        const finalResults = document.createElement('h1');
        finalResults.classList.add('final-results');

        if(didPlayerWin) {
            finalResults.textContent = `You won the game! Congratulations!`;
        }
        else {
            finalResults.textContent = `You lost the game! Better luck next time!`;
        }

        displayDiv.appendChild(finalResults);

}


function clearResults() {
    //check if results from the game exist, and if they do; remove them
    let gameChoices = document.querySelector('.game-choices');
    let gameResults = document.querySelector('.game-results');
    let finalResults = document.querySelector('.final-results');

    //querySelector returns null if no element exists; otherwise there is a truthy value
    if(gameChoices && gameResults) {
        gameChoices.remove();
        gameResults.remove();
    }
    //remove final results if it exists
    if(finalResults) {
        finalResults.remove();
    }
}


//collect information from the buttons
const gameButtons = document.querySelectorAll('div.button-box button');

//game status
let roundCount = 0;
let winCount = 0;

gameButtons.forEach((button) => {

    button.addEventListener('click', function(e) {
        let cpuChoice = getComputerChoice();
        let playerChoice = e.target.className; //this value is a string
        let result = playRound(cpuChoice, playerChoice);
        
        writeRoundStatus(cpuChoice, playerChoice, result);

        //game logic
        if (result === 'You win the round!') {
            winCount++;
        }
        //check the round count, If 5, conclude game, else advance the game (unless its a tie)
        if (roundCount === 5) {
            if(winCount > (5 - winCount)) {
                checkPlayerWin(true);
            }
            else {
                checkPlayerWin(false);
            }
            //reset game
            winCount = 0;
            roundCount = 0;
        }
        // best of 5, no ties. Only count a round if there is a definitive winner
        // This is a rock paper scissors deathmatch
        else if (playerChoice !== cpuChoice) { 
            roundCount++;
        }

    });

});
