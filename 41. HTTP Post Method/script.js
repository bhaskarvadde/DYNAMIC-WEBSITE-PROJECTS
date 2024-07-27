let requestBodyEl = document.getElementById("requestBody");
let sendPostRequestBtnEl = document.getElementById("sendPostRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

function onGetPost() {
    let requestBody = requestBodyEl.value;

    let options = {
        method: "POST",
        header: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0"
        },
        body: requestBody
    };

    loadingEl.classList.remove("d-none");
    requestStatusEl.classList.add("d-none");


    fetch("https://gorest.co.in/public-api/users", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            loadingEl.classList.add("d-none");
            requestStatusEl.classList.remove("d-none");

            requestStatusEl.textContent = jsonData.code;
            httpResponseEl.textContent = JSON.stringify(jsonData);
        });
}

sendPostRequestBtnEl.addEventListener("click", onGetPost);