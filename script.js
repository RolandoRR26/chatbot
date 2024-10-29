
const responses = {
    'hola': '¡Hola! ¿Cómo estás?',
    'adios': '¡Adiós! Que tengas un buen día.',
    'como estas': 'Estoy bien, gracias por preguntar.',
    'que puedes hacer': 'Puedo responder a tus preguntas básicas.'
};

const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatbox = document.getElementById('chatbox');

sendBtn.addEventListener('click', () => {
    const userText = userInput.value.toLowerCase().trim();
    if (userText) {
        addMessage(userText, 'user');
        generateResponse(userText);
        userInput.value = '';
    }
});

function addMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}`;
    messageElement.innerText = text;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function generateResponse(userText) {
    const botResponse = responses[userText] || 'Lo siento, no entiendo esa pregunta.';
    setTimeout(() => addMessage(botResponse, 'bot'), 500);  //pequeño delay para simular que piensa 
}
