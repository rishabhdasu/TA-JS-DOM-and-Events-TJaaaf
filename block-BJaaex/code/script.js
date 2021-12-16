// Create the cards array
let cardsArray = [{
    name: 'shell',
    img: 'img/blueshell.png',
  },
  {
    name: 'star',
    img: 'img/star.png',
  },
  {
    name: 'bobomb',
    img: 'img/bobomb.png',
  },
  {
    name: 'mario',
    img: 'img/mario.png',
  },
  {
    name: 'luigi',
    img: 'img/luigi.png',
  },
  {
    name: 'peach',
    img: 'img/peach.png',
  },
  {
    name: '1up',
    img: 'img/1up.png',
  },
  {
    name: 'mushroom',
    img: 'img/mushroom.png',
  },
  {
    name: 'thwomp',
    img: 'img/thwomp.png',
  },
  {
    name: 'bulletbill',
    img: 'img/bulletbill.png',
  },
  {
    name: 'coin',
    img: 'img/coin.png',
  },
  {
    name: 'goomba',
    img: 'img/goomba.png',
  },
];
// Grab the div with an id of root
let game = document.getElementById('game')

// Create a section with a class of grid
let grid = document.createElement('section')
grid.setAttribute('class', 'grid')

// Append the grid section to the game div
game.appendChild(grid)
// Create Cards

cardsArray.forEach((item) =>  {
    let card = document.createElement(`div`);
    card.classList.add(`card`);
    card.dataset.name = item.name;
    let icon = document.createElement(`h3`);
    icon.classList.add(`icon`);
    icon.innerText = item.img;
    card.append(icon);
    grid.appendChild(card);
})
// For each item in the cardsArray array...
cardsArray.forEach((item) => {
    // Create a div
    const card = document.createElement('div')
  
    // Apply a card class to that div
    card.classList.add('card')
  
    // Set the data-name attribute of the div to the cardsArray name
    card.dataset.name = item.name
  
    // Apply the background image of the div to the cardsArray image
    card.style.backgroundImage = `url(${item.img})`
  
    // Append the div to the grid section
    grid.appendChild(card)
  })

