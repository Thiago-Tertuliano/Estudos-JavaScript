import { User, IUserRepository } from '@notifica/domain';
import { UserDTO } from '../dto/UserDTO';

export class UserService {
  constructor(private userRepo: IUserRepository) {}

  create(data: UserDTO): User {
    const existing = this.userRepo.findByEmail(data.email);
    if (existing) throw new Error('Email already in use');
    const user = new User(
      data.id || `${Date.now()}`,
      data.name,
      data.email
    );
    this.userRepo.save(user);
    return user;
  }

  getById(id: string): User {
    const user = this.userRepo.findById(id);
    if (!user) throw new Error('User not found');
    return user;
  }
}
