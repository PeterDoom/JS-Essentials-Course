function solve() {

    let keyWordInput = document.getElementById("string");
    let textInput = document.getElementById("text");

    let keyWord = keyWordInput.value;
    let text = textInput.value;

    let messageRegexString = `${keyWord}(.*)${keyWord}`;
    let messageRegex = new RegExp(messageRegexString,"g");
    let messageMatch = messageRegex.exec(text);
    let message  = messageMatch[1];

    let locationRegex = /(north|east).*?(\d{2})[^,]*?,[^,]*?(\d{6})/gmi
    
    let eastMatch;
    let northMatch;

    let match = locationRegex.exec(text);

    while (match !== null){
        if(match[1].toUpperCase() === "NORTH"){
            northMatch = match
        }else{
            eastMatch = match;
        }
        match = locationRegex.exec(text);
    }

    let spanResult = document.getElementById("result");

    let p1 = document.createElement("p");
    p1.innerHTML = `${northMatch[2]}.${northMatch[3]} N`;

    let p2 = document.createElement("p");
    p2.innerHTML = `${eastMatch[2]}.${eastMatch[3]} E`;

    let p3 = document.createElement("p");
    p3.innerHTML = `Message: ${message}`

    spanResult.appendChild(p1)
    spanResult.appendChild(p2)
    spanResult.appendChild(p3)


}

//to test the function go here -> https://judge.softuni.bg/Contests/Compete/Index/1480#1