let checkboxWithLabelContainer = document.getElementById("checkboxWithLabelContainer");
checkboxWithLabelContainer.classList.add("text-center","col-12");

let checkboxEl = document.createElement("input");
checkboxEl.id = "checkbox";
checkboxEl.type = "checkbox";
checkboxWithLabelContainer.appendChild(checkboxEl);


let labelEl = document.createElement("label");
labelEl.id = "checkboxLabel";
labelEl.textContent = "Click Me!";
labelEl.setAttribute("for", "checkbox");
labelEl.classList.add("ml-3");
checkboxWithLabelContainer.appendChild(labelEl);