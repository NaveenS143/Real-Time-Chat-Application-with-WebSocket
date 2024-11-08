import React, { useState, useEffect } from 'react';
import socket from '../socket';  // Import socket configuration
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatRoom = ({ room, messages, onNewMessage }) => {
  const [hasJoined, setHasJoined] = useState(false);

  useEffect(() => {
    if (!hasJoined) {
      socket.emit('join_room', room); // Emit join event when the component mounts
      setHasJoined(true);
    }

    // Event listener for new messages
    const handleNewMessage = (data) => {
      console.log(`Received message in room ${data.room}: ${data.msg}`);
      if (data.room === room) {
        onNewMessage(data); // Pass the data to parent component to update the message list
      }
    };

    // Listen for incoming messages
    socket.on('message', handleNewMessage);

    // Cleanup on component unmount
    return () => {
      socket.off('message', handleNewMessage);  // Remove event listener
      socket.emit('leave_room', room);  // Emit leave event when component unmounts
      setHasJoined(false);
    };
  }, [room, onNewMessage]); // Re-run the effect if room changes

  const sendMessage = (message) => {
    if (message.trim()) {
      console.log(`Sending message to room: ${room}`);
      socket.emit('send_message', { room, message, username: 'User1' }); // Emit the send message event to the backend
    }
  };

  return (
    <div className="chat-room">
      <h2>Room: {room}</h2>
      <MessageList messages={messages} />
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatRoom;
