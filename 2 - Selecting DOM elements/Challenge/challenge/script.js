// Challenge 1: Select an element by ID and print it to the console
// TODO: Select the element with id 'actionButton' and print it
const actionButton = document.getElementById("actionButton");
console.log(actionButton);
// Challenge 2: Select all elements with a certain class and print all of them to the console
// TODO: Select all elements with class 'info' and print each one
const infoP = document.getElementsByClassName("info");
for (let i = 0; i < infoP.length; i++) {
    console.log(infoP[i]);
}

// Challenge 3: Select elements by tag and print all of them to the console
// TODO: Select all <p> elements and print each one
let paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i]);
}

// Challenge 4: Select elements with a combination of tag name and class name, and print them
// TODO: Select all elements that are <span> with class 'highlight' and print each one
let comboElements = document.querySelectorAll('span.highlight');
comboElements.forEach(span => console.log(span));
