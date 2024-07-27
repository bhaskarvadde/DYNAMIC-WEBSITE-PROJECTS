let reviewsContainerEl = document.getElementById("reviewsContainer");
let titleInputEl = document.getElementById("titleInput");
let reviewTextareaEl = document.getElementById("reviewTextarea");

function onAdd() {
    let movieTitle = titleInputEl.value;
    let movieReview = reviewTextareaEl.value;

    if (movieTitle === "") {
        alert("Please enter the movie title");
        return;
    }

    let movieTitleEl = document.createElement("h1");
    movieTitleEl.textContent = "Movie Title: " + movieTitle;
    movieTitleEl.classList.add("title-text");
    reviewsContainerEl.appendChild(movieTitleEl);

    let reviewEl = document.createElement("p");
    reviewEl.textContent = "Review: " + movieReview;
    reviewEl.classList.add("review-text");
    reviewsContainerEl.appendChild(reviewEl);

    titleInputEl.value = "";
    reviewTextareaEl.value = "";
}