const paragraphs = {
    english: {
        200: "This is a sample English paragraph with 200 words...",
        300: "This is a sample English paragraph with 300 words...",
        500: "This is a sample English paragraph with 500 words..."
    },
    hindi: {
        200: "यह 200 शब्दों का हिंदी पैराग्राफ है।",
        300: "यह 300 शब्दों का हिंदी पैराग्राफ है।",
        500: "यह 500 शब्दों का हिंदी पैराग्राफ है।"
    }
};

function loadParagraph() {
    let language = document.getElementById("languageSelect").value;
    let wordCount = document.getElementById("wordCountSelect").value;
    let paragraphElement = document.getElementById("paragraph");

    if (paragraphs[language] && paragraphs[language][wordCount]) {
        paragraphElement.textContent = paragraphs[language][wordCount];
    } else {
        paragraphElement.textContent = "Paragraph not found!";
    }
}

let startTime;
function startTest() {
    startTime = new Date();
    document.getElementById("typingArea").addEventListener("input", checkTyping);
}

function checkTyping() {
    let typedText = document.getElementById("typingArea").value;
    let originalText = document.getElementById("paragraph").textContent;
    let typedWords = typedText.split(" ");
    let originalWords = originalText.split(" ");

    let correctCount = 0, wrongCount = 0;
    for (let i = 0; i < typedWords.length; i++) {
        if (typedWords[i] === originalWords[i]) {
            correctCount++;
        } else {
            wrongCount++;
        }
    }

    let elapsedTime = (new Date() - startTime) / 1000 / 60;
    let wpm = Math.round((correctCount / elapsedTime) || 0);

    document.getElementById("result").textContent = WPM: ${wpm} | Correct: ${correctCount} | Wrong: ${wrongCount};
}