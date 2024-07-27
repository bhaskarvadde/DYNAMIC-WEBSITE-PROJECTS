let consoleFormEl = document.getElementById("consoleForm");
let requestUrlEl = document.getElementById("requestUrl");
let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");
let requestMethodEl = document.getElementById("requestMethod");

let requestBodyEl = document.getElementById("requestBody");

let responseBodyEl = document.getElementById("responseBody");
let responseStatusEl = document.getElementById("responseStatus");


requestMethodEl.addEventListener("change", function(event) {
    requestMethodEl.value = event.target.value;
});

function validateData() {
    if (requestUrlEl.value === "") {
        requestUrlErrMsgEl.textContent = "Required*";
    } else {
        requestUrlErrMsgEl.textContent = "";
    }
}

let data = requestBodyEl.value;

function postRequest() {
    if (requestMethodEl.value === "POST") {
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f"
            },
            body: data
        };

        fetch("https://gorest.co.in/public-api/users", options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                responseStatusEl.value = jsonData.code;
                responseBodyEl.textContent = JSON.stringify(jsonData);
            });
    }
}

function putRequest() {
    if (requestMethodEl.value === "PUT") {
        let options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f"
            },
            body: data
        };

        fetch(requestUrlEl.value, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                responseStatusEl.value = jsonData.code;
                responseBodyEl.textContent = JSON.stringify(jsonData);
            });
    }
}

consoleFormEl.addEventListener("submit", function() {
    event.preventDefault();
    validateData();
    postRequest();
    putRequest();
})