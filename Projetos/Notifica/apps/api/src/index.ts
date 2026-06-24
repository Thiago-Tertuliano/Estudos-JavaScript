import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { userController } from './controllers/userController';
import { notificationController } from './controllers/notificationController';
import { authMiddleware } from './middleware/auth';

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.use('/users', userController);
app.use('/notifications', authMiddleware, notificationController);

io.on('connection', (socket) => {
  console.log(`WS client connected: ${socket.id}`);
  socket.on('join', (userId: string) => socket.join(`user:${userId}`));
});

server.listen(PORT, () => console.log(`Notifica API running on port ${PORT}`));

export { io };
