function subtract() {
    document.getElementById('firstNumber').removeAttribute('disabled');
    document.getElementById('secondNumber').removeAttribute('disabled');


    const num1 = Number(document.getElementById('firstNumber').value);
    const num2 = Number(document.getElementById('secondNumber').value);

    document.getElementById('result').textContent = num1 - num2;
}