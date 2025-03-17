// Paragraphs (Hindi & English)
const paragraphs = {
    english: [
        "The quick brown fox jumps over the lazy dog.",
        "Practice makes perfect. Keep typing daily.",
        "Typing speed is important for productivity.",
        "Consistent practice improves typing accuracy."
    ],
    hindi: [
        "कृपया ध्यान दें कि टाइपिंग अभ्यास बहुत ज़रूरी है।",
        "अगर आप तेज़ टाइप करना चाहते हैं तो रोज़ अभ्यास करें।",
        "टाइपिंग की गति और सटीकता बढ़ाने के लिए अभ्यास ज़रूरी है।",
        "नियमित अभ्यास से टाइपिंग में सुधार आता है।"
    ]
};

// Function to Start Typing Test
function startTest() {
    let language = document.getElementById("language").value;
    let time = parseInt(document.getElementById("time").value) * 60; // Convert minutes to seconds

    // Select a random paragraph
    let randomParagraph = paragraphs[language][Math.floor(Math.random() * paragraphs[language].length)];
    document.getElementById("paragraph").innerText = randomParagraph;

    let typingArea = document.getElementById("typing-area");
    typingArea.value = "";
    typingArea.focus();

    // Timer Function
    let timer = setInterval(() => {
        if (time > 0) {
            time--;
        } else {
            clearInterval(timer);
            calculateResults(randomParagraph);
        }
    }, 1000);
}

// Function to Calculate Typing Speed & Accuracy
function calculateResults(originalText) {
    let typedText = document.getElementById("typing-area").value.trim();
    let wordsTyped = typedText.split(" ").length;
    let correctWords = typedText.split(" ").filter(word => originalText.includes(word)).length;
    
    document.getElementById("result").innerHTML = `
        <p>Words Per Minute (WPM): ${wordsTyped}</p>
        <p>Correct Words: ${correctWords}</p>
    `;
}