function main() {
let todoInput = document.querySelector(`input[type="text"]`);
let ulRoot = document.querySelector("ul");
let all = document.querySelector(`.all`);
let active = document.querySelector(`.active`);
let completed = document.querySelector(`.completed`);
let clear = document.querySelector(`.clear`);

let activeButton = "all";

let allTodos = JSON.parse(localStorage.getItem('todos')) || [];
 
function addTodo(event) {
    let value = event.target.value;
    if(event.keyCode === 13 && value !== "") {
        let todo = {
            name : value,
            isDone : false,
        };
        allTodos.push(todo);    
        event.target.value = "";
        createUI();
    }
    localStorage.setItem("todos", JSON.stringify(allTodos));
}

function handleDelete(event) {
let id = event.target.dataset.id;
allTodos.splice(id, 1);
localStorage.setItem("todos", JSON.stringify(allTodos));
createUI();
}

function handleToggle(event) {
    let id = event.target.dataset.id;
    allTodos[id].isDone = !allTodos[id].isDone;
    localStorage.setItem("todos", JSON.stringify(allTodos));
    createUI();
}
function createUI(data = allTodos) {
    ulRoot.innerHTML = "";
    data.forEach((todo, index) => {
        let li = document.createElement(`li`);
        let input = document.createElement(`input`);
        input.type = "checkbox";
        input.checked = todo.isDone;
        input.setAttribute("data-id", index);
        input.addEventListener("input", handleToggle);
        let p = document.createElement(`p`);
        p.innerText = todo.name;
        let span = document.createElement(`span`);
        span.innerText = "❌";
        span.setAttribute("data-id", index);
        span.addEventListener("click", handleDelete);
    
        li.append(input, p, span); 
        ulRoot.append(li);
    })
}

createUI();

all.classList.add(`selected`);

clear.addEventListener("click", () => {
    allTodos = allTodos.filter((todo) => !todo.isDone);
    createUI();
    activeButton = "clear";
    updateActiveButton();
});

active.addEventListener("click", () => {
    let notCompleted = allTodos.filter((todo) => !todo.isDone);
    createUI(notCompleted);
    activeButton = "active";
    updateActiveButton();
});

completed.addEventListener("click", () => {
    let completedTodos = allTodos.filter((todo) => todo.isDone);
    createUI(completedTodos);
    activeButton = "completed";
    updateActiveButton();
});

all.addEventListener("click", () => {
    createUI(allTodos);
    activeButton = "all";
    updateActiveButton();
});

function updateActiveButton(btn = activeButton) {
    all.classList.remove("selected");
    active.classList.remove("selected");
    completed.classList.remove("selected");
    clear.classList.remove("selected");

    if(btn === "all") {
        all.classList.add("selected");
    }
    if(btn === "active") {
        active.classList.add("selected");
    }
    if(btn === "completed") {
        completed.classList.add("selected");
    }
    if(btn === "clear") {
        clear.classList.add("selected");
    }
}
todoInput.addEventListener("keyup", addTodo);

}

main();

