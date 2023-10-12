const camera = document.getElementById('camera');

// Check for browser support
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Access the webcam camera
    navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
            camera.srcObject = stream;
        })
        .catch(function (error) {
            console.error('Error accessing the camera:', error);
        });
} else {
    console.error('getUserMedia is not supported by this browser');
}
