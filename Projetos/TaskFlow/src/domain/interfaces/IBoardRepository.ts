import { Board } from '../entities/Board';

export interface IBoardRepository {
  findById(id: string): Board | undefined;
  findAll(): Board[];
  save(board: Board): void;
  delete(id: string): void;
}
