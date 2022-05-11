const list =document.querySelector("#todo-list");
const form = document.querySelector("#todo-form");
const input = form.querySelector("input");
let toDos = [];
const TODOS_KEY = "todos";

function DeleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id != li.id);
    saveTodos();
    
}



function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id =newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText="❌";
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click", DeleteTodo);
    span.innerText =newTodo.text;
    list.appendChild(li);
    
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = input.value;
    input.value ="";
    const newtodoObj={
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newtodoObj);
    paintTodo(newtodoObj);
    saveTodos();
    
}

form.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach((paintTodo))
}