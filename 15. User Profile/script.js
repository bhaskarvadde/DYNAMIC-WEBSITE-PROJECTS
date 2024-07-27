let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "Bhaskar Vadde",
    age: 22
};

let profileContainerElement = document.getElementById("profileContainer");
profileContainerElement.classList.add("d-flex", "flex-column", "justify-content-center", "text-center");

let imgContainerElement = document.getElementById("imgContainer");

let imgElement = document.createElement("img");
imgElement.setAttribute("src", profileDetails.imgSrc);
imgElement.classList.add("profile-img");
imgContainerElement.appendChild(imgElement);

let h1Element = document.createElement("h1");
h1Element.classList.add("name");
h1Element.textContent = profileDetails.name;
profileContainerElement.appendChild(h1Element);

let pElement = document.createElement("p");
pElement.classList.add("age");
pElement.textContent = "Age: " + profileDetails.age;
profileContainerElement.appendChild(pElement);