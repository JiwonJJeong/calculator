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

// INIT operate function
    // IF operator value is "+", THEN
        // RETURN CALL add
    // ELSE IF operator value is is "-", THEN
        // RETURN CALL subtract
    // ELSE IF operator value is "*", THEN
        // RETURN CALL multiply
    // ELSE IF operator value is "/", THEN
        // RETURN CALL divide
    // ELSE RETURN error log
// END function