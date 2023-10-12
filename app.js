// JavaScript (app.js)

const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const startButton = document.getElementById('startButton');
const hangupButton = document.getElementById('hangupButton');

let localStream;
let remoteStream;
let peerConnection;

startButton.addEventListener('click', startVideoChat);
hangupButton.addEventListener('click', hangUp);

// Function to start the video chat
async function startVideoChat() {
    try {
        // Access the local camera and microphone
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;

        // Create a peer connection
        peerConnection = new RTCPeerConnection();

        // Add the local stream to the peer connection
        localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));

        // Set up event handlers for the peer connection
        peerConnection.ontrack = handleRemoteStream;

        // Create an offer and set it as the local description
        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);

        // Simulate signaling by sending the offer to the other peer
        const offerData = JSON.stringify(offer);
        // Send offerData to the other peer (you'll need signaling server for this in a real application)

    } catch (error) {
        console.error('Error starting the video chat:', error);
    }
}

// Function to handle incoming remote stream
function handleRemoteStream(event) {
    remoteStream = event.streams[0];
    remoteVideo.srcObject = remoteStream;
}

// Function to hang up the video chat
function hangUp() {
    localStream.getTracks().forEach(track => track.stop());
    if (peerConnection) {
        peerConnection.close();
    }
    localVideo.srcObject = null;
    remoteVideo.srcObject = null;
}

// You will need signaling server to exchange SDPs and ICE candidates with the other peer
