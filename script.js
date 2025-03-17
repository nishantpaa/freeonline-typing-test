const paragraphs = {
    english: [
        "The quick brown fox jumps over the lazy dog.",
        "Practice makes perfect. Keep typing daily.",
        "Fast typing improves efficiency in work.",
        "Good typing skills save a lot of time.",
        "Typing is an essential skill in the modern world."
    ],
    hindi: [
        "कृपया ध्यान दें कि टाइपिंग अभ्यास बहुत ज़रूरी है।",
        "अगर आप तेज़ टाइप करना चाहते हैं तो रोज़ अभ्यास करें।",
        "टाइपिंग में स्पीड और एक्युरेसी दोनों ज़रूरी हैं।",
        "तेज़ टाइपिंग से आपके काम की गति बढ़ती है।",
        "नियमित अभ्यास से टाइपिंग में सुधार होता है।"
    ]
};

function populateParagraphs() {
    let language = document.getElementById("language").value;
    let paragraphSelect = document.getElementById("paragraph-select");
    paragraphSelect.innerHTML = "";

    paragraphs[language].forEach((text, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.text = "Paragraph " + (index + 1);
        paragraphSelect.appendChild(option);
    });
}

document.getElementById("language").addEventListener("change", populateParagraphs);
populateParagraphs();

function startTest() {
    let language = document.getElementById("language").value;
    let selectedIndex = document.getElementById("paragraph-select").value;
    let time = parseInt(document.getElementById("time").value) * 60;

    let paragraphText = paragraphs[language][selectedIndex];
    document.getElementById("paragraph").innerText = paragraphText;
    document.getElementById("typing-area").value = "";
    document.getElementById("typing-area").focus();

    document.getElementById("time-left").innerText = time;
    let timer = setInterval(() => {
        if (time > 0) {
            time--;
            document.getElementById("time-left").innerText = time;
        } else {
            clearInterval(timer);
        }
    }, 1000);
}