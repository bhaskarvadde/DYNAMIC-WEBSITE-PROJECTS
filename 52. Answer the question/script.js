let questionsFormEl = document.getElementById("questionsForm");
let resultMsgEl = document.getElementById("resultMsg");

let cityHyderabadEl = document.getElementById("cityHyderabad");
let cityChennaiEl = document.getElementById("cityChennai");
let cityDelhiEl = document.getElementById("cityDelhi");
let cityMumbaiEl = document.getElementById("cityMumbai");

let capitalCity = "Delhi";
let selectedCity = null;

cityChennaiEl.addEventListener("change", function() {
    selectedCity = event.target.value;
});

cityHyderabadEl.addEventListener("change", function() {
    selectedCity = event.target.value;
});

cityDelhiEl.addEventListener("change", function() {
    selectedCity = event.target.value;
})

cityMumbaiEl.addEventListener("change", function() {
    selectedCity = event.target.value;
});


questionsFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (selectedCity === null) {
        resultMsgEl.textContent = "Please select the City";
        resultMsgEl.style.color = "red";
    } else if (selectedCity === capitalCity) {
        resultMsgEl.textContent = "Correct Answer!";
        resultMsgEl.style.color = "green";
    } else {
        resultMsgEl.textContent = "Wrong Answer!";
        resultMsgEl.style.color = "red";
    }
})