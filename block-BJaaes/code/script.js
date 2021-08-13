let form = document.querySelector(`form`);

let errorMessage = {};

function displayError(name) {
  let elm = form.elements[name];
  elm.nextElementSibling.innerText = errorMessage[name];
  elm.parentElement.classList.add(`error`);
}

function displaySuccess(name) {
  let elm = form.elements[name];
  elm.nextElementSibling.innerText = "";
  errorMessage[name] =  "";
  elm.parentElement.classList.add(`error`);
  elm.parentElement.classList.add(`success`);
}


function handleClick(event) {
    event.preventDefault();
   let elements = event.target.elements;

    const username = elements.username.value;
    const name = elements.name.value;
    const email = elements.email.value;
    const phone = elements.phone.value;
    const password = elements.password.value;
    const passwordCheck = elements.passwordCheck.value;

    if(username.length < 4){
      errorMessage.username = `Can't be less than 4 characters`;
      displayError(`username`);
    } else {
      displaySuccess(`username`);
    }

    if(!isNaN(name)){
        errorMessage.name = `Can't include numbers`;
        displayError(`name`);
      }
      else {
        displaySuccess(`name`);
      }

    if(!email.includes(`@`)){
      errorMessage.email = `Must contain @`;
      displayError(`email`);
    }
    else if(!email.length < 6){
      errorMessage.email = `Can't be less than 6 characters`;
      displayError(`email`);
    }
    else {
      displaySuccess(`email`);
    }
   
    if(isNaN(phone)){
        errorMessage.phone = `Must be numbers`;
        displayError(`phone`);
    }
    else {
      displaySuccess(`phone`);
    }

    if(password !== passwordCheck){
        errorMessage.password = `Password doesn't match`;
        displayError(`password`);
      }
      else {
        displaySuccess(`password`);
        displaySuccess(`passwordCheck`)
      }
      
 }
  


form.addEventListener(`submit`, handleClick);