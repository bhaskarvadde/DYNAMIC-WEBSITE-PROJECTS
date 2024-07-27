// Get reference to search input, search results, and spinner elements
let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

// Function to create and append search result elements
function createAndAppendSearchResult(result) {
  // Destructure result object
  let { link, title, description } = result;

  // Create div for result item
  let resultItemEl = document.createElement("div");
  resultItemEl.classList.add("result-item");
 
  // Create link for title
  let titleEl = document.createElement("a");
  titleEl.href = link;
  titleEl.target = "_blank";
  titleEl.textContent = title;
  titleEl.classList.add("result-title");
  resultItemEl.appendChild(titleEl);

  // Add line break
  let titleBreakEl = document.createElement("br");
  resultItemEl.appendChild(titleBreakEl);

  // Create link for URL
  let urlEl = document.createElement("a");
  urlEl.classList.add("result-url");
  urlEl.href = link;
  urlEl.target = "_blank";
  urlEl.textContent = link;
  resultItemEl.appendChild(urlEl);

  // Add line break
  let linkBreakEl = document.createElement("br");
  resultItemEl.appendChild(linkBreakEl);

  // Create paragraph for description
  let descriptionEl = document.createElement("p");
  descriptionEl.classList.add("link-description");
  descriptionEl.textContent = description;
  resultItemEl.appendChild(descriptionEl);

  // Append result item to search results element
  searchResultsEl.appendChild(resultItemEl);
}

// Function to display search results
function displayResults(searchResults) {
  // Hide spinner
  spinnerEl.classList.add("d-none");

  // Iterate over search results and display them
  for (let result of searchResults) {
    createAndAppendSearchResult(result);
  }
}

// Function to search Wikipedia when Enter key is pressed
function searchWikipedia(event) {
  // Check if Enter key is pressed
  if (event.key === "Enter") {
    // Show spinner
    spinnerEl.classList.remove("d-none");
    // Clear previous search results
    searchResultsEl.textContent = "";

    // Get search input value
    let searchInput = searchInputEl.value;
    // Construct URL for Wikipedia search API
    let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
    // Options for fetch request
    let options = {
      method: "GET"
    };

    // Fetch search results from Wikipedia API
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        // Extract search results from JSON data and display them
        let { search_results } = jsonData;
        displayResults(search_results);
      });
  }
}

// Add event listener for keydown event on search input
searchInputEl.addEventListener("keydown", searchWikipedia);
