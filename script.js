'use strict';

let num1 = [];
let num2 = [];
let operator;

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

let operate = (operation, a, b) => {
    
}

const containerNumbers = document.querySelector('.containerNumbers');
const buttonNumbers = containerNumbers.querySelectorAll('button');

const operateButton = document.querySelector('#btnOperate');

const p = document.createElement('p');

function numberFunction() {
    this.displayNumbers = function(){
buttonNumbers.forEach(buttons => {
    buttons.addEventListener('click', function(e) {

       
        num1.push(buttons.textContent);
        let processNum1 = num1.join("");

        containerNumbers.appendChild(p);

        p.textContent = parseInt(processNum1);
        return parseInt(processNum1);
       
});

});
return 5;
}
}

function operatorFunction(num1) {
    

const containerOperator = document.querySelector('.containerOperator');
const buttonOperator = containerOperator.querySelectorAll('button');

buttonOperator.forEach(buttons => {
    buttons.addEventListener('click', function(e) {
        console.log(num1);
        console.log(buttons.textContent);
    });
});

}

let c1 = new numberFunction();

operatorFunction(c1.displayNumbers);
// operatorFunction(numberFunction());