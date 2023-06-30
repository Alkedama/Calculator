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

let operate = (operation, a, b) => {
    
}

let num1 = [];
let num2 = [];
let operator;

const containerNumbers = document.querySelector('.containerNumbers');
const buttonNumbers = containerNumbers.querySelectorAll('button');

const operateButton = document.querySelector('#btnOperate');

const p = document.createElement('p');

function numberFunction(numbs, num2, operator) {

    this.bruv = function() {
        numbs;
        num2;
        operator;
    }


buttonNumbers.forEach(buttons => {
    buttons.addEventListener('click', function(e) {

       
        num1.push(buttons.textContent);
        let processNum1 = num1.join("");

        containerNumbers.appendChild(p);

        p.textContent = parseInt(processNum1);
        // return parseInt(processNum1);
        // return num1;
        console.log(numbs);
       
});

});
}

const c1 = new numberFunction(1, 3, '+');

console.log(c1.bruv());