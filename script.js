let timer;
let timeLeft;
let correctWords = 0;
let wrongWords = 0;

function startTest() {
    let selectedTime = document.getElementById("timeSelect").value;
    timeLeft = selectedTime * 60;
    correctWords = 0;
    wrongWords = 0;
    document.getElementById("correctWords").textContent = 0;
    document.getElementById("wrongWords").textContent = 0;
    document.getElementById("wpm").textContent = 0;

    document.getElementById("typingArea").disabled = false;
    document.getElementById("typingArea").value = "";
    document.getElementById("typingArea").focus();

    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("timer").textContent = ${minutes}:${seconds < 10 ? '0' : ''}${seconds};
    
    if (timeLeft == 0) {
        clearInterval(timer);
        document.getElementById("typingArea").disabled = true;
    }

    timeLeft--;
}

function checkTyping() {
    let inputText = document.getElementById("typingArea").value;
    let originalText = document.getElementById("paragraph").textContent;
    let words = inputText.split(" ");
    let originalWords = originalText.split(" ");

    correctWords = 0;
    wrongWords = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i] === originalWords[i]) {
            correctWords++;
        } else {
            wrongWords++;
        }
    }

    document.getElementById("correctWords").textContent = correctWords;
    document.getElementById("wrongWords").textContent = wrongWords;
    document.getElementById("wpm").textContent = Math.floor(correctWords / (timeLeft / 60));
}