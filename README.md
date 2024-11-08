# Real-Time-Chat-Application-with-WebSocket

This is a real-time chat application that allows users to join multiple chat rooms and send/receive messages in real-time. The app consists of two main components: the **backend** (built with **Flask** and **Flask-SocketIO**) and the **frontend** (built with **React** and **Socket.IO client**).

## Project Overview

### Backend
The backend of this chat application is built using **Flask** and **Flask-SocketIO**. It handles the WebSocket connections and manages multiple chat rooms. It also handles incoming messages, broadcasts them to users in the respective rooms, and provides functionality to join and leave rooms dynamically.

### Frontend
The frontend is built using **React** and **Socket.IO-client** to interact with the Flask backend for real-time communication. The application supports multiple chat rooms, where users can send and receive messages instantly. The frontend is designed to be simple and user-friendly, providing an interactive experience for users to chat in different rooms.

### Key Features

- **Real-Time Messaging**: Users can send and receive messages instantly in any room they join, utilizing WebSockets for real-time communication.
- **Multiple Chat Rooms**: Users can join different rooms (e.g., "General", "Tech Talk", etc.) to participate in conversations. New rooms can be added easily.
- **Message Persistence**: The backend supports message persistence via SQLite, which stores messages so users can view past conversations.
- **User-Friendly Interface**: The frontend is designed with a simple UI where users can choose chat rooms and send messages with ease.

### Functionality
- **Chat Rooms**: Users can view available rooms, join a room, and send/receive messages.
- **Message Broadcasting**: Messages are broadcasted to all users in the same room, ensuring real-time communication.
- **Error Handling & Reconnection**: The application includes error handling for WebSocket connections and automatic reconnection logic for uninterrupted communication.
- **Scalability**: The app is designed to handle multiple users in different chat rooms simultaneously.

### Future Enhancements
- **Direct Messaging**: Implement direct messaging between users.
- **User Authentication**: Add user authentication to allow users to create accounts and maintain session states.
- **File Sharing**: Support for sending media files like images, videos, etc., in the chat.
- **UI/UX Improvements**: Enhance the user interface for a more polished look and feel, including user avatars, message timestamps, and notification systems.

## License
MIT License
