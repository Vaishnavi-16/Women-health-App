import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

const Chatroom = () => {
  const [messages, setMessages] = useState([
    {
      user: 'User 1',
      message: "Hey, how's it going?",
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      user: 'User 2',
      message: "I'm doing well, thanks for asking! How about you?",
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      user: 'User 3',
      message: "I'm doing great, thanks! Just chatting with some friends.",
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
  ]);

  const sendMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="flex h-screen w-screen bg-gray-300">
      <div className="w-1/4 bg-gray-500 p-4">
        <h2 className="text-2xl font-bold text-white">Users</h2>
        <div className="my-4">
          <UserList />
        </div>
      </div>
      <div className="w-3/4 bg-white p-4">
        <h2 className="text-2xl font-bold mb-4">Chat</h2>
        <div className="overflow-y-scroll h-[80%] ">
          <MessageList messages={messages} />
        </div>
        <MessageForm sendMessage={sendMessage} />
      </div>
    </div>
  );
};
const UserList = () => {
  return (
    <>
      <div className="flex items-center mb-2">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="User 1"
          className="w-10 h-10 rounded-full mr-2 shadow-lg"
        />
        <span className="text-white font-bold text-xl leading-none">User 1</span>
      </div>
      <div className="flex items-center mb-2">
        <img
          src="https://randomuser.me/api/portraits/women/1.jpg"
          alt="User 2"
          className="w-10 h-10 rounded-full mr-2 shadow-lg"
        />
        <span className="text-white font-bold text-xl leading-none">User 2</span>
      </div>
      <div className="flex items-center mb-2">
        <img
          src="https://randomuser.me/api/portraits/men/2.jpg"
          alt="User 3"
          className="w-10 h-10 rounded-full mr-2 shadow-lg"
        />
        <span className="text-white font-bold text-xl leading-none">User 3</span>
      </div>
    </>
  );
};
const MessageList = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="h-full overflow-y-scroll">
      {messages.map((message) => (
        <div className="flex items-start mb-4">
          <img src={message.avatar} alt={message.user} className="w-10 h-10 rounded-full mr-2" />
          <div className="bg-gray-300 rounded p-2">
            <p className="text-gray-700 font-bold text-lg">{message.user}</p>
            <p className="text-gray-600 text-sm">{message.message}</p>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

const MessageForm = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage({
      user: 'User 4',
      message: message,
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    });
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2 absolute bottom-0 w-[70%]">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 rounded w-full focus:outline-none"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2 focus:outline-none">
        Send
      </button>
    </form>
  );
};



export default Chatroom;


