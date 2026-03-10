function changeStyle() {
    // Challenge Instructions:
    // 1. When the button is clicked, change the background color of 'dynamicText' to 'lightblue'.
    const dynamicText =document.getElementById("dynamicText");
    let isBold = false;
    dynamicText.style.backgroundColor = 'lightblue';
    // 2. Change the font size of 'dynamicText' to '18px'.
    dynamicText.style.fontSize = "18px";
    // 3. Toggle the font weight of 'dynamicText' between 'normal' and 'bold' on each button click.
    dynamicText.style.fontWeight = isBold ? 'normal' : 'bold';
    isBold = !isBold;
    // 4. Change the text color of 'dynamicText' to 'green'.
    dynamicText.style.color = "green";
}
