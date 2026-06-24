import { Student } from '@school/domain';
import db from '../database';

export class StudentRepository {
  save(student: Student): void {
    const existing = db.prepare('SELECT id FROM students WHERE id = ?').get(student.id);
    if (existing) {
      db.prepare('UPDATE students SET name = ?, email = ?, enrolledCourses = ? WHERE id = ?').run(
        student.name, student.email, JSON.stringify(student.enrolledCourses), student.id
      );
    } else {
      db.prepare('INSERT INTO students (id, name, email, enrolledCourses) VALUES (?, ?, ?, ?)').run(
        student.id, student.name, student.email, JSON.stringify(student.enrolledCourses)
      );
    }
  }

  findById(id: string): Student | undefined {
    const row = db.prepare('SELECT * FROM students WHERE id = ?').get(id) as any;
    if (!row) return undefined;
    return new Student(row.id, row.name, row.email, JSON.parse(row.enrolledCourses || '[]'));
  }

  findAll(): Student[] {
    const rows = db.prepare('SELECT * FROM students').all() as any[];
    return rows.map(r => new Student(r.id, r.name, r.email, JSON.parse(r.enrolledCourses || '[]')));
  }
}
