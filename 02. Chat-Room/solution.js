function solve() {
   let button = document.getElementById('send')
   button.addEventListener('click', clickEvent)
   let sentMessage = document.getElementById("chat_messages")
   let textAreaOfme = document.querySelector('textarea')

   function clickEvent(){
      let input = document.getElementById('chat_input');
      let div = document.createElement("div")
      div.setAttribute("class", "message my-message");
      div.textContent = input.value;
      sentMessage.appendChild(div);
      textAreaOfme.value = ''
   }
}


