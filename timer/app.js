var min = +prompt("Enter minutes")
var sec = +prompt("Enter seconds")
var milisec = 00



var disMin = document.getElementById('min')
var disSec = document.getElementById('sec')
var disMilisec = document.getElementById('milisec')

if (milisec < 10)
    disMilisec.innerHTML = "0" + milisec
else
    disMilisec.innerHTML = milisec

if (sec < 10)
    disSec.innerHTML = "0" + sec
else
    disSec.innerHTML = sec

disMin.innerHTML = min

function timer() {
    if((milisec+sec+min)==0){
        pause()
        return
    }

    milisec--    

    if (milisec <= 0) {
        sec--
        disSec.innerHTML = sec
        milisec = 00
    } else if (sec <= 0) {
        min--
        disSec.innerHTML = sec
        disMin.innerHTML = min
        sec = 59
    }
    disMilisec.innerHTML = milisec
}

var inteval

function start() {
    interval = setInterval(timer, 10)
    document.getElementById('startButton').onclick = function () { return };
}

function pause() {
    document.getElementById('startButton').onclick = start
    return clearInterval(interval)
}

function reset() {
    location.reload()    
}