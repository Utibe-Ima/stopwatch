const time = document.querySelector('.timer')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')
const all = document.querySelectorAll('button')



let seconds = 0;
let interval = null;

function timer() {
    seconds++;

    let min = Math.floor(seconds / 3600);
    let secs = Math.floor((seconds - (min * 60)) / 60);
    let milisecs = Math.floor(seconds % 60);

    if(min < 10) {min = '0' + min}
    if(secs < 10) {secs = '0' + secs}
    if(milisecs < 10) {milisecs = '0' + milisecs}

    time.innerText = `${min}:${secs}:${milisecs}`
}

start.addEventListener('click', function () {
    if (interval) {
        return
    }  
    
    interval = setInterval(timer, 100)
})

stop.addEventListener('click', function(){
    clearInterval(interval)
    interval = null;
})

reset.addEventListener('click', function() {
    clearInterval(interval)
    interval = null
    seconds = 0
    time.innerText = '00:00:00'
    window.location.reload()
})





