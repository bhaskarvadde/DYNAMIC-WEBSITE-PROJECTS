let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexInputEl = document.getElementById("startIndexInput");
let deleteCountInputEl = document.getElementById("deleteCountInput");
let itemToAddInputEl = document.getElementById("itemToAddInput");
let updatedArrayEl = document.getElementById("updatedArray");
let spliceBtnEl = document.getElementById("spliceBtn");


spliceBtnEl.onclick = function spliceArray() {
    let startIndex = parseInt(startIndexInputEl.value);
    let deleteCount = parseInt(deleteCountInputEl.value);
    let itemToAdd = itemToAddInputEl.value;

    if (itemToAdd === "") {
        arr.splice(startIndex, deleteCount);
    } else {
        arr.splice(startIndex, deleteCount, itemToAdd);
    }

    startIndexInputEl.value = "";
    deleteCountInputEl.value = "";
    itemToAddInputEl.value = "";

    updatedArrayEl.textContent = JSON.stringify(arr);

};