// java script

function add(num1, num2){
    return num1 + num2;
}

function subtract(number, numberToSubtract) {
    return number- numberToSubtract;
}

function multiply(num1,num2) {
    return num1*num2;
}

function divide(numerator, divisor) {
    if (divisor === 0){
        return "ERROR";
    } else return numerator/divisor;
}

// object with 3 variables for display
let values = {
    num1:null,
    operator:null,
    num2:null,
};

// operate function takes operator and 2 numbers, then returns result of appropriate math
// input will be an object of 3 properties (num1, operator, num2)
function operate(){
    convertDisplayToValues();
    if (values.operator === "+") {
        return add(values.num1,values.num2);
    } else if (values.operator === "-"){
        return subtract(values.num1,values.num2);
    } else if (values.operator === "*"){
        return multiply (values.num1, values.num2);
    } else if (values.operator === "/") { 
        return divide (values.num1,values.num2);
    } else return console.log("error in operate function");
}

// need to populate display and store display value
let displayString ="";
let isOperatorSelected = false;
let isDisplayEndWithNumber = false;
let isDivisionError = false;
let isNegativeSelected = false;
// assign button event listener that will populate displayString then update display
// since there are so many buttons, use event delegation
const buttonArea = document.querySelector(".buttons");
buttonArea.addEventListener("click", function(event) {
    if (event.target.classList.contains("number")) {
        displayString = displayString.concat(event.target.innerText);
        updateDisplay();
        isDisplayEndWithNumber = true;
        console.log(displayString);
        return;
    } else if (event.target.classList.contains("operator")) {
        // all operators must be surrounded by spaces for proper conversion from string to values
        // if the display already holds 2 numbers and an operator,
            // then execute first operation, display result & new operator
        if (isOperatorSelected && isDisplayEndWithNumber) {
            displayString = toString(operate());
            displayString = displayString.concat(" ",event.target.innerText," ");
            updateDisplay();
            isDisplayEndWithNumber = false;
            isNegativeSelected = false;
            return;
        } 
        // if the display already holds 1 number and an operator
            // if operator button pressed is "-" and existing op isnt "-" or "+", then adds neg sign
            // otherwise pressing an operator will replace the current operator
        else if (isOperatorSelected && !isDisplayEndWithNumber) {
            if (event.target.classList.contains("subtract") &&
                (displayString.slice(-2,-1) !== "-") &&
                (displayString.slice(-2,-1) !== "+") &&
                (!isNegativeSelected ) ){
                    displayString = displayString.concat("-");
                    updateDisplay();
                    isNegativeSelected = true;
                    return;
            } else if (!isNegativeSelected) {
                displayString = displayString.slice (0,-2);
                displayString = displayString.concat(event.target.innerText," ");
                updateDisplay();
                return;
            } else return;
        } 
        // if the display has only 1 number
            // pressing an operator will just add the current operator
        else if (!isOperatorSelected && isDisplayEndWithNumber){
            displayString = displayString.concat(" ",event.target.innerText," ");
            updateDisplay();
            isOperatorSelected = true;
            isDisplayEndWithNumber = false;
            return;
        }
        // only last case is if there is nothing in display,
            // only "-" operator will add "-" for neg sign
        else if (event.target.classList.contains("subtract") && !isNegativeSelected){
            displayString = displayString.concat("-");
            updateDisplay();
            isNegativeSelected = true;
            return;
        } else {
            console.log("operator button error");
        };
    } else if (event.target.classList.contains("equals")) {
        if (isOperatorSelected && isDisplayEndWithNumber) {
            displayString = toString(operate());
            updateDisplay();
            isNegativeSelected = false;
            isOperatorSelected = false;
            return;
        } else return;
    }
})

// will turn the display string into the values object
// display has form: num1 + operator + num2 with spaces between each so split() is useful
// num1 and num2 may have "-" in front which must be interpreted as a neg number
function convertDisplayToValues(){
    return null;
}


function updateDisplay(){
    const display = document.querySelector(".display-text");
    display.textContent = displayString;
}