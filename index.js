let equationArea = document.getElementById('equation-display');
let displayArea = document.getElementById('result-display');
let equalBtn = document.getElementById('equal');
let clearBtn = document.getElementById('clear');
let numberBtns = Array.from(document.getElementsByClassName("display-input"));
let operatorBtn = Array.from(document.getElementsByClassName("operator"));
let dotBtn = document.getElementById('dot');
let deleteBtn = document.getElementById('delete');

let calculator = {
    firstNumber: null,
    operator: null,
    secondNumber: null,
    result: null,

    Add: function add(a, b) {
        return a + b;
    },

    Subtract: function minus(a, b) {
        return a - b;
    },

    Multiply: function multiply(a, b) {
        return a * b;
    },

    Divide: function divide(a, b) {
        if (b === 0) {
            return "ERROR";
        }
        else {
            return a / b;
        }
    },

    Percent: function percent(a, b) {
        return ((a / b) * 100) + "%";
    },

    calculateResult: function () {
        switch (this.operator) {
            case "+":
                this.result = this.Add(this.firstNumber, this.secondNumber);
                break;

            case "-":
                this.result = this.Subtract(this.firstNumber, this.secondNumber);
                break;

            case "×":
                this.result = this.Multiply(this.firstNumber, this.secondNumber);
                break;

            case "÷":
                this.result = this.Divide(this.firstNumber, this.secondNumber);
                break;

            case "%":
                this.result = this.Percent(this.firstNumber, this.secondNumber);
                break;

            default:
                this.result = 0;
        }
    },

    clear: function () {
        this.firstNumber = null;
        this.operator = null;
        this.secondNumber = null;
        this.result = null;
    },
}





numberBtns.forEach(numberBtn => { numberBtn.addEventListener('click', displayNumbers) });

operatorBtn.forEach(opBtn => { opBtn.addEventListener('click', logNumbers) });

equalBtn.addEventListener('click', calculateResult);

clearBtn.addEventListener('click', clearAll);

dotBtn.addEventListener('click', () => dotBtn.classList.add("disable"));

deleteBtn.addEventListener ('click', goBackspace);






function displayNumbers(e) {

    displayArea.innerText = displayArea.innerText + e.target.innerText;
}

function clearAll() {
    calculator.clear() //clear calculator object properties
    displayArea.innerText = "";
    equationArea.innerText = "";
    dotBtn.classList.remove("disable");
    equalBtn.classList.remove("disable")
}

function logNumbers(e) {
    calculator.firstNumber = Number(displayArea.innerText);
    calculator.operator = e.target.innerText;
    equationArea.innerText = displayArea.innerText + " " + e.target.innerText;
    displayArea.innerText = "";
    dotBtn.classList.remove("disable");
}

function calculateResult() {
    if (calculator.secondNumber == null) {
        calculator.secondNumber = Number(displayArea.innerText);
    }
    calculator.calculateResult()
    equationArea.innerText = equationArea.innerText + " " + displayArea.innerText + " " + "=";
    if (typeof calculator.result !== "number") {
        displayArea.innerText = calculator.result;
    }
    else {
        if (calculator.result < 999999) {
            displayArea.innerText = calculator.result;
        }
        else {
            displayArea.innerText = calculator.result.toExponential(2);;
        }
    }

    dotBtn.classList.remove("disable");
    equalBtn.classList.add("disable")

}

function goBackspace () {
    // displayArea.innerText = displayArea.innerText.split("").pop().join("");
    displayArea.innerText = displayArea.innerText.split("").slice(0, -1).join("");

}
