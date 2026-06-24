export class Board {
  constructor(
    public readonly id: string,
    public name: string,
    public workspaceId: string,
    public readonly createdAt: Date = new Date()
  ) {}
}
