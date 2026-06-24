import { Router, Request, Response } from 'express';
import { StudentRepository } from '@school/infrastructure';
import { CreateStudentCommand, EnrollStudentCommand, GetStudentsQuery } from '@school/application';
import { CreateStudentHandler, EnrollStudentHandler, GetStudentsHandler } from '@school/application';
import { Enrollment } from '@school/domain';
import { CourseRepository } from '@school/infrastructure';

export class StudentController {
  public router = Router();
  private studentRepo = new StudentRepository();
  private courseRepo = new CourseRepository();
  private enrollments: Enrollment[] = [];
  private createHandler = new CreateStudentHandler(this.studentRepo);
  private enrollHandler = new EnrollStudentHandler(this.studentRepo, this.courseRepo, this.enrollments);
  private getHandler = new GetStudentsHandler(this.studentRepo);

  constructor() {
    this.router.get('/', (req: Request, res: Response) => {
      const query = new GetStudentsQuery(req.query.courseId ? { courseId: req.query.courseId as string } : undefined);
      const students = this.getHandler.handle(query);
      res.json(students);
    });

    this.router.post('/', (req: Request, res: Response) => {
      try {
        const command = new CreateStudentCommand(req.body.id, req.body.name, req.body.email);
        const student = this.createHandler.handle(command);
        res.status(201).json(student);
      } catch (err: any) {
        res.status(400).json({ error: err.message });
      }
    });

    this.router.post('/:id/enroll', (req: Request, res: Response) => {
      try {
        const command = new EnrollStudentCommand(req.params.id, req.body.courseId);
        const enrollment = this.enrollHandler.handle(command);
        res.status(201).json(enrollment);
      } catch (err: any) {
        res.status(400).json({ error: err.message });
      }
    });
  }
}
