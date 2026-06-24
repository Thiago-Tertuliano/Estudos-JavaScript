import { Task } from '../entities/Task';

export class TaskCreatedEvent {
  public readonly name = 'TaskCreated';
  constructor(public readonly task: Task) {}
}
