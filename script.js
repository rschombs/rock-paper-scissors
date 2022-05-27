
let playerScore = 0;
let computerScore = 0;

const rockbn = document.querySelector('.rock');
const paperbn = document.querySelector('.paper');
const scissorsbn = document.querySelector('.scissors');

rockbn.addEventListener('click',function (){playRound("ROCK")});
paperbn.addEventListener('click',function (){playRound("PAPER")});
scissorsbn.addEventListener('click',function (){playRound("SCISSORS")});

function playRound (playerSelection) {
    console.log("YEP");
    let computerSelection = computerPlay();
    let result = whoWins(playerSelection,computerSelection);
    scoreTracker(result);
    checkWin(playerScore,computerScore);

}

function computerPlay() {

    let selection = Math.floor(Math.random()*3);
    if (selection == 0) {
        return "ROCK";
    } else if (selection == 1) {
        return "SCISSORS";
    } else return "PAPER"; 
}

function whoWins(playerSelection, computerSelection) {

    if (playerSelection == "ROCK") {

        switch (computerSelection) {
            
            case "ROCK":
                alert("A tie! You both picked ROCK.")
                return 0;
                break;
            
            case "PAPER":
                alert("You lose! PAPER beats ROCK.");
                return -1;
                break;

            case "SCISSORS":
                alert("You win! ROCK beats SCISSORS.");
                return 1;
                break;

        }


    }

    if (playerSelection == "PAPER") {

        switch (computerSelection) {
            
            case "PAPER":
                alert("A tie! You both picked PAPER.");
                return 0;
                break;
            
            case "SCISSORS":
                alert("You lose! SCISSORS beats PAPER.");
                return -1;
                break;

            case "ROCK":
                alert("You win! PAPER beats ROCK.");
                return 1;
                break;

        }


    }

    if (playerSelection == "SCISSORS") {

        switch (computerSelection) {
            
            case "SCISSORS":
                alert ("A tie! You both picked SCISSORS.");
                return 0;
                break;
            
            case "ROCK":
                alert("You lose! ROCK beats SCISSORS.");
                return -1;
                break;

            case "PAPER":
                alert("You win! SCISSORS beats PAPER.");
                return 1;
                break;

        }

    }

}


function scoreTracker (result) {

    if (result == 1) {
        playerScore++;
        }

    else if (result == -1) {

        computerScore++;

    }
    
    alert("The score is: YOU " + playerScore + ", COMPUTER " + computerScore);

}


function checkWin(tplayerScore, tcomputerScore) {

    if (tplayerScore == 5) {

        alert("You win " + playerScore + " to " + computerScore);
        }
    

        else if(tcomputerScore == 5) {
    
            alert("The computer wins " + computerScore + " to " + playerScore);

        
    
        }

        playerScore = 0;
        computerScore = 0;


}
