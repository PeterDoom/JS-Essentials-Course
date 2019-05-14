function solve() {
    let button = document.getElementsByTagName('button')[0]
    let result = document.getElementById("result")
    button.addEventListener("click", () => {
        let input = document.getElementById("input")
        let option = document.getElementById("selectMenuTo").value;

        if (option === "hexadecimal"){
            let num = +input.value
            let hex = num.toString(16)
            result.value = hex;
        }else if (option ==="binary"){
            let num = +input.value
            let bin = num.toString(2)
            result.value = bin;
        }
    })
    
}