function validate() {

    let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    let sum = 0

    document.querySelector('#exercise > fieldset > div > button')
        .addEventListener('click', validateNumber);

    function validateNumber() {
        let input = document.querySelector('#exercise > fieldset > div > input').value;

        let lastDigit = input[9];

        for (let i = 0; i < 9; i++) {
            let temp = input[i];
            let temp2 = weights[i]
            sum += temp * temp2;
        }

        let reminder = sum % 11;

        if (reminder === 10) {
            reminder = 0;
        }

        let response = document.getElementById('response')


        if (+lastDigit === reminder) {
            response.textContent = 'This number is Valid!'

        } else {

            response.textContent = 'This number is NOT Valid!'

        }

    }



}