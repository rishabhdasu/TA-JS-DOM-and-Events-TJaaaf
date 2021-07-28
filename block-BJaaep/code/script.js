// let ul = document.querySelector(`ul`);

// function getRandomNum(max) {
//     return Math.floor(Math.random() * max);
//   }
//   for(let i = 0; i <= 5; i++){
//       let li = document.querySelectorAll(`.box`);
//       let randomNum = getRandomNum(5);
//       li.innerText = randomNum;
//   }

// let box = document.querySelectorAll(`.box`);

// box.forEach((move, index) => {
//     move.addEventListener(`click`, 
//      (event) => {
//         event.target.innerText = index + 1;
//         setTimeout(() => {
//             event.target.innerText = "";
//         }, 10000)
//     }  
//     )
// });

// Without Delegation

let firstBox = document.querySelectorAll(`.first li`);

firstBox.forEach((box, index) => {
  box.addEventListener(`click`, (event) => {
     event.target.innerText = index + 1;

     setTimeout(() => {
      event.target.innerText = "";
     }, 5000);
  })
});

// With Delegation

let secondBox = document.querySelector(`.second`);

secondBox.addEventListener(`click`, (event) => {
    event.target.innerText = event.target.dataset.text;
    setTimeout(() => {
        event.target.innerText = "";
       }, 5000);
});