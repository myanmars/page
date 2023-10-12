// JavaScript (app.js)

// Function to send a chat message
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value;
    chatInput.value = ''; // Clear the input field

    // Display the message in the chat box
    const chatMessages = document.getElementById('chatMessages');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
}

// Set up event listener for the "Send" button
const sendButton = document.getElementById('sendButton');
sendButton.addEventListener('click', sendMessage);

// Function to start video streaming
function startVideo() {
    // Access the local camera and microphone using WebRTC
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(function (stream) {
            const localVideo = document.getElementById('localVideo');
            localVideo.srcObject = stream;
        })
        .catch(function (error) {
            console.error('Error accessing camera and microphone:', error);
        });
}

// Set up event listener for the "Start Video" button (if you have one)
const startVideoButton = document.getElementById('startVideoButton');
startVideoButton.addEventListener('click', startVideo);
