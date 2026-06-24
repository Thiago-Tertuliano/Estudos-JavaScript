import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { boardRoutes } from './api/routes/boardRoutes';
import { taskRoutes } from './api/routes/taskRoutes';
import { setupSocket } from './api/websocket/socketHandler';
import { errorHandler } from './api/middleware/errorHandler';

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/boards', boardRoutes);
app.use('/tasks', taskRoutes);

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.use(errorHandler);

setupSocket(io);

server.listen(PORT, () => console.log(`TaskFlow running on port ${PORT}`));

export { io };
