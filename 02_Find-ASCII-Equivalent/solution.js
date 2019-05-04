function solve() {
  let inputText = document.getElementById('str').value;
  let resultElement = document.getElementById('result');

  let numbers = [];

  let result = inputText
    .split(' ')
    .filter(x => x)
    .forEach(x => {
      if (isNaN(x)) {
       let resultRow =  x.split('').map(ch => ch.charCodeAt(0)).join(' ');
       let parag =document.createElement('p');
       parag.textContent = resultRow
       resultElement.appendChild(parag);

      } else {
        numbers.push(+x)
      }
    })

    let lastWord = String.fromCharCode(...numbers)
    let parag = document.createElement('p')
    parag.textContent = lastWord;
    resultElement.appendChild(parag)
}