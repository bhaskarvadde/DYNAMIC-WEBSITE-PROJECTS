let itemList = [
    {
      itemName: "Veg Biryani",
      uniqueNo: 1,
    },
    {
      itemName: "Chicken 65",
      uniqueNo: 2,
    },
    {
      itemName: "Paratha",
      uniqueNo: 3,
    }
  ];
  
  let orderedItemsContainer = document.getElementById("orderedItemsContainer");
  let ulContainer = document.getElementById("ulContainer");
  
  function addItems(item){
      let liElement = document.createElement("li");
      liElement.id = "item" + item.uniqueNo;
      liElement.textContent = item.itemName;
      liElement.classList.add("li-item");
      ulContainer.appendChild(liElement);
      
      let btnElement = document.createElement("button");
      btnElement.id = "button" + item.uniqueNo;
      btnElement.textContent = "Cancel";
      btnElement.classList.add("btn","btn-danger","ml-3");
      btnElement.onclick = function(){
          ulContainer.removeChild(liElement);
      };
      liElement.appendChild(btnElement);
  }
  
  for (let item of itemList){
      addItems(item);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  