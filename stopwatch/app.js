var min = 0
var sec = 0
var milisec = 0
var disMin = document.getElementById('min')
var disSec = document.getElementById('sec')
var disMilisec = document.getElementById('milisec')

function timer(){
    milisec++
    if(milisec<10)
        disMilisec.innerHTML = "0"+milisec
    else
        disMilisec.innerHTML = milisec

    if(milisec == 100){
        sec++
        if(sec<10)
            disSec.innerHTML = "0"+sec
        else
            disSec.innerHTML = sec
        milisec = 0
    }else if(sec == 59){
        min++
        disSec.innerHTML = sec
        sec = 0
    }
}

var inteval

function start(){
    interval =  setInterval(timer,10)
    document.getElementById('startButton').onclick=function(){return};
}

function pause(){    
    document.getElementById('startButton').onclick=start
    return clearInterval(interval)    
}

function reset(){

    pause()
    min = 0
    sec = 0
    milisec = 0
    disMilisec.innerHTML = "00"
    disSec.innerHTML = '00'
    disSec.innerHTML = '00'
}