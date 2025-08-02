const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


const redText = document.createElement("p");
redText.textContent = "Hey I'm red!";
redText.style.color = "red";
container.appendChild(redText);

const blueHeading = document.createElement("h3");
blueHeading.textContent = "I'm a blue h3!";
blueHeading.style.color = "blue";
container.appendChild(blueHeading);

const blackDiv = document.createElement("div");
blackDiv.setAttribute("style", "border: black; background: pink;");

const heading1 = document.createElement("h1");
heading1.textContent = "I'm in a div";
blackDiv.appendChild(heading1);

const pWord = document.createElement("p");
pWord.textContent = "ME TOO!";
blackDiv.appendChild(pWord);

container.appendChild(blackDiv);