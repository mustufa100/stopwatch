// Stopwatch
let stopwatchInterval;
let stopwatchTime = 0;
const stopwatchDisplay = document.getElementById('stopwatch-time');

document.getElementById('start-stopwatch').addEventListener('click', function() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(function() {
        stopwatchTime++;
        updateStopwatchDisplay();
    }, 1000);
});

document.getElementById('stop-stopwatch').addEventListener('click', function() {
    clearInterval(stopwatchInterval);
});

document.getElementById('reset-stopwatch').addEventListener('click', function() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    updateStopwatchDisplay();
});

function updateStopwatchDisplay() {
    const hours = Math.floor(stopwatchTime / 3600);
    const minutes = Math.floor((stopwatchTime % 3600) / 60);
    const seconds = stopwatchTime % 60;
    stopwatchDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// Timer
let timerInterval;
let timerTime = 0;
const timerDisplay = document.getElementById('timer-time');

document.getElementById('start-timer').addEventListener('click', function() {
    clearInterval(timerInterval);
    const inputMinutes = prompt('Enter minutes for timer:');
    timerTime = inputMinutes * 60;
    timerInterval = setInterval(function() {
        if (timerTime <= 0) {
            clearInterval(timerInterval);
            alert('Time is up!');
        } else {
            timerTime--;
            updateTimerDisplay();
        }
    }, 1000);
});

document.getElementById('stop-timer').addEventListener('click', function() {
    clearInterval(timerInterval);
});

document.getElementById('reset-timer').addEventListener('click', function() {
    clearInterval(timerInterval);
    timerTime = 0;
    updateTimerDisplay();
});

function updateTimerDisplay() {
    const hours = Math.floor(timerTime / 3600);
    const minutes = Math.floor((timerTime % 3600) / 60);
    const seconds = timerTime % 60;
    timerDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// Utility function to pad single digit numbers with a leading zero
function pad(num) {
    return num < 10 ? '0' + num : num;
}
