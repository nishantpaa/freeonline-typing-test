const paragraphs = {
    english: [
        "The quick brown fox jumps over the lazy dog.",
        "Practice makes perfect. Keep typing daily."
    ],
    hindi: [
        "कृपया ध्यान दें कि टाइपिंग अभ्यास बहुत ज़रूरी है।",
        "अगर आप तेज़ टाइप करना चाहते हैं तो रोज़ अभ्यास करें।"
    ]
};

function startTest() {
    let language = document.getElementById("language").value;
    let time = parseInt(document.getElementById("time").value) * 60; // Convert minutes to seconds

    let randomParagraph = paragraphs[language][Math.floor(Math.random() * paragraphs[language].length)];
    document.getElementById("paragraph").innerText = randomParagraph;

    let typingArea = document.getElementById("typing-area");
    typingArea.value = "";
    typingArea.focus();

    let timer = setInterval(() => {
        if (time > 0) {
            time--;
        } else {
            clearInterval(timer);
            calculateResults(randomParagraph);
        }
    }, 1000);
}

function calculateResults(originalText) {
    let typedText = document.getElementById("typing-area").value.trim();
    let wordsTyped = typedText.split(" ").length;
    
    document.getElementById("result").innerHTML = `
        <p>Words Per Minute (WPM): ${wordsTyped}</p>
    `;
}