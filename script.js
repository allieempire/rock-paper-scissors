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

function compareChoice(playerSelection, computerSelection) {
	if (playerSelection.toLowerCase() === "rock"){
		switch (computerSelection){
			case "rock":
				return "Draw!";
				break;
			case "paper":
				return "You lose! Paper beats rock!";
				break;
			case "scissors":
				return "You win! Rock beats Scissors!";
				break;
		}
	} else if (playerSelection.toLowerCase() === "paper") {
		switch (computerSelection) {
			case "rock":
				return "You win! Paper beats rock!";
				break;
			case "paper":
				return "Draw!";
				break;
			case "scissors":
				return "You lose! Scissors beats paper!";
				break;
		}
	} else if (playerSelection.toLowerCase() === "scissors") {
		switch (computerSelection) {
			case "rock":
				return "You lose! Rock beats Scissors!";
				break;
			case "paper":
				return "You win! Scissors beats paper!";
				break;
			case "scissors":
				return "Draw!";
				break;
		}
	}
}

function playRound(playerSelection, computerSelection) {
	var result = compareChoice(playerSelection, computerSelection);
	return result;
}

/*function countScore(result, playerWins, computerWins) {
	var score = {};
	if (result.includes("win")) {
		playerWins++;
	} else if (result.includes("lose")) {
		computerWins++;
	}
}*/

//console.log(playRound(playerSelection, computerSelection));


/*function game(num) {
	for (i = 0; i < num; i++) {
		playRound(playerSelection, computerSelection);
	}	
}

game(5);*/