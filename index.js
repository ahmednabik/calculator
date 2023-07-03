let currentEquation = '';

let calculatorKeys = Array.from (document.getElementsByClassName("display-input"));

calculatorKeys.forEach(div => { div.addEventListener ('click', showEquationDisplay)
    
});

function showEquationDisplay (e) {
    let equationDisplay = document.getElementById ('equation-display');
    equationDisplay.innerText = equationDisplay.innerHTML + " " + e.target.innerHTML;
    currentEquation = equationDisplay.innerText;
}



function calculate (number1, number2, operator) {
    switch (operator) {
        case "+" :
            return add (number1,number2)
            break;
        case "-":
            return minus (number1,number2)
            break;
        case "x":
            return multiply (number1,number2)
            break;
        case "/":
            return divide (number1,number2)
            break;
        case "%":
            return percent (number1,number2)
            break;
        default:
            break;
    }
}

function add (a,b) {
    return a + b;
}

function minus (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}

function percent (a,b) {
    return a % b;
}