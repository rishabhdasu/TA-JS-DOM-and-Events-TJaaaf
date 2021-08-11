let form = document.querySelector(`form`);

let error = "";
let emailError = "";
let phoneError = "";
let passwordError = "";
let validEmail = `@`;

let userNumber = /\[0-9]/g;

function handleClick(event) {
    event.preventDefault();
    console.dir(event.target);

    let username = event.target.elements.username;
    let email = event.target.elements.email;
    let phone = event.target.elements.phone;
    let password = event.target.elements.password;
    let passwordConfirm = event.target.elements.password-confirm;

    if(username.value.length < 4){
      usernameError = `Can't be less than 4 characters`;
      username.nextElementSibling.innerText = usernameError;
    }
    else if(username.value.match(userNumber)){
        usernameError = `Can't include numbers`;
        username.nextElementSibling.innerText = usernameError;  
    }
    else if(email.value.indexOf(`@`) == -1){
      emailError = `Must contain @`;
      email.nextElementSibling.innerText = emailError;
    }
    else if(email.value.length <6){
      emailError = `Can't be less than 6 characters`;
      email.nextElementSibling.innerText = emailError;
    }
    else if(!isNaN(phone)){
        phoneError = `Must be numbers`;
    }
    else if(password.value !== passwordConfirm){
        passwordError = `Password doesn't match`
        passwordConfirm.nextElementSibling.innerText = emailError;
    }
      
   alert(`User added successfully`); 
 }
  


form.addEventListener(`submit`, handleClick);