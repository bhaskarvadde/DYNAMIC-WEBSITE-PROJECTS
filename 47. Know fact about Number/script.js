let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");

function GetDetails(event) {
    if (event.key === "Enter") {
        let userInputVal = userInputEl.value;

        if (userInputVal === "") {
            alert("Enter a Number");
            return;
        }


        let userNumber = userInputEl.value;
        let options = {
            method: "GET"
        };

        spinnerEl.classList.remove("d-none");
        factEl.classList.add("d-none");

        fetch("https://apis.ccbp.in/numbers-fact?number=" + userNumber, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                spinnerEl.classList.add("d-none");
                factEl.classList.remove("d-none");

                factEl.textContent = JSON.stringify(jsonData.fact);
            });
    }
}


userInputEl.addEventListener("keydown", GetDetails);