var min = +prompt("Enter minutes")
var sec = +prompt("Enter seconds")
var milisec = 0



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

    milisec--

    disMilisec.innerHTML = milisec
    if (milisec <= 0) {
        sec--
        disSec.innerHTML = sec
        milisec = 99
    }
    if (sec <= 0) {
        if(min>0)
            min--
        else{
            pause()
            return
        }
        sec = 59
        disSec.innerHTML = sec
        disMin.innerHTML = min
    }
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
