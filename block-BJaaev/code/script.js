let input = document.querySelector(`#todo`);
let root = document.querySelector(`ul`);
let all = document.querySelector(`.all`);
let active = document.querySelector(`.active`);
let completed = document.querySelector(`.completed`);
let clear = document.querySelector(`.clear`);

let activeBtn = `all`;
all.classList.add(`selected`);

let alltodos =  localStorage.getItem(`alltodos`) ? JSON.parse(localStorage.getItem(`alltodos`))
                : [];

function handleEvent(event) {
    let value = event.target.value;
    if(event.keyCode === 13 && value !== "") {
        alltodos.push({
            name: value,
            isDone: false,
        });
        event.target.value = ``;
        createUI();
    }
    localStorage.setItem(`alltodos`, JSON.stringify(alltodos)); 
}

function handleDelete(event) {
    let id = event.target.dataset.id;
    alltodos.splice(id, 1);
    createUI();
    localStorage.setItem(`alltodos`, JSON.stringify(alltodos));
}

function handleToggle(event) {
    let id = event.target.dataset.id;
    alltodos[id].isDone = !alltodos[id].isDone;
    createUI();
    localStorage.setItem(`alltodos`, JSON.stringify(alltodos));
}

function createUI(data = alltodos) {
    root.innerHTML = "";
    data.forEach((todo, index) => {
        let li = document.createElement(`li`);
        let checkbox = document.createElement(`input`);
        checkbox.type = `checkbox`;
        checkbox.addEventListener(`input`, handleToggle)
        checkbox.setAttribute(`data-id`, index);
        checkbox.checked = todo.isDone;
        let p = document.createElement(`p`);
        p.innerText = todo.name;
        let span = document.createElement(`span`);
        span.innerText = `X`;
        span.addEventListener(`click`, handleDelete);
        span.setAttribute(`data-id`, index);
        li.append(checkbox, p, span);
        root.append(li);
    })
}

all.addEventListener(`click`, () => {
   createUI();
   activeBtn = `all`;
   newActive();
});

active.addEventListener(`click`, () => {
    let notCompleted = alltodos.filter((todo) => !todo.isDone);
    createUI(notCompleted);
    activeBtn = `active`;
    newActive();
});

completed.addEventListener(`click`, () => {
    let completedTodos = alltodos.filter((todo) => todo.isDone);
    createUI(completedTodos);
    activeBtn = `completed`;
    newActive();
});

clear.addEventListener(`click`, () => {
    alltodos = alltodos.filter((todo) => !todo.isDone);
    createUI();
    localStorage.setItem(`alltodos`, JSON.stringify(alltodos));
});

function newActive(btn = activeBtn) {
    all.classList.remove(`selected`);
    active.classList.remove(`selected`);
    completed.classList.remove(`selected`);
    if(btn === `all`) {
        all.classList.add(`selected`);
    }
    if(btn === `active`) {
        active.classList.add(`selected`);
    }
    if(btn === `completed`) {
        completed.classList.add(`selected`);
    }
}

createUI(alltodos, root);
input.addEventListener(`keyup`, handleEvent);