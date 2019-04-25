function solve() {
  
    let numToConvert = Number(document.getElementById('num1').value);
    let temperature = document.getElementById('type').value.toLowerCase();
    let result = document.getElementById('result');

    function getFarenheit(number){
        return number * 1.8 + 32;
    }
    function getCelsius(number){
        return (number - 32) / 1.8
    }
    
    if(temperature === 'celsius'){
        result.innerHTML = Math.round(getFarenheit(numToConvert))
    }else if (temperature === 'fahrenheit'){
        result.innerHTML = Math.round(getCelsius(numToConvert))
    }else{
        result.innerHTML = 'Error!'
    }
}