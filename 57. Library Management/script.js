let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndAppendResult(result) {
    let { title, imageLink, author } = result;

    searchResultsEl.classList.add("d-flex", "flex-row", "col-12");

    let bookContainerEl = document.createElement("div");
    bookContainerEl.classList.add("col-6","col-md-3");

    let cardEl = document.createElement("div");
    bookContainerEl.appendChild(cardEl);

    let imageEl = document.createElement("img");
    imageEl.classList.add("img");
    imageEl.src = imageLink;
    imageEl.alt = title;
    cardEl.appendChild(imageEl);

    let cardBodyEl = document.createElement("div");
    cardBodyEl.classList.add("card-body");
    cardEl.appendChild(cardBodyEl);

    let titleEl = document.createElement("h5");
    titleEl.classList.add("card-title");
    titleEl.textContent = title;
    cardBodyEl.appendChild(titleEl);

    let authorEl = document.createElement("p");
    authorEl.classList.add("card-text");
    authorEl.textContent = author;
    cardBodyEl.appendChild(authorEl);

    searchResultsEl.appendChild(bookContainerEl);
}


function displayResults(searchResult) {
    spinnerEl.classList.add("d-none");

    for (let result of searchResult) {
        createAndAppendResult(result);
    }
}

function getResult(event) {
    if (event.key === "Enter") {
        searchResultsEl.textContent = "";
        let searchInput = searchInputEl.value;

        let options = {
            method: "GET"
        };

        spinnerEl.classList.remove("d-none");

        fetch("https://apis.ccbp.in/book-store?title=" + searchInputEl.value, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                spinnerEl.classList.add("d-none");
                let {
                    search_results
                } = jsonData;
                displayResults(jsonData.search_results);
            });
    }
}

searchInputEl.addEventListener("keydown", getResult);