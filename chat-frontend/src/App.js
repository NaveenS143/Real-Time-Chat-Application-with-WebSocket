import React, { useState } from 'react';
import ChatRoom from './components/ChatRoom';
import RoomList from './components/RoomList';
import './App.css';

function App() {
  const [currentRoom, setCurrentRoom] = useState('General');
  const [roomMessages, setRoomMessages] = useState({
    General: [],
    'Tech Talk': [],
    Random: [],
  });

  const handleNewMessage = (room, message) => {
    console.log(`Adding message: ${message.msg}`);
    setRoomMessages((prevMessages) => ({
      ...prevMessages,
      [room]: [...prevMessages[room], message],
    }));
  };

  return (
    <div className="App">
      <h1>Real-Time Chat Application</h1>
      <RoomList setCurrentRoom={setCurrentRoom} />
      <ChatRoom
        room={currentRoom}
        messages={roomMessages[currentRoom]}
        onNewMessage={(message) => handleNewMessage(currentRoom, message)}
      />
    </div>
  );
}

export default App;
