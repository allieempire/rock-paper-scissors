console.log("CONNECTED");

function computerPlay() {
	var i = Math.floor(Math.random() * 100);
	if (i < 33) {
		var computerSelection = "Rock";
	} else if (i > 32 && i < 66) {
		var computerSelection = "Paper";
	} else {
		var computerSelection = "Scissors";
	}
	return computerSelection;
}

//console.log(computerPlay());

