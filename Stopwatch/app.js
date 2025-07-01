// function displayHello(){
//     console.log("Hello")
// }

// // setInterval(function, time);
// // setInterval(displayHello, 2000);


// const myTimeout = setTimeout(displayHello, 5000);

var DMIN = document.getElementById('DMIN')
var DSEC = document.getElementById('DSEC')
var DMS = document.getElementById('DMS')
var StartBtn = document.getElementById('StartBtn')
var PauseBtn = document.getElementById('PauseBtn')
var ResetBtn = document.getElementById('ResetBtn')

var min = 0
var sec = 0
var msec = 0
var interval;

function timer() {
    // seconds = 59
    // milliseconds = 999
    msec++
    DMS.innerHTML = msec
    if (msec === 99) {
        sec++
        msec = 0
        DSEC.innerHTML = sec
    }
    if (sec == 59) {
        min++
        sec = 0
        msec = 0
        DMIN.innerHTML = min
    }
}

function start() {
    interval = setInterval(timer, 10)
    // StartBtn.setAttribute('disabled','true')
    StartBtn.disabled = true
    PauseBtn.disabled = false
    ResetBtn.disabled = false
}
function pause() {
    clearInterval(interval)
    StartBtn.disabled = false
    PauseBtn.disabled = true
    ResetBtn.disabled = false
}
function reset() {
    pause()
    min = 0
    sec = 0
    msec = 0
    DMIN.innerHTML = min
    DSEC.innerHTML = sec
    DMS.innerHTML = msec
    StartBtn.disabled = false
    PauseBtn.disabled = true
    ResetBtn.disabled = true
}