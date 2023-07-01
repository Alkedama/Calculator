'use strict';

let add = (a, b) => {
    return a + b;
}

let subtract = (a, b) => {
    return a - b;
}

let multiply = (a, b) => {
    return a * b;
}

let divide = (a, b) => {
    return a / b;
}

let num1 = [];
let num2 = [];
let operator;
let processNum1;
let processNum2;

const containerNumbers = document.querySelector('.containerNumbers');
const buttonNumbers = containerNumbers.querySelectorAll('button');

const operateButton = document.querySelector('#btnOperate');

const pNum1 = document.createElement('span');
const pNum2 = document.createElement('span');
const pOperator = document.createElement('span');
const pAnswer = document.createElement('span');


const operatorContainer = document.querySelector('.containerOperator');
const operatorButton = operatorContainer.querySelectorAll('button');


buttonNumbers.forEach(buttons => {
    buttons.addEventListener('click', function (e) {
        if (operator === undefined) {
            num1.push(buttons.textContent);
           
            containerNumbers.appendChild(pNum1);

            pNum1.textContent += buttons.textContent;

            console.log('num1:' + num1);

        } else if (operator !== undefined) {
            num2.push(buttons.textContent);

            containerNumbers.appendChild(pNum2);
            pNum2.textContent += buttons.textContent;

            console.log('num2:' + num2);
        }

    });

});

operatorButton.forEach(buttons => {
    buttons.addEventListener('click', function (e) {

        if (num1.length !== 0 && num2.length === 0) {
            operator = buttons.textContent;

            containerNumbers.appendChild(pOperator);

            console.log(operator);
            pOperator.textContent = " " + buttons.textContent + " ";
        }

    });
});

function operate(a, b, operator) {
    let aProcess = a.join("");
    let bProcess = b.join("");
    let answer;

    containerNumbers.appendChild(pAnswer);

    switch(operator){
    case '+':
    answer = parseInt(aProcess) + parseInt(bProcess);
    break;
    case '-':
    answer = parseInt(aProcess) - parseInt(bProcess);
    break;
    case '*':
    answer = parseInt(aProcess) * parseInt(bProcess);
    break;
    case '/':
    answer = parseInt(aProcess) / parseInt(bProcess);
    break;
    default:
    pAnswer.textContent = "Invalid Operator";
    }

    pAnswer.textContent = " = " + answer;
}

const btnOperate = document.querySelector('#btnOperate');

btnOperate.addEventListener('click', function (e) {

    const c1 = new operate(num1, num2, operator);

});

