let bgcolor = prompt("Enter body background color");
let textColor = prompt("Enter text color");

let pharagraph = document.getElementById("textArea")
pharagraph.style.backgroundColor = bgcolor;
pharagraph.style.color = textColor;