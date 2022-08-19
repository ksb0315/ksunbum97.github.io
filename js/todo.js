const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const DelAllTodos = document.querySelector("#del-todo");

const TODOS_KEY = "todos";
const CANNOT_CLICK = "cannot-click";

let toDos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// function deleteAllTodo(event) {
//     event.preventDefault();
//     toDos = [];
//     saveTodos();
// }

function deleteTodo(event) {
    const li =  event.target.parentNode;
    li.remove();
    toDos = toDos.filter(item => item.id !== parseInt(li.id));
    saveTodos();
}

function paintToDo(todo) {
    const li = document.createElement("li");
    li.id = todo.id
    const span = document.createElement("span");
    span.innerText = todo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    
    button.addEventListener("click", deleteTodo)

    li.appendChild(button);
    li.appendChild(span);
    
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const tempTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObject = {
        text: tempTodo,
        id: Date.now()
    }
    toDos.push(newTodoObject);
    paintToDo(newTodoObject);
    saveTodos(); 
}

toDoForm.addEventListener("submit", handleToDoSubmit);
// DelAllTodos.addEventListener("click", deleteAllTodo)

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos){
    const parseTodos = JSON.parse(savedTodos)
    toDos = parseTodos;
    parseTodos.forEach(paintToDo);
    // DelAllTodos.classList.remove(CANNOT_CLICK);
} 
// else {
//     DelAllTodos.classList.add(CANNOT_CLICK);
// }
