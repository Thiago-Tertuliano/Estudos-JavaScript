export class Course {
  constructor(
    public readonly id: string,
    public title: string,
    public credits: number,
    public maxStudents: number
  ) {}
}
