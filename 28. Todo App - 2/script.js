// Get references to HTML elements
let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let saveTodoButton = document.getElementById("saveTodoButton");

// Function to retrieve the to-do list from local storage
function getTodoListFromLocalStorage() {
    let stringifiedTodoList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList === null) {
        return [];
    } else {
        return parsedTodoList;
    }
}

// Initialize the todoList from local storage and get its length
let todoList = getTodoListFromLocalStorage();
let todosCount = todoList.length;

// Save the todoList to local storage when the save button is clicked
saveTodoButton.onclick = function() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
};

// Function to handle adding a new todo item
function onAddTodo() {
    // Get user input
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;

    // Validate user input
    if (userInputValue === "") {
        alert("Enter Valid Text");
        return;
    }

    // Increment todo count and create a new todo object
    if (todoList.length === 0) {
        todosCount = todosCount + 1;
    } else {
        let lastObj = todoList[todoList.length - 1];
        todosCount = lastObj.uniqueNo + 1;
    }

    // Create new todo object
    let newTodo = {
        text: userInputValue,
        uniqueNo: todosCount,
        ischecked: false
    };
    // Add new todo to the list and update UI
    todoList.push(newTodo);
    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}

// Event handler for add todo button
addTodoButton.onclick = function() {
    onAddTodo();
};

// Function to handle toggling the status of a todo item
function onTodoStatusChange(checkboxId, labelId, todoId) {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");

    // Find the index of the todo item in the list
    let todoObjIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if (eachTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    });

    // Toggle the status of the todo item
    let todoObj = todoList[todoObjIndex];
    if (todoObj.ischecked === true) {
        todoObj.ischecked = false;
    } else {
        todoObj.ischecked = true;
    }
}

// Function to handle deleting a todo item
function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);

    // Find the index of the todo item in the list
    let deleteElementIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if (eachTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    });

    // Remove the todo item from the list
    todoList.splice(deleteElementIndex, 1);
}

// Function to create and append a todo item to the UI
function createAndAppendTodo(todo) {
    let todoId = "todo" + todo.uniqueNo;
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;

    // Create todo element
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemsContainer.appendChild(todoElement);

    // Create checkbox input element
    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkboxId;
    inputElement.checked = todo.ischecked;

    // Event handler for checkbox click
    inputElement.onclick = function() {
        onTodoStatusChange(checkboxId, labelId, todoId);
    };

    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    // Create label element
    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    if (todo.ischecked === true) {
        labelElement.classList.add("checked");
    }
    labelContainer.appendChild(labelElement);

    // Create delete icon element
    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

    // Event handler for delete icon click
    deleteIcon.onclick = function() {
        onDeleteTodo(todoId);
    };

    deleteIconContainer.appendChild(deleteIcon);
}

// Loop through todo list and append each todo item to UI
for (let todo of todoList) {
    createAndAppendTodo(todo);
}
