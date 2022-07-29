const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1)
function handleh1Click() {
    h1.style.color = "blue";
}

function mouseEnter() {
    h1.innerText = "mouse is here";
}

function mouseLeave() {
    h1.innerText = "mouse leaved..";
    h1.style.color = "yellow";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!")
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("WIFI is back!");
}

h1.addEventListener("click", handleh1Click)
h1.addEventListener("mouseenter", mouseEnter)
h1.addEventListener("mouseleave", mouseLeave)

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
