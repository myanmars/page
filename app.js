// JavaScript (app.js)

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

// Set up event listener for the "Start Video" button
const startVideoButton = document.getElementById('startVideoButton');
startVideoButton.addEventListener('click', startVideo);
