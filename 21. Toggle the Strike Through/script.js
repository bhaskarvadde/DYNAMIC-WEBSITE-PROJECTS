let checkBoxLabelConatiner = document.getElementById("checkBoxWithLabelContainer");
checkBoxLabelConatiner.classList.add("text-center","col-12");

let checkBoxId = "checkbox";
let labelId = "checkboxLabel";


let checkBoxInputElement = document.createElement("input");
checkBoxInputElement.type = "checkbox";
checkBoxInputElement.id = checkBoxId;

checkBoxInputElement.onclick = function() {
    checkboxLabelElement.classList.toggle("strike-through");
};
checkBoxLabelConatiner.appendChild(checkBoxInputElement);

let checkboxLabelElement = document.createElement("label");
checkboxLabelElement.classList.add("ml-2");
checkboxLabelElement.setAttribute("for", checkBoxId);
checkboxLabelElement.id = labelId;
checkboxLabelElement.textContent = "I am a label";
checkBoxLabelConatiner.appendChild(checkboxLabelElement);


