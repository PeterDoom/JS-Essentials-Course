function subtract() {
 
    let firstInputField = document.getElementById('firstNumber').value; 
    let secondInputField = document.getElementById('secondNumber').value;

    let result = +firstInputField - +secondInputField;

    resultTag = document.getElementById('result');
    resultTag.textContent = result;

} 