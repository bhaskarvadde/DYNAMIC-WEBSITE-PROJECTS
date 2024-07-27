let skillList = [
    {
      skillName: "HTML",
      uniqueNo: 1,
    },
    {
      skillName: "CSS",
      uniqueNo: 2,
    },
    {
      skillName: "JavaScript",
      uniqueNo: 3,
    }
  ];
  
  let skillsContainer = document.getElementById("skillsContainer");
  
  function addSKills(list) {
      let ulElement = document.createElement("ul");
      skillsContainer.appendChild(ulElement);
      
      let liElement = document.createElement("li");
      liElement.classList.add("list-item");
      ulElement.appendChild(liElement);
      
      let checkBoxEl = document.createElement("input");
      checkBoxEl.id = "checkbox" + list.uniqueNo;
      checkBoxEl.type = "checkbox";
      checkBoxEl.onclick = function(){
          labelEl.classList.toggle("marked");
      };
      liElement.appendChild(checkBoxEl);
      
      let labelEl = document.createElement("label");
      labelEl.id = "label" + list.uniqueNo;
      labelEl.setAttribute("for","checkbox" + list.uniqueNo);
      labelEl.textContent = list.skillName;
      labelEl.classList.add("label-text");
      liElement.appendChild(labelEl);
      
      let breakEl = document.createElement("br");
      liElement.appendChild(breakEl);
  }
  
  for (let list of skillList){
      addSKills(list);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  