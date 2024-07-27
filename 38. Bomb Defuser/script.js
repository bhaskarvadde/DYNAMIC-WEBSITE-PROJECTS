let defuserEl = document.getElementById("defuser");
let timerEl = document.getElementById("timer");

let counter = 10;

function onKeyDown() {
    let inputVal = defuserEl.value;
    if (event.key === "Enter" && inputVal === "defuse" && counter !== 0) {
        timerEl.textContent = "You did it!";
        timerEl.style.color = "blue";
        clearInterval(timerId);
    }
}

defuserEl.addEventListener("keydown", onKeyDown);

let timerId = setInterval(function() {
    if (counter > 0) {
        timerEl.textContent = counter;
        counter = counter - 1;
    } else {
        timerEl.textContent = "BOOM!!!";
        timerEl.style.color = "red";
    }
}, 1000);