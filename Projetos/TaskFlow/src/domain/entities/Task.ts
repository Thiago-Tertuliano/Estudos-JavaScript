import { TaskStatus } from '../value-objects/TaskStatus';
import { Priority } from '../value-objects/Priority';

export class Task {
  constructor(
    public readonly id: string,
    public title: string,
    public description: string,
    public status: TaskStatus,
    public priority: Priority,
    public boardId: string,
    public assigneeId?: string,
    public readonly createdAt: Date = new Date()
  ) {}

  moveTo(newStatus: TaskStatus): void {
    this.status = newStatus;
  }

  assign(userId: string): void {
    this.assigneeId = userId;
  }
}
