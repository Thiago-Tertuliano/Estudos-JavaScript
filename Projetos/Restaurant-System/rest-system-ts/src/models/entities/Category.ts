export interface ICategory { id: number; name: string; description: string; createdAt: string; }
export class Category implements ICategory {
  constructor(public id: number, public name: string, public description: string, public createdAt: string) {}
}
