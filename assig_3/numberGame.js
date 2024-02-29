let randomNumber = Math.floor(Math.random() * 100) + 1;
let turns = 10;
let previousGuesses = [];

function guessNumber() {
  let userGuess = document.getElementById("userGuess").value;
  let output = document.getElementById("output");
  let previousGuessesText = document.getElementById("previousGuesses");

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  userGuess = Number(userGuess);
  turns--;
  previousGuesses.push(userGuess);
  previousGuessesText.innerHTML =
    "Previous guesses: " + previousGuesses.join(", ");

  if (userGuess === randomNumber) {
    output.innerHTML = `Congratulations! You guessed the number correctly! It was ${randomNumber}.`;
    endGame();
  } else if (turns === 0) {
    output.innerHTML = `Game over! The correct number was ${randomNumber}.`;
    endGame();
  } else {
    if (userGuess < randomNumber) {
      output.innerHTML = "Wrong! Your guess is too low. ";
    } else {
      output.innerHTML = "Wrong! Your guess is too high. ";
    }
    output.innerHTML += `You have ${turns} turns left.`;
  }
}

function endGame() {
  document.getElementById("guessButton").disabled = true;
  document.getElementById("restartButton").style.display = "block";
}

function restartGame() {
  turns = 10;
  randomNumber = Math.floor(Math.random() * 100) + 1;
  previousGuesses = [];
  document.getElementById("output").innerHTML = "";
  document.getElementById("previousGuesses").innerHTML = "";
  document.getElementById("userGuess").value = "";
  document.getElementById("guessButton").disabled = false;
  document.getElementById("restartButton").style.display = "none";
}