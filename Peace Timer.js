let twentySecondsBtn = document.getElementById("twentySecondsBtn");
let thirtySecondsBtn = document.getElementById("thirtySecondsBtn");
let fortySecondsBtn = document.getElementById("fortySecondsBtn");
let oneMinuteBtn = document.getElementById("oneMinuteBtn");
let timerText = document.getElementById("timerText");
let intervalId;

function clearPreviousTimers() {
    clearInterval(intervalId);
}

twentySecondsBtn.onclick = function() {
    let counter = 20;
    clearPreviousTimers();
    timerText.textContent = counter;
    intervalId = setInterval(function() {
        counter = counter - 1;
        timerText.textContent = counter + " seconds left";
        if (counter === 0) {
            timerText.textContent = "Your moment is complete";
            clearInterval(intervalId);
        }
    }, 1000);
}
thirtySecondsBtn.onclick = function() {
    clearPreviousTimers();
    let counter = 30;
    timerText.textContent = counter;
    intervalId = setInterval(function() {
        counter = counter - 1;
        timerText.textContent = counter + " seconds left";
        if (counter === 0) {
            timerText.textContent = "Your moment is complete";
            clearInterval(intervalId);
        }
    }, 1000);
}
fortySecondsBtn.onclick = function() {
    clearPreviousTimers();
    let counter = 40;
    timerText.textContent = counter;
    intervalId = setInterval(function() {
        counter = counter - 1;
        timerText.textContent = counter + " seconds left";
        if (counter === 0) {
            timerText.textContent = "Your moment is complete";
            clearInterval(intervalId);
        }
    }, 1000);
}
oneMinuteBtn.onclick = function() {
    clearPreviousTimers();
    let counter = 60;
    timerText.textContent = counter;
    intervalId = setInterval(function() {
        counter = counter - 1;
        timerText.textContent = counter + " seconds left";
        if (counter === 0) {
            timerText.textContent = "Your moment is complete";
            clearInterval(intervalId);
        }
    }, 1000);
}