let userInputEl = document.getElementById("userInput");
let requestBodyEl = document.getElementById("requestBody");
let sendPutRequestBtnEl = document.getElementById("sendPutRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

function onPut() {
    let Id = userInputEl.value;
    let requestBody = requestBodyEl.value;

    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9b",
        },
        body: requestBody
    };

    loadingEl.classList.remove("d-none");
    requestBodyEl.classList.add("d-none");


    fetch("https://gorest.co.in/public-api/users/" + Id, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            loadingEl.classList.add("d-none");
            requestBodyEl.classList.remove("d-none");

            requestStatusEl.textContent = jsonData.code;
            httpResponseEl.textContent = JSON.stringify(jsonData);
        });
}

sendPutRequestBtnEl.addEventListener("click", onPut);