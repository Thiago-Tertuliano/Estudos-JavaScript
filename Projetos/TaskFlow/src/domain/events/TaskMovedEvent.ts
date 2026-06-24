import { Task } from '../entities/Task';

export class TaskMovedEvent {
  public readonly name = 'TaskMoved';
  constructor(
    public readonly task: Task,
    public readonly previousStatus: string,
    public readonly newStatus: string
  ) {}
}
