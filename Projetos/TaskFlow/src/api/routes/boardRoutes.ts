import { Router, Request, Response } from 'express';
import { BoardRepository } from '../../infrastructure/repositories/BoardRepository';
import { Board } from '../../domain/entities/Board';
import { v4 as uuid } from 'uuid';

export const boardRoutes = Router();
const boardRepo = new BoardRepository();

boardRoutes.get('/', (req: Request, res: Response) => {
  const boards = boardRepo.findAll();
  res.json(boards);
});

boardRoutes.get('/:id', (req: Request, res: Response) => {
  const board = boardRepo.findById(req.params.id);
  if (!board) return res.status(404).json({ error: 'Board not found' });
  res.json(board);
});

boardRoutes.post('/', (req: Request, res: Response) => {
  try {
    const board = new Board(uuid(), req.body.name, req.body.workspaceId);
    boardRepo.save(board);
    res.status(201).json(board);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

boardRoutes.delete('/:id', (req: Request, res: Response) => {
  boardRepo.delete(req.params.id);
  res.status(204).end();
});
