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
// assign button event listener that will populate displayString then update display
// since there are so many buttons, use event delegation
const buttonArea = document.querySelector(".buttons");
buttonArea.addEventListener("click", function(event) {
    if (event.target.classList.contains("number")) {
        displayString = displayString.concat(event.target.innerText);
        updateDisplay();
        console.log(displayString);
    } else if (event.target.classList.contains("operator")) {
        // all operators must be surrounded by spaces for proper conversion from string to values
        // if the display already holds 2 numbers and an operator,
            // pressing a new operator will execute the first operation, then display result & new operator
        // if the display already holds 1 number and an operator
            // pressing an operator will replace the current operator
        // if the display has only 1 number
            // pressing an operator will just add the current operator
        // otherwise, pressing an operator does nothing
        // "-" works special: if the operator is "-"
            // "-" can be pressed when nothing is in the display to make the first number neg
            // "-" can be pressed after another operator to make the second number neg
    } else if (event.target.classList.contains("equals")) {
        // if display holds 2 numbers and an operator
            // executes operation
        // else does nothing
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