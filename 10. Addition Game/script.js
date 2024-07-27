let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");


function OnRestart() {
    let firstRandomNumber = Math.ceil(Math.random() * 100);
    let SecondRandomNumber = Math.ceil(Math.random() * 100);

    firstNumberElement.textContent = firstRandomNumber;
    secondNumberElement.textContent = SecondRandomNumber;

    gameResultElement.textContent = "";
    userInputElement.value = "";
}

OnRestart();

function OnCheck() {
    let firstRandomInteger = parseInt(firstNumberElement.textContent);
    let SecondRandomInteger = parseInt(secondNumberElement.textContent);

    let userInput = parseInt(userInputElement.value);
    let totalResult = firstRandomInteger + SecondRandomInteger;

    if (totalResult === userInput) {
        gameResultElement.textContent = "Congratulations! you got it right";
        gameResultElement.style.backgroundColor = "#028a0f";
    } else {
        gameResultElement.textContent = "Please Try again";
        gameResultElement.style.backgroundColor = "#1e217c";
    }
}