const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todoF");
const todoList = document.querySelector("#todo-list");

const container = document.querySelector(".container");
const quoteLine = document.querySelector("#quote");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLogoutSubmit(arg) {
    arg.preventDefault();
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.add(HIDDEN_CLASSNAME);
    todoForm.classList.add(HIDDEN_CLASSNAME);

    container.id = "containerID";
    quoteLine.classList.remove(HIDDEN_CLASSNAME);
    localStorage.removeItem(USERNAME_KEY);
}

function onLoginSubmit(arg) {
    arg.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    todoList.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);

    container.removeAttribute("id");
    quoteLine.classList.add(HIDDEN_CLASSNAME);
    container.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `${username} 님의 Todo List`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
    const logout = document.createElement("button");
    logout.innerText = "Change name"
    logout.id = "change-name";
    const br = document.createElement("br");
    greeting.appendChild(br);
    logout.addEventListener("click", onLogoutSubmit);
    greeting.appendChild(logout);
    
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    todoForm.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.add(HIDDEN_CLASSNAME);

    container.id = "containerID";
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings(savedUsername)
}