const title = document.querySelector("div.hello:first-child h1");

console.dir(title)
function handleTitleClick() {
    title.style.color = "blue";
}

function mouseEnter() {
    title.innerText = "mouse is here";
}

function mouseLeave() {
    title.innerText = "mouse leaved..";
}

title.addEventListener("click", handleTitleClick)
title.addEventListener("mouseenter", mouseEnter)
title.addEventListener("mouseleave", mouseLeave)