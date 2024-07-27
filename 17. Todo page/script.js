/* Follow the instructions found in the description to complete the JavaScript functionality.*/

let todoList = [{
    text: "Learn HTML"
},
{
    text: "Learn CSS"
},
{
    text: "Learn JavaScript"
}
];

let todoItemsContainerEl = document.getElementById("todoItemsContainer");

function createAndAppend(todo) {
let liElement = document.createElement("li");
liElement.classList.add("todo-item-container", "d-flex", "flex-row");
todoItemsContainerEl.appendChild(liElement);

let inputEl = document.createElement("input");
inputEl.type = "checkbox";
inputEl.id = "myCheckbox";
inputEl.classList.add("checkbox-input");
liElement.appendChild(inputEl);

let labelContainerEl = document.createElement("div");
labelContainerEl.classList.add("label-container", "d-flex", "flex-row");
liElement.appendChild(labelContainerEl);

let labelEl = document.createElement("label");
labelEl.textContent = todo.text;
labelEl.classList.add("checkbox-label");
labelContainerEl.appendChild(labelEl);

let deleteContainerEl = document.createElement("div");
deleteContainerEl.classList.add("delete-icon-container");
labelContainerEl.appendChild(deleteContainerEl);

let delIconEl = document.createElement("i");
delIconEl.classList.add("far", "fa-trash-alt", "delete-icon");
deleteContainerEl.appendChild(delIconEl);
}

for (let todo of todoList) {
createAndAppend(todo);
}