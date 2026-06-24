import { Student, Course, Enrollment } from '@school/domain';
import { EnrollStudentCommand } from '../commands/EnrollStudentCommand';

export interface ICourseRepository {
  findById(id: string): Course | undefined;
}

export class EnrollStudentHandler {
  constructor(
    private studentRepo: { findById(id: string): Student | undefined; save(student: Student): void },
    private courseRepo: ICourseRepository,
    private enrollments: Enrollment[]
  ) {}

  handle(command: EnrollStudentCommand): Enrollment {
    const student = this.studentRepo.findById(command.studentId);
    if (!student) throw new Error('Student not found');

    const course = this.courseRepo.findById(command.courseId);
    if (!course) throw new Error('Course not found');

    const enrolledCount = this.enrollments.filter(e => e.courseId === command.courseId).length;
    if (enrolledCount >= course.maxStudents) throw new Error('Course is full');

    if (student.enrolledCourses.includes(command.courseId)) {
      throw new Error('Student already enrolled in this course');
    }

    const enrollment = new Enrollment(
      `${command.studentId}-${command.courseId}-${Date.now()}`,
      command.studentId,
      command.courseId
    );
    student.enrolledCourses.push(command.courseId);
    this.studentRepo.save(student);
    this.enrollments.push(enrollment);
    return enrollment;
  }
}
