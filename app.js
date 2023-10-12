const camera1 = document.getElementById('camera1');
const camera2 = document.getElementById('camera2');
const camera3 = document.getElementById('camera3');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

let stream1;
let stream2;
let stream3;

startButton.addEventListener('click', startCameras);
stopButton.addEventListener('click', stopCameras);

async function startCameras() {
    try {
        stream1 = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        stream2 = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        stream3 = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

        camera1.srcObject = stream1;
        camera2.srcObject = stream2;
        camera3.srcObject = stream3;
    } catch (error) {
        console.error('Error starting cameras:', error);
    }
}

function stopCameras() {
    if (stream1) {
        stream1.getTracks().forEach(track => track.stop());
        camera1.srcObject = null;
    }
    if (stream2) {
        stream2.getTracks().forEach(track => track.stop());
        camera2.srcObject = null;
    }
    if (stream3) {
        stream3.getTracks().forEach(track => track.stop());
        camera3.srcObject = null;
    }
}
