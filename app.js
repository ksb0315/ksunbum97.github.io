const h1 = document.querySelector("div.hello:first-child h1");

function handleh1Click() {
    const cur_col = h1.style.color;
    let newCol;
    console.log(cur_col);
    if (cur_col === "blue") {
        newCol = "tomato";
    }
    else {
        newCol = "blue";
    }
    h1.style.color = newCol;
}

h1.addEventListener("click", handleh1Click)