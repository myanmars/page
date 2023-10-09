<!DOCTYPE html>
<html>
<head>
    <title>Typing Practice Test</title>
    <style>
        body {background-color: lightblue;
            font-family: Arial, sans-serif;
            text-align: center;
        }

        #typing-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 30px;
            border: 2px solid green;
            background-color: #f7f7f7;
        }

        #sentence {
            font-size: 24px;
            margin-bottom: 20px;
        }

        #input-field {
            font-size: 18px;
            padding: 10px;
            width: 90%;
        }

        #feedback {
            font-size: 18px;
            margin-top: 10px;
            color: green;
        }
h1{background-color: yellow;}
p{color: red;}
h3{text-align: right;}
    </style>
</head>
<body>
    <h1>အောင်လံကုန်း ကွန်ပျူတာသင်တန်း</h1>
    <div id="typing-container">
        <div id="sentence"></div>
        <input type="text" id="input-field" oninput="checkTyping()">
        <div id="feedback"></div>
    </div><br><br>
<h2>အထက်ပါ ဖော်ပြထားသော စာကြောင်းအတိုင်း လိုက်ရိုက်၍ လေ့ကျင့်ရမည်။</h2><br><br><br><br>
<h3> ဤ လက်ကွက် software ကို<br> အရှင်ပညာသိရီ(အောင်လံကုန်း)က ဖန်တီးသည်...</h3>
    <script>
        const sentences = [
"က ခ ဂ ဃ င စ ဆ ဇ ဈ ည ဋ ဌ ဍ ဎ ဏ",
"တ ထ ဒ ဓ န ပ ဖ ဗ ဘ မ ယ ရ လ ဝ သ ဟ ဠ အ",
            "A b C d E f G h I j K l M n O p Q r S t U v W x Y z",
"a B c D e F g H i J k L m N o P q R s T u V w X y Z",
            "က္က က္ခ ကက္ခ စ္ဆ ဇ္ဈ ည",
            "Aunglangon Computer Class opened by U Zinn Pannasiri.",
            "က္က က္ခ ကက္ခ စ္ဆ ဇ္ဈ ည တ တ္ထ ဒ္ဓ နန္ဒ ပ္ဖ မ္မ ဋ+ဌ = ဋ္ဌ၊ ပဋ္ဌာန",
 "This Typing Practice Test created by U Zinn Panna (Programming Master).",
"သင့်လေ့ကျင့်သော လက်ကွက်သည် အမှတ်ပြည့်မီခြင်းသို့ ရောက်ရှိသည်။",
"ရွှေဟင်္သာပိဋကတ်စာကြည့်တိုက်နှင့် သုတေသနဌာန",
        ];

        let currentSentenceIndex = 0;
        let startTime;
        let typingErrors = 0;

        function getRandomSentence() {
            return sentences[Math.floor(Math.random() * sentences.length)];
        }

        function startTypingTest() {
            currentSentenceIndex = 0;
            typingErrors = 0;
            document.getElementById("input-field").value = "";
            displaySentence();
        }

        function displaySentence() {
            document.getElementById("sentence").textContent = sentences[currentSentenceIndex];
            startTime = new Date();
        }

        function checkTyping() {
            const inputText = document.getElementById("input-field").value;
            const originalText = sentences[currentSentenceIndex];

            if (inputText === originalText) {
                const endTime = new Date();
                const elapsedTime = (endTime - startTime) / 1000; // in seconds
                const wordsTyped = inputText.split(" ").filter(Boolean).length;
                const typingSpeed = Math.round((wordsTyped / elapsedTime) * 60); // words per minute
                document.getElementById("feedback").textContent = `Typing Speed: ${typingSpeed} WPM`;
                currentSentenceIndex++;

                if (currentSentenceIndex < sentences.length) {
                    displaySentence();
                } else {
                    document.getElementById("sentence").textContent = "Typing test completed!";
                }
            } else {
                typingErrors++;
            }
        }

        startTypingTest(); // Start the typing test when the page loads
    </script>
</body>
</html>
