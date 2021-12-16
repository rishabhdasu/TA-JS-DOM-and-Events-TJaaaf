let input = document.querySelector(`input`);
let ul = document.querySelector(`ul`);

function enter(e) {
    if (e.keyCode === 13) {
        let li = document.createElement(`li`);
        li.classList.add(`flex`)
        li.innerText = input.value;
        ul.append(li);
        let check = document.createElement(`input`);
        check.setAttribute(`type`, `checkbox`);
        check.classList.add("checkbox");
        li.prepend(check);
        let btn = document.createElement(`button`);
        btn.classList.add("btn");
        btn.innerText = `❌`;
        li.append(btn);
        btn.addEventListener(`click`, () =>{
            li.remove();
        })
    } 

};

input.addEventListener(`keydown`, enter);