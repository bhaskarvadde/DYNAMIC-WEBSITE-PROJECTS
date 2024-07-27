let numbers = [17, 31, 77, 20, 63];

let userInputEL = document.getElementById("userInput");
let findBtnEl = document.getElementById("findBtn");
let indexOfNumberEl = document.getElementById("indexOfNumber");


findBtnEl.onclick = function() {
    let userInput = parseInt(userInputEL.value);

    let itemIndex = numbers.findIndex(function(eachItem) {
        if (eachItem === userInput) {
            return true;
        } else {
            return false;
        }
    });
    indexOfNumberEl.textContent = itemIndex;
}