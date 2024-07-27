let userInput = document.getElementById("userInput")
let gameResult = document.getElementById("gameResult")
let randomNumber = Math.ceil(Math.random() * 100 )

function checkGuess() {
   let GuessNumber = parseInt(userInput.value)

   if (GuessNumber > randomNumber) {
      gameResult.textContent = "Too high. try again"
      gameResult.style.backgroundColor = "darkblue"
   }

   else if (GuessNumber < randomNumber) {
      gameResult.textContent = "Too low. try again"
      gameResult.style.backgroundColor = "darkblue"
   }

   else if (GuessNumber === randomNumber) {
      gameResult.textContent = "Congratulations! you got it right."
      gameResult.style.backgroundColor = "green"
   }

   else {
      gameResult.textContent = "Please provide a valid input"
      gameResult.style.backgroundColor = "red"
   }
}

