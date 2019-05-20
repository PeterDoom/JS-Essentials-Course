function solve() {

   let id = document.getElementById("searchField")
   let tableContent = Array.from(document.querySelectorAll(".container tbody tr"));
   let button = document.getElementById("searchBtn")
   button.addEventListener("click", itDoesSmth)

   function itDoesSmth() {

      let toBeUnselect = Array.from(document.querySelectorAll(".select"));

      if (toBeUnselect) {
         toBeUnselect.forEach(el => {
            el.removeAttribute('class','select')
         })
      }

      tableContent.forEach(element => {
         let toSearchWith = id.value;
         if (element.innerHTML.includes(toSearchWith)) {
            element.setAttribute("class", "select")
         }
      })

      id.value = ""
   }
}