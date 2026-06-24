import { EventEmitter } from 'events';
import { Task } from '../../domain/entities/Task';
import { TaskStatus } from '../../domain/value-objects/TaskStatus';
import { TaskCreatedEvent } from '../../domain/events/TaskCreatedEvent';
import { ITaskRepository } from '../../domain/interfaces/ITaskRepository';
import { CreateTaskCommand } from '../commands/CreateTaskCommand';

export class CreateTaskHandler {
  constructor(
    private taskRepo: ITaskRepository,
    private eventEmitter: EventEmitter
  ) {}

  handle(command: CreateTaskCommand): Task {
    const task = new Task(
      command.id,
      command.title,
      command.description,
      TaskStatus.TODO,
      command.priority,
      command.boardId,
      command.assigneeId
    );
    this.taskRepo.save(task);
    this.eventEmitter.emit('TaskCreated', new TaskCreatedEvent(task));
    return task;
  }
}
