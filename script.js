console.log("CONNECTED");

function computerPlay() {
	var i = Math.floor(Math.random() * 100);
	if (i < 33) {
		var computerSelection = "rock";
	} else if (i > 32 && i < 66) {
		var computerSelection = "paper";
	} else {
		var computerSelection = "scissors";
	}
	return computerSelection;
}

//console.log(computerPlay());

var computerSelection = computerPlay();
var playerSelection = prompt("Rock, Paper or Scissors?");

function playRound(playerSelection, computerSelection) {
	if (playerSelection.toLowerCase() === computerSelection) {
		return "Draw"
	} else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
		return "You lose! Paper beats rock!"
	} else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
		return "You lose! Scissors beats paper!"
	} else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
		return "You lose! Rock beats Scissors!"
	} else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
		return "You win! Rock beats Scissors!"
	} else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
		return "You win! Paper beats rock!"
	} else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
		return "You win! Scissors beats paper!"
	}
}

console.log(playRound(playerSelection, computerSelection));
