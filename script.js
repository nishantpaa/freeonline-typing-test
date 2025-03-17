const paragraphs = [
    "यह पहला पैराग्राफ है, जिसे आप टाइप कर सकते हैं।",
    "दूसरा पैराग्राफ भी यहाँ जोड़ा गया है ताकि आप अभ्यास कर सकें।",
    "तीसरा पैराग्राफ भी टाइपिंग टेस्ट के लिए उपलब्ध है।"
];

function startTest() {
    console.log("Typing test started!");  
    alert("Typing Test Started!");

    // एक रैंडम पैराग्राफ दिखाओ
    let randomIndex = Math.floor(Math.random() * paragraphs.length);
    document.getElementById("paragraph-display").innerText = paragraphs[randomIndex];
}

function stopTest() {
    console.log("Typing test stopped!");
    alert("Typing Test Stopped!");
}