export class GetCoursesQuery {
  constructor(public readonly filters?: { studentId?: string }) {}
}
