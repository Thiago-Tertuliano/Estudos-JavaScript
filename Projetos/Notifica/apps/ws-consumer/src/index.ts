import { io } from 'socket.io-client';

const API_URL = process.env.API_URL || 'http://localhost:3000';

console.log('[WS-Consumer] Connecting to API WebSocket...');

const socket = io(API_URL);

socket.on('connect', () => {
  console.log('[WS-Consumer] Connected to API WebSocket');
});

socket.on('notification', (data) => {
  console.log('[WS-Consumer] New notification received:', data.title);
});

socket.on('disconnect', () => {
  console.log('[WS-Consumer] Disconnected');
});

setInterval(() => {
  socket.emit('ping', { timestamp: Date.now() });
}, 30000);
