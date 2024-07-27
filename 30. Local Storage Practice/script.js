let msgEl = document.getElementById("msg");
let saveBtnEl = document.getElementById("saveBtn");
let clearBtnEl = document.getElementById("clearBtn");

let localStorageKey = "userInput";

saveBtnEl.onclick = function() {
    let inputMsg = msgEl.value;
    localStorage.setItem(localStorageKey, inputMsg);
};

clearBtnEl.onclick = function() {
    msgEl.value = "";
    localStorage.removeItem(localStorageKey);
}

let storedUserInputVal = localStorage.getItem(localStorageKey);

if (storedUserInputVal !== null) {
    msgEl.value = storedUserInputVal;
} else {
    msgEl.value = "";
}