let output = document.querySelector(`.output`);
let allBtn = document.querySelectorAll(`button`);
let initialValue = 0;
output.innerText = initialValue;
function handleClick(event) {
    if(event.target.classList.contains(`equal`)){
      output.innerText = eval(output.innerText);
      return;
    }
    if(output.innerText == initialValue){
        output.innerText = event.target.innerText;
    }
    else {
        output.innerText += event.target.innerText;
    }
    if(event.target.classList.contains(`clear`)){
        output.innerText = initialValue;
        return;
    }
}
allBtn.forEach((btn)  => {
    btn.addEventListener(`click`, handleClick);
});