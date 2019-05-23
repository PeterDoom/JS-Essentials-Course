function solve() {

   let allProducts = [];
   let priceTotal = 0;
   let buttons = Array.from(document.querySelectorAll("button"));
   let textArea = document.querySelector("textarea")

   buttons.forEach((btn, index) => {

      btn.addEventListener('click', (e) => {

         if (index !== buttons.length - 1) {
            
            let mainParentElement = e.target.parentElement.parentElement;
            let title = mainParentElement.querySelector(".product-title").textContent;
            let price = mainParentElement.querySelector(".product-line-price").textContent;
            
            allProducts.push({title:title, price: price});
            textArea.textContent += `Added ${title} for ${price} to the cart.\n`;

         } 
         else {
            buttons.forEach(btn => {
               btn.setAttribute("disabled", "disabled")
            });
            
            let stringFinale = allProducts
            .map(x => x.title)
            .filter((el,index, arr) =>arr.indexOf(el) === index)
            .join(", ");

            priceTotal = allProducts
            .map(x => Number(x.price))
            .reduce((a,b) => a+b);

            textArea.value+= `You bought ${stringFinale} for ${priceTotal.toFixed(2)}.`
         }
      })

   })

}