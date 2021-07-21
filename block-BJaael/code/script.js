let ul = document.querySelector(`ul`);

for(let i = 0; i <= 500; i++){
    let li = document.createElement(`li`);
    li.classList.add(`box`);
    let randomNum = Math.floor(Math.random() * 500);
    li.innerText = randomNum;
    ul.append(li);
}

let box = document.querySelectorAll(`.box`);

function getRandomColor() {
    let  letters = '0123456789ABCDEF';
    let  color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  function mouseMove() {
    box.forEach(elm => {
      let random = getRandomColor();
    elm.style.backgroundColor = random;
    })
};

box.forEach(move => {
    move.addEventListener(`mousemove`, mouseMove )
});
