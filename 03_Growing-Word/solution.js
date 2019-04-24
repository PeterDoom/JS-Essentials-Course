function solve() {

   let currentColor = ""
   let currentFont = 0
   let growingWord = document.getElementsByTagName('p')[2]
   let fontOfWord = document.querySelector('#exercise p');

   
   let myButton = document.getElementsByTagName('button')[0]
   myButton.addEventListener('click', ()=> {

      if (currentFont === 0){
         currentFont +=2
      }
      else{
         currentFont*= 2;
      }
      console.log(currentFont)
      fontOfWord.style.fontSize= `${currentFont}px`      
   })

   let greenButton = document.getElementById('greenDiv')
   .addEventListener('click', ()=>{
      currentColor = 'green'
      fontOfWord.style.color = `${currentColor}`
      
   })

   let redButton = document.getElementById('redDiv')
   .addEventListener('click' , () =>{
      currentColor = 'red'
      fontOfWord.style.color = `${currentColor}`
   })

   let blueButton = document.getElementById('blueDiv')
   .addEventListener('click', () => {
      currentColor = 'blue'
      fontOfWord.style.color = `${currentColor}`
   })

}