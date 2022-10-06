const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
	for (let i = 1; i <= 5; ++i) {
		playRound(i);
	} // for loop - so that the game plays 5 rounds.
	logWins();
	document.querySelector("button").textContent = "Play another round?";
}

function playRound(round) {
	const playerSelection = playerChoice();
	// console.log(`Player chose ${playerSelection}`);
	const computerSelection = computerChoice();
	// console.log(`Computer chose ${computerSelection}`);
	const winner = checkWinner(playerSelection, computerSelection);
	winners.push(winner); // adding winner to array called winners
	roundResult(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
	// input from the player
	let input = prompt("Rock, Paper, Scissors?");
	while (input == null) {
		input = prompt("Rock, Paper, Scissors?"); // so that the prompt keeps displaying even if someone cancels
	}
	input = input.toLowerCase(); // so that it always equals to values in the array
	// console.log(input);
	let check = validateInput(input); // checks whether user input (prompt) is equal to any of the values in the array
	while (check == false) {
		input = prompt(
			"Whoopsie! You made a typo. Please write: Rock, Paper, or Scissors. Capitalization doesn't matter."
		);
		while (input == null) {
			input = prompt("Rock, Paper, Scissors?"); // so that the prompt keeps displaying even if someone cancels after making a typo
		}
		input = input.toLowerCase();
		check = validateInput(input); // this checks again after second prompt, if false - shows prompt again, if true, it breaks the while loop
	}
	return input;
}

function computerChoice() {
	return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
	//validate input from the prompt
	// if (choices.includes(choice)) {
	// 	true;
	// } else {
	// 	return false;
	// }
	return choices.includes(choice); // this returns the same thing as above, but is simpler. return will show true here
}

function checkWinner(choiceP, choiceC) {
	if (choiceP === choiceC) {
		return "Tie";
	} else if (
		(choiceP === "rock" && choiceC == "scissors") ||
		(choiceP === "paper" && choiceC == "rock") ||
		(choiceP === "scissors" && choiceC == "paper")
	) {
		return "Player wins";
	} else {
		return "Computer wins";
	}
}

function logWins() {
	// counts results
	let playerWins = winners.filter((item) => item == "Player wins").length; // checks for particular item in the winners array  after winners.push(winner) pushes winners into it
	let computerWins = winners.filter((item) => item == "Computer wins").length;
	let ties = winners.filter((item) => item == "Tie").length;
	if (computerWins > playerWins) {
		console.log("Computer wins the game");
	} else if (playerWins > computerWins) {
		console.log("Player wins the game");
	} else {
		console.log("The game is a tie");
	}
	console.log("Total results:");
	console.log("Computer:", computerWins);
	console.log("Player:", playerWins);
	console.log("Ties:", ties);
}

function roundResult(playerChoice, computerChoice, winner, round) {
	console.log("Round: ", round);
	console.log("Player chose:", playerChoice);
	console.log("Computer chose:", computerChoice);
	if (winner == "Computer wins" || winner == "Player wins") {
		console.log(winner, "the round");
	} else {
		console.log("It's a tie");
	}
	console.log("------------");
}
