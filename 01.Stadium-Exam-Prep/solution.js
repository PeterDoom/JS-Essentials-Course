function solve() {
    let buttons = document.getElementsByClassName('seat');
    let output = document.getElementById('output');
    let summary = document.getElementById('summary');
    let obj = {
        'Levski': {
            'A': 10,
            "B": 7,
            "C": 5
        },
        "Litex":{
            'A': 10,
            "B": 7,
            "C": 5
        },
        "VIP":{
            "A": 25,
            "B": 15,
            "C": 10
        },
        '__summary__':{
            'fans': 0,
            'totalProfit' : 0
        }
    };

    Array.from(buttons).forEach((btn) => {
        btn.addEventListener('click',clickEvent);
    })

    summary.children[0].addEventListener("click",getSummary);

    function clickEvent(e){
        let seat = e.target;
        let zone = seat.parentNode.parentNode.parentNode.parentNode.parentNode.className;
        let sector = String.fromCharCode(65+ e.target.parentNode.cellIndex);

        if(seat.style.backgroundColor === ""){
            seat.style.backgroundColor = "rgb(255,0,0)";
            obj.__summary__.fans += 1;
            obj.__summary__.totalProfit += obj[zone][sector];
            output.value += ` Seat ${seat.texContent} in zone ${zone} sector ${sector} was taken.\n`
        }else{
            output.value +=` Seat ${seat.texContent} in zone ${zone} sector ${sector} is unavailable.\n`
        }
    }

    function getSummary(){
        summary.children[1].textContent = `${obj.__summary__.totalProfit} leva, ${obj.__summary__.fans} fans.`
    }

}