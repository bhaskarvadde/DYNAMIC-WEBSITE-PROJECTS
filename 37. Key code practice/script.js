let userInputEl = document.getElementById("userInput");
let keyCodeListEl = document.getElementById("keyCodeList");

function onKeyDown(event) {
    let liElement = document.createElement("li");
    liElement.textContent = event.key;
    liElement.classList.add("m-2");
    keyCodeListEl.appendChild(liElement);
}

userInputEl.addEventListener("keydown", onKeyDown);