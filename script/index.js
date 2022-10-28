let firstOperand = ''
let secondOperand = ''
let currentOperation = null

const pi = document.querySelector('#pi');
const display = document.querySelector('.display .screen');
const clear = document.querySelector('#clear');
const numberKey = document.querySelectorAll('[data-key]');
const operatorKey = document.querySelectorAll('[data-operator]');

pi.addEventListener('click', displayPi);
clear.addEventListener('click', clearDisplay);
window.addEventListener('keydown', handleKeyboardInput);

numberKey.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
);

operatorKey.forEach((operator) => 
    operator.addEventListener('click', () => appendNumber(operator.textContent))
);

function displayPi() {
    return display.textContent = 3.141592
}

function clearDisplay() {
    return display.textContent = 0
}

function resetScreen() {
    return display.textContent = ''
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

function appendNumber(number) {
    if (display.textContent === '0') resetScreen();
    display.textContent += number
}

function setOperation(operator) {
    if (currentOperation !== null) evaluate()
    firstOperand = currentOperationScreen.textContent
    currentOperation = operator
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`
}

function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
    if (e.key === '.') appendNumber(e.key);

    if (e.key === '=' || e.key === 'Enter') operate()

    if (e.key === 'Backspace') clearDisplay();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') 
        setOperation(convertOperator(e.key));
    if (!e.key) return;
}

function evaluate() {
    if (display.textContent === '0' && currentOperation === '÷') {
        return alert("Cannot divide by 0")
    }
    secondOperand = display.textContent
    display.textContent = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
    )
    display.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperation = null
}

function convertKeyBoardOperator(keyBoardOperator) {
    if (keyBoardOperator === '/') return '÷'
    if (keyBoardOperator === '+') return '+'
    if (keyBoardOperator === '-') return '−'
    if (keyBoardOperator === '*') return '×'
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a ,b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case '*':
            return multiply(a, b)
        case '/':
            if (b === 0) return null
            else return divide(a, b)
        default: 
            return null
    }
}