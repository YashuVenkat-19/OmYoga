import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
// import dotenv from "dotenv";

// dotenv.config(); // Load environment variables from .env file

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([
    { role: "incoming", content: "Hi there 👋\nHow can I help you today?" },
  ]);
  const [showChatbot, setShowChatbot] = useState(false);

  const genAI = new GoogleGenerativeAI(
    "AIzaSyCard3eJRc6RODYmrJr5fnceRn2FklhXH8"
  );

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = async () => {
    if (!userMessage.trim()) return;

    // Add user's message to the chat
    setMessages([
      ...messages,
      { role: "outgoing", content: userMessage.trim() },
    ]);

    // Generate response
    const response = await generateResponse(userMessage.trim());

    // Add response to the chat
    setMessages([...messages, { role: "incoming", content: response }]);

    // Clear user input
    setUserMessage("");
  };

  const generateResponse = async (input) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = input;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    return text;
  };

  return (
    <div className="chatbot-container">
      {/* Chatbot toggler button */}
      <button
        className="chatbot-toggler bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 text-white rounded-full h-12 w-12 flex items-center justify-center"
        onClick={toggleChatbot}
      >
        <span
          style={{ width: "80px", fontSize: "15px" }}
          className="material-symbols-rounded"
        >
          Chat
        </span>
        <span className="material-symbols-outlined">close</span>
      </button>

      {/* Chatbot window */}
      {showChatbot && (
        <div
          className={`chatbot fixed right-0 bottom-0 w-96 bg-white rounded-lg overflow-hidden ${
            showChatbot
              ? "opacity-100 pointer-events-auto transform scale-100 transition-all duration-100 ease-in"
              : "opacity-0 pointer-events-none transform scale-90"
          }`}
        >
          <div className="text-white bg-green-500 py-4 px-0 flex justify-around relative">
            <h2 className="text-2xl font-semibold">Chatbot</h2>
            <p
              onClick={toggleChatbot}
              className="text-white absolute right-4 cursor-pointer"
            >
              ❌
            </p>
          </div>
          <ul className="chatbox overflow-auto h-96 p-8 pb-20">
            {messages.map((msg, index) => (
              <li key={index} className={`chat ${msg.role}`}>
                {msg.role === "incoming" && (
                  <span className="material-symbols-outlined">smart_toy</span>
                )}
                <p className="bg-green-500 text-white rounded-xl px-4 py-3 inline-block break-words">
                  {msg.content}
                </p>
              </li>
            ))}
          </ul>
          <div className="chat-input flex items-center justify-between px-4 py-2 border-t border-gray-200">
            <textarea
              className="w-full h-16 m-2 px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 resize-none"
              placeholder="Enter a message..."
              spellCheck="false"
              value={userMessage}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <span
              id="send-btn"
              style={{ color: "green" }}
              className="material-symbols-rounded pb-4 font-bold text-green-500 hover:text-green-600 cursor-pointer"
              onClick={handleSend}
            >
              Send
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
