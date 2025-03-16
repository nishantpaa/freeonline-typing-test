document.addEventListener("DOMContentLoaded", function () {
    updateParagraphOptions(); 

    document.getElementById("languageSelect").addEventListener("change", updateParagraphOptions);
    document.getElementById("paragraphSelect").addEventListener("change", updateParagraphText);
    document.getElementById("wordCountSelect").addEventListener("change", updateParagraphText);
    document.getElementById("timeSelect").addEventListener("change", updateTimerDisplay);
});

const englishParagraphs = [
    "Time management is the key to success in every aspect of life...",
    "Positive thinking is a mindset that leads to success, happiness...",
    "Technology has revolutionized education, making learning accessible...",
    "Regular exercise is essential for maintaining good health and fitness...",
    "Climate change is a pressing global issue that affects everyone...",
    "Mental health is as important as physical health, yet often overlooked...",
    "Social media has transformed communication and information sharing...",
    "Artificial Intelligence (AI) is revolutionizing industries worldwide...",
    "Reading enhances knowledge, improves vocabulary, and stimulates imagination...",
    "Friendship is one of the most valuable relationships in life..."
];

const hindiParagraphs = [
    "समय प्रबंधन सफलता की कुंजी है, यह हमें सही निर्णय लेने में मदद करता है।",
    "सकारात्मक सोच हमें आत्मविश्वास देती है और हमें प्रेरित करती है।",
    "शिक्षा में तकनीकी का योगदान अद्वितीय है और इसे सरल बनाता है।",
    "नियमित व्यायाम न केवल शरीर बल्कि मानसिक शांति के लिए भी आवश्यक है।",
    "जलवायु परिवर्तन एक गंभीर समस्या है, हमें जागरूकता बढ़ानी होगी।",
    "मानसिक स्वास्थ्य को भी शारीरिक स्वास्थ्य जितना ही महत्व देना चाहिए।",
    "सोशल मीडिया ने संचार और सूचना साझा करने के तरीकों को बदल दिया है।",
    "कृत्रिम बुद्धिमत्ता कई उद्योगों में क्रांति ला रही है और कार्य सरल बना रही है।",
    "पढ़ाई न केवल ज्ञान बढ़ाती है बल्कि यह हमारी कल्पना को भी बढ़ावा देती है।",
    "मित्रता जीवन का एक अनमोल हिस्सा है, यह हमें समर्थन और खुशी प्रदान करती है।"
];

function updateParagraphOptions() {
    let language = document.getElementById("languageSelect").value;
    let paragraphSelect = document.getElementById("paragraphSelect");

    paragraphSelect.innerHTML = ""; 

    let paragraphs = (language === "hindi") ? hindiParagraphs : englishParagraphs;

    paragraphs.forEach((para, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.textContent = Paragraph ${index + 1};
        paragraphSelect.appendChild(option);
    });

    paragraphSelect.value = "0";  
    updateParagraphText();
}

function updateParagraphText() {
    let language = document.getElementById("languageSelect").value;
    let selectedParagraphIndex = parseInt(document.getElementById("paragraphSelect").value);
    let wordLimit = parseInt(document.getElementById("wordCountSelect").value);

    let paragraphs = (language === "hindi") ? hindiParagraphs : englishParagraphs;
    let selectedParagraph = paragraphs[selectedParagraphIndex] || "";

    let wordsArray = selectedParagraph.split(" ").slice(0, wordLimit);
    document.getElementById("paragraph").innerText = wordsArray.join(" ");
}

function updateTimerDisplay() {
    let selectedTime = parseInt(document.getElementById("timeSelect").value);
    document.getElementById("timer").innerText = "Time: " + selectedTime + " Minutes";
}

updateParagraphOptions();