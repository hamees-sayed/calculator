const pi = document.querySelector('#pi');
const display = document.querySelector('.display .screen');
const clear = document.querySelector('#clear');

pi.addEventListener('click', displayPi)
clear.addEventListener('click', clearDisplay)
window.addEventListener('keydown', handleKeyboardInput)

function displayPi() {
    return display.textContent = 3.141592
}

function clearDisplay() {
    return display.textContent = 0
}

function resetScreen() {
    return display.textContent = ''
}

function appendNumber(number) {
    if (display.textContent === '0') resetScreen()
    display.textContent += number
}

function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
    if (e.key === '.') appendNumber(e.key);

    // check here!!!
    // if (e.key === '=' || e.key === 'Enter') evaluate()

    if (e.key === 'Backspace') clearDisplay();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') 
        display.textContent += convertKeyBoardOperator(e.key);
    if (!e.key) return;
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