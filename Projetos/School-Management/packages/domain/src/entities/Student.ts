export class Student {
  constructor(
    public readonly id: string,
    public name: string,
    public email: string,
    public enrolledCourses: string[] = []
  ) {}
}
