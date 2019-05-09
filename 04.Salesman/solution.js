//JSON and Objects excercise, where the input of the shop is taken in a JSON format and loaded, once loaded, the orders or purchases are taken again with JSON format


function solve() {
  let storage = {};
  let profit = 0;

  document.getElementsByTagName('button')[0].addEventListener('click', add);
  document.getElementsByTagName('button')[1].addEventListener('click', buy);
  document.getElementsByTagName('button')[2].addEventListener('click', endDay);
  let textAreas = document.getElementsByTagName('textarea');

  function add() {
    let val = JSON.parse(textAreas[0].value);
    for (let item of val) {
      if (!storage.hasOwnProperty(item.name)) {
        storage[item.name] = {
          price: item.price,
          quantity: item.quantity
        }
      } else {
        storage[item.name] = {
          price: item.price,
          quantity: storage[item.name].quantity + item.quantity
        }
      }
      textAreas[2].value += `Successfully added ${item.quantity} ${item.name}. Price: ${item.price}\n`
    }
  }

  function buy() {
    let products = JSON.parse(document.getElementsByTagName('textarea')[1].value);
    for (let product of products) {
      
      if (storage.hasOwnProperty(product.name) && storage[product.name].quantity >= product.quantity) {
        storage[product.name].quantity -= product.quantity; //if the product exists > prints okay
        textAreas[2].value += `${product.quantity} ${product.name} sold for ${product.quantity * storage[product.name].price}\n`
        profit += product.quantity * storage[product.name].price
        
      } else {
        //providing that this is not possible it notifies the buyer.   
        textAreas[2].value += `Cannot complete order.\n`
      }
    }
  }

  function endDay() {
    textAreas[2].value += `Profit: ${profit.toFixed(2)}\n`
    document.getElementsByTagName('button')[0].removeEventListener('click', add);
    document.getElementsByTagName('button')[1].removeEventListener('click', buy);
    document.getElementsByTagName('button')[2].removeEventListener('click', endDay);
  }

}