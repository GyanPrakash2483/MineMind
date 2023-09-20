// Get references to HTML elements
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const chatMessages = document.getElementById("chat-messages");

// Function to add a user message to the chat
function addUserMessage(message) {
    const userMessageDiv = document.createElement("div");
    userMessageDiv.className = "user-message";
    userMessageDiv.textContent = message;
    chatMessages.appendChild(userMessageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to add a chatbot message to the chat
function addChatbotMessage(message) {
    const chatbotMessageDiv = document.createElement("div");
    chatbotMessageDiv.className = "chatbot-message";
    chatbotMessageDiv.textContent = message;
    chatMessages.appendChild(chatbotMessageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Event listener for sending a message
sendButton.addEventListener("click", function () {
    const userMessage = userInput.value.trim();
    if (userMessage !== "") {
        addUserMessage(userMessage);
        // Simulate a chatbot response (you can replace this with actual chatbot logic)
            getChatbotReply(userMessage).then((res) => {
                addChatbotMessage(res);
            });
                
        userInput.value = "";
    }
});

// Event listener for pressing Enter key
userInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        sendButton.click();
    }
});
