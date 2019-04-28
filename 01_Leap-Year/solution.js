function leapYear() {

    let button = document.querySelector('#exercise button')

    button.addEventListener('click', checkTheYear)

    function checkTheYear() {
        let inputYear = document.querySelector('#exercise input')
        let isLeap = leapYear(inputYear.value)

        let h2 = document.querySelector("#year h2")
        let div = document.querySelector('#year div')

        if(isLeap){
            h2.textContent = "Leap Year"
        }else{
            h2.textContent = 'Not Leap Year'
        }

        div.textContent = inputYear.value;
        inputYear.value = ''
    }

    function leapYear(year) {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }

}