let fromUserInputEl = document.getElementById("fromUserInput");
let toUserInputEl = document.getElementById("toUserInput");
let counterTextEl = document.getElementById("counterText");


function start() {
    let fromUserInput = fromUserInputEl.value;
    let toUserInput = toUserInputEl.value;

    if (fromUserInput === "") {
        alert("enter the from value");
    } else if (toUserInput === "") {
        alert("enter the to value");
    } else {
        let fromUserInput = parseInt(fromUserInputEl.value);
        let toUserInput = parseInt(toUserInputEl.value);

        let counter = fromUserInput;
        counterTextEl.textContent = counter;

        let timerId = setInterval(function() {
            if (counter < toUserInput) {
                counter = counter + 1;
                counterTextEl.textContent = counter;
            } else {
                clearInterval(timerId);
            }
        }, 1000);
    }
}