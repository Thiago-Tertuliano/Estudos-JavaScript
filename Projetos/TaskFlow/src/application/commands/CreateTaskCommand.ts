import { Priority } from '../../domain/value-objects/Priority';

export class CreateTaskCommand {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly boardId: string,
    public readonly priority: Priority,
    public readonly assigneeId?: string
  ) {}
}
