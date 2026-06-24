export class GetStudentsQuery {
  constructor(public readonly filters?: { courseId?: string }) {}
}
