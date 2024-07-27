let stopSignal = document.getElementById("stopButton");
let readySignal = document.getElementById("readyButton");
let goSignal = document.getElementById("goButton");

let stopLight = document.getElementById("stopLight");
let readyLight = document.getElementById("readyLight");
let goLight = document.getElementById("goLight");


function stopButton() {
    stopSignal.style.backgroundColor = "#cf1124";
    stopLight.style.backgroundColor = "#cf1124";

    readySignal.style.backgroundColor = "#1f1d41";
    readyLight.style.backgroundColor = "#4b5069";

    goSignal.style.backgroundColor = "#1f1d41";
    goLight.style.backgroundColor = "#4b5069";
}

function readyButton() {
    readySignal.style.backgroundColor = "#f7c948";
    readyLight.style.backgroundColor = "#f7c948";

    stopSignal.style.backgroundColor = "#1f1d41";
    stopLight.style.backgroundColor = "#4b5069";

    goSignal.style.backgroundColor = "#1f1d41";
    goLight.style.backgroundColor = "#4b5069";
}

function goButton() {
    goSignal.style.backgroundColor = "#199473";
    goLight.style.backgroundColor = "#199473";

    stopSignal.style.backgroundColor = "#1f1d41";
    stopLight.style.backgroundColor = "#4b5069";

    readySignal.style.backgroundColor = "#1f1d41";
    readyLight.style.backgroundColor = "#4b5069";
}