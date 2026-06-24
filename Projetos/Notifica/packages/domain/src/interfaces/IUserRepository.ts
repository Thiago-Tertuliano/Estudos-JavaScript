import { User } from '../entities/User';

export interface IUserRepository {
  findById(id: string): User | undefined;
  findByEmail(email: string): User | undefined;
  save(user: User): void;
}
