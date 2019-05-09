//A bonus add-on created by me to test the excercise. 


function jsonStringTest(){ // creates a JSON for the products that will need loading, you can add as much objects as one would want. 

    let obj = {
        name: 'tomatoes',
        quantity: 20,
        price: 0.50
    }
    let obj2 = {
        name: 'potatoes',
        quantity: 10,
        price: 0.60
    }

    let obj3 = {
        name: 'potatoes',
        quantity: 40,
        price: 0.50
    }


console.log(JSON.stringify([obj,obj2,obj3]))

}

function jsonBuyProduct(){ //it does the same but for products that need to be purchased
    let obj = {
        name: 'potatoes',
        quantity: 20,
    }

console.log(JSON.stringify([obj])) //it needs to be in an array always, this is the weakness of this task, though I am too lazy to fix it

}

jsonStringTest()
jsonBuyProduct()