let input = document.querySelector(`#todo`);
let root = document.querySelector(`ul`);

let alltodos = JSON.parse(localStorage.getItem(`todos`))|| [];

function handleEvent(event) {
    let value = event.target.value;
    if(event.keyCode === 13 && value !== "") {
        let todo = {
            name: value,
            isDone: false,
        };
        alltodos.push(todo);
        event.target.value = ``;
        createUI(alltodos, root);
    }
    localStorage.setItem(`todos`, JSON.stringify(alltodos)); 
}

function handleDelete(event) {
    let id = event.target.dataset.id;
    alltodos.splice(id, 1);
    localStorage.setItem(`todos`, JSON.stringify(alltodos)); 
    createUI(alltodos, root);
}

function handleToggle(event) {
    let id = event.target.dataset.id;
    alltodos[id].isDone = !alltodos[id].isDone;
    localStorage.setItem(`todos`, JSON.stringify(alltodos)); 
    createUI(alltodos, root);
}

function createUI(data, rootElm) {
    rootElm.innerHTML = ``;
    data.forEach((todo, index) => {
        let li = document.createElement(`li`);
        let checkbox = document.createElement(`input`);
        checkbox.type = `checkbox`;
        checkbox.addEventListener(`input`, handleToggle)
        checkbox.setAttribute(`data-id`, index);
        checkbox.checked = todo.isDone;
        let p = document.createElement(`p`);
        p.innerText = todo.name;
        console.log(checkbox.value);
        if (checkbox.value === `off`) {
            p.style.textDecoration = `line-through`;
        }
        let span = document.createElement(`span`);
        span.innerText = `X`;
        span.addEventListener(`click`, handleDelete);
        span.setAttribute(`data-id`, index);
        li.append(checkbox, p, span);
        rootElm.append(li);
    })
}

createUI(alltodos, root);
input.addEventListener(`keyup`, handleEvent);