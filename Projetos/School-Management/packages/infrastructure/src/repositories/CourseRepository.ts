import { Course } from '@school/domain';
import db from '../database';

export class CourseRepository {
  save(course: Course): void {
    const existing = db.prepare('SELECT id FROM courses WHERE id = ?').get(course.id);
    if (existing) {
      db.prepare('UPDATE courses SET title = ?, credits = ?, maxStudents = ? WHERE id = ?').run(
        course.title, course.credits, course.maxStudents, course.id
      );
    } else {
      db.prepare('INSERT INTO courses (id, title, credits, maxStudents) VALUES (?, ?, ?, ?)').run(
        course.id, course.title, course.credits, course.maxStudents
      );
    }
  }

  findById(id: string): Course | undefined {
    const row = db.prepare('SELECT * FROM courses WHERE id = ?').get(id) as any;
    if (!row) return undefined;
    return new Course(row.id, row.title, row.credits, row.maxStudents);
  }

  findAll(): Course[] {
    const rows = db.prepare('SELECT * FROM courses').all() as any[];
    return rows.map(r => new Course(r.id, r.title, r.credits, r.maxStudents));
  }
}
