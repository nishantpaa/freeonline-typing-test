const paragraphs = [
    "Time management is the key to success in every aspect of life. People who manage their time efficiently tend to achieve more and feel less stressed...",
    "Positive thinking is a mindset that leads to success, happiness, and better health. It helps individuals overcome challenges and view problems as opportunities...",
    "Technology has revolutionized education, making learning more accessible and engaging...",
    "Regular exercise is essential for maintaining good health and overall well-being...",
    "Climate change is a pressing global issue that affects every aspect of life on Earth...",
    "Mental health is as important as physical health, yet it is often overlooked...",
    "Social media has transformed communication and information sharing...",
    "Artificial Intelligence (AI) is revolutionizing industries, from healthcare to finance...",
    "Reading enhances knowledge, improves vocabulary, and stimulates imagination...",
    "Friendship is one of the most valuable relationships in life..."
];

let timer;
let interval;
let correctWords = 0;
let wrongWords = 0;

function startTest() {
    let selectedParagraphIndex = document.getElementById("paragraphSelect").value;
    let selectedParagraph = paragraphs[selectedParagraphIndex];

    let wordLimit = parseInt(document.getElementById("wordCountSelect").value);
    let selectedTime = parseInt(document.getElementById("timeSelect").value);

    let wordsArray = selectedParagraph.split(" ").slice(0, wordLimit);
    document.getElementById("paragraph").innerText = wordsArray.join(" ");

    document.getElementById("typingArea").value = "";
    document.getElementById("typingArea").disabled = false;
    document.getElementById("typingArea").focus();

    timer = selectedTime;
    correctWords = 0;
    wrongWords = 0;
    document.getElementById("timer").innerText = timer;

    clearInterval(interval);
    interval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (timer > 0) {
        timer--;
        document.getElementById("timer").innerText = timer;
    } else {
        clearInterval(interval);
        document.getElementById("typingArea").disabled = true;
        calculateResults();
    }
}

function calculateResults() {
    let typedText = document.getElementById("typingArea").value.trim();
    let originalText = document.getElementById("paragraph").innerText.trim();
    let typedWords = typedText.split(" ");
    let originalWords = originalText.split(" ");

    typedWords.forEach((word, index) => {
        if (word === originalWords[index]) {
            correctWords++;
        } else {
            wrongWords++;
        }
    });

    let wpm = Math.round((correctWords / 5) / (60 / timer));
    document.getElementById("wpm").innerText = wpm;
    document.getElementById("correctWords").innerText = correctWords;
    document.getElementById("wrongWords").innerText = wrongWords;
}