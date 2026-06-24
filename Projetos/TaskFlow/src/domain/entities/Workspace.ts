export class Workspace {
  constructor(
    public readonly id: string,
    public name: string,
    public readonly ownerId: string,
    public readonly createdAt: Date = new Date()
  ) {}
}
