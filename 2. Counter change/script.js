let counterElement = document.getElementById("counterValue");

function onDecrement() {
   let previousElement = counterElement.textContent
   let updatedElement = parseInt(previousElement) - 1

   counterElement.textContent = updatedElement

   if (updatedElement < 0) {
      counterElement.style.color = 'red'
   }
   else if (updatedElement > 0) {
      counterElement.style.color = 'green'
   }
   else {
      counterElement.style.color = 'black'
   }
}

function onIncrement() {
   let previousElement = counterElement.textContent
   let updatedElement = parseInt(previousElement) +1

   counterElement.textContent = updatedElement

   if (updatedElement < 0) {
      counterElement.style.color = 'red'
   }
   else if (updatedElement > 0) {
      counterElement.style.color = 'green'
   }
   else {
      counterElement.style.color = 'black'
   }
}

function onReset() {
   let updatedElement = 0
   counterElement.textContent = updatedElement

   if (updatedElement < 0) {
      counterElement.style.color = 'red'
   }
   else if (updatedElement > 0) {
      counterElement.style.color = 'green'
   }
   else {
      counterElement.style.color = 'black'
   }
}