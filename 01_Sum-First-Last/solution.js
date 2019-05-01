function solve() {

    let input = document.getElementById('arr').value;
    let arr = JSON.parse(input);
    let result = document.getElementById('result');

    arr.map((x) => +x)
    .forEach((x,y) => {
        let p = document.createElement('p')
        p.textContent = `${y} -> ${arr.length * x}`
        result.appendChild(p)
    })
}
