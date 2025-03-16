const englishParagraphs = [
    "Time management is the key to success in every aspect of life...",
    "Positive thinking is a mindset that leads to success, happiness, and better health...",
    "Technology has revolutionized education, making learning more accessible and engaging...",
    "Regular exercise is essential for maintaining good health and overall well-being...",
    "Climate change is a pressing global issue that affects every aspect of life on Earth...",
    "Mental health is as important as physical health, yet it is often overlooked...",
    "Social media has transformed communication and information sharing...",
    "Artificial Intelligence (AI) is revolutionizing industries, from healthcare to finance...",
    "Reading enhances knowledge, improves vocabulary, and stimulates imagination...",
    "Friendship is one of the most valuable relationships in life..."
];

const hindiParagraphs = [
    "समय प्रबंधन जीवन में सफलता की कुंजी है। यह हमें हमारी प्राथमिकताओं को समझने और सही निर्णय लेने में मदद करता है।",
    "सकारात्मक सोच हमें आत्मविश्वास और प्रेरणा देती है, जिससे हम जीवन में बेहतर परिणाम प्राप्त कर सकते हैं।",
    "शिक्षा में तकनीकी का योगदान अद्वितीय है। ऑनलाइन लर्निंग और डिजिटल उपकरणों ने अध्ययन को सरल बना दिया है।",
    "नियमित व्यायाम हमारे स्वास्थ्य के लिए आवश्यक है। यह न केवल शरीर को मजबूत बनाता है बल्कि मानसिक शांति भी प्रदान करता है।",
    "जलवायु परिवर्तन वर्तमान समय की एक गंभीर समस्या है। हमें पर्यावरण को बचाने के लिए जागरूकता बढ़ानी होगी।",
    "मानसिक स्वास्थ्य भी शारीरिक स्वास्थ्य जितना ही महत्वपूर्ण है। हमें अपने विचारों और भावनाओं को संतुलित रखना चाहिए।",
    "सोशल मीडिया ने संचार और सूचना साझा करने के तरीकों को बदल दिया है। यह लाभदायक भी है और हानिकारक भी।",
    "कृत्रिम बुद्धिमत्ता (AI) आज कई उद्योगों में क्रांति ला रही है, जिससे कार्यों को अधिक कुशल बनाया जा रहा है।",
    "पढ़ाई न केवल ज्ञान बढ़ाती है, बल्कि यह हमारी सोचने और कल्पना करने की शक्ति को भी विकसित करती है।",
    "मित्रता जीवन का एक अनमोल हिस्सा है। यह हमें समर्थन, खुशियां और अच्छे अनुभव प्रदान करती है।"
];

let timer;
let interval;
let correctWords = 0;
let wrongWords = 0;

function startTest() {
    let language = document.getElementById("languageSelect").value;
    let selectedParagraphIndex = document.getElementById("paragraphSelect").value;
    let wordLimit = parseInt(document.getElementById("wordCountSelect").value);
    let selectedTime = parseInt(document.getElementById("timeSelect").value);

    let selectedParagraph = (language === "hindi") ? hindiParagraphs[selectedParagraphIndex] : englishParagraphs[selectedParagraphIndex];

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