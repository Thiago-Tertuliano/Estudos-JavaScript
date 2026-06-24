export class EnrollStudentCommand {
  constructor(
    public readonly studentId: string,
    public readonly courseId: string
  ) {}
}
