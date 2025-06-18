//DEFINE VARIABLES
const num1 = [];
const num2 = [];
let operator = 0;
let result = 0;


//CALCULATION

function add(num1, num2) {
    
    result = Number(num1[0]) + Number(num2[0]);
    console.log(result);
    operator = 0;
    return(result);
};


function subtract(num1, num2) {
    let result = Number(num1[0]) - Number(num2[0]);
    console.log(result);
    operator = 0;
    return result;
};


function multiply(num1, num2) {
    let result = Number(num1[0]) * Number(num2[0]);
    console.log(result);
    operator = 0;
    return result;
};


function divide(num1, num2) {
    let result = Number(num1[0]) / Number(num2[0]);
    console.log(result);
    operator = 0;
    return result;
};


///BUTTON FUNCTIONALITY//

const operatorButton = document.querySelectorAll('.operator');

for (let i = 0; i < operatorButton.length; i++) {
    operatorButton[i].addEventListener("click", () => {
        operator = operatorButton[i].textContent;
        console.log(operator);
    })
}

const numberButtons = document.querySelectorAll('.number');

//POPULATES NUM2 AFTER OPERATOR HAS BEEN SELECTED//
for (let i=0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", () => {
        if (operator == 0) {
        num1.unshift(numberButtons[i].textContent);
        console.log(num1);
        } else {
            num2.unshift(numberButtons[i].textContent);
            console.log(num2);
        }
    })
}

// console.log(num1);
// console.log(num2);


function operate(num1, num2, operator) {
    switch(operator[0]){ 
        case "+":
            add(num1, num2);
            // display.innerHTML = result;
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1,num2);
            break;
        case "÷":
            divide(num1, num2);
            break;
        default:
            console.log("Error");
            operator = 0;
            break;
    }       
}


const equal = document.getElementById('equal');
equal.addEventListener("click", () => operate(num1, num2, operator));

const clear = document.getElementById('clear');
clear.addEventListener("click", () => {
    operator = 0;
    num1.length = 0;
    num2.length = 0;

    // console.log(num1);
    // console.log(num2);
})


