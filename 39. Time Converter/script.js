let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let timeInSecondsEl = document.getElementById("timeInSeconds");
let errorMsgEl = document.getElementById("errorMsg");
let convertBtnEl = document.getElementById("convertBtn");

let timerId;

function ConvertToSeconds() {
    clearInterval(timerId);

    let hoursValue = hoursInputEl.value;
    let minutesValue = minutesInputEl.value;

    if (hoursValue === "") {
        errorMsgEl.textContent = "Please enter a valid number of hours.";
    } else if (minutesValue === "") {
        errorMsgEl.textContent = "Please enter a valid number of minutes.";
    } else {
        hoursValue = parseInt(hoursValue);
        minutesValue = parseInt(minutesValue);

        let hoursToSec = hoursValue * 3600;
        let minutesToSec = minutesValue * 60;

        let totalSeconds = hoursToSec + minutesToSec;

        let countdown = totalSeconds;
        timeInSecondsEl.textContent = countdown;
        timeInSecondsEl.classList.add("seconds-left");

        timerId = setInterval(function() {
            if (countdown > 1) {
                countdown = countdown - 1;
                timeInSecondsEl.textContent = countdown;
                timeInSecondsEl.classList.add("seconds-left");
                errorMsgEl.textContent = "";
            } else {
                clearInterval(timerId);
            }
        }, 1000);
    }
}

convertBtnEl.addEventListener("click", ConvertToSeconds);