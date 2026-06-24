export class Enrollment {
  constructor(
    public readonly id: string,
    public readonly studentId: string,
    public readonly courseId: string,
    public readonly enrolledAt: Date = new Date()
  ) {}
}
