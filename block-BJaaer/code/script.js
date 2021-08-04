let form = document.querySelector(`form`);




let userInfo = {};

function handleEvent(event) {
  event.preventDefault();
  userInfo.name = form.elements.name.value;
  userInfo.email = form.elements.email.value;
  userInfo.movies = form.elements.movies.value;
  userInfo.color = form.elements.color.value;
  userInfo.range = form.elements.range.value;
  userInfo.genre = form.elements.genre.value;
  userInfo.terms = form.elements.terms.checked;

let modalHello = document.querySelector(`.hello`);
modalHello.innerText = `Hello ${userInfo.name}`;
let modalEmail = document.querySelector(`.email`);
modalEmail.innerText = `Email: ${userInfo.email}`;
let modalLove = document.querySelector(`.love`);
modalLove.innerText = `You Love: ${userInfo.movies}`;
let modalColor = document.querySelector(`.color`);
modalColor.innerText = `Color: ${userInfo.color}`;
let modalRating = document.querySelector(`.rating`);
modalRating.innerText = `Rating: ${userInfo.range}`;
let modalGenre = document.querySelector(`.genre`);
modalGenre.innerText = `Book Genre: ${userInfo.genre}`;
let modalTerms = document.querySelector(`.modalTerms`);
if (userInfo.terms === true) {
    modalTerms.innerText = `You agree to terms and conditions`;
} else {
    alert(`Please agree to the terms and conditions`);
}
 console.log(userInfo);
}

form.addEventListener(`submit`, handleEvent);