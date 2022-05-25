function game() {
    playerSelection = playerChoose();
    computerSelection = computerPlay();
    alert(playRound(playerSelection, computerSelection));

}

function computerPlay() {

    let selection = Math.floor(Math.random()*3);
    if (selection == 0) {
        return "ROCK";
    } else if (selection == 1) {
        return "SCISSORS";
    } else return "PAPER"; 
}
function playerChoose() {
let answer = prompt("Pick ROCK, PAPER, or SCISSORS");
    if (answer.toUpperCase() != "ROCK" && answer.toUpperCase() != "PAPER" && answer.toUpperCase() != "SCISSORS") {
        alert("Invalid entry. Please try again.");
        playerChoose();
    }
return answer.toUpperCase();

}

function playRound (playerSelection, computerSelection) {

    if (playerSelection == "ROCK") {

        let result;

        switch (computerSelection) {
            
            case "ROCK":
                return "A tie! You both picked ROCK.";
                break;
            
            case "PAPER":
                return "You lose! PAPER beats ROCK.";
                break;

            case "SCISSORS":
                return "You win! ROCK beats SCISSORS.";
                break;

        }


    }

    if (playerSelection == "PAPER") {

        let result;

        switch (computerSelection) {
            
            case "PAPER":
                return "A tie! You both picked PAPER.";
                break;
            
            case "SCISSORS":
                return "You lose! SCISSORS beats PAPER.";
                break;

            case "ROCK":
                return "You win! PAPER beats ROCK.";
                break;

        }


    }

    if (playerSelection == "SCISSORS") {

        let result;

        switch (computerSelection) {
            
            case "SCISSORS":
                return "A tie! You both picked SCISSORS.";
                break;
            
            case "ROCK":
                return "You lose! ROCK beats SCISSORS.";
                break;

            case "PAPER":
                return "You win! SCISSORS beats PAPER.";
                break;

        }

        return result;
        alert(result);


    }

}