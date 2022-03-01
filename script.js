const time = document.querySelector('.timer')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')



let seconds = 0;
let interval = null;

function timer() {
    seconds++;

    let hrs = Math.floor(seconds / 3600);
    let min = Math.floor((seconds - (hrs * 60)) / 60);
    let secs = Math.floor(seconds % 60);

    if(hrs < 10) {hrs = '0' + hrs}
    if(min < 10) {min = '0' + min}
    if(secs < 10) {secs = '0' + secs}

    time.innerText = `${hrs}:${min}:${secs}`
}

start.addEventListener('click', function () {
    if (interval) {
        return
    }  
    
    interval = setInterval(timer, 1000)
})

stop.addEventListener('click', function(){
    clearInterval(interval)
    interval = null
})

reset.addEventListener('click', function() {
    clearInterval(interval)
    interval = null
    seconds = 0
    time.innerText = '00:00:00'
    window.location.reload()
})

