let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let groceryListContainerEl = document.getElementById("groceryListContainer");
groceryListContainerEl.classList.add("groceryListContainer");

let h1Element = document.createElement("h1");
h1Element.textContent = "Grocesry List";
h1Element.classList.add("main-heading");
groceryListContainerEl.appendChild(h1Element);

let listContainerEl = document.createElement("div");
listContainerEl.classList.add("list-container");
groceryListContainerEl.appendChild(listContainerEl);


for (let item of groceryList) {
    let ulElement = document.createElement("ul");
    listContainerEl.appendChild(ulElement);

    let liElement = document.createElement("li");
    liElement.textContent = item;
    ulElement.appendChild(liElement);
}