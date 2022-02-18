const input1El = document.getElementById('input-1')
const input2El = document.getElementById('input-2')
const resultEl = document.getElementById('result')
const addButtonEl = document.getElementById('add-button')
const subtractButtonEl = document.getElementById('subtract-button')
const multiplyButtonEl = document.getElementById('multiply-button')
const divideButtonEl = document.getElementById('divide-button')

addButtonEl.addEventListener('click', () => {

    const firstValue = input1El.valueAsNumber;
    const secondValue = input2El.valueAsNumber;
    const sum = firstValue + secondValue;
    resultEl.textContent = sum;
});

subtractButtonEl.addEventListener('click', () => {

    const firstValue = input1El.valueAsNumber;
    const secondValue = input2El.valueAsNumber;
    const difference = firstValue - secondValue;
    resultEl.textContent = difference;
});

multiplyButtonEl.addEventListener('click', () => {

    const firstValue = input1El.valueAsNumber;
    const secondValue = input2El.valueAsNumber;
    const product = firstValue * secondValue;
    resultEl.textContent = product;
});

divideButtonEl.addEventListener('click', () => {

    const firstValue = input1El.valueAsNumber;
    const secondValue = input2El.valueAsNumber;
    const quotient = firstValue / secondValue;
    resultEl.textContent = quotient;
});
