function solve() {
  let inputArr = JSON.parse(document.getElementById('arr').value);
  let resultElement = document.getElementById('result');
  let paragraph = document.createElement('p')
  let wrongParagraph = paragraph.cloneNode();
  let pattern = /^([A-Z][a-z]* [A-Z][a-z]*) (\+359 \d \d{3} \d{3}|\+359-\d-\d{3}-\d{3}) ([a-z0-9]+@[a-z]+\.[a-z]{2,3})$/g
  wrongParagraph.textContent = 'Invalid data'

  let dashElement = paragraph.cloneNode();
  dashElement.textContent = '- - -'

  inputArr.forEach(element => {
    let match = pattern.exec(element)
    if (match) {
      insertValidElement(`Name: ${match[1]}`)
      insertValidElement(`Phone Number: ${match[2]}`)
      insertValidElement(`Email: ${match[3]}`)

    } else {
      resultElement.appendChild(wrongParagraph.cloneNode(true))
    }

    resultElement.appendChild(dashElement.cloneNode(true))
  })

  function insertValidElement(text) {
    let validElement = paragraph.cloneNode();
    validElement.textContent = text;
    resultElement.appendChild(validElement);
  }

}