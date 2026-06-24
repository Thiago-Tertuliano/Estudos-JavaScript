export class Message {
  constructor(
    public readonly id: string,
    public senderId: string,
    public receiverId: string,
    public content: string,
    public readonly createdAt: Date = new Date()
  ) {}
}
