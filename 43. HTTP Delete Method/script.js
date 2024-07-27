// Get references to various elements from the DOM
let userInputEl = document.getElementById("userInput"); // Input field for user ID
let sendDeleteRequestBtnEl = document.getElementById("sendDeleteRequestBtn"); // Button to send delete request
let requestStatusEl = document.getElementById("requestStatus"); // Element to display request status
let httpResponseEl = document.getElementById("httpResponse"); // Element to display HTTP response
let loadingEl = document.getElementById("loading"); // Element to display loading indicator

// Function to handle delete request
function onDelete() {
    // Get user ID from input field
    let userId = userInputEl.value;

    // Define options for fetch request
    let options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json", // Set content type to JSON
            Accept: "application/json", // Specify accepted response format as JSON
            Authorization: "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9b" // Authorization token
        },
        body: userId // Include user ID in request body
    };

    // Show loading indicator and hide request status
    loadingEl.classList.remove("d-none");
    requestStatusEl.classList.add("d-none");

    // Send DELETE request to specified URL with defined options
    fetch("https://gorest.co.in/public-api/users/" + userId, options)
        .then(function(response) {
            // Parse response as JSON
            return response.json();
        })
        .then(function(jsonData) {
            // Hide loading indicator and show request status
            loadingEl.classList.add("d-none");
            requestStatusEl.classList.remove("d-none");

            // Display response code in request status element
            requestStatusEl.textContent = jsonData.code;

            // Display full HTTP response in designated element
            httpResponseEl.textContent = JSON.stringify(jsonData);
        });
}

// Add event listener to send delete request button
sendDeleteRequestBtnEl.addEventListener('click', onDelete);
