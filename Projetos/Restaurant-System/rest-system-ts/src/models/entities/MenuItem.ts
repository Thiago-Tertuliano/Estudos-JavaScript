export interface IMenuItem { id: number; name: string; price: number; categoryId: number; description: string; available: number; createdAt: string; }
export class MenuItem implements IMenuItem {
  constructor(public id: number, public name: string, public price: number, public categoryId: number, public description: string, public available: number, public createdAt: string) {}
}
