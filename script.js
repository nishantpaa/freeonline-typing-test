[11:40 AM, 3/15/2025] panwarnishant63: // हिंदी और अंग्रेजी के पैराग्राफ स्टोर करना
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

let timer;
let timeLeft = 0;
let totalWords = 0;

// जब यूजर "स्टार्ट" बटन दबाए तो टेस्ट शुरू हो
function startTypingTest() {
    let selectedLang = document.getElementById("language").value;
    let selectedTime = parseInt(document.getElementById("time-limit").value);

    // रैंडम पैराग्राफ चुनना
    let randomIndex = Math.floor(Math.random() * typingText[selectedLang].length);
    document.getElementById("typing-text").innerText = typingText[selectedLang][randomIndex];

    document.getElementById("typing-area").value = "";
    document.getElementById("speed").innerText = "0";

    timeLeft = selectedTime * 60;  // मिनट को सेकंड में बदलना
    document.getElementById("timer").innerText = timeLeft;

    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

// टाइमर को हर सेकंड अपडेट करना
function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;
    } else {
        clearInterval(timer);
        calculateSpeed();
    }
}

// टाइपिंग खत्म होने पर स्पीड (WPM) कैलकुलेट करना
function calculateSpeed() {
    let typedText = document.getElementById("typing-area").value;
    totalWords = typedText.split(/\s+/).length;
    let speed = totalWords / ((timeLeft + 1) / 60); // शब्द प्रति मिनट (WPM)
    document.getElementById("speed").innerText = speed.toFixed(2);
}
[11:41 AM, 3/15/2025] panwarnishant63: // हिंदी और अंग्रेजी के पैराग्राफ स्टोर करना
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

let timer;
let timeLeft = 0;
let totalWords = 0;

// जब यूजर "स्टार्ट" बटन दबाए तो टेस्ट शुरू हो
function startTypingTest() {
    let selectedLang = document.getElementById("language").value;
    let selectedTime = parseInt(document.getElementById("time-limit").value);

    // रैंडम पैराग्राफ चुनना
    let randomIndex = Math.floor(Math.random() * typingText[selectedLang].length);
    document.getElementById("typing-text").innerText = typingText[selectedLang][randomIndex];

    document.getElementById("typing-area").value = "";
    document.getElementById("speed").innerText = "0";

    timeLeft = selectedTime * 60;  // मिनट को सेकंड में बदलना
    document.getElementById("timer").innerText = timeLeft;

    clearInterval(timer);
    timer = setInterval(updateTimer, 1000);
}

// टाइमर को हर सेकंड अपडेट करना
function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;
    } else {
        clearInterval(timer);
        calculateSpeed();
    }
}

// टाइपिंग खत्म होने पर स्पीड (WPM) कैलकुलेट करना
function calculateSpeed() {
    let typedText = document.getElementById("typing-area").value;
    totalWords = typedText.split(/\s+/).length;
    let speed = totalWords / ((timeLeft + 1) / 60); // शब्द प्रति मिनट (WPM)
    document.getElementById("speed").innerText = speed.toFixed(2);
}