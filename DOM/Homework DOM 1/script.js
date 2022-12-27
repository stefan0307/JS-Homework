let firstHeader = document.getElementById("myTitle");
let firstParagraph = document.querySelector(".paragraph");
let secondParagraph = document.querySelector(".second");
let lastDiv = document.querySelector("body").lastChild;
let headerTwo = lastDiv.getElementByTagName('h1');
let headerThree = document.querySelector("h3");

firstHeader.innerHTML = `<em>This has been changed for the good of the world</em>`;
firstParagraph.innerHTML = `<strong>This should be bold now</strong>`;
secondParagraph.innerText = `I managed to change this as well`;
headerTwo.innerText = `This is changed`;
headerThree.innerText = `I think my work here is done`;
