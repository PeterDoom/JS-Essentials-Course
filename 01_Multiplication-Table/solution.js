function solve() {

  let result = document.getElementById('result')

  let numOne = Number(document.getElementById('num1').value)
  let numTwo = Number(document.getElementById('num2').value)

  if (numOne > numTwo) {
    result.textContent = "Try with other numbers."
     
  } else {
    for (let i = numOne; i <= numTwo; i++) {
      let p = document.createElement('p')
      let finalResult = numTwo * i;
      p.textContent = `${i} * ${numTwo} = ${finalResult}`;
      result.appendChild(p)
    }

  }

}