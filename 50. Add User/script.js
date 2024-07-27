let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let addUserFormEl = document.getElementById("addUserForm");


addUserFormEl.addEventListener("submit", function() {
    event.preventDefault();
})


nameEl.addEventListener("blur", function() {
    if (nameEl.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
});


emailEl.addEventListener("blur", function() {
    if (emailEl.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
});