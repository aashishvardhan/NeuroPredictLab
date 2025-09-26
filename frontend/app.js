// Stroke Prediction (Mockup, replace with API call)
function predictStroke() {
    const resultDiv = document.getElementById('predictionResult');
    const fileInput = document.getElementById('imageUpload');
    if (!fileInput.files[0]) {
        resultDiv.innerHTML = "<span style='color:red'>Please upload an image.</span>";
        return;
    }
    // Simulate API call
    setTimeout(() => {
        resultDiv.innerHTML = "<strong>Prediction:</strong> High risk of stroke detected.<br><em>(Demo result. Connect to backend for actual prediction)</em>";
    }, 1200);
}

// Simple AI Chatbot (Demo, replace with backend API)
const chatWindow = document.getElementById('chat-window');
function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (!message) return;
    chatWindow.innerHTML += `<div><b>You:</b> ${message}</div>`;
    input.value = "";

    // Simulate AI bot response
    setTimeout(() => {
        let response = "I'm your AI assistant. Please provide more details about your question.";
        if (message.toLowerCase().includes("stroke"))
            response = "Brain stroke occurs when blood flow to the brain is interrupted. Early detection and treatment are vital.";
        chatWindow.innerHTML += `<div><b>Bot:</b> ${response}</div>`;
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 900);
}