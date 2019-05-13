function solve() {

    let output = document.getElementById('output');
    let button = document.querySelector('button')
    button.addEventListener('click', checkInput)

    function checkInput() {
        let input = document.getElementById('input').value;

        let matchNums = /([0-9]+)/.exec(input)[0]
        let inputToWorkWith = input.substr(matchNums.length, Number(matchNums))
        inputToWorkWith = inputToWorkWith
            .split(`${inputToWorkWith[inputToWorkWith.length-1]}`)
            .filter((x) => Boolean(x))

        let newPattern = new RegExp(`[${inputToWorkWith[0]}]*`, 'g')
        let result = inputToWorkWith[1].replace(newPattern, "")
        result = result.replace(/[\#]/g, " ")

        output.value += `${result}`
    }
}