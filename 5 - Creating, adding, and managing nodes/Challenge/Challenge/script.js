// Challenge Instructions:
// 1. Craft and add a new button element with the text “Add” to the content area.
//    Hint: Use createElement and appendChild.
const contentArea = document.getElementById("contentArea");
const addBtn = document.createElement("button");
addBtn.textContent(addBtn);
// 2. Summon a new list item and add it to the existing list 'taskList'.
//    Hint: Create an 'li' element and use appendChild.
const taskList = document.getElementById("taskList");
const newTask = document.createElement("li");
newTask.textContent = "New Task Added!!";
taskList.appendChild(newTask);
// 3. Clone an element and add its twin to the page.
//    Hint: Use cloneNode on an existing element.
const clonedTask = newTask.cloneNode(true);
taskList.appendChild(clonedTask);
// 4. Replace the old paragraph at the top of the page with a new one.
//    Hint: Create a new 'p' element and use replaceChild.
const oldParagraph = contentArea.querySelector("p");
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is the new paragraph";
contentArea.replaceChild(newParagraph,oldParagraph);
// 5. Make the image of the puppy vanish from the page. (I know, terrible!)
//    Hint: Use removeChild on the parent of the 'puppyImage'.
const pupImg = document.getElementById("puppyImage");
pupImg.parentNode.removeChild(pupImg);