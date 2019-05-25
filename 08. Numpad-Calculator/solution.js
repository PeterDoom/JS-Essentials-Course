function solve() {

    let buttonsToKeyboard = Array.from(document.querySelectorAll(".keys button"))
    let textArea = document.getElementById("expressionOutput")
    let resultOutput = document.getElementById("resultOutput")
    let clearButton = document.getElementsByClassName("clear")[0]

    buttonsToKeyboard.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.value !== "=") {
                if (isNaN(btn.value) && btn.value !== ".") {
                    textArea.textContent += ` ${btn.value} `
                } else {

                    textArea.textContent += btn.value;
                }
            } else{
                if (checker(textArea.textContent)) {
                    resultOutput.textContent += eval(textArea.textContent);
                } else {
                    resultOutput.textContent += NaN
                }
            }
        })
    })

    clearButton.addEventListener("click", () => {
        textArea.textContent = "";
        resultOutput.textContent = "";
    })



    function checker(expression) {

        let bool = true;
        expression = String(expression);
        expression = expression.split(" ").filter(el => Boolean(el))

        if (/[\*\+\/\-]/.test(expression[expression.length - 1])) {
            bool = false
        }

        return bool;
    }

}