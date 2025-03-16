const paragraphs = [
    "Time management is the key to success in every aspect of life. People who manage their time efficiently tend to achieve more and feel less stressed. It allows individuals to prioritize tasks and complete them in a systematic manner. Without proper time management, tasks pile up, leading to stress and decreased productivity. Successful individuals often plan their days in advance, allocating specific time slots for each task...",
    "Positive thinking is a mindset that leads to success, happiness, and better health. It helps individuals overcome challenges and view problems as opportunities. Studies show that people with a positive attitude tend to live longer and healthier lives. They cope with stress better and are more resilient in difficult situations. A positive outlook boosts self-confidence and encourages proactive behavior...",
    "Technology has revolutionized education, making learning more accessible and engaging. With the advent of digital tools, students can now access vast amounts of information with just a few clicks. Online courses and e-learning platforms have made it possible for anyone to learn from anywhere...",
    "Regular exercise is essential for maintaining good health and overall well-being. It helps in controlling weight, reducing the risk of chronic diseases, and improving mental health. Physical activities such as jogging, cycling, and swimming strengthen muscles and boost endurance...",
    "Climate change is a pressing global issue that affects every aspect of life on Earth. Rising temperatures, melting glaciers, and unpredictable weather patterns are major consequences. Human activities such as deforestation, burning fossil fuels, and industrialization contribute to climate change...",
    "Mental health is as important as physical health, yet it is often overlooked. Stress, anxiety, and depression are common mental health issues affecting millions worldwide. A balanced lifestyle, including proper sleep, exercise, and social interactions, promotes mental well-being...",
    "Social media has transformed communication and information sharing. It connects people across the globe, allowing instant interactions. Platforms like Facebook, Twitter, and Instagram shape public opinion and trends...",
    "Artificial Intelligence (AI) is revolutionizing industries, from healthcare to finance. AI-powered robots and automation enhance efficiency and reduce human workload. Machine learning algorithms analyze data and make predictions with high accuracy...",
    "Reading enhances knowledge, improves vocabulary, and stimulates imagination. It helps in developing critical thinking and analytical skills. Books provide insights into different cultures, histories, and perspectives...",
    "Friendship is one of the most valuable relationships in life. True friends offer support, encouragement, and companionship. Strong friendships improve mental well-being and provide emotional stability..."
];

let timer = 60;
let interval;
let correctWords = 0;
let wrongWords = 0;

function startTest() {
    let selectedParagraphIndex = document.getElementById("paragraphSelect").value;
    let selectedParagraph = paragraphs[selectedParagraphIndex];

    document.getElementById("paragraph").innerText = selectedParagraph;
    document.getElementById("typingArea").value = "";
    document.getElementById("typingArea").disabled = false;
    document.getElementById("typingArea").focus();

    timer = 60;
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