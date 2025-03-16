document.addEventListener("DOMContentLoaded", function () {
    updateParagraphOptions(); // पेज लोड होते ही पैराग्राफ लोड होगा

    document.getElementById("languageSelect").addEventListener("change", updateParagraphOptions);
    document.getElementById("paragraphSelect").addEventListener("change", updateParagraphText);
    document.getElementById("wordCountSelect").addEventListener("change", updateParagraphText);
    document.getElementById("timeSelect").addEventListener("change", updateTimerDisplay);
});

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

function updateParagraphOptions() {
    let language = document.getElementById("languageSelect").value;
    let paragraphSelect = document.getElementById("paragraphSelect");

    paragraphSelect.innerHTML = ""; // पहले के ऑप्शन हटाएं

    let paragraphs = (language === "hindi") ? hindiParagraphs : englishParagraphs;

    paragraphs.forEach((para, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.textContent = Paragraph ${index + 1};
        paragraphSelect.appendChild(option);
    });

    paragraphSelect.value = "0"; // पहला पैराग्राफ डिफॉल्ट सेलेक्ट करें
    updateParagraphText(); // पैराग्राफ दिखाएं
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
    document.getElementById("timer").innerText = selectedTime;
}

// ✅ पेज लोड होने के तुरंत बाद पैराग्राफ दिखाए
updateParagraphOptions();