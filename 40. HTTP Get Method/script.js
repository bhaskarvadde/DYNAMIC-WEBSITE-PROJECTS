let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

function onGetRequest() {
    let options = {
        method: "GET",
    };

    loadingEl.classList.remove("d-none");
    requestStatusEl.classList.add("d-none");

    fetch("https://gorest.co.in/public-api/users", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            requestStatusEl.classList.remove("d-none");
            loadingEl.classList.add("d-none");

            requestStatusEl.textContent = jsonData.code;
            httpResponseEl.textContent = (JSON.stringify(jsonData));
        });
}