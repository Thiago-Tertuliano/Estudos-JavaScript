import { Task } from '../../domain/entities/Task';
import { TaskStatus } from '../../domain/value-objects/TaskStatus';
import { Priority } from '../../domain/value-objects/Priority';
import { ITaskRepository } from '../../domain/interfaces/ITaskRepository';
import db from '../database';

export class TaskRepository implements ITaskRepository {
  findById(id: string): Task | undefined {
    const row = db.prepare('SELECT * FROM tasks WHERE id = ?').get(id) as any;
    if (!row) return undefined;
    return new Task(
      row.id, row.title, row.description,
      row.status as TaskStatus, row.priority as Priority,
      row.boardId, row.assigneeId, new Date(row.createdAt)
    );
  }

  findByBoardId(boardId: string): Task[] {
    const rows = db.prepare('SELECT * FROM tasks WHERE boardId = ?').all(boardId) as any[];
    return rows.map(r => new Task(
      r.id, r.title, r.description,
      r.status as TaskStatus, r.priority as Priority,
      r.boardId, r.assigneeId, new Date(r.createdAt)
    ));
  }

  save(task: Task): void {
    const existing = db.prepare('SELECT id FROM tasks WHERE id = ?').get(task.id);
    if (existing) {
      db.prepare('UPDATE tasks SET title=?, description=?, status=?, priority=?, boardId=?, assigneeId=? WHERE id=?').run(
        task.title, task.description, task.status, task.priority, task.boardId, task.assigneeId, task.id
      );
    } else {
      db.prepare('INSERT INTO tasks (id, title, description, status, priority, boardId, assigneeId, createdAt) VALUES (?,?,?,?,?,?,?,?)').run(
        task.id, task.title, task.description, task.status, task.priority, task.boardId, task.assigneeId, task.createdAt.toISOString()
      );
    }
  }

  delete(id: string): void {
    db.prepare('DELETE FROM tasks WHERE id = ?').run(id);
  }
}
