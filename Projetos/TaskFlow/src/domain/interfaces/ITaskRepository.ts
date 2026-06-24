import { Task } from '../entities/Task';

export interface ITaskRepository {
  findById(id: string): Task | undefined;
  findByBoardId(boardId: string): Task[];
  save(task: Task): void;
  delete(id: string): void;
}
