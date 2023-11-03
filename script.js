

let timer = 60;
let score = 0;
let rn = 0;
function getnewhit() {
 rn =   Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = rn;
}
function increasescrore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function makeBubble() {
    var clutter = "";


for (let i = 0; i <= 153; i++){

    clutter += ` <div class="bubble">${Math.floor(Math.random()*10)}</div>`
    
}
document.querySelector(".pbottom").innerHTML = clutter;
}
function runTimer() {
    
let timerclear=    setInterval(() => {
        if (timer > 0) {
            
            timer--;
            document.querySelector("#time").textContent = timer;
            
        }
        else {
            clearInterval(timerclear)
            document.querySelector(".pbottom").innerHTML = `<h1>game over</h1>`;

    }
    }, 1000);
}


document.querySelector(".pbottom").addEventListener('click', function (a) {
    let clickednumber = Number(a.target.textContent);
    if (clickednumber === rn) {
        increasescrore()
        makeBubble()
        getnewhit()
    }
    
})


getnewhit();
runTimer();
makeBubble();





















//codeß