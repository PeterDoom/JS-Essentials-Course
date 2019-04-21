function solve() {
    
    Array.from(document.getElementsByTagName('img')).forEach((img) => {
        img.addEventListener('click', clickEvent)
    })
  
    function clickEvent(e){
        let card = e.target;
        let parent = card.parentNode;

        let spans = document.getElementById('result').children

        if (parent.id === 'player1Div'){
            spans[0].textContent = card.name;
            card.src = "./images/whiteCard.jpg"
        }else{
            spans[2].textContent = card.name
            card.src = "./images/whiteCard.jpg"
        }

        if (spans[0].textContent && spans[2].textContent){
            let winner; 
            let looser; 

            if (+spans[0].textContent >+ spans[2].textContent){
               winner = document.querySelector(`#player1Div img[name ="${spans[0].textContent}"]`)
               looser = document.querySelector(`#player2Div img[name ="${spans[2].textContent}"]`)
            }else{ 
                winner = document.querySelector(`#player2Div img[name ="${spans[2].textContent}"]`)
                looser = document.querySelector(`#player1Div img[name ="${spans[0].textContent}"]`)
            }

            winner.style.border = '2px solid green';
            looser.style.border = '2px solid darkred'

            document.getElementById('history').textContent+=  `[${spans[0].textContent} vs ${spans[2].textContent}] `;

            setTimeout(() => {
                spans[0].textContent = "";
                spans[2].textContent= "";
            },2000)
        }

    }

}