import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
  <div class="containerOperator">
  <button id="btnAdd">+</button>
  <button id="btnSubtract">-</button> 
  <button id="btnMultiply">*</button>
  <button id="btnDivide">/</button>
  </div>
  
  <button id="btnOperate">=</button>
  <button id="btnClear">Clear</button>
  
  <div class="containerNumbers">
  <button id="btn1">1</button>
  <button id="btn2">2</button>
  <button id="btn3">3</button>
  <button id="btn4">4</button>
  <button id="btn5">5</button>
  <button id="btn6">6</button>
  <button id="btn7">7</button>
  <button id="btn8">8</button>
  <button id="btn9">9</button>
  <button id="btn0">0</button>
  </div>
  </div>
`

'use strict';

let num1 = [];
let num2 = [];
let operator;
let answer = 0;

const containerNumbers = document.querySelector('.containerNumbers');
const buttonNumbers = containerNumbers.querySelectorAll('button');

const operateButton = document.querySelector('#btnOperate');

const pNum = document.createElement('span');

const operatorContainer = document.querySelector('.containerOperator');
const operatorButton = operatorContainer.querySelectorAll('button');

const btnOperate = document.querySelector('#btnOperate');

function operate(a, b, operator) {
    let aProcess = a.join("");
    let bProcess = b.join("");
    
    pNum.textContent = "";
    num2.length = 0;

    if (answer === 0) {
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
    pNum.textContent = "Invalid Operator";
    }
} else {
    switch(operator){
    case '+':
    answer += parseInt(bProcess);
    break;
    case '-':
    answer -= parseInt(bProcess);
    break;
    case '*':
    answer *= parseInt(bProcess);
    break;
    case '/':
    answer /= parseInt(bProcess);
    break;
    default:
    pNum.textContent = "Invalid Operator";
    }
}

    console.log(answer);
    pNum.textContent = " = " + answer;
}

// Numbers
buttonNumbers.forEach(buttons => {
    buttons.addEventListener('click', function (e) {
        console.log('num2 array.length: ' + num2.length);
        if (operator === undefined && answer === 0) {
            num1.push(buttons.textContent);
           
            containerNumbers.appendChild(pNum);

            pNum.textContent += buttons.textContent;

            console.log('num1:' + num1);

        } else if (operator !== undefined) {

            if (num1.length !== 0 && num2.length === 0 || num1.length !== 0 && num2.length === 0 && answer !== 0) {
            pNum.textContent = "";
            }

            num2.push(buttons.textContent);

            containerNumbers.appendChild(pNum);
            pNum.textContent += buttons.textContent;

            console.log('num2:' + num2);
        }
        
    });

});

// Operators
operatorButton.forEach(buttons => {
    buttons.addEventListener('click', function (e) {

        if (num1.length !== 0 && num2.length === 0) {
            operator = buttons.textContent;

            console.log(operator);

        } else if (num1.length !== 0 && num2.length !== 0) {
            console.log('num2: ' + operator);
            operator = buttons.textContent;

            pNum.textContent = "";

            new operate(num1, num2, operator);
        }
    });
});

// Equal
btnOperate.addEventListener('click', function (e) {

    new operate(num1, num2, operator);

});

// Clear
const btnClear = document.querySelector('#btnClear');

btnClear.addEventListener('click', function (e) {
    num1.length = 0;
    num2.length = 0;
    operator = undefined;
    answer = 0;

    pNum.textContent = "";
});
