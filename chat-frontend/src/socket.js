import { io } from 'socket.io-client';

const socket = io(process.env.REACT_APP_BACKEND_URL, {
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

export default socket;
