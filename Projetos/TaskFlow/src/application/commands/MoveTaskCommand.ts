import { TaskStatus } from '../../domain/value-objects/TaskStatus';

export class MoveTaskCommand {
  constructor(
    public readonly taskId: string,
    public readonly newStatus: TaskStatus
  ) {}
}
