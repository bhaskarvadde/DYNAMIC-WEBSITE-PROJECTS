let cartItemTextInput = document.getElementById("cartItemTextInput");
let itemsContainer = document.getElementById("itemsContainer");


function addItem() {
    let inputValue = cartItemTextInput.value;

    let listItem = document.createElement("li");
    listItem.textContent = inputValue;
    listItem.classList.add("list-item");
    itemsContainer.appendChild(listItem);
    cartItemTextInput.value = "";
}