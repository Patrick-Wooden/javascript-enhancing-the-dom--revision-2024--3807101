document.addEventListener('DOMContentLoaded', () => {
    // Task: React to a button click by changing text in the paragraph with id 'para1'.
    // Add event listener to 'changeTextButton' and modify text of 'para1' when clicked.
    const changeBtn = document.getElementById("changeTextButton");
    const para1 = document.getElementById("para1");

    changeBtn.addEventListener("click", () => {
        para1.textContent = "Text has been changed";
    });
    // Task: Change the style of 'para1' on mouseover and mouseout.
    // Add mouseover and mouseout event listeners to 'para1' and change its style.
    para1.addEventListener("mouseover", () => {
        para1.style.color = "blue";
        para1.style.fontSize = "20px";
    });

    para1.addEventListener("mouseout", () => {
        para1.style.color = "black";
        para1.style.fontSize = "16px";
    });
    // Task: Use event delegation on 'itemList' to display which item was clicked.
    // Add click event listener to 'itemList' and identify the clicked list item.
    const itemList = document.getElementById("itemList");

    itemList.addEventListener("click", (event) => {
        if (event.target.tagName === "LI"){
            console.log("You Clicked: ", event.target.textContent);
        }
    });
    // Task: Prevent navigating to the link URL with preventDefault and show text in 'para2'.
    // Add click event listener to 'preventLink' and prevent default action.
    const preventLink = document.getElementById("preventLink");
    const para2 = document.getElementById("para2");

    preventLink.addEventListener("click", (event) => {
        event.preventDefault();
        para2.textContent = "Navigation prevented and link was blocked";
    })
});