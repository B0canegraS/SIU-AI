document.getElementById('send-button').addEventListener('click', function () {
    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    if (userInput.trim() !== "") {
        const userMessage = document.createElement('div');
        userMessage.textContent = `Has preguntado: "${userInput}"`;
        chatBox.appendChild(userMessage);

        const aiResponse = document.createElement('div');
        aiResponse.textContent = "Esta es una respuesta genérica de Savio AI.";
        chatBox.appendChild(aiResponse);

        document.getElementById('user-input').value = ""; // Limpiar el campo de entrada
        chatBox.scrollTop = chatBox.scrollHeight; // Desplazarse hacia abajo
    }
});

document.getElementById('clear-button').addEventListener('click', function () {
    document.getElementById('chat-box').innerHTML = ""; // Limpiar el chat
});
