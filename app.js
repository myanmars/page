const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const startButton = document.getElementById('startButton');
const hangupButton = document.getElementById('hangupButton');

let localStream;
let remoteStream;
let pc;

startButton.addEventListener('click', startVideoChat);
hangupButton.addEventListener('click', hangUp);

async function startVideoChat() {
    try {
        localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.srcObject = localStream;

        pc = new RTCPeerConnection();

        localStream.getTracks().forEach(track => pc.addTrack(track, localStream));

        pc.ontrack = event => {
            remoteStream = event.streams[0];
            remoteVideo.srcObject = remoteStream;
        };

        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);

        // Send the offer to the other user, e.g., using a signaling server

        // Handle the answer from the other user and set it as the remote description

    } catch (error) {
        console.error('Error starting video chat:', error);
    }
}

function hangUp() {
    pc.close();
    localVideo.srcObject = null;
    remoteVideo.srcObject = null;
}
