function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');

    let dropDOwnMenu = document.getElementById('menu');

    let newOptionElement = document.createElement('option');

    if(text.value && value.value){
    newOptionElement.textContent = text.value;
    newOptionElement.value = value.value;
    dropDOwnMenu.appendChild(newOptionElement);
    }else{
        alert("Whoops izempty");
    }

    text.value = ""
    value.value = ""
}