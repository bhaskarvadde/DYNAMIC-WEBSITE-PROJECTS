// Get references to DOM elements
let searchInputEl = document.getElementById("searchInput");
let resultCountriesEl = document.getElementById("resultCountries");
let spinnerEl = document.getElementById("spinner");

// Initialize variables
let countryList = [];
let searchInputVal = "";

// Function to create and append country cards
function createAndAppendCountry(country) {
    // Create container for country card
    let countryEl = document.createElement("div");
    countryEl.classList.add("d-flex", "flex-row", "country-card", "coll-11", "col-md-5", "mr-auto", "ml-auto");
    resultCountriesEl.appendChild(countryEl);
 
    // Create flag element
    let flagEl = document.createElement("img");
    flagEl.src = country.flag;
    flagEl.classList.add("country-flag", "mt-auto", "mb-auto");
    countryEl.appendChild(flagEl);

    // Create container for country information
    let countryInfoEl = document.createElement("div");
    countryInfoEl.classList.add("d-flex", "flex-column", "ml-4");
    countryEl.appendChild(countryInfoEl);

    // Create element for country name
    let countryNameEl = document.createElement("p");
    countryNameEl.textContent = country.name;
    countryNameEl.classList.add("country-name");
    countryInfoEl.appendChild(countryNameEl);

    // Create element for country population
    let countryPopulationEl = document.createElement("p");
    countryPopulationEl.textContent = country.population;
    countryPopulationEl.classList.add("country-population");
    countryInfoEl.appendChild(countryPopulationEl);
}

// Function to display search results
function displaySearchResults() {
    // Clear previous search results
    resultCountriesEl.textContent = "";
    // Get search input value
    searchInputVal = searchInputEl.value;
    // Iterate through country list
    for (let country of countryList) {
        let countryName = country.name;
        // Check if country name includes search input value
        if (countryName.includes(searchInputVal)) {
            // If yes, create and append country card
            createAndAppendCountry(country);
        }
    }
}

// Function to fetch countries data
function getCountries() {
    let options = {
        method: "GET"
    };

    // Show spinner while fetching data
    spinnerEl.classList.remove("d-none");

    // Fetch countries data
    fetch("https://apis.ccbp.in/countries-data", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            // Hide spinner after fetching data
            spinnerEl.classList.add("d-none");
            // Store fetched data in countryList variable
            countryList = jsonData;
            // Display search results
            displaySearchResults();
        });
}

// Event handler for search input change
function onChangeSearchInput(event) {
    // Get search input value
    let searchInputVal = event.value;
    // Display search results
    displaySearchResults();
}

// Initial setup: fetch countries data and attach event listener to search input
getCountries();
searchInputEl.addEventListener("keydown", onChangeSearchInput);
