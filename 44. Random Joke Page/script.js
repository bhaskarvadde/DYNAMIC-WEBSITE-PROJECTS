let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");

function onGetJoke() {
    let options = {
        method: "GET",
    };

    spinnerEl.classList.remove("d-none");

    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");

            jokeTextEl.textContent = jsonData.value;
        });
}


jokeBtnEl.addEventListener("click", onGetJoke);