// Your tasks:
// 1. Find the parent element of a cat and log it to the console.
let cat = document.querySelector("#animalFamilyTree li:nth-child(2)")
console.log("Parent: ", cat.parentNode);
// 2. List all the children of the cat’s parent and log them.
let catParent = cat.parentNode;
Array.from(catParent.children).forEach(child => {
    console.log('Child of Cat\'s Parent:', child.textContent);
});
// 3. Identify the cat’s parent's next sibling in the tree and log it.
let catParentSib = catParent.nextElementSibling;
console.log('Cat\'s Parent Next Sibling:', catParentSib ? catParentSib.textContent : 'No next sibling');

