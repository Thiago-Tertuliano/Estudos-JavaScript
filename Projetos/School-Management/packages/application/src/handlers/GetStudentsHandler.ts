import { Student } from '@school/domain';
import { GetStudentsQuery } from '../queries/GetStudentsQuery';

export class GetStudentsHandler {
  constructor(private studentRepo: { findAll(): Student[] }) {}

  handle(query: GetStudentsQuery): Student[] {
    let students = this.studentRepo.findAll();
    if (query.filters?.courseId) {
      students = students.filter(s => s.enrolledCourses.includes(query.filters!.courseId!));
    }
    return students;
  }
}
