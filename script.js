// हिंदी और इंग्लिश पैराग्राफ स्टोर करना
let typingText = {
    "hindi": [
        "यह एक हिंदी टाइपिंग टेस्ट का नमूना है। इसे ध्यानपूर्वक पढ़ें और टाइप करें।",
        "भारत एक महान देश है। इसकी संस्कृति बहुत प्राचीन और समृद्ध है।",
        "स्वस्थ जीवन के लिए योग और व्यायाम बहुत जरूरी होते हैं।"
    ],
    "english": [
        "This is a sample English typing test. Read carefully and type.",
        "India is a great country. Its culture is ancient and rich.",
        "Yoga and exercise are very important for a healthy life."
    ]
};

// ग्लोबल वेरिएबल्स
let timer;
let timeLeft;

// जब यूजर "Start" बटन दबाए तो पैराग्राफ दिखे और टाइमर शुरू हो
function startTypingTest() {
    let selectedLang = document.getElementById("language").value;
    let selectedTime = document.getElementById("time").value;

    // अगर भाषा का डाटा नहीं मिला
    if (!typingText[selectedLang]) {
        console.error("Error: Language data not found!");
        return;
    }

    // रैंडम पैराग्राफ चुनना
    let randomIndex = Math.floor(Math.random() * typingText[selectedLang].length);
    let paragraph = typingText[selectedLang][randomIndex];

    // पैराग्राफ को स्क्रीन पर दिखाना
    document.getElementById("typing-text").innerText = paragraph;
    document.getElementById("typing-area").value = ""; // पहले से लिखा हुआ टेक्स्ट हटाएं

    // टाइमर सेट करना
    timeLeft = selectedTime * 60; // मिनट से सेकंड में बदलना
    updateTimerDisplay(); // तुरंत टाइमर अपडेट करें
    clearInterval(timer); // अगर पहले से कोई टाइमर चल रहा है, तो उसे रोकें
    timer = setInterval(countdown, 1000); // हर 1 सेकंड में countdown() को कॉल करें
}

// टाइमर को अपडेट करना
function countdown() {
    if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplay();
    } else {
        clearInterval(timer);
        alert("⏳ Time Over! आपका टाइपिंग टेस्ट खत्म हुआ।");
    }
}

// टाइमर डिस्प्ले को अपडेट करना
function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("timer").innerText = ⏳ समय बाकी: ${minutes}:${seconds < 10 ? '0' : ''}${seconds};
}