let startTime = null;
let elapsedTime = 0;
let timer = null;
const display = document.getElementById("display")

function padRead (value) {
    return String(value).padStart(2, "0")
}

function updateDisplay() {
    const minutes = Math.floor(elapsedTime / (1000*60));
    const seconds = Math.floor(elapsedTime / 1000) % 60;
    display.innerHTML = `${padRead(minutes)}:${padRead(seconds)}`;
}

function start() {
    if(timer) stop()
    startTime = Date.now() - elapsedTime;
    timer = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
    }, 100)
    
} 

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    stop()
    elapsedTime = 0;
    updateDisplay()
}

