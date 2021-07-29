let userScore = document.querySelector(`.userScore`);
let computerScore = document.querySelector(`.computerScore`);
let result = document.querySelector(`.result`);
let icons = document.querySelectorAll(`.icons button`);
let initialResult = `Select an icon`;
let button = document.querySelectorAll(`button`);
result.innerText = initialResult;

let rock = document.querySelectorAll(`.rock`);
rock.innerText = `Rock`;
let paper = document.querySelectorAll(`.paper`);
paper.innerText = `Paper`;
let scissors = document.querySelectorAll(`.scissors`);
scissors.innerText = `Scissors`;
let lizard = document.querySelectorAll(`.lizard`);
lizard.innerText = `Lizard`;
let spock = document.querySelectorAll(`.spock`);
spock.innerText = `Spock`;


 icons.forEach((icon) => {
    icon.addEventListener(`click`, (event) => {
        result.target.innerText = event.target.dataset.text;
        button.style.backgroundColor = `black`;
    });
 });

 userScore.innertText = `You - ${} ${}`;
 computerScore.innertText = `Computer - ${} ${}`;




if(userInput == 'Lizard' && ` Scisors`) {
 result.innerText = `You Won`;
}
else if(userInput == `Rock` && `Spock`) {
 result.innerText = `You Won`;
}
else if(userInput == `Lizard` && `Paper`) {
 result.innerText = `You Won`;
}
else if(userInput == `Spock` && `Paper`) {
 result.innerText = `You Won`;
}
else if(userInput == `Rock` && `Scissors`) {
 result.innerText = `You Won`;
}
else {
 result.innerText = `You Lost`;
}