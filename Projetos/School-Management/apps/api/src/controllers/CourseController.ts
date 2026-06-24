import { Router, Request, Response } from 'express';
import { Course } from '@school/domain';
import { CourseRepository } from '@school/infrastructure';

export class CourseController {
  public router = Router();
  private courseRepo = new CourseRepository();

  constructor() {
    this.router.get('/', (req: Request, res: Response) => {
      const courses = this.courseRepo.findAll();
      res.json(courses);
    });

    this.router.post('/', (req: Request, res: Response) => {
      try {
        const course = new Course(req.body.id, req.body.title, req.body.credits, req.body.maxStudents);
        this.courseRepo.save(course);
        res.status(201).json(course);
      } catch (err: any) {
        res.status(400).json({ error: err.message });
      }
    });
  }
}
