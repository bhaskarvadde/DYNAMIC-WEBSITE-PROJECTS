let timerTextEl = document.getElementById("timerText");
let twentySecondsBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");

let secondsLeft = 0;
let timerId;

function clearPreviousTimers() {
    clearInterval(timerId);
}

function startTimer() {
    if (secondsLeft > 1) {
        secondsLeft = secondsLeft - 1;
        timerTextEl.textContent = secondsLeft + " seconds left";
    } else {
        clearPreviousTimers();
        timerTextEl.textContent = "Your moment is complete";
    }
}

function setTimerAndShow() {
    timerTextEl.textContent = secondsLeft + " seconds left";
    timerId = setInterval(startTimer, 1000);
}

twentySecondsBtnEl.onclick = function() {
    secondsLeft = 20;
    clearPreviousTimers();
    setTimerAndShow();
};

thirtySecondsBtnEl.onclick = function() {
    secondsLeft = 30;
    clearPreviousTimers();
    setTimerAndShow();
};

fortySecondsBtnEl.onclick = function() {
    secondsLeft = 40;
    clearPreviousTimers();
    setTimerAndShow();
};

oneMinuteBtnEl.onclick = function() {
    secondsLeft = 60;
    clearPreviousTimers();
    setTimerAndShow();
};