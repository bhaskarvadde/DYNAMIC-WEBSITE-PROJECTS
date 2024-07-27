let subscribeFormEl = document.getElementById("subscribeForm");
subscribeFormEl.addEventListener("submit", function() {
    event.preventDefault();
});


let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");
nameEl.addEventListener("blur", function() {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
});

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");
emailEl.addEventListener("blur", function() {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
});