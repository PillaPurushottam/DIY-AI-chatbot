document.addEventListener("DOMContentLoaded", function () {
    console.log("Chatbot page loaded successfully!");

    // Ensure the chatbot is fully loaded before displaying
    const chatbotFrame = document.getElementById("chatbot");
    chatbotFrame.onload = function () {
        console.log("Chatbot is ready!");
    };
});
