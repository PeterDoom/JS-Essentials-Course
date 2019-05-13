//https://judge.softuni.bg/Contests/Practice/Index/1492#2 you can find some tests and the requirments for the problem. 


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

//47*0-9%&+I2'm0#a#stu59%d%e&nt#a9t#So00ft%Uni*!+ try using this as a first test