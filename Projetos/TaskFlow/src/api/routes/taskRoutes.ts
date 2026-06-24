import { Router, Request, Response } from 'express';
import { EventEmitter } from 'events';
import { TaskRepository } from '../../infrastructure/repositories/TaskRepository';
import { CreateTaskHandler } from '../../application/handlers/CreateTaskHandler';
import { MoveTaskHandler } from '../../application/handlers/MoveTaskHandler';
import { CreateTaskCommand } from '../../application/commands/CreateTaskCommand';
import { MoveTaskCommand } from '../../application/commands/MoveTaskCommand';
import { TaskStatus } from '../../domain/value-objects/TaskStatus';
import { Priority } from '../../domain/value-objects/Priority';
import { v4 as uuid } from 'uuid';

export const taskRoutes = Router();
const taskRepo = new TaskRepository();
const eventEmitter = new EventEmitter();
const createHandler = new CreateTaskHandler(taskRepo, eventEmitter);
const moveHandler = new MoveTaskHandler(taskRepo, eventEmitter);

taskRoutes.get('/board/:boardId', (req: Request, res: Response) => {
  const tasks = taskRepo.findByBoardId(req.params.boardId);
  res.json(tasks);
});

taskRoutes.post('/', (req: Request, res: Response) => {
  try {
    const command = new CreateTaskCommand(
      uuid(),
      req.body.title,
      req.body.description || '',
      req.body.boardId,
      req.body.priority as Priority || Priority.MEDIUM,
      req.body.assigneeId
    );
    const task = createHandler.handle(command);
    res.status(201).json(task);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

taskRoutes.patch('/:id/move', (req: Request, res: Response) => {
  try {
    const command = new MoveTaskCommand(req.params.id, req.body.status as TaskStatus);
    moveHandler.handle(command);
    const task = taskRepo.findById(req.params.id);
    res.json(task);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});
