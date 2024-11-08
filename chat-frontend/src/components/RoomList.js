import React from 'react';

const RoomList = ({ setCurrentRoom }) => {
  const rooms = ['General', 'Tech Talk', 'Random'];

  return (
    <div className="room-list">
      <h3>Available Rooms</h3>
      {rooms.map((room) => (
        <button key={room} onClick={() => setCurrentRoom(room)}>
          {room}
        </button>
      ))}
    </div>
  );
};

export default RoomList;
