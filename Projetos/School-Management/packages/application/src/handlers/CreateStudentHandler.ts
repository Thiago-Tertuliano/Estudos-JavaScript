import { Student } from '@school/domain';
import { CreateStudentCommand } from '../commands/CreateStudentCommand';

export interface IStudentRepository {
  save(student: Student): void;
  findById(id: string): Student | undefined;
  findAll(): Student[];
}

export class CreateStudentHandler {
  constructor(private studentRepo: IStudentRepository) {}

  handle(command: CreateStudentCommand): Student {
    const existing = this.studentRepo.findAll().find(s => s.email === command.email);
    if (existing) throw new Error('Email already in use');
    const student = new Student(command.id, command.name, command.email);
    this.studentRepo.save(student);
    return student;
  }
}
