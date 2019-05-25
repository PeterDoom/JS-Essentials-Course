//Input a name to and it's added to the list. Any name works. 

function solve() {

    let textArea = document.getElementsByTagName("input")[0];
    let list = Array.from(document.getElementsByTagName("li"));
    let button = document.getElementsByTagName("button")[0];

    button.addEventListener("click", register)

    function register() {
        if (textArea.value) {
            let stringToCheck = textArea.value;

            let elementOfList = list[getTheNumberOfList(correctTheWord(stringToCheck))]

            if (elementOfList.innerHTML) {
                elementOfList.innerHTML += `, ${correctTheWord(stringToCheck)}`
            } else {
                elementOfList.innerHTML += correctTheWord(stringToCheck);
            }

        }
    }

    function getTheNumberOfList(word) {

        let temp = word.split("");
        let letter = temp[0]
        let number = Number(letter.charCodeAt()) - 65

        return number

    }

    function correctTheWord(word) {

        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()

    }


}