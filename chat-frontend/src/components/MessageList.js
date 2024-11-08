import React from 'react';

const MessageList = ({ messages }) => (
  <div className="message-list">
    {messages.map((msg, index) => (
      <div key={index}>
        <strong>{msg.username || 'System'}:</strong> {msg.msg}
      </div>
    ))}
  </div>
);

export default MessageList;
