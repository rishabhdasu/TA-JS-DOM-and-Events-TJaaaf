let cal = document.querySelector(`.calculator`);
let divTwo = document.querySelectorAll(`.divTwo`);
let plus = document.querySelector(`.plus`);
plus.innerText = `+`;
let minus = document.querySelector(`.minus`);
minus.innerText = `-`;
let product = document.querySelector(`.product`);
product.innerText = `*`;
let remainder = document.querySelector(`.remainder`);
remainder.innerText = `%`;

let seven = document.querySelector(`.seven`);
seven.innerText = `7`;
let eight = document.querySelector(`.eight`);
eight.innerText = `8`;
let nine = document.querySelector(`.nine`);
nine.innerText = `9`;
let four = document.querySelector(`.four`);
four.innerText = `4`;
let five = document.querySelector(`.five`);
five.innerText = `5`;
let six = document.querySelector(`.six`);
six.innerText = `6`;
let one = document.querySelector(`.one`);
one.innerText = `1`;
let two = document.querySelector(`.two`);
two.innerText = `2`;
let three = document.querySelector(`.three`);
three.innerText = `3`;
let decimal = document.querySelector(`.decimal`);
decimal.innerText = `.`;
let zero = document.querySelector(`.zero`);
zero.innerText = `0`;
let clear = document.querySelector(`.clear`);
clear.innerText = `C`;

let equal =  document.querySelector(`.equal`);
equal.innerText = `=`;

let digits = document.querySelector(`.digits`);

let inputOne = digits.addEventListener(`click`, (event) => {
     event.target.innerText;
});

let inputTwo = digits.addEventListener(`click`, (event) => {
    event.target.innerText;
});

let sign = divTwo.addEventListener(`click`, (sign) => {
  sign.target.innerText;
});

let result = ``;

if(sign == plus.innerText) {
  result = inputOne + inputTwo;
}
else if(sign == minus.innerText) {
  result = inputOne - inputTwo;
}
else if(sign == product.innerText) {
    result = inputOne * inputTwo;
}
else {
    result = inputOne % inputTwo;
}

let output = document.querySelector(`.output`);
output.target.innerText = inputOne;