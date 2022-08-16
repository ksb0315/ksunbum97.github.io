const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
// const todoForm = document.querySelector("#centre");


const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLogoutSubmit(arg) {
    arg.preventDefault();
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
}

function onLoginSubmit(arg) {
    arg.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // todoForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `${username} 님의 Todo List \t`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
    const logout = document.createElement("button");
    logout.innerText = "Log out";
    logout.addEventListener("click", onLogoutSubmit);
    greeting.appendChild(logout);
    
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings(savedUsername)
}