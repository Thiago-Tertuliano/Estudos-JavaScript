export class Notification {
  constructor(
    public readonly id: string,
    public userId: string,
    public title: string,
    public message: string,
    public read: boolean = false,
    public readonly createdAt: Date = new Date()
  ) {}
}
