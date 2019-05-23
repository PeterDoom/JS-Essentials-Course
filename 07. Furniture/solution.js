function solve() {

  let furnitureList;
  let textArea = document.getElementsByTagName('textarea')[1]
  let arrayToPrint = [];
  let finalPrice = 0;
  let decFactorToKeep = 0;

  document.getElementsByTagName("button")[0].addEventListener("click", () => {
    furnitureList = JSON.parse(document.getElementsByTagName('textarea')[0].value)
    let table = document.getElementsByClassName('table')[0];


    for (let furniture of furnitureList) {
      let row = table.insertRow();
      let cell = row.insertCell();

      let img = document.createElement("img");
      img.setAttribute("src", furniture.img);
      cell.appendChild(img);

      cell = row.insertCell()

      let name = document.createElement("p");
      name.textContent = furniture.name;
      cell.appendChild(name)
      cell = row.insertCell()


      let price = document.createElement("p");
      price.textContent = furniture.price;
      cell.appendChild(price)

      cell = row.insertCell()

      let decFactor = document.createElement("p");
      decFactor.textContent = furniture.decFactor;
      cell.appendChild(decFactor);

      cell = row.insertCell()

      let checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      cell.appendChild(checkbox);

    }

  })

  let buyButton = document.getElementsByTagName("button")[1];
  buyButton.addEventListener("click", doMagic)

  function doMagic() {
    let checkboxes = document.getElementsByTagName('input')
    Array.from(checkboxes).forEach(checkbox => {
      if (checkbox.checked) {
        let newParentElement = checkbox.parentElement.parentElement;
        let title = newParentElement.querySelectorAll("td")[1].textContent;
        let decFactorToPrint = newParentElement.querySelectorAll('td')[3].textContent;
        let price = newParentElement.querySelectorAll('td')[2].textContent;

        arrayToPrint.push(title)
        decFactorToKeep+= +decFactorToPrint;
        finalPrice+= +price;
      }

    })

    textArea.value += `Bought furniture: ${arrayToPrint.join(" ")}\n`
    textArea.value += `Total price: ${finalPrice.toFixed(2)}\n`
    textArea.value += `Average decoration factor: ${(decFactorToKeep/arrayToPrint.length).toFixed(1)}\n`
  }


}