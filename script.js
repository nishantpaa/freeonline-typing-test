let timer;
let timeLeft;
let correctWords = 0;
let wrongWords = 0;
let originalText = "";

// हिंदी और अंग्रेज़ी पैराग्राफ्स
const paragraphs = {
    english: {
        200: "This is a sample English typing test paragraph with 200 words. Type accurately and check your speed.",
        300: "This is a longer English typing test paragraph containing around 300 words. Try to type quickly and without mistakes.",
        500: "This is a much longer English paragraph for a 500-word typing test. Focus on accuracy and speed to improve your skills."
    },
    hindi: {
        200: "यह 200 शब्दों का हिंदी टाइपिंग टेस्ट का उदाहरण है। ध्यानपूर्वक टाइप करें और अपनी स्पीड जांचें।",
        300: "यह 300 शब्दों का हिंदी टाइपिंग टेस्ट का उदाहरण है। तेजी से और सही तरीके से टाइप करें।",
        500: "यह 500 शब्दों का विस्तृत हिंदी टाइपिंग टेस्ट है। अपनी टाइपिंग दक्षता को बढ़ाने के लिए इसे ध्यान से टाइप करें।"
    }
};

// पैराग्राफ लोड करने का फंक्शन
function loadParagraph() {
    let language = document.getElementById("languageSelect").value;
    let wordCount = document.getElementById("wordCountSelect").value;
    originalText = paragraphs[language][wordCount];
    document.getElementById("paragraph").textContent = originalText;
}

// टेस्ट शुरू करने का फंक्शन
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

// टाइमर अपडेट करने का फंक्शन
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

// टाइपिंग चेक करने का फंक्शन
function checkTyping() {
    let inputText = document.getElementById("typingArea").value;
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