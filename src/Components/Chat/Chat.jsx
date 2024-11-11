import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Function to simulate a response from the chatbot
  const generateResponse = (userMessage) => {
    const botResponses = [
      "Hello! How can I help you today?",
      "Certainly! As of recent studies, Instagram often has the highest engagement rates among major platforms, especially for brands. With its emphasis on visual content and features like Stories and Reels, users tend to interact more with posts. TikTok also shows high engagement rates, especially for video content targeting younger audiences!",
      "I'm here to assist you with any questions!",
      "Total engagements (likes, comments, shares) divided by your total followers. This shows how active your audience is.",
      "Reach shows how many unique users saw your post, while impressions count total views. High reach indicates good visibility.",
      "For posts with links, CTR reveals how many users clicked, which helps measure interest.",

      "Let me know if you need any help.",
      "Facebook: Still widely used, especially for older demographics and global connectivity.",
      "Instagram: Popular among younger users, with a focus on visuals and short-form content.",
      "LinkedIn: Ideal for professional networking and B2B marketing.",
      "If your post aims to drive sales or sign-ups, conversion rate is key—it’s the percentage of people who took the intended action."
    ];
    const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
    return randomResponse;
  };

  // Handle user submitting a message
  const handleSend = () => {
    if (input.trim() === '') return;

    // User message
    const newMessage = { text: input, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInput('');

    // Simulate bot response with delay
    setTimeout(() => {
      const botMessage = { text: generateResponse(input), sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <h1>AI Chatbot</h1>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
