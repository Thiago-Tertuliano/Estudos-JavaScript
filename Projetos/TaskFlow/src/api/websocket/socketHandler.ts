import { Server, Socket } from 'socket.io';

export function setupSocket(io: Server): void {
  io.on('connection', (socket: Socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on('join-board', (boardId: string) => {
      socket.join(`board:${boardId}`);
      console.log(`Socket ${socket.id} joined board ${boardId}`);
    });

    socket.on('leave-board', (boardId: string) => {
      socket.leave(`board:${boardId}`);
    });

    socket.on('task:create', (data) => {
      socket.to(`board:${data.boardId}`).emit('task:created', data);
    });

    socket.on('task:move', (data) => {
      socket.to(`board:${data.boardId}`).emit('task:moved', data);
    });

    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
}
