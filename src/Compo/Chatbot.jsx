import React, { useState } from 'react';
import { FaTelegramPlane } from "react-icons/fa";
import '../styling/RaiseIssuePopup.css';
import botImg from "../assets/Ellipse.png"
const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sentByMe: true }]);
      setInput('');
    }
  };

  return (
    <div className='chatBot-container'>
      <header className='chat-header'>
        <img src={botImg} alt="bot img" />
        Hubly Bot
        </header>

      <div className='messages'>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sentByMe ? 'sent' : 'received'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className='input-area'>
        <input
          type='text'
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder='Type your message...'
        />
        <button onClick={sendMessage}>
  <FaTelegramPlane size={18} />
</button>

      </div>
    </div>
  );
};

export default Chatbot;