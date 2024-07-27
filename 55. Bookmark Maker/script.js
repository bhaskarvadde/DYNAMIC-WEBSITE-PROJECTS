let bookmarkFormEl = document.getElementById("bookmarkForm");
let bookmarksListEl = document.getElementById("bookmarksList");

let siteNameInputEl = document.getElementById("siteNameInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");

let siteUrlInputEl = document.getElementById("siteUrlInput");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");

siteNameInputEl.addEventListener("change", function(event) {
    siteNameInputEl.value = event.target.value;
});

siteUrlInputEl.addEventListener("change", function(event) {
    siteUrlInputEl.value = event.target.value;
});

bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();

    if (siteNameInputEl.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }

    if (siteUrlInputEl.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }

    if (siteNameInputEl.value !== "" && siteUrlInputEl.value !== "") {
        let liElement = document.createElement("li");
        liElement.classList.add("list-type", "mb-2");
        let siteNameEl = document.createElement("p");
        siteNameEl.classList.add("mb-1");
        siteNameEl.textContent = siteNameInputEl.value;
        liElement.appendChild(siteNameEl);

        let siteUrlEl = document.createElement("a");
        siteUrlEl.target = "_blank";
        siteUrlEl.href = siteUrlInputEl.value;
        siteUrlEl.textContent = siteUrlInputEl.value;
        liElement.appendChild(siteUrlEl);

        bookmarksListEl.appendChild(liElement);

        siteNameInputEl.value = "";
        siteUrlInputEl.value = "";
    }
});