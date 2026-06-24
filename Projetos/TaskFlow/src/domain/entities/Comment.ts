export class Comment {
  constructor(
    public readonly id: string,
    public content: string,
    public readonly taskId: string,
    public readonly authorId: string,
    public readonly createdAt: Date = new Date()
  ) {}
}
