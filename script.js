document.addEventListener("DOMContentLoaded", function () {
    updateParagraphOptions(); // पेज लोड होते ही पैराग्राफ लोड होगा

    document.getElementById("languageSelect").addEventListener("change", updateParagraphOptions);
    document.getElementById("paragraphSelect").addEventListener("change", updateParagraphText);
    document.getElementById("wordCountSelect").addEventListener("change", updateParagraphText);
    document.getElementById("timeSelect").addEventListener("change", updateTimerDisplay);
});

const englishParagraphs = [
    "Time management is the key to success in every aspect of life. It helps individuals prioritize tasks and use time efficiently.",
    "Positive thinking is a powerful tool that enhances mental health and overall well-being. A positive mindset leads to better outcomes in life.",
    "Technology has revolutionized education by making information easily accessible. Online learning platforms provide flexibility for students.",
    "Regular exercise is essential for maintaining good health. It strengthens muscles, improves cardiovascular fitness, and boosts mental well-being.",
    "Climate change is one of the biggest challenges of our time. Global efforts are needed to reduce carbon emissions and protect our planet.",
    "Mental health awareness is growing worldwide. It is important to take care of emotional well-being and seek support when needed.",
    "Social media plays a significant role in modern communication. It connects people, spreads awareness, and influences opinions.",
    "Artificial Intelligence is transforming industries like healthcare and finance. AI-powered solutions improve efficiency and decision-making.",
    "Reading books enhances vocabulary, critical thinking, and creativity. It is a great way to acquire knowledge and expand imagination.",
    "Friendship is one of the most valuable relationships. Good friends provide emotional support, happiness, and a sense of belonging."
];

const hindiParagraphs = [
    "समय प्रबंधन सफलता की कुंजी है। यह व्यक्ति को कार्यों को प्राथमिकता देने और समय का सही उपयोग करने में मदद करता है।",
    "सकारात्मक सोच मानसिक स्वास्थ्य और समग्र कल्याण को बढ़ावा देती है। सकारात्मक दृष्टिकोण जीवन में बेहतर परिणाम लाता है।",
    "तकनीक ने शिक्षा को क्रांतिकारी बना दिया है। ऑनलाइन शिक्षण प्लेटफॉर्म छात्रों को लचीलापन प्रदान करते हैं।",
    "नियमित व्यायाम अच्छे स्वास्थ्य के लिए आवश्यक है। यह मांसपेशियों को मजबूत करता है, हृदय स्वास्थ्य सुधारता है और मानसिक संतुलन बनाए रखता है।",
    "जलवायु परिवर्तन हमारे समय की सबसे बड़ी चुनौतियों में से एक है। पर्यावरण की रक्षा के लिए वैश्विक प्रयास आवश्यक हैं।",
    "मानसिक स्वास्थ्य जागरूकता दुनिया भर में बढ़ रही है। भावनात्मक कल्याण का ध्यान रखना और आवश्यकता पड़ने पर सहायता लेना महत्वपूर्ण है।",
    "सोशल मीडिया आधुनिक संचार में महत्वपूर्ण भूमिका निभाता है। यह लोगों को जोड़ता है, जागरूकता फैलाता है और विचारों को प्रभावित करता है।",
    "कृत्रिम बुद्धिमत्ता स्वास्थ्य और वित्त जैसे उद्योगों को बदल रही है। एआई-आधारित समाधान दक्षता और निर्णय लेने में सुधार करते हैं।",
    "पढ़ने से शब्दावली, आलोचनात्मक सोच और रचनात्मकता में वृद्धि होती है। यह ज्ञान प्राप्त करने और कल्पना का विस्तार करने का एक शानदार तरीका है।",
    "मित्रता सबसे मूल्यवान संबंधों में से एक है। अच्छे दोस्त भावनात्मक समर्थन, खुशी और एकता की भावना प्रदान करते हैं।"
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

    // ✅ पहले पैराग्राफ को डिफॉल्ट सेलेक्ट करें
    paragraphSelect.value = "0";  
    updateParagraphText(); // पैराग्राफ दिखाएं
}

function updateParagraphText() {
    let language = document.getElementById("languageSelect").value;
    let selectedParagraphIndex = document.getElementById("paragraphSelect").value;
    let wordLimit = parseInt(document.getElementById("wordCountSelect").value);

    let paragraphs = (language === "hindi") ? hindiParagraphs : englishParagraphs;
    let selectedParagraph = paragraphs[selectedParagraphIndex] || "";

    let wordsArray = selectedParagraph.split(" ").slice(0, wordLimit);
    document.getElementById("paragraph").innerText = wordsArray.join(" ");
}

function updateTimerDisplay() {
    let selectedTime = parseInt(document.getElementById("timeSelect").value);
    document.getElementById("timer").innerText = selectedTime + " Minutes";
}

// ✅ पेज लोड होने के तुरंत बाद पैराग्राफ दिखाएं
updateParagraphOptions();