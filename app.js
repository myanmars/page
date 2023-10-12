const localVideo = document.getElementById('localVideo');
const remoteVideo1 = document.getElementById('remoteVideo1');
const remoteVideo2 = document.getElementById('remoteVideo2');
const remoteVideo3 = document.getElementById('remoteVideo3');
const remoteVideo4 = document.getElementById('remoteVideo4');
const remoteVideo5 = document.getElementById('remoteVideo5');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const shareScreenButton = document.getElementById('shareScreenButton');

let localStream;
let remoteStream1;
let remoteStream2;
let remoteStream3;
let remoteStream4;
let remoteStream5;

startButton.addEventListener('click', startVideo);
stopButton.addEventListener('click', stopVideo);
shareScreenButton.addEventListener('click', shareScreen);

async function startVideo() {
    try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;
    } catch (error) {
        console.error('Error starting video:', error);
    }
}

function stopVideo() {
    localStream.getTracks().forEach(track => track.stop());
    localVideo.srcObject = null;
}

async function shareScreen() {
    try {
        const screenStream = await navigator.mediaDevices.getDisplayMedia();
        localVideo.srcObject = screenStream;
    } catch (error) {
        console.error('Error sharing screen:', error);
    }
}
