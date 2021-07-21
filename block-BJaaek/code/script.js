let click = document.querySelector(`.first`);
let move = document.querySelector(`.second`);

function getRandomColor() {
    let  letters = '0123456789ABCDEF';
    let  color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

click.addEventListener(`click`, function () {
    let random = getRandomColor();
    click.style.backgroundColor = random;
});

move.addEventListener(`mousemove`, function () {
    let random = getRandomColor();
    move.style.backgroundColor = random;
});