const userScoreField = document.getElementById("user-score");
const computerScoreField = document.getElementById("comp-score");

const result = document.querySelector(".result p");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissor");

const resetBtn = document.getElementById("reset");

let userScore = 0;
let computerScore = 0;

function randomChoice() {
	let choices = ["r", "p", "s"];
	let randNumber = Math.floor(Math.random() * 3);
	// console.log(choices[randNumber]);
	return choices[randNumber];
}

function convert2Full(input) {
	if(input === "r") {
		return "Rock";
	}
	if(input === "p") {
		return "Paper";
	}
	return "Scissor";
}

function win(uInput, cInput) {
	// console.log("You win");
	// console.log({uInput, cInput});
	userScore++;
	userScoreField.innerHTML = userScore;
	computerScoreField.innerHTML = computerScore;
	
	// console.log(convert2Full(uInput).toLowerCase());
	const userChoice = document.getElementById(convert2Full(uInput).toLowerCase());
	
	const smallUserWord = "[user]".fontsize(3).sup();
    const smallCompWord = "[comp]".fontsize(3).sup();
	
	result.innerHTML = `${convert2Full(uInput)}${smallUserWord} beats ${convert2Full(cInput)}${smallCompWord}. You win! 🔥`;
	result.style.color = "#4dcc7d";
	
	userChoice.classList.add('green-glow');
    setTimeout(() => userChoice.classList.remove('green-glow'), 400);
}

function lose(uInput, cInput) {
	// console.log("You lose");
	// console.log({uInput, cInput});
	computerScore++;
	userScoreField.innerHTML = userScore;
	computerScoreField.innerHTML = computerScore;
	
	// console.log(convert2Full(uInput).toLowerCase());
	const userChoice = document.getElementById(convert2Full(uInput).toLowerCase());
	
	const smallUserWord = "[user]".fontsize(3).sup();
    const smallCompWord = "[comp]".fontsize(3).sup();
	
	result.innerHTML = `${convert2Full(uInput)}${smallUserWord} lost to ${convert2Full(cInput)}${smallCompWord}. You lost... 😢`;
	result.style.color = "#fc121b";
	
	userChoice.classList.add('red-glow');
    setTimeout(() => userChoice.classList.remove('red-glow'), 400);
}

function draw(uInput, cInput) {
	// console.log("It's a draw!");
	// console.log({uInput, cInput});
	userScoreField.innerHTML = userScore;
	computerScoreField.innerHTML = computerScore;
	
	// console.log(convert2Full(uInput).toLowerCase());
	const userChoice = document.getElementById(convert2Full(uInput).toLowerCase());
	
	const smallUserWord = "[user]".fontsize(3).sup();
    const smallCompWord = "[comp]".fontsize(3).sup();
	
	result.innerHTML = `${convert2Full(uInput)}${smallUserWord} equals ${convert2Full(cInput)}${smallCompWord}. It's a Tie 😐`;
	result.style.color = "#51cbee";
	
	userChoice.classList.add('blue-glow');
    setTimeout(() => userChoice.classList.remove('blue-glow'), 400);
}

function resetGame() {
	userScore = 0;
	computerScore = 0;
	
	userScoreField.innerHTML = userScore;
	computerScoreField.innerHTML = computerScore;
	
	result.innerHTML = "Let's play!";
	result.style.color = "white";
}

function startGame(uInput) {
	let cInput = randomChoice();
	// console.log({uInput, cInput});
	
	switch (uInput+cInput) {
		case "rs":
		case "sp":
		case "pr":
			win(uInput, cInput);
			break;
		case "sr":
		case "ps":
		case "rp":
			lose(uInput, cInput);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(uInput, cInput);
			break;
	}
}

rock.addEventListener("click", () => startGame("r"));

paper.addEventListener("click", () => startGame("p"));

scissors.addEventListener("click", () => startGame("s"));

resetBtn.addEventListener("click", resetGame);
