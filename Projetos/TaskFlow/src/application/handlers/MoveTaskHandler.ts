import { EventEmitter } from 'events';
import { TaskMovedEvent } from '../../domain/events/TaskMovedEvent';
import { ITaskRepository } from '../../domain/interfaces/ITaskRepository';
import { MoveTaskCommand } from '../commands/MoveTaskCommand';

export class MoveTaskHandler {
  constructor(
    private taskRepo: ITaskRepository,
    private eventEmitter: EventEmitter
  ) {}

  handle(command: MoveTaskCommand): void {
    const task = this.taskRepo.findById(command.taskId);
    if (!task) throw new Error('Task not found');
    const previousStatus = task.status;
    task.moveTo(command.newStatus);
    this.taskRepo.save(task);
    this.eventEmitter.emit('TaskMoved', new TaskMovedEvent(task, previousStatus, command.newStatus));
  }
}
