let updatePasswordFormEl = document.getElementById("updatePasswordForm");

let newPasswordEl = document.getElementById("newPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");

let confirmPasswordEl = document.getElementById("confirmPassword");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");


let ValidateNewPassword = function() {
    if (newPasswordEl.value === "") {
        newPasswordErrMsgEl.textContent = "Required*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }
};


let ValidateConfirmPassword = function() {
    let newPasswordVal = newPasswordEl.value;
    let confirmPasswordVal = confirmPasswordEl.value;


    if (newPasswordVal !== confirmPasswordVal) {
        confirmPasswordErrMsgEl.textContent = "Passwords must be same";
    } else {
        confirmPasswordErrMsgEl.textContent = "";
    }
};

newPasswordEl.addEventListener("blur", ValidateNewPassword);
confirmPasswordEl.addEventListener("blur", ValidateConfirmPassword);

updatePasswordFormEl.addEventListener("submit", function(event) {
    ValidateNewPassword();
    ValidateConfirmPassword();
    event.preventDefault();
});